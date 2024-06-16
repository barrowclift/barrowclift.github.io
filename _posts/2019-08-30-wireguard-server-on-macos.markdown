---
title: "Wireguard Server on macOS"
date: 2019-08-30 20:15:26
update: 2023-07-16 11:34:04-0400

excerpt: |
    With this guide, you too can enjoy Wireguard VPN’s performance and security on macOS.
categories:
    - Technology
    - macOS
    - Services
    - Programming
    - Unix
    - Guides
    - Best Of
image: "wireguard-server-on-macos/share.jpg"

article:
    show-stamp: false
card:
    image: "wireguard-server-on-macos/card"
    background-color: "hsl(354, 100%, 15%)"
    foreground-color: "hsl(0, 0%, 100%)"
---

<div class="admonition">
    <p class="admonition-title">Update: July 16, 2023</p>
    <p>This is a heavily modified version of the <a href="/obsolete/wireguard-server-on-macos">original, obsolete guide</a>, see <a href="/articles/wireguard-server-on-macos/change-log">here</a> for the complete change log.</p>
    <p>This guide contains numerous enhancements from <a href="#many-thanks-to">multiple individuals</a> and would not exist in its current, vastly improved form without their help. Each are credited at the end of the article. Many thanks to them for their contributions to this site and the Wireguard community.</p>
    <p>The below steps are confirmed to work with <a href="https://formulae.brew.sh/formula/wireguard-tools">wireguard-tools 1.0.20210914</a> for macOS Ventura 13.4.1 (c) on both Apple Silicon and Intel-based Macs.</p>
</div>

<div class="inline shadow">
    <img src="{{ site.dropbox }}/wireguard-server-on-macos/share-image.jpg">
</div>

After months of false starts and dead ends, I'm happy to report my [Wireguard](https://www.wireguard.com) VPN server is successfully running on macOS.

Wireguard is a relatively new VPN protocol, entering the scene just three short years ago in [2016](https://news.ycombinator.com/item?id=11994265). Compared to the ancient VPN alternatives like [IPSec](https://en.wikipedia.org/wiki/IPsec) and [OpenVPN](https://openvpn.net), Wireguard's simplicity and speed quickly earned it the attention and praise of various tech communities like [Hacker News](https://news.ycombinator.com/item?id=17846387) and [Lobste.rs](https://lobste.rs/s/bxfhxp/virtual_private_networks_with_wireguard). Everywhere you look are Wireguard threads filled with enthusiastic comments urging others to give [Wireguard a try](https://news.ycombinator.com/item?id=17847016).

The best part is, they're right! Compared to the existing lineup of VPN protocols, Wireguard's small codebase, blazingly fast speed, and relatively simple setup put Wireguard in a league of its own as the first truly modern VPN protocol. There's just one tiny niggle: the protocol is so young there might be no documentation or guides for your platform of choice.

Unfortunately, that's the situation I found myself in with macOS when attempting to set up my Wireguard server. Despite extensively reading what's currently the [finest Wireguard documentation available](https://github.com/pirate/wireguard-docs) and following its [relevant example](https://github.com/pirate/wireguard-docs/tree/master/example-simple-client-to-server) to a tee, Wireguard would simply not function as expected on macOS. The best I could do was establish a direct connection to the server with Wireguard, but all attempts to access the LAN or surf the web timed out and failed.

Despite numerous attempts over the months, my Google-fu yielded no results, either. While there were plenty of [help articles](https://medium.com/@headquartershq/setting-up-wireguard-on-a-mac-8a121bfe9d86) from others setting up Wireguard on macOS, every single one of them was for setting up a Wireguard *peer* on macOS. This peer was always intended to only connect to a Wireguard server on more common platforms like [Ubuntu](https://ubuntu.com) or [CentOS](https://www.centos.org), never the other way around.

However, from my on-and-off research over these past few months I've finally cobbled together a solution that's working. Thus, I intend to fill this hole in the community's growing collection of documentation and setup guides: here's what you need to do to get a Wireguard server running on macOS with full traffic routing and LAN access[^caveat].

<ol>
  <li>Choose unused, local <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 4">IPv4</abbr> &amp; <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 6">IPv6</abbr> subnet ranges where Wireguard and the attached clients will reside. This way, we can ensure Wireguard won’t encounter unexpected IP collisions with other users or services on your <abbr title="Local Area Network">LAN</abbr> for either protocol. For this guide…
    <ol>
      <li>I’m using <code class="highlighter-rouge">10.0.10.1/24</code> for <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 4">IPv4</abbr>, which <a href="https://www.ipaddressguide.com/cidr">expands</a> so we can assign attached clients any addresses from <code class="highlighter-rouge">10.0.10.0</code> to <code class="highlighter-rouge">10.0.10.255</code>. This allows for 256 usable addresses, more than enough for most non-commercial situations.</li>
      <li>I’m using <code class="highlighter-rouge">fd77:77:77:77::1/112</code> for <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 6">IPv6</abbr>, which <a href="https://www.ipaddressguide.com/ipv6-cidr">expands</a> so we can assign attached clients any addresses from <code class="highlighter-rouge">fd77:77:77:77::1</code> to <code class="highlighter-rouge">fd77:77:77:77::ffff</code>. Even this relatively constrained range allows for a staggering 65,536 usable addresses.</li>
    </ol></li>
  <li>Decide a port to host Wireguard on (the standard port is 51820). If your router doesn’t have this port opened and forwarding to your Wireguard server’s local IP yet, <a href="https://portforward.com/how-to-port-forward/">do so now</a>. For the sake of brevity, specific instructions for how to do this on your particular router won’t be covered here. For assistance, Google your Internet provider’s name and “setup port forwarding”.</li>
  <li>
    To access other clients on the <abbr title="Local Area Network">LAN</abbr> and route internet traffic for web browsing while on the <abbr title="Virtual Private Network">VPN</abbr>, we need to create a couple firewall rules to let macOS know <em>how</em> to route that traffic. To do so, we’ll use macOS’s built-in packet filter utility, <code class="highlighter-rouge">pfctl</code>. There’s a number of possible ways to do this, but to make our changes resilient to macOS updates and as unobtrusive to the rest of the system as possible, we’ll dynamically add and remove the rule by leveraging a couple bash scripts. Later, we’ll configure Wireguard to automatically execute these with its <code class="highlighter-rouge"><a href="https://github.com/pirate/wireguard-docs#postup">PostUp</a></code> and <code class="highlighter-rouge"><a href="https://github.com/pirate/wireguard-docs#postdown">PostDown</a></code> directives on startup and shutdown, respectively.
    <ol>
      <li>Create <code class="highlighter-rouge">/usr/local/etc/wireguard/postup.sh</code> with the following contents. Remember to replace the IP ranges with your own, if you chose differently. Note that the Ethernet network device <code class="highlighter-rouge"><a href="https://stackoverflow.com/a/55232331">en0</a></code> is assumed, and you should replace it if you’re serving Wireguard over WiFi or another network device:
        <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="ch">#!/bin/sh</span>

<span class="c1"># 1) This ensures our peers continue to report their Wireguard</span>
<span class="c1">#    assigned IPs while connected to the VPN. This is required</span>
<span class="c1">#    for their traffic to get routed correctly by the firewall</span>
<span class="c1">#    rules we crafted earlier with pf.</span>
/usr/sbin/sysctl -w net.inet.ip.forwarding<span class="o">=</span>1
/usr/sbin/sysctl -w net.inet6.ip6.forwarding<span class="o">=</span>1

<span class="c1"># 2) Preparing the directory where we'll persist the pf tokens</span>
<span class="c1">#    generated by Step (3) &amp; (4). That token can then be used by</span>
<span class="c1">#    our postdown.sh script to remove the routing rules when</span>
<span class="c1">#    Wireguard is shut down.</span>
mkdir -p /usr/local/var/run/wireguard
chmod <span class="m">700</span> /usr/local/var/run/wireguard

<span class="c1"># 3) Dynamically add the IPv4 NAT rule, enable the firewall,</span>
<span class="c1">#    increase its reference count (-E), and persist the reference</span>
<span class="c1">#    token generated by the command into</span>
<span class="c1">#    pf_wireguard_token_ipv4_token.txt, which postdown.sh will</span>
<span class="c1">#    reference when Wireguard is shut down.</span>
<span class="nb">echo</span> <span class="s1">'nat on en0 from 10.0.10.1/24 to any -&gt; (en0)'</span> <span class="p">|</span> <span class="se">\</span>
        pfctl -a com.apple/wireguard_ipv4 -Ef - 2&gt;<span class="p">&amp;</span><span class="m">1</span> <span class="p">|</span> <span class="se">\</span>
        grep <span class="s1">'Token'</span> <span class="p">|</span> <span class="se">\</span>
        sed <span class="s1">'s%Token : \(.*\)%\1%'</span> &gt; /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt
<span class="nv">IPV4_TOKEN</span><span class="o">=</span><span class="sb">`</span>sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt<span class="sb">`</span>
<span class="nb">echo</span> <span class="s2">"Added PF IPv4 NAT traffic routing rule with token: </span><span class="si">${</span><span class="nv">IPV4_TOKEN</span><span class="si">}</span><span class="s2">"</span>

<span class="c1"># 4) Dynamically add the IPv6 NAT rule, enable the firewall,</span>
<span class="c1">#    increase its reference count (-E), and persist the reference</span>
<span class="c1">#    token generated by the command into</span>
<span class="c1">#    pf_wireguard_token_ipv6_token.txt, which postdown.sh will</span>
<span class="c1">#    reference when Wireguard is shut down.</span>
<span class="nb">echo</span> <span class="s1">'nat on en0 from fd77:77:77:77::1/112 to any -&gt; (en0)'</span> <span class="p">|</span> <span class="se">\</span>
        pfctl -a com.apple/wireguard_ipv6 -Ef - 2&gt;<span class="p">&amp;</span><span class="m">1</span> <span class="p">|</span> <span class="se">\</span>
        grep <span class="s1">'Token'</span> <span class="p">|</span> <span class="se">\</span>
        sed <span class="s1">'s%Token : \(.*\)%\1%'</span> &gt; /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt
<span class="nv">IPV6_TOKEN</span><span class="o">=</span><span class="sb">`</span>sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt<span class="sb">`</span>
<span class="nb">echo</span> <span class="s2">"Added PF IPv6 NAT traffic routing rule with token: </span><span class="si">${</span><span class="nv">IPV6_TOKEN</span><span class="si">}</span><span class="s2">"</span></code></pre></div></div>
      </li>
      <li>Create <code class="highlighter-rouge">/usr/local/etc/wireguard/postdown.sh</code> with the following contents:
        <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="ch">#!/bin/sh</span>

<span class="c1"># 1) Reverting our previously set IP forwarding overrides</span>
/usr/sbin/sysctl -w net.inet.ip.forwarding<span class="o">=</span>0
/usr/sbin/sysctl -w net.inet6.ip6.forwarding<span class="o">=</span>0

<span class="c1"># 2) Remove the IPv4 filter rule by reference. Adding and</span>
<span class="c1">#    removing rules by references like this will automatically</span>
<span class="c1">#    disable the packet filter firewall if there are no other</span>
<span class="c1">#    references left, but will leave it up if there are.</span>
<span class="nv">ANCHOR</span><span class="o">=</span><span class="s2">"com.apple/wireguard_ipv4"</span>
pfctl -a <span class="si">${</span><span class="nv">ANCHOR</span><span class="si">}</span> -F all <span class="o">||</span> <span class="nb">exit </span>1
<span class="nb">echo</span> <span class="s2">"Removed IPv4 rule with anchor: </span><span class="si">${</span><span class="nv">ANCHOR</span><span class="si">}</span><span class="s2">"</span>
<span class="nv">IPV4_TOKEN</span><span class="o">=</span><span class="sb">`</span>sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt<span class="sb">`</span>
pfctl -X <span class="si">${</span><span class="nv">IPV4_TOKEN</span><span class="si">}</span> <span class="o">||</span> <span class="nb">exit </span>1
<span class="nb">echo</span> <span class="s2">"Removed reference for token: </span><span class="si">${</span><span class="nv">IPV4_TOKEN</span><span class="si">}</span><span class="s2">"</span>
rm -rf /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt
<span class="nb">echo</span> <span class="s2">"Deleted IPv4 token file"</span>

<span class="c1"># 3) Remove the IPv6 filter rule by reference. Adding and</span>
<span class="c1">#    removing rules by references like this will automatically</span>
<span class="c1">#    disable the packet filter firewall if there are no other</span>
<span class="c1">#    references left, but will leave it up if there are.</span>
<span class="nv">ANCHOR</span><span class="o">=</span><span class="s2">"com.apple/wireguard_ipv6"</span>
pfctl -a <span class="si">${</span><span class="nv">ANCHOR</span><span class="si">}</span> -F all <span class="o">||</span> <span class="nb">exit </span>1
<span class="nb">echo</span> <span class="s2">"Removed IPv6 rule with anchor: </span><span class="si">${</span><span class="nv">ANCHOR</span><span class="si">}</span><span class="s2">"</span>
<span class="nv">IPV6_TOKEN</span><span class="o">=</span><span class="sb">`</span>sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt<span class="sb">`</span>
pfctl -X <span class="si">${</span><span class="nv">IPV6_TOKEN</span><span class="si">}</span> <span class="o">||</span> <span class="nb">exit </span>1
<span class="nb">echo</span> <span class="s2">"Removed reference for token: </span><span class="si">${</span><span class="nv">IPV6_TOKEN</span><span class="si">}</span><span class="s2">"</span>
rm -rf /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt
<span class="nb">echo</span> <span class="s2">"Deleted IPv6 token file"</span></code></pre>
        </div></div>
      </li>
      <li>Make both scripts executable:
        <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight wrap"><code><span class="gp">$</span><span class="w"> </span><span class="nb">chmod </span>u+x /usr/local/etc/wireguard/<span class="k">*</span>.sh
</code></pre></div></div>
      </li>
    </ol>
  </li>
  <li>Install the Wireguard program with your <a href="https://saagarjha.com/blog/2019/04/26/thoughts-on-macos-package-managers/">macOS package manager</a> of choice. If you use <a href="https://brew.sh">Homebrew</a>, you can do so with:
    <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight wrap"><code><span class="gp">$</span><span class="w"> </span>brew <span class="nb">install </span>wireguard-tools
</code></pre></div></div>
    Note that the <a href="https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&amp;mt=12">Wireguard App on the Mac App Store</a> is <strong>not</strong> sufficient for managing a Wireguard server due to macOS’s <a href="https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html">sandbox restrictions</a>, which <a href="https://www.reddit.com/r/WireGuard/comments/bea47m/wireguard_macos_application_postuppostdown/">prevent</a> the use of the crucial <code class="highlighter-rouge">PostUp</code> and <code class="highlighter-rouge">PostDown</code> directives. The Mac App Store version may of course still be used by clients.</li>
  <li>Generate private and public key pairs for Wireguard to use, one pair for each peer you want to connect to Wireguard, plus one for your server itself. You can use the following commands to accomplish this, which will spit the keys into your current directory:
    <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span><span class="nb">umask </span>077 <span class="c"># Ensure credentials don't leak from possible race condition.</span>
<span class="gp">$</span><span class="w"> </span>wg genkey | <span class="nb">tee </span>privatekey | wg pubkey <span class="o">&gt;</span> publickey</code></pre></div></div>
      For example, if you have just a single peer, you should have two public and private keys pairs: one pair for your peer, and another pair for your server. Please ensure you keep these files in a safe and secure place, such as an <a href="https://support.apple.com/guide/disk-utility/create-a-disk-image-dskutl11888/mac">encrypted container</a>. If someone nasty gets them, they have complete remote access to your server!
  </li>
  <li>Create your Wireguard server configuration file. First, decide a location and filename (I chose <code>/usr/local/etc/wireguard/coordinates.conf</code>). If you choose somewhere else, take care to <a href="https://stackoverflow.com/a/74674749">ensure your location’s not within the <code>/Users</code> directory</a>, otherwise the Wireguard daemon won’t be able to start the server on system boot and will require that user’s login to launch. Once you’ve got your location chosen, write your configuration using the following template as your guide:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">[</span>Interface<span class="o">]</span>
<span class="c1"># Substitute with the subnets you chose for Wireguard earlier.</span>
<span class="nv">Address</span> <span class="o">=</span> 10.0.10.1/24, fd77:77:77:77::1/112
<span class="c1"># Substitute with your *server's* private key you generated earlier.</span>
<span class="nv">PrivateKey</span> <span class="o">=</span> XXXXXXX
<span class="c1"># If you chose a different port earlier when setting up port</span>
<span class="c1"># forwarding on your router, update the port here to match.</span>
<span class="nv">ListenPort</span> <span class="o">=</span> 51820
<span class="c1"># This prevents IPv4 &amp; IPv6 DNS leaks when browsing the web on the</span>
<span class="c1"># VPN. I chose Cloudflare's public DNS servers, but feel free to use</span>
<span class="c1"># whatever provider you prefer. This could alternatively point to a</span>
<span class="c1"># locally hosted DNS-based ad blocker, such as Pi-Hole or AdGuard</span>
<span class="c1"># Home.</span>
<span class="c1">#</span>
<span class="c1"># If you choose an external DNS provider, please be aware that not</span>
<span class="c1"># all ISPs allow customers to use 3rd party DNS providers. If your</span>
<span class="c1"># ISP does not support this, delete this declaration from your</span>
<span class="c1"># config or point to a locally hosted alternative, otherwise</span>
<span class="c1"># external network requests won't resolve while on the VPN.</span>
<span class="c1">#</span>
<span class="c1"># Additionally, please be aware that this setting breaks Wireguard</span>
<span class="c1"># on macOS 13 Ventura, so if this is the version your server is</span>
<span class="c1"># running you must remove or comment out this line. This</span>
<span class="c1"># unfortunately means you'll need to rely on your clients to</span>
<span class="c1"># properly set the desired DNS server(s) in their own configs until</span>
<span class="c1"># and unless this macOS bug is resolved.</span>
<span class="nv">DNS</span> <span class="o">=</span> 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001
<span class="nv">PostUp</span> <span class="o">=</span> /usr/local/etc/wireguard/postup.sh
<span class="nv">PostDown</span> <span class="o">=</span> /usr/local/etc/wireguard/postdown.sh

<span class="o">[</span>Peer<span class="o">]</span>
<span class="c1"># Substitute with *this peer*'s public key you generated earlier.</span>
<span class="nv">PublicKey</span> <span class="o">=</span> XXXXXXX
<span class="c1"># Choose a unique IP within the Wireguard subnets you defined</span>
<span class="c1"># earlier that this particular peer will use when connected to the</span>
<span class="c1"># VPN</span>
<span class="nv">AllowedIPs</span> <span class="o">=</span> 10.0.10.2/32, fd77:77:77:77::2/128

<span class="c1"># Follow the same steps as the [Peer] block template above for each</span>
<span class="c1"># additional peer you wish to use with the VPN.</span></code></pre></div></div>
  </li>
  <li><a href="https://www.wireguard.com/install/">Install Wireguard on each of your peers</a> and create their configuration files using the following template as your guide:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">[</span>Interface<span class="o">]</span>
<span class="c1"># This MUST match the "AllowedIPs" IP you assigned to this particular</span>
<span class="c1"># peer in the server's config.</span>
<span class="nv">Address</span> <span class="o">=</span> 10.0.10.2/32, fd77:77:77:77::2/128
<span class="c1"># Substitute with *this peer's* private key you generated earlier</span>
<span class="nv">PrivateKey</span> <span class="o">=</span> XXXXXXX
<span class="c1"># This prevents IPv4 &amp; IPv6 DNS leaks when browsing the web on the</span>
<span class="c1"># VPN. I chose Cloudflare's public DNS servers, but feel free to use</span>
<span class="c1"># whatever provider you prefer. This could alternatively point to a</span>
<span class="c1"># locally hosted DNS-based ad blocker, such as Pi-Hole or AdGuard</span>
<span class="c1"># Home</span>
<span class="c1">#</span>
<span class="c1"># If you choose an external DNS provider, please be aware that not</span>
<span class="c1"># all ISPs allow customers to use 3rd party DNS providers. If your</span>
<span class="c1"># ISP does not support this, delete this declaration from your</span>
<span class="c1"># config or point to a locally hosted alternative, otherwise</span>
<span class="c1"># external network requests won't resolve while on the VPN.</span>
<span class="nv">DNS</span> <span class="o">=</span> 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001

<span class="o">[</span>Peer<span class="o">]</span>
<span class="c1"># Substitute with your *server's* public key you generated earlier</span>
<span class="nv">PublicKey</span> <span class="o">=</span> XXXXXXX
<span class="c1"># Your Wireguard server's public IP. If you chose a different port</span>
<span class="c1"># earlier when setting up port forwarding on your router, update the</span>
<span class="c1"># port here to match.</span>
<span class="nv">Endpoint</span> <span class="o">=</span> XXX.XXX.XXX.XXX:51820
<span class="c1"># Informs Wireguard to forward ALL traffic through the VPN. Note that</span>
<span class="c1"># one reader reported ::/0 was interferring with HomeKit video feeds,</span>
<span class="c1"># so if you run into issues you may need to adjust to 2000::/3.</span>
<span class="nv">AllowedIPs</span> <span class="o">=</span> 0.0.0.0/0, ::/0
<span class="nv">PersistentKeepalive</span> <span class="o">=</span> 25</code></pre></div></div>
  </li>
  <li>Test your Wireguard setup by starting the service on your macOS server with <code class="highlighter-rouge">wg-quick up /usr/local/etc/wireguard/coordinates.conf</code> (remembering to change the path to where you persisted your server’s configuration file, if necessary). Once you’ve confirmed the server started successfully, take a peer and enable the Wireguard <abbr title="Virtual Private Network">VPN</abbr>. With both the server and peer’s Wireguard services enabled, run through the following tests to ensure everything’s configured correctly:
    <ul>
      <li>Confirm SSH access to your macOS server’s local IP address. On an iOS device, this can be done with an app like <a href="https://apps.apple.com/us/app/prompt-2/id917437289">Prompt 2</a>. This will validate that your peer and server were able to establish a successful connection with one another.</li>
      <li>Confirm SSH access to other computers on your home <abbr title="Local Area Network">LAN</abbr>. This will validate that your server’s Wireguard subnets are set up correctly and that Wireguard is properly assigning your peer its predefined, local IP addresses.</li>
      <li>Confirm <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 4">IPv4</abbr> access to the Internet by loading a web page or two. This will validate that your <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 4">IPv4</abbr> packet filter firewall rule is successfully routing traffic requests from the peer.</li>
      <li>Finally, confirm <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 6">IPv6</abbr> access to the Internet by loading an <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 6">IPv6</abbr>-only web page such as <a href="https://ipv6.google.com">ipv6.google.com</a>. This will validate that your <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 6">IPv6</abbr> packet filter firewall rule is successfully routing traffic requests from the peer.</li>
    </ul>
  </li>
  <li>Once all the checks above come back clean, all that’s left is setting up Wireguard as a launch daemon so it automatically starts on system boot. We’ll do so by writing a small <code><a href="https://en.wikipedia.org/wiki/Launchd">launchd</a></code> <code><a href="https://en.wikipedia.org/wiki/Property_list">plist</a></code> which will inform macOS <em>how</em> to start the service on system boot.
    <ol>
      <li>Create a file at <code class="highlighter-rouge">/Library/LaunchDaemons/com.wireguard.server.plist</code> with the following contents, remembering to substitute the path and filenames as necessary:
        <div class="language-xml highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="cp">&lt;?xml version="1.0" encoding="UTF-8"?&gt;</span>
<span class="cp">&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;</span>
<span class="nt">&lt;plist</span> <span class="na">version=</span><span class="s">"1.0"</span><span class="nt">&gt;</span>
    <span class="nt">&lt;dict&gt;</span>
        <span class="nt">&lt;key&gt;</span>Label<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;string&gt;</span>com.wireguard.server<span class="nt">&lt;/string&gt;</span>
        <span class="nt">&lt;key&gt;</span>ProgramArguments<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;array&gt;</span>
            <span class="c">&lt;!-- If you're rocking an Apple Silicon M-series</span>
            <span class="c">     computer, this path should be</span>
            <span class="c">     /opt/homebrew/bin/wg-quick, instead --&gt;</span>
            <span class="nt">&lt;string&gt;</span>/usr/local/bin/wg-quick<span class="nt">&lt;/string&gt;</span>
            <span class="nt">&lt;string&gt;</span>up<span class="nt">&lt;/string&gt;</span>
            <span class="c">&lt;!-- Remember to update this path if you chose a</span>
            <span class="c">     different location or filename for the config --&gt;</span>
            <span class="nt">&lt;string&gt;</span>/usr/local/etc/wireguard/coordinates.conf<span class="nt">&lt;/string&gt;</span>
        <span class="nt">&lt;/array&gt;</span>
        <span class="nt">&lt;key&gt;</span>KeepAlive<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;true/&gt;</span>
        <span class="nt">&lt;key&gt;</span>RunAtLoad<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;true/&gt;</span>
        <span class="nt">&lt;key&gt;</span>StandardErrorPath<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;string&gt;</span>/usr/local/var/log/wireguard.err<span class="nt">&lt;/string&gt;</span>
        <span class="nt">&lt;key&gt;</span>EnvironmentVariables<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;dict&gt;</span>
            <span class="nt">&lt;key&gt;</span>PATH<span class="nt">&lt;/key&gt;</span>
            <span class="nt">&lt;string&gt;</span>/usr/local/sbin:/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin<span class="nt">&lt;/string&gt;</span>
        <span class="nt">&lt;/dict&gt;</span>
    <span class="nt">&lt;/dict&gt;</span>
<span class="nt">&lt;/plist&gt;</span></code></pre></div></div>
      </li>
      <li>Change the assigned user &amp; group for your daemon config to <code>root:wheel</code> with the following command. This is required for the Wireguard daemon to be launched on system boot.
        <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span><span class="nb">sudo chown </span>root:wheel /Library/LaunchDaemons/com.wireguard.server.plist</code></pre></div></div>
      </li>
      <li>Inform <code>launchd</code> of the new <code>plist</code> you just created with the following commands:
        <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span><span class="nb">sudo </span>launchctl <span class="nb">enable </span>system/com.wireguard.server
<span class="gp">$</span><span class="w"> </span><span class="nb">sudo </span>launchctl bootstrap system /Library/LaunchDaemons/com.wireguard.server.plist</code></pre></div></div>
      </li>
    </ol>
  </li>
  <li>Finally, restart your macOS server. If your launch daemon was configured and loaded correctly, Wireguard should already be running.</li>
</ol>

Congratulations :tada:! You're now among the dozen people crazy enough to serve Wireguard on macOS. If you had trouble following this guide or would simply prefer to explore a repo of example Wireguard macOS config files at your own speed, I highly encourage you take a look at [Donavon Buchanan's example configuration repo](https://github.com/dbuchanandev/WireGuard-macOS-IPv6).  Additionally, please feel free to get in touch on [Mastodon](https://mastodon.social/@barrowclift) or via <a href="mailto:{{ site.author.email }}">email</a> if you have any feedback or corrections, I'd love to hear from you.

<div id="farewell-stamp">
    <a href="/about">⌘</a>
</div>

------

## Research Materials

The following help articles and documentation from fellow enthusiasts were invaluable in my research and referenced heavily. Many thanks to them for their contributions:

* [lifepillar](https://lifepillar.me)'s [fantastic feedback](https://github.com/barrowclift/barrowclift.github.io/issues/1) on the [original article](/obsolete/wireguard-server-on-macos); it's because of his assistance that this new and improved guide was possible. Please support his [work](https://github.com/lifepillar?tab=repositories).
* [Stavros Korokithakis's "How to easily configure WireGuard"](https://www.stavros.io/posts/how-to-configure-wireguard/)
* [pirate's "Unofficial Wireguard Documentation"](https://github.com/pirate/wireguard-docs)
* [Chrissy LeMaire's "Share VPN with OS X Sierra Internet Sharing"](https://blog.netnerds.net/2016/11/share-vpn-with-os-x-sierra-internet-sharing/)
* [Murus's "OS X PF Manual"](https://murusfirewall.com/Documentation/OS%20X%20PF%20Manual.pdf)
* [Donavon Buchanan's example macOS Wireguard configuration repo](https://github.com/dbuchanandev/WireGuard-macOS-IPv6)

## Many Thanks To...

* [**lifepillar**](https://lifepillar.me) for his superior PF rules handling and daemon config. Our discussion remains [publicly accessible on Github](https://github.com/barrowclift/barrowclift.github.io/issues/1).
* [**Charles Richard**](https://twitter.com/charlie_thebird/status/1255894000533413889) for suggesting added clarity around what directory the public/private keys will be generated into.
* [**Olivier Mathieu**](https://twitter.com/oma_sct) for their private suggestion to do away with the previously enabled `LaunchOnlyOnce` flag, which prevented the service from automatically restarting should the daemon ever exit unexpectedly.
* [**Olaoluwa Oluwaniyi**](https://github.com/diadal) for informing me that not all ISPs allow customers to use 3rd party DNS providers (previously, this was not mentioned in the guide). The discussion remains [publicly accessible on Github](https://github.com/barrowclift/barrowclift.github.io/issues/2).
* **Corey Watson** for his private reminder that the default Homebrew executable directory on Macs powered by [Apple Silicon](https://en.wikipedia.org/wiki/Apple-designed_processors) is `/opt/homebrew/bin`, not `/usr/local/bin`. This difference is now reflected in the daemon config template.
* **Luke Sandoval** for his private message revealing that the approach detailed in this guide obfuscates client IPs behind the server's IP. Thus, this solution might not meet certain needs and is thus now called out as a caveat in the guide.
* [**Alessio Nossa**](https://github.com/alessionossa) for informing me that the original "post down" script did *not* in fact remove the PF traffic routing rule as originally claimed (rather, [it only removed the PF "enable" reference](https://www.manpagez.com/man/8/pfctl/). Their original comment notifying this miss remains [publicly accessible on Github](https://github.com/barrowclift/barrowclift.github.io/issues/1#issuecomment-1133563862).
* [**Donavon Buchanan**](https://github.com/dbuchanandev), whose thorough email and sensible [reference repo](https://github.com/dbuchanandev/WireGuard-macOS-IPv6) filled the crucial missing piece of <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 6">IPv6</abbr> support in this guide. Without his contribution, this guide would still be restricted to just <abbr style="font-variant-caps:unset;font-feature-settings:unset;" title="Internet Protocol version 4">IPv4</abbr> connections, and been worse off for it.
* [**Glenn F. Schreiber**](https://theweatherguy.net/blog/blog-faq/) (a.k.a "theweatherguy") for identifying and notifying me that starting with macOS 13 Ventura the DNS directive prevents the VPN from functioning when set in the *server*'s Wireguard config.
* [**Cory**](https://mastodon.social/@CyberCory) for [identifying a shortcoming in the daemon config](https://mastodon.social/@CyberCory/110668229010278552) that required user login for the Wireguard server to start. Because of his report, the guide now ensures the daemon's set up to start immediately on system boot, independent of user logins.

*[DNS]: Domain Name System
*[ISP]: Internet Service Provider
*[LAN]: Local Area Network
*[VPN]: Virtual Private Network

-------------

[^caveat]: Please be aware that the approach detailed in this guide will obfuscate client IP traffic. This means all connected client requests will appear as if they're requests from the Wireguard server IP itself, not the assigned client IPs. As a result, this solution may not fit your particular needs.
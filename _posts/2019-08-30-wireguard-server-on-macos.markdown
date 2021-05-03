---
layout: post
title: "Wireguard Server on macOS"
date: 2019-08-30 20:15:26
update: 2020-05-12 22:52:48-0400
categories:
  - Technology
  - macOS
  - Services
  - Programming
  - Unix
  - Guides
excerpt: "With this guide, you too can easily enjoy Wireguard VPN's performance and security served by macOS Big Sur."
image: "wireguard-server-on-macos/share-image.jpg"
has_afterward: true
---

<figure markdown="1" class="inline shadow">
[![]({{ site.dropbox }}/wireguard-server-on-macos/share-image.jpg)]({{ site.dropbox }}/wireguard-server-on-macos/share-image.jpg)
</figure>

<div class="admonition yellow">
<p class="admonition-title">Update: May 2, 2021</p>
<p></p>
<p>This is a revision of the <a href="/obsolete/wireguard-server-on-macos">first guide</a> originally published back in August 30, 2019.</p>
<p>This revision contains a myriad of improvements provided by multiple individuals and would not exist in its current form without their help. Each are credited at the end of the article, and many thanks to them all for their contributions to this site and the Wireguard community.</p>
<p>The original guide remains available <a href="/obsolete/wireguard-server-on-macos">here</a>. Please note that the original guide is no longer the recommended approach and remains available for historical preservation purposes <strong>only</strong>.</p>
<p>I can confirm this guide works for macOS Big Sur 11.3.</p>
</div>

<div class="admonition blue">
<p class="admonition-title">Notice: May 12, 2020</p>
<p>Please be aware that at present the guide’s traffic routing instructions route through IPv4 traffic <em>only</em>. That means IPv6-exclusive hosts will be inaccessible to connected peers configured with this guide. If you know a means of achieving this, please <a href="mailto:&#109;&#097;&#114;&#099;&#064;&#098;&#097;&#114;&#114;&#111;&#119;&#099;&#108;&#105;&#102;&#116;&#046;&#109;&#101;">get in touch</a>.</p>
<p>Many thanks to <a href="https://fiveone.org">Jeremy Quinn</a> for detecting this oversight.</p>
</div>

After months of false starts and dead ends, I'm happy to report my [Wireguard](https://www.wireguard.com) VPN server is successfully running on macOS.

Wireguard is a relatively new VPN protocol, entering the scene just three short years ago in [2016](https://news.ycombinator.com/item?id=11994265). Compared to the ancient VPN alternatives like [IPSec](https://en.wikipedia.org/wiki/IPsec) and [OpenVPN](https://openvpn.net), Wireguard's simplicity and speed quickly earned it the attention and praise of various tech communities like [Hacker News](https://news.ycombinator.com/item?id=17846387) and [Lobste.rs](https://lobste.rs/s/bxfhxp/virtual_private_networks_with_wireguard). Everywhere you look are Wireguard threads filled with enthusiastic comments urging others to give [Wireguard a try](https://news.ycombinator.com/item?id=17847016).

The best part is, they're right! Compared to the existing lineup of VPN protocols, Wireguard's small codebase, blazingly fast speed, and relatively simple setup put Wireguard in a league of its own as the first truly modern VPN protocol. There's just one tiny niggle: the protocol is so young there might be no documentation or guides for your platform of choice.

Unfortunately, that's the situation I found myself in with macOS when attempting to set up my Wireguard server. Despite extensively reading what's currently the [finest Wireguard documentation available](https://github.com/pirate/wireguard-docs) and following its [relevant example](https://github.com/pirate/wireguard-docs/tree/master/example-simple-client-to-server) to a tee, Wireguard would simply not function as expected on macOS. The best I could do was establish a direct connection to the server with Wireguard, but all attempts to access the LAN or surf the web timed out and failed.

Despite numerous attempts over the months, my Google-fu yielded no results, either. While there were plenty of [help articles](https://medium.com/@headquartershq/setting-up-wireguard-on-a-mac-8a121bfe9d86) from others setting up Wireguard on macOS, every single one of them was for setting up a Wireguard *peer* on macOS. This peer was always intended to only connect to a Wireguard server on more common platforms like [Ubuntu](https://ubuntu.com) or [CentOS](https://www.centos.org), never the other way around.

However, from my on-and-off research over these past few months I've finally cobbled together a solution that's working. Thus, I intend to fill this hole in the community's growing collection of documentation and setup guides: here's what you need to do to get a Wireguard server running on macOS with full traffic routing and LAN access[^caveat].

<!--break-->

<ol>
  <li>Pick an unused <abbr title="Internet Protocol version 4">IPv4</abbr> subnet range where Wireguard and the attached clients will reside. This way, we can ensure that Wireguard won't encounter unexpected IP collisions with other users or services on the local network. For this guide, I'm using <code class="highlighter-rouge">10.0.10.0/24</code>, which <a href="https://ipaddressguide.com/cidr">expands</a> to cover all IPs from <code class="highlighter-rouge">10.0.10.0</code> to <code class="highlighter-rouge">10.0.10.255</code>.
  </li>
  <li>Decide a port to host Wireguard on (the standard port is 51820). If your router doesn’t have this port opened and forwarding to your Wireguard server's local IP yet, do so now. For the sake of brevity, specific instructions for how to do this on your particular router won't be covered here. For assistance, Google your Internet provider’s name and "setup port forwarding".</li>
  <li>
    To access other clients on the <abbr title="Local Area Network">LAN</abbr> and route internet traffic for web browsing while on the <abbr title="Virtual Private Network">VPN</abbr>, we need to create a firewall rule to let macOS know <em>how</em> to route that traffic. To do so, we'll use macOS's built-in packet filter utility, <code class="highlighter-rouge">pfctl</code>. There's a number of possible ways to do this, but to make our changes resilient to macOS updates and as unobtrusive to the rest of the system as possible, we'll dynamically add and remove the rule by leveraging a couple bash scripts. Later, we'll configure Wireguard to automatically execute these with its <code class="highlighter-rouge"><a href="https://github.com/pirate/wireguard-docs#postup">PostUp</a></code> and <code class="highlighter-rouge"><a href="https://github.com/pirate/wireguard-docs#postdown">PostDown</a></code> directives on startup and shutdown, respectively.
    <ol>
      <li>Create <code class="highlighter-rouge">/usr/local/etc/wireguard/postup.sh</code> with the following contents. Remember to replace <code class="highlighter-rouge">10.0.10.0/24</code> with the subnet range you picked earlier. Note that the Ethernet network device <code class="highlighter-rouge"><a href="https://stackoverflow.com/a/55232331">en0</a></code> is assumed, and you should replace it if you're serving Wireguard over WiFi or another network device:
        <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/sh</span>

<span class="c"># 1) Preparing the directory which we'll persist the pf token</span>
<span class="c">#    generated by (2) in. That token can then be used by our</span>
<span class="c">#    postdown.sh script to remove the routing rule in the</span>
<span class="c">#    event Wireguard is shut down on the server.</span>
<span class="nb">mkdir</span> <span class="nt">-p</span> /usr/local/var/run/wireguard
<span class="nb">chmod </span>700 /usr/local/var/run/wireguard

<span class="c"># 2) Dynamically add the NAT rule, enable the firewall, increase</span>
<span class="c">#    its reference count (-E) and persist the reference token</span>
<span class="c">#    generated by the command into pf_wireguard_token.txt,</span>
<span class="c">#    which postdown.sh will reference when Wireguard is shut</span>
<span class="c">#    down.</span>
<span class="nb">echo</span> <span class="s1">'nat on en0 from 10.0.10.0/24 to any -&gt; (en0)'</span> | <span class="se">\</span>
    pfctl <span class="nt">-a</span> com.apple/wireguard <span class="nt">-Ef</span> - 2&gt;&amp;1 | <span class="se">\</span>
    <span class="nb">grep</span> <span class="s1">'Token'</span> | <span class="se">\</span>
    <span class="nb">sed</span> <span class="s1">'s%Token : \(.*\)%\1%'</span> <span class="o">&gt;</span> /usr/local/var/run/wireguard/pf_wireguard_token.txt   </code></pre></div></div>
      </li>
      <li>Create <code class="highlighter-rouge">/usr/local/etc/wireguard/postdown.sh</code> with the following contents:
        <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/sh</span>

<span class="c"># 1) Fetch the pf reference token that was generated on</span>
<span class="c">#    Wireguard startup with postup.sh</span>
<span class="nv">TOKEN</span><span class="o">=</span><span class="sb">`</span><span class="nb">cat</span> /usr/local/var/run/wireguard/pf_wireguard_token.txt<span class="sb">`</span>

<span class="c"># 2) Remove the reference (and by extension, the pf rule that</span>
<span class="c">#    generated it). Adding and removing rules by references</span>
<span class="c">#    like this will automatically disable the packet filter</span>
<span class="c">#    firewall if there are no other references left, but will</span>
<span class="c">#    leave it up and intact if there are.</span>
pfctl <span class="nt">-X</span> <span class="k">${</span><span class="nv">TOKEN</span><span class="k">}</span> <span class="o">||</span> <span class="nb">exit </span>1
<span class="nb">rm</span> <span class="nt">-f</span> /usr/local/var/run/wireguard/pf_wireguard_token.txt
</code></pre></div></div>
      </li>
      <li>Make both scripts executable:
        <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight wrap"><code><span class="gp">$</span><span class="w"> </span><span class="nb">chmod </span>u+x /usr/local/etc/wireguard/<span class="k">*</span>.sh
</code></pre></div></div>
      </li>
    </ol>
  </li>
  <li>Install the Wireguard CLI with the following Homebrew command:
    <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight wrap"><code><span class="gp">$</span><span class="w"> </span>brew <span class="nb">install </span>wireguard-tools
</code></pre></div></div>
    Note that the command line interface for Wireguard is not optional on the server, the <a href="https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&amp;mt=12">Wireguard App on the App Store</a> is <strong>not</strong> sufficient for managing a Wireguard server due to macOS's <a href="https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html">sandbox restrictions</a>. (Specifically, the <code class="highlighter-rouge">PostUp</code> and <code class="highlighter-rouge">PostDown</code> directives&mdash;which this configuration relies on&mdash;are <a href="https://www.reddit.com/r/WireGuard/comments/bea47m/wireguard_macos_application_postuppostdown/"><strong>not</strong> supported</a> in the App Store's Wireguard App).</li>
  <li>Generate a number of private and public key pairs for Wireguard to use. This number should be equal to the number of peers you want plus one for your server. You can use the following commands to accomplish this, which will spit the keys into your current directory:
    <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span><span class="nb">umask </span>077 <span class="c"># Ensure credentials don't leak from possible race condition.</span>
<span class="gp">$</span><span class="w"> </span>wg genkey | <span class="nb">tee </span>privatekey | wg pubkey <span class="o">&gt;</span> publickey</code></pre></div></div>
      For example, if you have just a single peer you intend to connect to your Wireguard VPN with, you should have two public and private keys pairs: one pair for your peer, and another pair for your server. Please ensure you keep these files in a safe and secure place, such as an <a href="https://support.apple.com/guide/disk-utility/create-a-disk-image-dskutl11888/mac">encrypted container</a>. If someone nasty gets them, they have complete remote access to your server!
  </li>
  <li>Create your Wireguard server configuration file. First, decide a location and filename (I chose <code>/usr/local/etc/wireguard/coordinates.conf</code>), then enter in your configuration using the following template as your guide:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">[</span>Interface]
<span class="c"># Substitute with the subnet you chose for Wireguard earlier.</span>
Address <span class="o">=</span> 10.0.10.0/24
<span class="c"># Substitute with your *server's* private key</span>
PrivateKey <span class="o">=</span> XXX
<span class="c"># If you chose a different port earlier when setting up port</span>
<span class="c"># forwarding on your router, update the port here to match.</span>
ListenPort <span class="o">=</span> 51820
<span class="c"># This prevents IPv4 &amp; IPv6 DNS leaks when browsing the web on the</span>
<span class="c"># VPN. I chose Cloudflare's public DNS servers, but feel free to</span>
<span class="c"># use whatever provider you prefer.</span>
<span class="c">#</span>
<span class="c"># Please be aware, however, that not all ISPs allow customers to</span>
<span class="c"># use 3rd party DNS providers. If your ISP does not support this,</span>
<span class="c"># delete this declaration from your config, otherwise external</span>
<span class="c"># network requests won't resolve while on the VPN.</span>
DNS <span class="o">=</span> 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111
<span class="c"># This ensures our peers continue to report their Wireguard-</span>
<span class="c"># assigned IPs while connected to the VPN. This is required for</span>
<span class="c"># their traffic to get routed correctly by the firewall rules we</span>
<span class="c"># crafted earlier with pf.</span>
PostUp <span class="o">=</span> /usr/sbin/sysctl <span class="nt">-w</span> net.inet.ip.forwarding<span class="o">=</span>1
PostUp <span class="o">=</span> /usr/sbin/sysctl <span class="nt">-w</span> net.inet6.ip6.forwarding<span class="o">=</span>1
<span class="c"># Adds the firewall routing rule on Wireguard server startup</span>
PostUp <span class="o">=</span> /usr/local/etc/wireguard/postup.sh
<span class="c"># Removes the firewall routing rule on Wireguard server shutdown</span>
PostDown <span class="o">=</span> /usr/local/etc/wireguard/postdown.sh

<span class="o">[</span>Peer]
<span class="c"># Substitute with *this peer*'s public key</span>
PublicKey <span class="o">=</span> XXX
<span class="c"># Chose a unique IP within the Wireguard subnet you defined</span>
<span class="c"># earlier that this particular peer will use when connected</span>
<span class="c"># to the VPN</span>
AllowedIPs <span class="o">=</span> 10.0.10.10/32

<span class="c"># Follow the same steps as the [Peer] template above for each</span>
<span class="c"># additional peer you wish to connect to the VPN with.</span>
</code></pre></div></div>
  </li>
  <li><a href="https://www.wireguard.com/install/">Install Wireguard on each of your peers</a> and create their configuration files using the following template as your guide:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">[</span>Interface]
<span class="c"># This MUST match the "AllowedIPs" IP you assigned to this peer in</span>
<span class="c"># the server's config.</span>
Address <span class="o">=</span> 10.0.10.10/32
<span class="c"># Substitute with *this peer's* private key.</span>
PrivateKey <span class="o">=</span> XXX
<span class="c"># This prevents IPv4 &amp; IPv6 DNS leaks when browsing the web on the</span>
<span class="c"># VPN. I chose Cloudflare's public DNS servers, but feel free to</span>
<span class="c"># use whatever provider you prefer.</span>
DNS <span class="o">=</span> 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111

<span class="o">[</span>Peer]
<span class="c"># Substitute with your *server's* public key</span>
PublicKey <span class="o">=</span> XXX
<span class="c"># Your Wireguard server's public IP. If you chose a different port</span>
<span class="c"># earlier when setting up port forwarding on your router, update</span>
<span class="c"># the port here to match.</span>
Endpoint <span class="o">=</span> XXX.XXX.XXX.XXX:51820
<span class="c"># Informs Wireguard to forward ALL traffic through the VPN.</span>
AllowedIPs <span class="o">=</span> 0.0.0.0/0, ::/0
<span class="c"># If you're be behind a NAT, this will keep the connection alive.</span>
PersistentKeepalive <span class="o">=</span> 25
</code></pre></div></div>
  </li>
  <li>Test your Wireguard setup by starting the service on your macOS server with <code class="highlighter-rouge">wg-quick up /usr/local/etc/wireguard/coordinates.conf</code> (remembering to change the path to where you persisted your server's configuration file, if necessary). Once you've confirmed the server started successfully, take a peer that's <strong>not</strong> currently on the LAN (such as an iPhone using cellular) and enable Wireguard VPN on it. With both the server and peer's Wireguard services enabled, run through the following tests to ensure everything's configured correctly:
    <ul>
      <li>Confirm SSH access to your macOS server's local IP address using an app like <a href="https://apps.apple.com/us/app/prompt-2/id917437289">Prompt 2</a>. This will validate that your peer and server were able to establish a successful connection with one another.</li>
      <li>Confirm SSH access to other computers on your Wireguard server's LAN using an app like <a href="https://apps.apple.com/us/app/prompt-2/id917437289">Prompt 2</a>. This will validate that your server's Wireguard subnet is set up correctly and that Wireguard is properly assigning your peer its predefined, local IP address.</li>
      <li>Finally, confirm access to the Internet by loading a web page or two. This will validate that your packet filter firewall rule is successfully routing traffic requests from the peer.</li>
    </ul>
  </li>
  <li>Once all the checks above come back clean, you are the proud admin of a macOS Wireguard server. All that's left to do now is set up Wireguard as a launch daemon so it automatically starts at system boot. We'll do so by writing a small <code><a href="https://en.wikipedia.org/wiki/Launchd">launchd</a></code> <code><a href="https://en.wikipedia.org/wiki/Property_list">plist</a></code> which will inform macOS <em>how</em> to start the service on system boot.
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
            <span class="c">&lt;!-- NOTE: If you're rocking an Apple Silicon</span>
            <span class="c">     M-series computer, this path should be</span>
            <span class="c">     /opt/homebrew/bin/wg-quick, instead --&gt;</span>
            <span class="nt">&lt;string&gt;</span>/usr/local/bin/wg-quick<span class="nt">&lt;/string&gt;</span>
            <span class="nt">&lt;string&gt;</span>up<span class="nt">&lt;/string&gt;</span>
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
      <li>Inform <code>launchd</code> of the new <code>plist</code> you just created with the following commands:
        <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span><span class="nb">sudo </span>launchctl <span class="nb">enable </span>system/com.wireguard.server
<span class="gp">$</span><span class="w"> </span><span class="nb">sudo </span>launchctl bootstrap system /Library/LaunchDaemons/com.wireguard.server.plist</code></pre></div></div>
      </li>
    </ol>
  </li>
  <li>Finally, restart your macOS server. If your launch daemon was configured and loaded correctly, Wireguard should already be running.</li>
</ol>

Congratulations :tada:! You're now among the dozen people crazy enough to serve Wireguard on macOS. Please feel free to reach out on [Twitter](https://twitter.com/Barrowclift) or via <a href="mailto:&#109;&#097;&#114;&#099;&#064;&#098;&#097;&#114;&#114;&#111;&#119;&#099;&#108;&#105;&#102;&#116;&#046;&#109;&#101;">email</a> if you have feedback or corrections, I'd love to hear from you.

<div class="article-linkback">
    <a href="/">⌘</a>
</div>

------

## Research Materials

The following help articles and documentation from fellow enthusiasts were invaluable in my research and referenced heavily. Many thanks to them for their contributions:

* [lifepillar](https://lifepillar.me)'s [fantastic feedback](https://github.com/barrowclift/barrowclift.github.io/issues/1) on the [original article](/obsolete/wireguard-server-on-macos); it's because of their assistance that this new and improved guide was possible. Please support their [work](https://github.com/lifepillar?tab=repositories).
* [Stavros Korokithakis's "How to easily configure WireGuard"](https://www.stavros.io/posts/how-to-configure-wireguard/)
* [pirate's "Unofficial Wireguard Documentation"](https://github.com/pirate/wireguard-docs)
* [Chrissy LeMaire's "Share VPN with OS X Sierra Internet Sharing"](https://blog.netnerds.net/2016/11/share-vpn-with-os-x-sierra-internet-sharing/)
* [Murus's "OS X PF Manual"](https://murusfirewall.com/Documentation/OS%20X%20PF%20Manual.pdf)

## Many Thanks To...

* [**lifepillar**](https://lifepillar.me) for their superior PF rules handling and daemon config. Our discussion remains [publicly accessible on Github](https://github.com/barrowclift/barrowclift.github.io/issues/1).
* [**oma_sct**](https://twitter.com/oma_sct) for their private suggestion to do away with the previously enabled `LaunchOnlyOnce` flag, which prevented the service from automatically restarting should the daemon ever exit unexpectedly.
* [**diadal**](https://github.com/diadal) for informing me that not all ISPs allow customers to use 3rd party DNS providers (previously, this was not mentioned in the guide). The discussion remains [publicly accessible on Github](https://github.com/barrowclift/barrowclift.github.io/issues/2).
* **Corey Watson** for his private reminder that the default Homebrew executable directory on Macs powered by [Apple Silicon](https://en.wikipedia.org/wiki/Apple-designed_processors) is `/opt/homebrew/bin`, not `/usr/local/bin`. This difference is now reflected in the daemon config template.
* **Luke Sandoval** for his private message revealing that the approach detailed in this guide obfuscates client IPs behind the server's IP. Thus, this solution might not meet certain needs and is thus now called out as a caveat in the guide.

*[DNS]: Domain Name System
*[ISP]: Internet Service Provider
*[LAN]: Local Area Network
*[VPN]: Virtual Private Network

-------------

[^caveat]: Please be aware that the approach detailed in this guide will obfuscate client IP traffic. This means all connected client requests will appear as if they're requests from the Wireguard server IP itself, not the assigned client IPs. As a result, this solution may not fit your particular needs.
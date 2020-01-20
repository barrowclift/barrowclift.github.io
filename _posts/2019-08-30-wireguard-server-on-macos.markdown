---
layout: post
title: "Wireguard Server on macOS"
date: 2019-08-30 20:15:26
update: 2019-11-16 15:50:37
categories:
  - Technology
  - macOS
  - Services
  - Programming
  - Unix
  - Guides
excerpt: "With this guide, you too can easily enjoy Wireguard VPN's performance and security served by macOS Mojave."
image: "wireguard-server-on-macos/share-image.jpg"
has_afterward: true
---

<figure markdown="1" class="inline shadow">
![]({{ site.dropbox }}/wireguard-server-on-macos/share-image.jpg)
</figure>

<div class="admonition yellow">
<p class="admonition-title">Update: November 16, 2019</p>
<p>I'm happy to confirm this process still works in macOS Catalina.</p>
</div>

After months of false starts and dead ends, I'm happy to report my [Wireguard](https://www.wireguard.com) VPN server is now successfully running on [macOS Mojave](https://en.wikipedia.org/wiki/MacOS_Mojave).

Wireguard is a relatively new VPN protocol, entering the scene just three short years ago in [2016](https://news.ycombinator.com/item?id=11994265). Compared to the anchient VPN alternatives like [IPSec](https://en.wikipedia.org/wiki/IPsec) and [OpenVPN](https://openvpn.net), Wireguard's simplicity and speed quickly earned it the attention and praise of various tech communities like [Hacker News](https://news.ycombinator.com/item?id=17846387) and [Lobste.rs](https://lobste.rs/s/bxfhxp/virtual_private_networks_with_wireguard). Everywhere you look are Wireguard threads filled with enthusiastic comments urging others to give [Wireguard a try](https://news.ycombinator.com/item?id=17847016).

The best part is, they're right! Compared to the existing lineup of VPN protocols, Wireguard's small codebase, blazingly fast speed, and relatively simple setup put Wireguard in a league of its own as the first truly modern VPN protocol. There's just one tiny niggle: the protocol is so young there might be no documentation or guides for your platform of choice.

Unfortunately, that's the situation I found myself in with macOS when attempting to set up my Wireguard server. Despite extensively reading what's currently the [finest Wireguard documentation available](https://github.com/pirate/wireguard-docs) and following its [relevant example](https://github.com/pirate/wireguard-docs/tree/master/example-simple-client-to-server) to a tee, Wireguard would simply not function as expected on macOS. The best I could do was establish a direct connection to the server with Wireguard, but all attempts to access the LAN or surf the web timed out and failed.

Despite numerous attempts over the months, my Google-fu yielded no results, either. While there were plenty of [help articles](https://medium.com/@headquartershq/setting-up-wireguard-on-a-mac-8a121bfe9d86) from others setting up Wireguard on macOS, every single one of them was for setting up a Wireguard *peer* on macOS. This peer was always intended to only connect to a Wireguard server on more common platforms like [Ubuntu](https://ubuntu.com) or [CentOS](https://www.centos.org), never the other way around.

However, from my on-and-off research over these past few months I've finally cobbled together a solution that's working. Thus, I intend to fill this hole in the community's growing collection of documentation and setup guides: here's what you need to do to get a Wireguard server running on macOS Mojave with full traffic routing and LAN access.

<!--break-->

<ol>
  <li>Pick a <abbr title="Internet Protocol version 4">IPv4</abbr> subnet range where Wireguard and the attached clients will reside.
    <blockquote>
      <p>For example, <code class="highlighter-rouge">10.0.10.0/24</code>, which <a href="https://ipaddressguide.com/cidr">expands</a> to cover all IPs from <code class="highlighter-rouge">10.0.10.0</code> to <code class="highlighter-rouge">10.0.10.255</code>.</p>
    </blockquote>
  </li>
  <li>
    <p>Enter the following lines into <code class="highlighter-rouge">/etc/pf.conf</code>. These additional lines will allow us to access other clients on the <abbr title="Local Area Network">LAN</abbr> and route internet traffic for web browsing on the <abbr title="Virtual Private Network">VPN</abbr>. Note the placement of the lines: <em>the placement and order of these rules matters, do not rearrange them</em>. Ensure that the subnet matches the one you chose in the previous step and that <code class="highlighter-rouge">utun3</code> ends up matching the interface name that Wireguard uses on your machine when you eventually start it up for the first time. If it does not, change the name here to match (for example, it might be <code class="highlighter-rouge">wg0</code>, <code class="highlighter-rouge">utun1</code>, etc.). Additionally, if your macOS server is not connected via ethernet, be sure to update <code class="highlighter-rouge">en0</code> to match whatever other wired or wireless interface you’re using instead:</p>
    <div class="admonition yellow">
<p class="admonition-title">Update: November 16, 2019</p>
<p>As it turns out, making these changes directly in <code>/etc/pf.conf</code> was a bad idea; most system updates completely replace the file. To make your changes more "sticky" across updates, make a copy of <code>pf.conf</code> somewhere called <code>pf-wireguard.conf</code>, make the changes described below in that file, and use that file instead of <code>pf.conf</code> for all remaining steps.</p>
</div>
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c"># ...</span>
nat-anchor <span class="s2">"com.apple/*"</span>

<span class="c"># [NEW LINES]</span>
nat on en0 from 10.0.10.0/24 to any -&gt; <span class="o">(</span>en0<span class="o">)</span>
nat on utun3 from 10.0.10.0/24 to any -&gt; <span class="o">(</span>utun3<span class="o">)</span>
<span class="c"># [END NEW LINES]</span>

rdr-anchor <span class="s2">"com.apple/*"</span>
<span class="c"># ...</span>
</code></pre></div>    </div>
  </li>
  <li>Test your <code class="highlighter-rouge">pf.conf</code> changes with <code class="highlighter-rouge">pfctl -nf /etc/pf.conf</code>. Once you’ve verified it returns with no errors, run <code class="highlighter-rouge">pfctl -f /etc/pf.conf</code> to manually load the changes. No restart is necessary.</li>
  <li>You’ll need to create a small script which a daemon property file we’ll make later will execute so these rules are applied on startup. I placed my script at <code class="highlighter-rouge">/usr/local/etc/wireguard-pf.sh</code>, but you can put yours anywhere you want. The contents of this script are very simple:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="c">#!/bin/sh</span>

pfctl <span class="nt">-f</span> /etc/pf.conf
</code></pre></div>    </div>
  </li>
  <li>Create the daemon property file at at <code class="highlighter-rouge">/Library/LaunchDaemons/com.username.wireguardpf.plist</code> that will run the small script we just created. This can be whatever name you prefer, but it should still reside in <code class="highlighter-rouge">/Library/LaunchDaemons/</code>. The contents of the file follows, but remember to substitute the path and filename you chose in the previous step):
    <div class="language-xml highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="cp">&lt;!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd"&gt;</span>
<span class="nt">&lt;plist</span> <span class="na">version=</span><span class="s">"1.0"</span><span class="nt">&gt;</span>
<span class="nt">&lt;dict&gt;</span>
    <span class="nt">&lt;key&gt;</span>Disabled<span class="nt">&lt;/key&gt;</span>
    <span class="nt">&lt;false/&gt;</span>
    <span class="nt">&lt;key&gt;</span>KeepAlive<span class="nt">&lt;/key&gt;</span>
    <span class="nt">&lt;dict&gt;</span>
        <span class="nt">&lt;key&gt;</span>SuccessfulExit<span class="nt">&lt;/key&gt;</span>
        <span class="nt">&lt;false/&gt;</span>
    <span class="nt">&lt;/dict&gt;</span>
    <span class="nt">&lt;key&gt;</span>Label<span class="nt">&lt;/key&gt;</span>
    <span class="nt">&lt;string&gt;</span>org.username.wireguardpf<span class="nt">&lt;/string&gt;</span>
    <span class="nt">&lt;key&gt;</span>ProgramArguments<span class="nt">&lt;/key&gt;</span>
    <span class="nt">&lt;array&gt;</span>
        <span class="nt">&lt;string&gt;</span>/usr/local/etc/wireguard-pf.sh<span class="nt">&lt;/string&gt;</span>
    <span class="nt">&lt;/array&gt;</span>
    <span class="nt">&lt;key&gt;</span>RunAtLoad<span class="nt">&lt;/key&gt;</span>
    <span class="nt">&lt;true/&gt;</span>
<span class="nt">&lt;/dict&gt;</span>
<span class="nt">&lt;/plist&gt;</span>
</code></pre></div>    </div>
  </li>
  <li>Ensure the correct permissions are granted to the two files you just created and then ensure the daemon is loaded with <code class="highlighter-rouge">launchctl</code>. By loading the script with this program, macOS will know to run the script on startup. Remember to use the paths and filenames you previously chose:
    <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span><span class="nb">sudo chown </span>root:wheel /usr/local/etc/wireguard-pf.sh
<span class="gp">$</span><span class="w"> </span><span class="nb">sudo chmod </span>755 /usr/local/etc/wireguard-pf.sh
<span class="gp">$</span><span class="w"> </span><span class="nb">sudo chown </span>root:wheel /Library/LaunchDaemons/org.username.wireguardpf.plist
<span class="gp">$</span><span class="w"> </span><span class="nb">sudo </span>launchctl load /Library/LaunchDaemons/org.username.wireguardpf.plist
</code></pre></div>    </div>
  </li>
  <li>Create a file named <code class="highlighter-rouge">/etc/sysctl.conf</code> with the contents below. In order for the added rules in <code class="highlighter-rouge">pf.conf</code> to be useful, we must ensure our peers continue to report their Wireguard-assigned IPs while on the <abbr title="Virtual Private Network">VPN</abbr>. The following lines do this for us, and is applied on startup automatically:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code>net.inet.ip.forwarding<span class="o">=</span>1
net.inet6.ip6.forwarding<span class="o">=</span>1
</code></pre></div>    </div>
  </li>
  <li>To assist testing the setup later, we’ll make those settings take effect now by executing the following commands in Terminal (or reboot, your choice):
    <div class="language-console highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="gp">$</span><span class="w"> </span>sysctl <span class="nt">-w</span> net.inet.ip.forwarding<span class="o">=</span>1
<span class="gp">$</span><span class="w"> </span>sysctl <span class="nt">-w</span> net.inet6.ip6.forwarding<span class="o">=</span>1
</code></pre></div>    </div>
  </li>
  <li>Decide a port to host Wireguard on (the standard port is 51820). If your router doesn’t have this port opened and forwarding to your Wireguard server local IP yet, do so now. For the sake of brevety and the sheer breadth of router software out there, specific instructions for how to do this will not be included. For assistance, Google your Internet provider’s name and “setup port forwarding”.</li>
  <li>Install Wireguard by downloading the free <a href="https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&amp;mt=12">Wireguard App from the App Store</a>. Finally, something easy!</li>
  <li>Launch the Wireguard app, then click “File” &gt; “Add Empty Tunnel…”. Pick a name to represent your <abbr title="Virtual Private Network">VPN</abbr> service then paste the following into the config body. Be sure to update the placeholders with your own values:
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">[</span>Interface]
<span class="c"># Substitute with the subnet for Wireguard you chose earlier</span>
Address <span class="o">=</span> 10.0.10.0/24
PrivateKey <span class="o">=</span> XXX
<span class="c"># If you chose a different port earlier when setting up port forwarding on your router, update the port here to match.</span>
ListenPort <span class="o">=</span> 51820
<span class="c"># This is to prevent IPv4 &amp; IPv6 DNS leaking when browsing the web on the VPN. Feel free to use whatever DNS provider you prefer.</span>
DNS <span class="o">=</span> 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111

<span class="o">[</span>Peer]
PublicKey <span class="o">=</span> XXX
<span class="c"># Chose an IP that this peer will use when connected to Wireguard. This should be within the subnet you chose earlier.</span>
AllowedIPs <span class="o">=</span> 10.0.10.10/32

<span class="c"># ... and other Peers</span>
<span class="c"># Follow the same steps as the example peer above for each new peer</span>
</code></pre></div>    </div>
  </li>
  <li>Since documentation for setting up Wireguard <em>peers</em> is fairly mature at this point, this process won’t be covered in depth here. As a sanity check, the configs used by your peers should look something like this
    <div class="language-bash highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="o">[</span>Interface]
<span class="c"># This MUST match the "AllowedIPs" IP you set for this peer in the server's config the previous step.</span>
Address <span class="o">=</span> 10.0.10.10/32
PrivateKey <span class="o">=</span> XXX
<span class="c"># This is to prevent IPv4 &amp; IPv6 DNS leaking when browsing the web on the VPN. Feel free to use whatever DNS provider you prefer.</span>
DNS <span class="o">=</span> 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111

<span class="o">[</span>Peer]
PublicKey <span class="o">=</span> XXX
<span class="c"># Your Wireguard server's public IP</span>
Endpoint <span class="o">=</span> XXX.XXX.XXX.XXX:51820
AllowedIPs <span class="o">=</span> 0.0.0.0/0, ::/0
PersistentKeepalive <span class="o">=</span> 25
</code></pre></div>    </div>
  </li>
  <li>Test your setup by first starting Wireguard on your macOS server with the app and then attempting to connect with your peer. Once connected, be sure to test the traffic routing was set up correctly by attempting to surf the web. Then, try connecting to the server itself and other computers on the <abbr title="Local Area Network">LAN</abbr> to ensure proper configuration.</li>
</ol>

Congratulations! You're now among the dozen people crazy enough to serve Wireguard on macOS. Please feel free to reach out on [Twitter](https://twitter.com/Barrowclift) or via <a href="mailto:&#109;&#097;&#114;&#099;&#064;&#098;&#097;&#114;&#114;&#111;&#119;&#099;&#108;&#105;&#102;&#116;&#046;&#109;&#101;">email</a> if you have feedback or corrections, I'd love to hear from you.

<div class="article-linkback">
    <a href="/">⌘</a>
</div>

------

## Research Materials

The following help articles and documentation from fellow enthusiasts were invaluable in my research and referenced heavily. Many thanks to them for their contributions:

* [Stavros Korokithakis's "How to easily configure WireGuard"](https://www.stavros.io/posts/how-to-configure-wireguard/)
* [pirate's "Unofficial Wireguard Documentation"](https://github.com/pirate/wireguard-docs)
* [Chrissy LeMaire's "Share VPN with OS X Sierra Internet Sharing"](https://blog.netnerds.net/2016/11/share-vpn-with-os-x-sierra-internet-sharing/)
* [Murus's "OS X PF Manual"](https://murusfirewall.com/Documentation/OS%20X%20PF%20Manual.pdf)

------

*[VPN]: Virtual Private Network
*[LAN]: Local Area Network
*[IPv4]: Internet Protocol version 4
*[IPv6]: Internet Protocol version 6
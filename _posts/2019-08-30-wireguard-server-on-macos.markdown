---
layout: post
title: "Wireguard Server on macOS"
date: 2019-08-30 20:15:26
categories:
  - Technology
  - macOS
  - Services
  - Programming
  - Unix
  - Guides
excerpt: "With this guide, you too can easily enjoy Wireguard VPN's performance and security served by macOS Mojave."
image: "/images/assets/wireguard-server-on-macos/share-image.jpg"
has_afterward: true
---

<figure markdown="1" class="inline shadow">
![]({{ site.baseurl }}/images/assets/wireguard-server-on-macos/share-image.jpg)
</figure>

After months of false starts and dead ends, I'm happy to report my [Wireguard](https://www.wireguard.com) VPN server is now successfully running on [macOS Mojave](https://en.wikipedia.org/wiki/MacOS_Mojave).

Wireguard is a relatively new VPN protocol, entering the scene just three short years ago in [2016](https://news.ycombinator.com/item?id=11994265). Compared to the anchient VPN alternatives like [IPSec](https://en.wikipedia.org/wiki/IPsec) and [OpenVPN](https://openvpn.net), Wireguard's simplicity and speed quickly earned it the attention and praise of various tech communities like [Hacker News](https://news.ycombinator.com/item?id=17846387) and [Lobste.rs](https://lobste.rs/s/bxfhxp/virtual_private_networks_with_wireguard). Everywhere you look are Wireguard threads filled with enthusiastic comments urging others to give [Wireguard a try](https://news.ycombinator.com/item?id=17847016).

The best part is, they're right! Compared to the existing lineup of VPN protocols, Wireguard's small codebase, blazingly fast speed, and relatively simple setup put Wireguard in a league of its own as the first truly modern VPN protocol. There's just one tiny niggle: the protocol is so young there might be no documentation or guides for your platform of choice.

Unfortunately, that's the situation I found myself in with macOS when attempting to set up my Wireguard server. Despite extensively reading what's currently the [finest Wireguard documentation available](https://github.com/pirate/wireguard-docs) and following its [relevant example](https://github.com/pirate/wireguard-docs/tree/master/example-simple-client-to-server) to a tee, Wireguard would simply not function as expected on macOS. The best I could do was establish a direct connection to the server with Wireguard, but all attempts to access the LAN or surf the web timed out and failed.

Despite numerous attempts over the months, my Google-fu yielded no results, either. While there were plenty of [help articles](https://medium.com/@headquartershq/setting-up-wireguard-on-a-mac-8a121bfe9d86) from others setting up Wireguard on macOS, every single one of them was for setting up a Wireguard *peer* on macOS. This peer was always intended to only connect to a Wireguard server on more common platforms like [Ubuntu](https://ubuntu.com) or [CentOS](https://www.centos.org), never the other way around.

However, from my on-and-off research over these past few months I've finally cobbled together a solution that's working. Thus, I intend to fill this hole in the community's growing collection of documentation and setup guides: here's what you need to do to get a Wireguard server running on macOS Mojave with full traffic routing and LAN access.

<!--break-->

1. Pick a IPv4 subnet range where Wireguard and the attached clients will reside.
> For example, `10.0.10.0/24`, which [expands](https://ipaddressguide.com/cidr) to cover all IPs from `10.0.10.0` to `10.0.10.255`.
2. Enter the following lines into `/etc/pf.conf`. These additional lines will allow us to access other clients on the LAN and route internet traffic for web browsing on the VPN. Note the placement of the lines: *the placement and order of these rules matters, do not rearrange them*. Ensure that the subnet matches the one you chose in the previous step and that `utun3` ends up matching the interface name that Wireguard uses on your machine when you eventually start it up for the first time. If it does not, change the name here to match (for example, it might be `wg0`, `utun1`, etc.). Additionally, if your macOS server is not connected via ethernet, be sure to update `en0` to match whatever other wired or wireless interface you're using instead:
   ```bash
   # ...
   nat-anchor "com.apple/*"

   # [NEW LINES]
   nat on en0 from 10.0.10.0/24 to any -> (en0)
   nat on utun3 from 10.0.10.0/24 to any -> (utun3)
   # [END NEW LINES]

   rdr-anchor "com.apple/*"
   # ...
   ```
3. Test your `pf.conf` changes with `pfctl -nf /etc/pf.conf`. Once you've verified it returns with no errors, run `pfctl -f /etc/pf.conf` to manually load the changes. No restart is necessary.
4. You'll need to create a small script which a daemon property file we'll make later will execute so these rules are applied on startup. I placed my script at `/usr/local/etc/wireguard-pf.sh`, but you can put yours anywhere you want. The contents of this script are very simple:
   ```bash
   #!/bin/sh

   pfctl -f /etc/pf.conf
   ```
5. Create the daemon property file at at `/Library/LaunchDaemons/com.username.wireguardpf.plist` that will run the small script we just created. This can be whatever name you prefer, but it should still reside in `/Library/LaunchDaemons/`. The contents of the file follows, but remember to substitute the path and filename you chose in the previous step):
   ```xml
   <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
   <plist version="1.0">
   <dict>
       <key>Disabled</key>
       <false/>
       <key>KeepAlive</key>
       <dict>
           <key>SuccessfulExit</key>
           <false/>
       </dict>
       <key>Label</key>
       <string>org.username.wireguardpf</string>
       <key>ProgramArguments</key>
       <array>
           <string>/usr/local/etc/wireguard-pf.sh</string>
       </array>
       <key>RunAtLoad</key>
       <true/>
   </dict>
   </plist>
   ```
6. Ensure the correct permissions are granted to the two files you just created and then ensure the daemon is loaded with `launchctl`. By loading the script with this program, macOS will know to run the script on startup. Remember to use the paths and filenames you previously chose:
   ```console
   $ sudo chown root:wheel /usr/local/etc/wireguard-pf.sh
   $ sudo chmod 755 /usr/local/etc/wireguard-pf.sh
   $ sudo chown root:wheel /Library/LaunchDaemons/org.username.wireguardpf.plist
   $ sudo launchctl load /Library/LaunchDaemons/org.username.wireguardpf.plist
   ```
7. Create a file named `/etc/sysctl.conf` with the contents below. In order for the added rules in `pf.conf` to be useful, we must ensure our peers continue to report their Wireguard-assigned IPs while on the VPN. The following lines do this for us, and is applied on startup automatically:
   ```bash
   net.inet.ip.forwarding=1
   net.inet6.ip6.forwarding=1
   ```
8. To assist testing the setup later, we'll make those settings take effect now by executing the following commands in Terminal (or reboot, your choice):
   ```console
   $ sysctl -w net.inet.ip.forwarding=1
   $ sysctl -w net.inet6.ip6.forwarding=1
   ```
9. Decide a port to host Wireguard on (the standard port is 51820). If your router doesn't have this port opened and forwarding to your Wireguard server local IP yet, do so now. For the sake of brevety and the sheer breadth of router software out there, specific instructions for how to do this will not be included. For assistance, Google your Internet provider's name and "setup port forwarding".
10. Install Wireguard by downloading the free [Wireguard App from the App Store](https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&mt=12). Finally, something easy!
11. Launch the Wireguard app, then click "File" > "Add Empty Tunnel...". Pick a name to represent your VPN service then paste the following into the config body. Be sure to update the placeholders with your own values:
    ```bash
    [Interface]
    # Substitute with the subnet for Wireguard you chose earlier
    Address = 10.0.10.0/24
    PrivateKey = XXX
    # If you chose a different port earlier when setting up port forwarding on your router, update the port here to match.
    ListenPort = 51820
    # This is to prevent IPv4 & IPv6 DNS leaking when browsing the web on the VPN. Feel free to use whatever DNS provider you prefer.
    DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111

    [Peer]
    PublicKey = XXX
    # Chose an IP that this peer will use when connected to Wireguard. This should be within the subnet you chose earlier.
    AllowedIPs = 10.0.10.10/32

    # ... and other Peers
    # Follow the same steps as the example peer above for each new peer
    ```
12. Since documentation for setting up Wireguard *peers* is fairly mature at this point, this process won't be covered in depth here. As a sanity check, the configs used by your peers should look something like this
    ```bash
    [Interface]
    # This MUST match the "AllowedIPs" IP you set for this peer in the server's config the previous step.
    Address = 10.0.10.10/32
    PrivateKey = XXX
    # This is to prevent IPv4 & IPv6 DNS leaking when browsing the web on the VPN. Feel free to use whatever DNS provider you prefer.
    DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111

    [Peer]
    PublicKey = XXX
    # Your Wireguard server's public IP
    Endpoint = XXX.XXX.XXX.XXX:51820
    AllowedIPs = 0.0.0.0/0, ::/0
    PersistentKeepalive = 25
    ```
13. Test your setup by first starting Wireguard on your macOS server with the app and then attempting to connect with your peer. Once connected, be sure to test the traffic routing was set up correctly by attempting to surf the web. Then, try connecting to the server itself and other computers on the LAN to ensure proper configuration.

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
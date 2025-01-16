---
title: "Wireguard Server on macOS"
date: 2019-08-30 20:15:26
update: 2025-01-15 21:02:50-0500

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
    <p>The below steps are confirmed to work with <a href="https://formulae.brew.sh/formula/wireguard-tools">wireguard-tools 1.0.20210914</a> for macOS Sequoia 15.2 on both Apple Silicon and Intel-based Macs.</p>
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

1. Choose unused, local IPv4 & IPv6 subnet ranges where Wireguard and the attached clients will reside. This way, we can ensure Wireguard won't encounter unexpected IP collisions with other users or services on your LAN for either protocol. For this guide...
    1. I'm using `10.0.10.1/24` for IPv4, which [expands](https://www.ipaddressguide.com/cidr) so we can assign attached clients any addresses from `10.0.10.0` to `10.0.10.255`. This allows for 256 usable addresses, more than enough for most non-commercial situations.
    2. I'm using `fd77:77:77:77::1/112` for IPv6, which [expands](https://www.ipaddressguide.com/ipv6-cidr) so we can assign attached clients any addresses from `fd77:77:77:77::1` to `fd77:77:77:77::ffff`. Even this relatively constrained range allows for a staggering 65,536 usable addresses.
2. Decide a port to host Wireguard on (the standard port is 51820). If your router doesn't have this port opened and forwarding to your Wireguard server's local IP yet, [do so now](https://portforward.com/how-to-port-forward/). For the sake of brevity, specific instructions for how to do this on your particular router won't be covered here. For assistance, Google your Internet provider's name and "setup port forwarding".
3. To access other clients on the LAN and route internet traffic for web browsing while on the VPN, we need to create a couple firewall rules to let macOS know *how* to route that traffic. To do so, we'll use macOS's built-in packet filter utility, `pfctl`. There's a number of possible ways to do this, but to make our changes resilient to macOS updates and as unobtrusive to the rest of the system as possible, we'll dynamically add and remove the rule by leveraging a couple bash scripts. Later, we'll configure Wireguard to automatically execute these with its [`PostUp`](https://github.com/pirate/wireguard-docs#postup) and [`PostDown`](https://github.com/pirate/wireguard-docs#postdown) directives on startup and shutdown, respectively.
    1. Create `/usr/local/etc/wireguard/postup.sh` with the following contents. Remember to replace the IP ranges with your own, if you chose differently. Note that the Ethernet network device [`en0`](https://stackoverflow.com/a/55232331) is assumed, and you should replace it if you're serving Wireguard over WiFi or another network device:
        ```bash
        #!/bin/sh

        # 1) This ensures our peers continue to report their Wireguard
        #    assigned IPs while connected to the VPN. This is required
        #    for their traffic to get routed correctly by the firewall
        #    rules we crafted earlier with pf.
        /usr/sbin/sysctl -w net.inet.ip.forwarding=1
        /usr/sbin/sysctl -w net.inet6.ip6.forwarding=1

        # 2) Preparing the directory where we'll persist the pf tokens
        #    generated by Step (3) & (4). That token can then be used by
        #    our postdown.sh script to remove the routing rules when
        #    Wireguard is shut down.
        mkdir -p /usr/local/var/run/wireguard
        chmod 700 /usr/local/var/run/wireguard

        # 3) Dynamically add the IPv4 NAT rule, enable the firewall,
        #    increase its reference count (-E), and persist the reference
        #    token generated by the command into
        #    pf_wireguard_token_ipv4_token.txt, which postdown.sh will
        #    reference when Wireguard is shut down.
        echo 'nat on en0 from 10.0.10.1/24 to any -> (en0)' | \
                pfctl -a com.apple/wireguard_ipv4 -Ef - 2>&1 | \
                grep 'Token' | \
                sed 's%Token : \(.*\)%\1%' > /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt
        IPV4_TOKEN=`sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt`
        echo "Added PF IPv4 NAT traffic routing rule with token: ${IPV4_TOKEN}"

        # 4) Dynamically add the IPv6 NAT rule, enable the firewall,
        #    increase its reference count (-E), and persist the reference
        #    token generated by the command into
        #    pf_wireguard_token_ipv6_token.txt, which postdown.sh will
        #    reference when Wireguard is shut down.
        echo 'nat on en0 from fd77:77:77:77::1/112 to any -> (en0)' | \
                pfctl -a com.apple/wireguard_ipv6 -Ef - 2>&1 | \
                grep 'Token' | \
                sed 's%Token : \(.*\)%\1%' > /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt
        IPV6_TOKEN=`sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt`
        echo "Added PF IPv6 NAT traffic routing rule with token: ${IPV6_TOKEN}"
        ```
    2. Create `/usr/local/etc/wireguard/postdown.sh` with the following contents:
        ```bash
        #!/bin/sh

        # 1) Reverting our previously set IP forwarding overrides
        /usr/sbin/sysctl -w net.inet.ip.forwarding=0
        /usr/sbin/sysctl -w net.inet6.ip6.forwarding=0

        # 2) Remove the IPv4 filter rule by reference. Adding and
        #    removing rules by references like this will automatically
        #    disable the packet filter firewall if there are no other
        #    references left, but will leave it up if there are.
        ANCHOR="com.apple/wireguard_ipv4"
        pfctl -a ${ANCHOR} -F all || exit 1
        echo "Removed IPv4 rule with anchor: ${ANCHOR}"
        IPV4_TOKEN=`sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt`
        pfctl -X ${IPV4_TOKEN} || exit 1
        echo "Removed reference for token: ${IPV4_TOKEN}"
        rm -rf /usr/local/var/run/wireguard/pf_wireguard_ipv4_token.txt
        echo "Deleted IPv4 token file"

        # 3) Remove the IPv6 filter rule by reference. Adding and
        #    removing rules by references like this will automatically
        #    disable the packet filter firewall if there are no other
        #    references left, but will leave it up if there are.
        ANCHOR="com.apple/wireguard_ipv6"
        pfctl -a ${ANCHOR} -F all || exit 1
        echo "Removed IPv6 rule with anchor: ${ANCHOR}"
        IPV6_TOKEN=`sudo cat /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt`
        pfctl -X ${IPV6_TOKEN} || exit 1
        echo "Removed reference for token: ${IPV6_TOKEN}"
        rm -rf /usr/local/var/run/wireguard/pf_wireguard_ipv6_token.txt
        echo "Deleted IPv6 token file"
        ```
    3. Make both scripts executable:
        ```console
        $ chmod u+x /usr/local/etc/wireguard/*.sh
        ```
4. Install the Wireguard program with your [macOS package manager](https://saagarjha.com/blog/2019/04/26/thoughts-on-macos-package-managers/) of choice. If you use [Homebrew](https://brew.sh/), you can do so with:
    ```console
    $ brew install wireguard-tools
    ```
    * If you decide to not install with Homebrew, be warned that [Wireguard App on the Mac App Store](https://itunes.apple.com/us/app/wireguard/id1451685025?ls=1&mt=12) is not sufficient for managing a Wireguard server due to macOS's [sandbox restrictions](https://developer.apple.com/library/archive/documentation/Security/Conceptual/AppSandboxDesignGuide/AboutAppSandbox/AboutAppSandbox.html), which [prevent](https://www.reddit.com/r/WireGuard/comments/bea47m/wireguard_macos_application_postuppostdown/) the use of the crucial `PostUp` and `PostDown` directives. The Mac App Store version may of course still be used by clients.
    * For users on an Intel machine running Sequoia, be warned that at time of writing [Homebrew appears to be outright missing a bottle for x86 Sequoia](https://github.com/Homebrew/homebrew-core/blob/3a687f80caf72cf60a25471245df354e2b62c0f1/Formula/w/wireguard-go.rb#L14), only the arm64 bottle for Sequoia appears to be defined. This means *fresh* installs of `wireguard-tools` using Homebrew on an Intel Mac running Sequoia will run into issues. This note will be removed when/if this miss in the Homebrew Cellar is addressed. Thanks Glenn ("theweatherguy") for the report!
5. Generate private and public key pairs for Wireguard to use, one pair for each peer you want to connect to Wireguard, plus one for your server itself. You can use the following commands to accomplish this, which will spit the keys into your current directory:
    ```console
    $ umask 077 # Ensure credentials don't leak from possible race condition.
    $ wg genkey | tee privatekey | wg pubkey > publickey
    ```
For example, if you have just a single peer, you should have two public and private keys pairs: one pair for your peer, and another pair for your server. Please ensure you keep these files in a safe and secure place, such as an [encrypted container](https://support.apple.com/guide/disk-utility/create-a-disk-image-dskutl11888/mac). If someone nasty gets them, they have complete remote access to your server!
6. Create your Wireguard server configuration file. First, decide a location and filename (I chose `/usr/local/etc/wireguard/coordinates.conf`). If you choose somewhere else, take care to [ensure your location's not within the `/Users` directory](https://stackoverflow.com/a/74674749), otherwise the Wireguard daemon won't be able to start the server on system boot and will require that user's login to launch. Once you've got your location chosen, write your configuration using the following template as your guide:
    ```ini
    [Interface]
    # Substitute with the subnets you chose for Wireguard earlier.
    Address = 10.0.10.1/24, fd77:77:77:77::1/112
    # Substitute with your *server's* private key you generated earlier.
    PrivateKey = XXXXXXX
    # If you chose a different port earlier when setting up port
    # forwarding on your router, update the port here to match.
    ListenPort = 51820
    # This prevents IPv4 & IPv6 DNS leaks when browsing the web on the
    # VPN. I chose Cloudflare's public DNS servers, but feel free to use
    # whatever provider you prefer. This could alternatively point to a
    # locally hosted DNS-based ad blocker, such as Pi-Hole or AdGuard
    # Home.
    #
    # If you choose an external DNS provider, please be aware that not
    # all ISPs allow customers to use 3rd party DNS providers. If your
    # ISP does not support this, delete this declaration from your
    # config or point to a locally hosted alternative, otherwise
    # external network requests won't resolve while on the VPN.
    #
    # Additionally, please be aware that this setting breaks Wireguard
    # on macOS 13 Ventura, so if this is the version your server is
    # running you must remove or comment out this line. This
    # unfortunately means you'll need to rely on your clients to
    # properly set the desired DNS server(s) in their own configs until
    # and unless this macOS bug is resolved.
    DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001
    PostUp = /usr/local/etc/wireguard/postup.sh
    PostDown = /usr/local/etc/wireguard/postdown.sh

    [Peer]
    # Substitute with *this peer*'s public key you generated earlier.
    PublicKey = XXXXXXX
    # Choose a unique IP within the Wireguard subnets you defined
    # earlier that this particular peer will use when connected to the
    # VPN
    AllowedIPs = 10.0.10.2/32, fd77:77:77:77::2/128

    # Follow the same steps as the [Peer] block template above for each
    # additional peer you wish to use with the VPN.
    ```
7. [Install Wireguard on each of your peers](https://www.wireguard.com/install/) and create their configuration files using the following template as your guide:
    ```ini
    [Interface]
    # This MUST match the "AllowedIPs" IP you assigned to this particular
    # peer in the server's config.
    Address = 10.0.10.2/32, fd77:77:77:77::2/128
    # Substitute with *this peer's* private key you generated earlier
    PrivateKey = XXXXXXX
    # This prevents IPv4 & IPv6 DNS leaks when browsing the web on the
    # VPN. I chose Cloudflare's public DNS servers, but feel free to use
    # whatever provider you prefer. This could alternatively point to a
    # locally hosted DNS-based ad blocker, such as Pi-Hole or AdGuard
    # Home
    #
    # If you choose an external DNS provider, please be aware that not
    # all ISPs allow customers to use 3rd party DNS providers. If your
    # ISP does not support this, delete this declaration from your
    # config or point to a locally hosted alternative, otherwise
    # external network requests won't resolve while on the VPN.
    DNS = 1.1.1.1, 1.0.0.1, 2606:4700:4700::1111, 2606:4700:4700::1001

    [Peer]
    # Substitute with your *server's* public key you generated earlier
    PublicKey = XXXXXXX
    # Your Wireguard server's public IP. If you chose a different port
    # earlier when setting up port forwarding on your router, update the
    # port here to match.
    Endpoint = XXX.XXX.XXX.XXX:51820
    # Informs Wireguard to forward ALL traffic through the VPN. Note that
    # one reader reported ::/0 was interferring with HomeKit video feeds,
    # so if you run into issues you may need to adjust to 2000::/3.
    AllowedIPs = 0.0.0.0/0, ::/0
    PersistentKeepalive = 25
    ```
8. Test your Wireguard setup by starting the service on your macOS server with `wg-quick up /usr/local/etc/wireguard/coordinates.conf` (remembering to change the path to where you persisted your server's configuration file, if necessary). Once you've confirmed the server started successfully, take a peer and enable the Wireguard VPN. With both the server and peer's Wireguard services enabled, run through the following tests to ensure everything's configured correctly:
    * Confirm SSH access to your macOS server's local IP address. On an iOS device, this can be done with an app like [Prompt 3](https://apps.apple.com/us/app/prompt-3/id1594420480). This will validate that your peer and server were able to establish a successful connection with one another.
    * Confirm SSH access to other computers on your home LAN. This will validate that your server's Wireguard subnets are set up correctly and that Wireguard is properly assigning your peer its predefined, local IP addresses.
    * Confirm IPv4 access to the Internet by loading a web page or two. This will validate that your IPv4 packet filter firewall rule is successfully routing traffic requests from the peer.
    * Finally, confirm IPv6 access to the Internet by loading an IPv6-only web page such as [ipv6.google.com](https://ipv6.google.com/). This will validate that your IPv6 packet filter firewall rule is successfully routing traffic requests from the peer.
9. Once all the checks above come back clean, all that's left is setting up Wireguard as a launch daemon so it automatically starts on system boot. We'll do so by writing a small [`launchd`](https://en.wikipedia.org/wiki/Launchd) [`plist`](https://en.wikipedia.org/wiki/Property_list) which will inform macOS *how* to start the service on system boot.
    1. Create a file at `/Library/LaunchDaemons/com.wireguard.server.plist` with the following contents, remembering to substitute the path and filenames as necessary:
        ```xml
        <?xml version="1.0" encoding="UTF-8"?>
        <!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
        <plist version="1.0">
            <dict>
                <key>Label</key>
                <string>com.wireguard.server</string>
                <key>ProgramArguments</key>
                <array>
                    <!-- If you're using a vintage Intel-based Mac,
                         this path should be /usr/local/bin/wg-quick -->
                    <string>/opt/homebrew/bin/wg-quick</string>
                    <string>up</string>
                    <!-- Remember to update this path if you chose a
                         different location or filename for the config -->
                    <string>/usr/local/etc/wireguard/coordinates.conf</string>
                </array>
                <key>KeepAlive</key>
                <true/>
                <key>RunAtLoad</key>
                <true/>
                <key>StandardErrorPath</key>
                <string>/usr/local/var/log/wireguard.err</string>
                <key>EnvironmentVariables</key>
                <dict>
                    <key>PATH</key>
                    <!-- If you're using a vintage Intel-based Mac,
                         this argument should be /usr/local/sbin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin -->
                    <string>/opt/homebrew/sbin:/opt/homebrew/bin:/usr/bin:/bin:/usr/sbin:/sbin</string>
                </dict>
            </dict>
        </plist>
        ```
    2. Change the assigned user & group for your daemon config to `root:wheel` with the following command. This is required for the Wireguard daemon to be launched on system boot.
        ```console
        $ sudo chown root:wheel /Library/LaunchDaemons/com.wireguard.server.plist
        ```
    3. Inform launchd of the new `plist` you just created with the following commands:
        ```console
        $ sudo launchctl enable system/com.wireguard.server
        $ sudo launchctl bootstrap system /Library/LaunchDaemons/com.wireguard.server.plist
        ```
10. Finally, restart your macOS server. If your launch daemon was configured and loaded correctly, Wireguard should already be running.

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
* [**Glenn F. Schreiber**](https://theweatherguy.net/blog/blog-faq/) (a.k.a "theweatherguy") for identifying and notifying me that starting with macOS 13 Ventura the DNS directive prevents the VPN from functioning when set in the *server*'s Wireguard config. Additionally, he's caught & reported a miss in the Homebrew Cellar which causes issues with fresh `wireguard-tools` installs on Intel Macs running Sequoia, which has been noted in the relevant step of the guide above.
* [**Cory**](https://mastodon.social/@CyberCory) for [identifying a shortcoming in the daemon config](https://mastodon.social/@CyberCory/110668229010278552) that required user login for the Wireguard server to start. Because of his report, the guide now ensures the daemon's set up to start immediately on system boot, independent of user logins.

*[DNS]: Domain Name System
*[ISP]: Internet Service Provider
*[LAN]: Local Area Network
*[VPN]: Virtual Private Network

-------------

[^caveat]: Please be aware that the approach detailed in this guide will obfuscate client IP traffic. This means all connected client requests will appear as if they're requests from the Wireguard server IP itself, not the assigned client IPs. As a result, this solution may not fit your particular needs.
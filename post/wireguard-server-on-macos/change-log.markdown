---
layout: post
hidden: true
title: "Wireguard Server on macOS - Change Log"
article-title: "Wireguard Server on macOS"
date: 2019-08-30 20:15:26
update: 2023-07-16 11:34:04-0400
excerpt: "With this guide, you too can enjoy Wireguard VPN's performance and security on macOS."
image: "wireguard-server-on-macos/share-image.jpg"
categories:
  - Technology
  - macOS
  - Services
  - Programming
  - Unix
  - Guides
  - Best Of
start-page: "/post/wireguard-server-on-macos"
hide-footer: true
---

## Change Log

### July 16<sup>th</sup>, 2023

Updated the guide to start the Wirguard daemon on system boot instead of user login, [as suggested](https://mastodon.social/@CyberCory/110668229010278552) by [@CyberCory@mastodon.social](https://mastodon.social/@CyberCory).

### June 19<sup>th</sup>, 2023

Added warning that starting with macOS Ventura the DNS directive prevents the VPN from functioning when set in the server's config and should be disabled for users running this version or newer until fixed, as reported by [Glenn F. Schreiber](https://theweatherguy.net/blog/blog-faq/) (a.k.a "theweatherguy").

### January 17<sup>th</sup>, 2023

Added caveat that the `AllowedIPs` value may require adjustment to not interfere with HomeKit video feeds, along with a suggested replacement should that occur, as noticed & suggested by [Donavon Buchanan](https://github.com/dbuchanandev).

### January 16<sup>th</sup>, 2023

Moved the "Update" admonition to the very top of the article (now even about the eye-catch banner image).

### January 15<sup>th</sup>, 2023

Re-added `PostDown` script accidentally deleted from previous change.

### January 14<sup>th</sup>, 2023

Updated the guide to support IPv6 connections, thanks entirely to a thorough email and sensible [reference repo](https://github.com/dbuchanandev/WireGuard-macOS-IPv6) shared by [Donavon Buchanan](https://github.com/dbuchanandev).

### May 28<sup>th</sup>, 2022

Updated the `PostDown` script to now properly remove the [pfSense](https://www.pfsense.org) rule set in the `PostUp` script instead of just removing the `enable` reference. This issue was detected thanks to a report by [Alessio Nossa](https://github.com/alessionossa), which remains [publicly available on GitHub](https://github.com/barrowclift/barrowclift.github.io/issues/1#issuecomment-1133563862)

### May 1<sup>st</sup>, 2022

Confirmed support on [macOS Monterey](https://www.apple.com/newsroom/2021/10/macos-monterey-is-now-available/)

### June 6<sup>th</sup>, 2021

Converted all remaining ASCII single and double quotes to proper, "curly" equivalents.

### May 3<sup>rd</sup>, 2021

* Added clarification that the guide as written will obfuscate client IP traffic to appear as if it's coming from the VPN server's IP, as suggested by Luke Sandoval.
* Added comment in the daemon plist file to raise awareness that brew's default executable directory on [Apple Silicon](https://en.wikipedia.org/wiki/Apple_silicon) Macs is `/opt/homebrew/bin` instead of `/usr/local/bin`, as suggested by Corey Watson.
* Some grammatical and spelling corrections
* Updated notice to ask the community for help on IPv6 support.

### January 14<sup>st</sup>, 2021

* Removed the unhelpful `LaunchOnlyOnce` flag from the plist as suggested by [Olivier Mathieu](https://twitter.com/oma_sct), since with it set the service would not be restarted if the daemon ever exited unexpectedly.
* Finally added the recognition / "Many Thanks To..." section to give proper credit to the guide's past and future contributors.
* Converted some ASCII single and double quotes to proper, "curly" equivalents.

### December 31<sup>st</sup>, 2020

Confirmed support for [macOS Big Sur](https://www.apple.com/newsroom/2020/11/macos-big-sur-is-here/).

### November 29<sup>th</sup>, 2020

Fixed misspelled daemon plist label (I had incorrectly typed `org.wireguard.server` instead of `com.wireguard.server`).

### May 12<sup>th</sup>, 2020

Added notice that guide (at the time) only supported IPv4 connections.

### May 11<sup>th</sup>, 2020

Clarified that the command to generate the private/public key pairs will dump them into the current working directory, [as suggested](https://twitter.com/charlie_thebird/status/1255894000533413889) by [@charlie_thebird](https://twitter.com/charlie_thebird).

### March 15<sup>th</sup>, 2020

A complete rewrite of the guide to address countless bugs and bad practices (too many to individually list here). Informed entirely by [lifepillar](https://lifepillar.me)'s brilliant and constructive feedback (his entire writeup remains [publicly available on GitHub](https://github.com/barrowclift/barrowclift.github.io/issues/1)).

The guide changed so much that [I preserved the original (bad) guide](/obsolete/wireguard-server-on-macos) in a separate page to remain an historical example of what *not* to do.

### November 16<sup>th</sup>, 2019

* No longer incorrectly suggest making the pfSense changes to `/etc/pf.conf`, since that's a protected system file that gets overridden during operating system upgrades. Switched to instead suggest making changes in a separate pfSense config file so it doesn't get blown out during upgrades.
* Confirmed compatibility with [macOS Catalina](https://www.apple.com/newsroom/2019/10/macos-catalina-is-available-today/).

-----

For an even more granular change log, [click here](https://github.com/barrowclift/barrowclift.github.io/commits/master/_posts/2019-08-30-wireguard-server-on-macos.markdown) to browse the file's history on GitHub.

*[IPv4]: Internet Protocol version 4
*[IPv6]: Internet Protocol version 6
*[ASCII]: American Standard Code for Information Interchange
---
layout: post
title: "Fourth Annual iOS Music Player Showcase"
date: 2022-01-07 11:11:03-0500
update: 2022-01-14 13:24:30-0500
excerpt: "Dive into the thriving, diverse landscape of 2021’s finest iOS music players."
light-hero-banner: "fourth-annual-ios-music-player-showcase/light-banner"
dark-hero-banner: "fourth-annual-ios-music-player-showcase/dark-banner"
image: "fourth-annual-ios-music-player-showcase/share-image.jpg"
categories:
  - Technology
  - iOS
  - Design
  - Music
  - Best Of
timelocked: true
light-background-color: "#D4D3C8"
light-foreground-color: "#394122"
dark-background-color: "#394122"
dark-foreground-color: "#D4D3C8"
next-page: "/post/fourth-annual-ios-music-player-showcase/2"
---

<style>
    article ul li,
    article ol li {
        margin-bottom: 0;
    }
    article li ul,
    article li ol {
        margin-top: 0;
    }
</style>

<div class="admonition gray">
<p>This is a slightly updated version of the original article which addresses minor factual errors and spelling mistakes. The full change log is available to view <a href="/post/fourth-annual-ios-music-player-showcase/change-log">here</a>. Many thanks to all involved!</p>
</div>

There's new and exciting developments every year in the realm of iOS third-party music players, and 2021 was no exception. While [2019](/post/second-annual-ios-music-player-competition) enjoyed an explosion of new players like [Power Player] and [Albums] that through time came to lead the space, [2020](/post/third-annual-ios-music-player-showcase) in contrast received only a modest handful of new players and is instead remembered for the impressive growth the established player base received that year. This past year, 2021, managed to do both with a dizzying array of five new players *and* impressive growth across nearly all existing players.

To start, there were five new players welcomed into the ecosystem this year:

1. [**Mixtapes:**](/post/fourth-annual-ios-music-player-showcase/3) A general-purpose player with an empahsis on "smart" playlists
2. [**MPX EQ:**](/post/fourth-annual-ios-music-player-showcase/4) The next evolution of [Music Player X]
3. [**Musens:**](/post/fourth-annual-ios-music-player-showcase/5) A general-purpose player with a heavy empahsis on [Apple Music](https://www.apple.com/apple-music/) and is similar in many ways to [Music.app]
4. [**Songpocket:**](/post/fourth-annual-ios-music-player-showcase/2#-Songpocket) A lightweight niche player focused on providing the ability to manually sort and manage your library
5. [**Vinyls:**](/post/fourth-annual-ios-music-player-showcase/2#-vinyls) A general-purpose player with a cute "vinyl record" visual gimmick in its full-player

These new players combined with the enhancements existing players received this year reveal a few new trends that together define what it means to be a great modern music player at the end of 2021. Those trends are:

* **Apple Music integration:** This year, Albums added rich [Apple Music](https://www.apple.com/apple-music/) support, [Mixtapes] added support in its first minor release, and [Musens] released with support on launch. This is a far cry from just a couple years ago when [Soor]'s "Full Apple Music Support" was considered novel enough to use as its primary marketing angle. With Apple Music's APIs continuing to improve and more listeners either independently subscribing to Apple Music or getting it "for free" as a part of [Apple One](https://www.apple.com/apple-one/), there's a growing expectation for rudimentary Apple Music support in today's players. This year's new releases are clear reflections of this new expectation, and I anticipate it will only continue to gain traction from here.
* **Visualizers:** What started as an offering found just in [Music.app] and a single third-party music player ([jetAudio]) is now increasingly common throughout the ecosystem. [Soor] released an animated gradient visualizer [in 2020](/post/third-annual-ios-music-player-showcase/18), Power Player just released its own bubbly visualizer this past year, and three of the five new releases this year ([MPX EQ], [Musens], and [Vinyls]) all featured visualizers at launch[^visualizer-at-launch]. The attention initially garnered by Music.app's ["live lyrics" visualizer](https://support.apple.com/en-us/HT204459) years ago broke the seal, and it appears an increasing number of listeners are beginning to expect or even demand some form of visualizer in their players.
* **"Home" landing pages:** Over the past couple years, the rare "Home" page that was previously only present in [Music.app], [Soor], and [Marvis Pro] has appeared now across an additional four players (two of which—[Musens] and [MPX EQ]—launched with it). An increasing number of developers in the industry throughout 2021 arrived at the consensus that a "Home" landing page for general-purpose players is necessary to house the commonly requested discovery collections like "Recently Added" and "Recently Played" that listeners now expect out of modern players. Like with Apple Music integration, I anticipate this trend will only continue to gain traction over time.

<!--break-->

## Goal

This showcase intends to both celebrate this thriving ecosystem and catalog its participants to serve as a helpful launchpad for music player exploration. Given the truly appalling state of [App Store](https://www.apple.com/app-store/) discovery, exploring the App Store for music players is exceptionally difficult and frustrating without a third-party catalog like this to refer to. For example, to this day I continue to [routinely encounter players that are new to me](/post/fourth-annual-ios-music-player-showcase/18) despite being on the store for years.

## Art Assets

Since all these players already provide generic images in their App Store listings, I strove to instead provide a "lived-in" glance into how the players looks and feel in practice. That means the screen recordings and images displayed throughout this article may in fact look different than what is formally listed in the App Store. This is intentional to both show how I prefer using the app and to provide a helpful window into what's possible with the app in question. If you prefer stock images, every single third-party app featured in this article features a <kbd>Download on the App Store</kbd> button at the beginning of the section where you can find those assets.

Additionally, many players support light and dark themes, so if you wish to toggle between seeing the light and dark mode assets, you may click the <kbd><span class="small-caps">A</span>A</kbd> in the upper-right corner of the site to toggle the site's theme. If the app's assets don't appear to change, that unfortunately means the player does not provide support for selected appareance.

## Terminology

Throughout the article, I'll use the following words and phrases as short-hand for a describing and categorizing aspects of the app in question:

General-purpose player

:   This means the app is broadly useful for general browsing and listening. This means it provides the "expected" ability to browse by albums, artist, song, genre, etc. This is required to distinguish from other players that by design don't offer the ability to browse by one or more of these methods.

Niche player

:   This means the app is not broadly useful for general browsing by design, often due to not providing the "expected" ability to browse by albums, artist, song, genre, etc. The absence of this ability in no way detracts from the player's worth, I categorize these situationally useful players purely to help set them apart from the traditional general-purpose players to properly set expectations.

Full-player

:   Taking after the well understood "mini-player" term, this refers to the enlarged (typically full-screen) player view that typically contains playback controls, track information, and album art. In normal conversation this would likely just be referred to as the "player" (as opposed to the "mini-player"), but in order to avoid confusion about whether or not "player" is referring to the app or the player *view* in the app, I'll exclusively refer to that UI component as the full-player.

Discovery collection

:   Any kind of supplementary browsing collection that proactively exposes content from the listener's library in an attempt to foster exploration and discovery. While traditional browsers like "Albums", "Artists", "Songs", etc. expect you to already know what you're looking for when you dive in, discovery collections take the initiative and expose content from your library for you. A common discovery example found in many players is "Recently Added".

Maintenance mode

:   Symbolizes that the app listing in question is no longer in active development, and most likely never will be again. Apps in maintenance mode will at most receive a patch update or two every couple of years to keep up with new phone hardware and iOS releases, but will not receive any new features or functional changes. Apps in maintenance mode are eventually pulled from the store, symbolically replaced by a spiritual successor, or in the worst case silently pulled from the App Store with no replacement when the maintenance either becomes too great or the developer simply decides it's time to move on. There's nothing particularly wrong with apps in maintenance mode (by definition they are still maintained enough to continue working correctly), but due to the possibility of getting pulled without announcement from the App Store (sometimes without replacement), caution is advised.

Music.app

:   Apple loves naming their products generic names that both make it hard to search for and hard to discuss in articles like this. In order to avoid constantly saying "Apple's Music App" or "iOS's first-party music app", for the sake of brevity and a nod towards [macOS's `.app` bundle paradigm](https://en.wikipedia.org/wiki/Bundle_(macOS)), I'll exclusively refer to Apple's own music app as "Music.app".

Independent library

:   Refers to a library that is neither managed nor synced with Apple's macOS Music app.

Opinionated

:   Denotes an aspect of visual or functional design that deviates in some way from convention and offers the listener little to no settings to optionally pull back from that deviation.

## Methodology

As with previous years, in order to codify what I expect at a bare minimum from modern music players and in an effort to keep the list of players in the showcase manageable, only players that meet each of the following requirements will be included in the showcase. With that said, any players that I feel are noteworthy for whatever reason will still be briefly acknowledged beforehand as an honorable mention. Despite some minor adjustments, the requirements are broadly the same as [2020's showcase](/post/third-annual-ios-music-player-showcase/):

* <mark class="tag blue">UPDATED</mark> Active maintenance ("active" meaning the delivery of at least a single meaningful minor or major update in the past year. Does not count patch releases or minor releases, such as just keeping up with new hardware.)
* <mark class="tag blue">UPDATED</mark> Local-only option (meaning only players that treat cloud capabilities as a strictly additive feature and continue to work in "local-only" mode are fair game.)
* Support for newer iPhone displays (at least the [iPhone X](https://www.apple.com/newsroom/2017/09/the-future-is-here-iphone-x/))
* Must be a native iOS app (that means no [web apps](https://en.wikipedia.org/wiki/Web_application), lazy [Android](https://www.android.com) ports, or apps with badly designed custom components. Apps that are performant and well designed enough to fool me are fair game)
* Large album art in the full-player view
* Any custom equalization provided by the player must also have the ability to be disabled

The showcase itself will strive to keep as impartial and objective a voice as possible, leaving my own personal assessment for the very end of each player's section. In that section, I'll assess each player based on the following features I typically desire in music players. While none of these particular features are requirements like above, their presence or absence weigh into my personal thoughts of the player as a whole where other aspects of the player typically do not. Again, this list is largely the same as [2020's](/post/third-annual-ios-music-player-showcase/), save for a single new addition this year:

* <mark class="tag yellow">NEW</mark> Apple Music integration
* Lyrics support
* Light & dark themes that reflect iOS's current appearance
* iPad support
* Discovery features to stimulate music exploration, such as "Recently Added"
* A beautiful or visually engaging full-player
* Album-focused features, which include but are not limited to:
    * The "one, true album sorting method", which is sort alphabetically by artist, then sort each artist's albums chronologically by release year.
    * A grid layout option for more natural visual browsing

In order to better handle the increasing number of iOS music players, this article is broken down into separate pages to improve the reading experience. This way, you can easily jump around to particular pages you're interested in. At the bottom of each page is a "Table of Contents" and massive navigation button to the next page of the article so you can always keep track of where you. While this is the intended way to read, there are no doubt readers that prefer single-page articles, and for those readers you may instead read the entirety of the article on a single page [here](/post/fourth-annual-ios-music-player-showcase/complete). For readers on slow internet connections, it's recommended you instead consider reading the speed-optimized version of this article [here](https://nitro.barrowclift.me/article/fourth-annual-ios-music-player-showcase) at this site's performance-optimized mirror, [nitro.barrowclift.me](https://nitro.barrowclift.me) (note that only a selection of the art assets are available in this mirror to improve page performance).

-----

With the stage set, it's now finally time to dive into 2021's players. Let's get started...

<ul id="blog-footer-buttons" class="button-group" style="text-align:left;padding-bottom:0;">
    <li style="margin-left:0;width:auto;"><a href="/post/fourth-annual-ios-music-player-showcase/2"><p class="button">Next Section: “Honorable Mentions”</p></a></li>
</ul>

<details open>
  <summary>Table of Contents</summary>

  <div class="toc" style="margin-bottom: 1.3rem;">
    <ul>
      <li><strong>Introduction</strong></li>
      <li><a href="/post/fourth-annual-ios-music-player-showcase/2">Honorable Mentions</a></li>
      <li>2021’s Players
        <ul>
          <li>New This Year
            <ul>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/3">Mixtapes</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/4">MPX EQ</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/5">Musens</a></li>
            </ul>
          </li>
          <li>Established
            <ul>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/6">Albums</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/7">Cs Music</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/8">Doppi</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/9">Doppler</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/10">jetAudio</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/11">Longplay</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/12">Marvis Pro</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/13">Music Player X</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/14">Music.app</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/15">Picky</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/16">Plum</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/17">Power Player</a></li>
              <li><a href="/post/fourth-annual-ios-music-player-showcase/18">Vinyl Fetish</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="/post/fourth-annual-ios-music-player-showcase/19">Standouts</a></li>
      <li><a href="/post/fourth-annual-ios-music-player-showcase/20">Conclusion</a></li>
    </ul>
  </div>
</details>

-----

[^visualizer-at-launch]: I'd argue Vinyls' full-player spinning record (which includes a tonearm that tracks the song's progress) is a visualizer despite nothing in the animation reacting to the song's waveform.

[Albums]: https://apps.apple.com/us/app/albums-album-focused-player/id1469948986
[Power Player]: https://powerplayer.evenwerk.com
[Mixtapes]: https://mixtapesapp.com
[Musens]: https://musensapp.com
[Soor]: https://soor.app
[jetAudio]: https://apps.apple.com/us/app/jetaudio-music-player/id894888135
[Vinyls]: https://www.pnguin.app/vinyls
[MPX EQ]: https://www.mpxeq.com
[Marvis Pro]: https://appaddy.wixsite.com/marvis
[Vinyl Fetish]: https://apps.apple.com/us/app/vinyl-fetish-music-player/id1490719457
[Music.app]: /post/fourth-annual-ios-music-player-showcase/14
[Music Player X]: https://www.musicplayerx.com

*[UI]: User Interface
*[API]: Application Programing Interface
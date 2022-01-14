---
layout: post
title: "Fourth Annual iOS Music Player Showcase - Complete"
date: 2022-01-07 11:11:03-0500
update: 2022-01-14 13:24:30-0500
excerpt: "Dive into the thriving, diverse landscape of 2021’s finest iOS music players."
image: "fourth-annual-ios-music-player-showcase/share-image.jpg"
categories:
  - Technology
  - iOS
  - Design
  - Music
  - Best Of
timelocked: true
has_afterward: true
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

### Goal

This showcase intends to both celebrate this thriving ecosystem and catalog its participants to serve as a helpful launchpad for music player exploration. Given the truly appalling state of [App Store](https://www.apple.com/app-store/) discovery, exploring the App Store for music players is exceptionally difficult and frustrating without a third-party catalog like this to refer to. For example, to this day I continue to [routinely encounter players that are new to me](/post/fourth-annual-ios-music-player-showcase/18) despite being on the store for years.

### Art Assets

Since all these players already provide generic images in their App Store listings, I strove to instead provide a "lived-in" glance into how the players looks and feel in practice. That means the screen recordings and images displayed throughout this article may in fact look different than what is formally listed in the App Store. This is intentional to both show how I prefer using the app and to provide a helpful window into what's possible with the app in question. If you prefer stock images, every single third-party app featured in this article features a <kbd>Download on the App Store</kbd> button at the beginning of the section where you can find those assets.

Additionally, many players support light and dark themes, so if you wish to toggle between seeing the light and dark mode assets, you may click the <kbd><span class="small-caps">A</span>A</kbd> in the upper-right corner of the site to toggle the site's theme. If the app's assets don't appear to change, that unfortunately means the player does not provide support for selected appareance.

### Terminology

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

### Methodology

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

This is the complete version of the article presented as a single page. If you prefer separate pages, you can read the paginated version [here](/post/fourth-annual-ios-music-player-showcase/). For readers on slow internet connections, it's recommended you instead consider reading the speed-optimized version of this article [here](https://nitro.barrowclift.me/article/fourth-annual-ios-music-player-showcase) at this site's performance-optimized mirror, [nitro.barrowclift.me](https://nitro.barrowclift.me) (note that only a selection of the art assets are available in this mirror to improve page performance).

-----

With the stage set, it's now finally time to dive into 2021's players. Let's get started...

<details open>
  <summary>Table of Contents</summary>

  <div class="toc" style="margin-bottom: 1.3rem;">
    <ul>
      <li><strong>Introduction</strong></li>
      <li><a href="#honorable-mentions">Honorable Mentions</a></li>
      <li>2021’s Players
        <ul>
          <li>New This Year
            <ul>
              <li><a href="#--mixtapes">Mixtapes</a></li>
              <li><a href="#--mpx-eq">MPX EQ</a></li>
              <li><a href="#--musens">Musens</a></li>
            </ul>
          </li>
          <li>Established
            <ul>
              <li><a href="#--albums">Albums</a></li>
              <li><a href="#--cs music">Cs Music</a></li>
              <li><a href="#--doppi">Doppi</a></li>
              <li><a href="#--doppler">Doppler</a></li>
              <li><a href="#--jetaudio">jetAudio</a></li>
              <li><a href="#--longplay">Longplay</a></li>
              <li><a href="#--marvis-pro">Marvis Pro</a></li>
              <li><a href="#--music-player-x">Music Player X</a></li>
              <li><a href="#--music.app">Music.app</a></li>
              <li><a href="#--picky">Picky</a></li>
              <li><a href="#--plum">Plum</a></li>
              <li><a href="#--power-player">Power Player</a></li>
              <li><a href="#--vinyl-fetish">Vinyl Fetish</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a href="#standouts">Standouts</a></li>
      <li><a href="#conclusion">Conclusion</a></li>
    </ul>
  </div>
</details>

## Honorable Mentions

### ![Dot Music's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/icon.png "Dot Music's iOS app icon"){: .inline-app-icon } Dot Music

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-usage-poster.jpg" alt="Video demonstrating Dot Music's usage in light mode" title="Demonstrating Dot Music's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-album-view.webp">
  <img type="image/jpeg" title="Dot Music's light theme album view" alt="Image of Dot Music's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-full-player.webp">
  <img type="image/jpeg" title="Dot Music's light theme full-player" alt="Image of Dot Music's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-usage-poster.jpg" alt="Video demonstrating Dot Music's usage in dark mode" title="Demonstrating Dot Music's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-album-view.webp">
  <img type="image/jpeg" title="Dot Music's dark theme album view" alt="Image of Dot Music's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-full-player.webp">
  <img type="image/jpeg" title="Dot Music's dark theme full-player" alt="Image of Dot Music's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dot-music/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/dot-music-player/id1510755057">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Dot Music received no releases of any kind this year, and is thus omitted from the showcase proper. Dot Music's a simple general-purpose player that takes strongly after [2019-era Cs Music](/post/second-annual-ios-music-player-competition#--cs) but offers nothing uniquely compelling to show for it. If you long for a visually bland player that's been ignored for the past year that includes only the bare minimum of cookie-cutter features, then Dot Music may in fact be just what you're looking for.

### ![Ecoute's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/icon.png "Ecoute's iOS app icon"){: .inline-app-icon } Ecoute

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-usage-poster.jpg" alt="Video demonstrating Ecoute's usage in light mode" title="Demonstrating Ecoute's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-album-view.webp">
  <img type="image/jpeg" title="Ecoute's light theme album view" alt="Image of Ecoute's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/full-player.webp">
  <img type="image/jpeg" title="Ecoute's full-player" alt="Image of Ecoute's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-usage-poster.jpg" alt="Video demonstrating Ecoute's usage in dark mode" title="Demonstrating Ecoute's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-album-view.webp">
  <img type="image/jpeg" title="Ecoute's dark theme album view" alt="Image of Ecoute's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/full-player.webp">
  <img type="image/jpeg" title="Ecoute's full-player" alt="Image of Ecoute's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/ecoute/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/ecoute/id536882653">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

For many years, Ecoute's lack of updates (save for an occasional bug patch or two) and radio silence from [Julien Sagot](https://twitter.com/Barbapapapps) (Ecoute's developer) on Ecoute's future, forced listeners to accept that the [once beloved player](https://www.macstories.net/reviews/ecoute-is-the-best-music-player-for-ios-period/) was indeed officially dead and bleeding out the remainder of its life in light maintenance mode.

In 2020, however, [Julien tweeted a single teaser](https://twitter.com/Barbapapapps/status/1343732043683934214) of what was clearly a new player actively in development, presumably the long anticipated Ecoute 3. This year we got *far* more than just that tongue-in-cheek teaser; there's been dozens of tweets from Julien over the months offering sneak peaks at various areas of the UI for this still formally unannounced player. However, these updates throughout 2021 at the very least disuade our previous fears; Julien *is* working on a new player, and it's close to completion.

While the anticipation for Julien's new player is growing, the Ecoute that remains publicly available today hasn't seen an update in over two years, leaving Ecoute to again be omitted from the showcase. While the app is still functional, what once made it visually and functionally stand out from among its peers is now commonplace, leaving it difficult to recommend the aging current Ecoute release. However, if Julien's rate of tweet teasers are any indication, 2022 is looking likely to be the year we'll once again see Ecoute (or perhaps a spiritual successor) return to restore its former glory.

### ![Jams On Toast's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/icon.png "Jams On Toast's iOS app icon"){: .inline-app-icon } Jams On Toast

<div class="edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/usage-poster.jpg" alt="Video demonstrating Ecoute's usage" title="Demonstrating Ecoute's usage">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/album-view.webp">
  <img type="image/jpeg" title="Ecoute's album view" alt="Image of Ecoute's album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jams-on-toast/album-view.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/jams-on-toast-music-player/id1303194454">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Jams On Toast received its *first ever* maintenance releases this year in the form of two bug patches, the first movement of any kind in the nearly four years since its original release back in 2017. There was unfortunately no other changes, leaving Jams On Toast to once again miss the cut on the showcase.

Don't let its lack of maintenance deter you; Jams On Toast shockingly works *exactly* as well as it did all the way back in 2017, and continues to this day to offer a novel ["record crate"](https://duckduckgo.com/?q=record+crate&iax=images&ia=images#) library browsing experience. While [Vinyl Fetish] this year released its own form of "record crate" browsing as an optional layout setting, Jams On Toast remains the only way you can browse your entire library as a scrollable list of "crates". If that gimmick interests you in the lightest, Jams On Toast is still well worth your time to check out.

### ![New Monaural's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/icon.png "New Monaural's iOS app icon"){: .inline-app-icon } New Monaural

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-usage-poster.jpg" alt="Video demonstrating New Monaural's usage in light mode" title="Demonstrating New Monaural's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-album-view.webp">
  <img type="image/jpeg" title="New Monaural's light theme album view" alt="Image of New Monaural's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/full-player.webp">
  <img type="image/jpeg" title="New Monaural's full-player" alt="Image of New Monaural's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-usage-poster.jpg" alt="Video demonstrating New Monaural's usage in dark mode" title="Demonstrating New Monaural's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-album-view.webp">
  <img type="image/jpeg" title="New Monaural's dark theme album view" alt="Image of New Monaural's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/full-player.webp">
  <img type="image/jpeg" title="New Monaural's full-player" alt="Image of New Monaural's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/new-monaural/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/new-monaural/id1439882679">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Despite first impressions, New Monaural is *not* a general-purpose player, but rather a niche player tailed towards providing rich playback accessibility options. As the name suggests, its crowning jewel is its special "monaural playback" capability, which aims to make playback of stereo music files on mono speakers and headphones sound more natural than they otherwise would with iOS's build-in playback APIs. While the audience who would want such capabilities is undoubtedly slim, it's sure to be a treasured by listeners who are hard of hearing in one ear or for one reason or another only have a single functional speaker. While New Monaural is a fantastic option for those listeners, it remains difficult to broadly recommend as its custom playback engine yields non-flat playback of tracks even if the classic "Stereo" playback option is selected. That paired with a lack of updates through 2021 excluded New Monaural from more thorough attention in the showcase.

### ![Sathorn's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/icon.png "Sathorn's iOS app icon"){: .inline-app-icon } Sathorn

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-usage-poster.jpg" alt="Video demonstrating Sathorn's usage in light mode" title="Demonstrating Sathorn's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-album-view.webp">
  <img type="image/jpeg" title="Sathorn's light theme album view" alt="Image of Sathorn's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-full-player.webp">
  <img type="image/jpeg" title="Sathorn's light theme full-player" alt="Image of Sathorn's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-usage-poster.jpg" alt="Video demonstrating Sathorn's usage in dark mode" title="Demonstrating Sathorn's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-album-view.webp">
  <img type="image/jpeg" title="Sathorn's dark theme album view" alt="Image of Sathorn's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-full-player.webp">
  <img type="image/jpeg" title="Sathorn's dark theme full-player" alt="Image of Sathorn's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/sathorn/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/sathorn/id1447295899">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Sathorn received no attention of any kind this year, remaining the same poorly designed general-purpose player it was in 2021 and is thus not included in the showcase. If [Dot Music]'s issue was a lack of anything novel, Sathorn's issue is its numerous attempts and failures at doing so. It features a full-player with four different theme options, but each of them manage to look [unappealing](https://dropbox.barrowclift.me/assets/third-annual-ios-music-player-showcase/sathorn/player-composite.webp). It offers a button to change the sort order in the menu bar, but comically features a filter/sieve icon instead of the expected up/down sorting arrows icon. It has an accent color, but inconsistently applies it (in the mini-player, bewilderingly only the "Play" button uses the accent color, not the "Skip" button). While each of these issues taken in isolation is not particularly concerning, the sheer number of issues like these found throughout Sathorn make it difficult to recommend for anyone other than those looking for a case study in poor interface design.

### ![SongOwl's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/icon.png "SongOwl's iOS app icon"){: .inline-app-icon } SongOwl

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-usage-poster.jpg" alt="Video demonstrating SongOwl's usage in light mode" title="Demonstrating SongOwl's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-album-view.webp">
  <img type="image/jpeg" title="SongOwl's light theme album view" alt="Image of SongOwl's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-full-player.webp">
  <img type="image/jpeg" title="SongOwl's light theme full-player" alt="Image of SongOwl's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-usage-poster.jpg" alt="Video demonstrating SongOwl's usage in dark mode" title="Demonstrating SongOwl's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-album-view.webp">
  <img type="image/jpeg" title="SongOwl's dark theme album view" alt="Image of SongOwl's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-full-player.webp">
  <img type="image/jpeg" title="SongOwl's dark theme full-player" alt="Image of SongOwl's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/songowl/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/songowl-music-player/id1492630850">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

SongOwl began life as a radical redesign for Cs Music 6. However, the redesign was *so* different that Cs Music's existing user base balked at the change and more or less pressured Mike Clay—SongOwl & Cs Music's developer—to [reverse course](https://twitter.com/CsMusicPlayer/status/1177628272617754624). And reverse course he did, deciding to release the original Cs Music 6 reesign as its own app entirely, SongOwl, and implement to a more traditional redesign for Cs Music 6, instead. The only question left hanging was whether or not either SongOwl or Cs Music would be considered the "darling" and receive the bulk of developer attention.

If [last year](/post/third-annual-ios-music-player-showcase/17) was the warning sign, this year cements it: SongOwl is without a doubt playing second fiddle to [Cs Music], receiving not even a single update this year. For listeners like myself that appreciated SongOwl's flexible and unique "Paths" feature, it's difficult to not be disappointed. "Paths" is in some ways a more approachable and user-friendly parallel to [Marvis Pro]'s "Sections", where listeners can define a grouping and sorting option for any number of different "Paths" they want. For example, I can create a "Recently Added Albums" path by simply grouping by "Album" and sorting by "Date Added". That functionality paired with exceptionally cute branding make SongOwl a catch, and while its future now remains uncertain, what remains available today is still undoubtably worth your time (assuming of course you're comfortable with its current lack of development).

### ![Songpocket's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/icon.png "Songpocket's iOS app icon"){: .inline-app-icon } Songpocket

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-usage-poster.jpg" alt="Video demonstrating Songpocket's usage in light mode" title="Demonstrating Songpocket's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-browse-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-browse-view.webp">
  <img type="image/jpeg" title="Songpocket's light theme browser" alt="Image of Songpocket's light theme browser" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-browse-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-album-view.webp">
  <img type="image/jpeg" title="Songpocket's light theme album view" alt="Image of Songpocket's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/light-album-view.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-usage-poster.jpg" alt="Video demonstrating Songpocket's usage in dark mode" title="Demonstrating Songpocket's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-browse-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-browse-view.webp">
  <img type="image/jpeg" title="Songpocket's dark theme browser" alt="Image of Songpocket's dark theme browser" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-browse-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-album-view.webp">
  <img type="image/jpeg" title="Songpocket's dark theme album view" alt="Image of Songpocket's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/Songpocket/dark-album-view.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/Songpocket/id1538037231">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

All iOS music players fall broadly into one of two camps: they're either a general-purpose player for browsing your library by albums, artist, etc. or a niche player that forgoes traditional browsing for a more specific need. Aside from [Stezza], every niche player I've found puts an emphasis on albums and heavily features album art as a natural consequence or that focus. Songpocket does not.

Songpocket is akin to the light playback utilities typically found on desktop operating systems, like [Tiny Player](https://www.catnapgames.com/tiny-player-for-mac/) on [macOS](https://www.apple.com/macos/monterey/). It shows just a single list (sans art) of the artists in your library, which can be manually sorted or grouped any way you want. Lovers of art need not worry, album art is indeed displayed upon drilling down into a particular artist, and it's also prominently displayed edge-to-edge on the album pages.

The singular browser alone doesn't draw parallels to desktop OS playback utilities, but rather that in combination with the startling lack of a full-player; its mini-player is the *only* means of in-app playback control. Since large album art in the full-player is a requirement to enter the showcase, Songpocket was omitted from this year's showcase.

If Songpocket's utilitarian design or unique ability to manually sort and group the contents of your library interest you in the slightest, it's absolutely worth a look since this is the only player I'm aware of that provides these capabilities. However, its slim offerings aside from that capability and the lack of a full-screen player (along with queue control, shuffle, etc.) easily qualify it as a niche player and make it difficult to broadly recommend.

### ![Soor's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/icon.png "Soor's iOS app icon"){: .inline-app-icon } Soor

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-usage-poster.jpg" alt="Video demonstrating Soor's usage in light mode" title="Demonstrating Soor's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-album-view.webp">
  <img type="image/jpeg" title="Soor's light theme album view" alt="Image of Soor's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/full-player.webp">
  <img type="image/jpeg" title="Soor's full-player" alt="Image of Soor's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-usage-poster.jpg" alt="Video demonstrating Soor's usage in dark mode" title="Demonstrating Soor's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-album-view.webp">
  <img type="image/jpeg" title="Soor's dark theme album view" alt="Image of Soor's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/full-player.webp">
  <img type="image/jpeg" title="Soor's full-player" alt="Image of Soor's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/soor/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/soor/id1439731526">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

The general-purpose player Soor received a handful of bug patches this year, but unfortunately no minor or major releases (although the developer—Tanmay Sonawane—hinted in patch release notes that "exciting things" are indeed in the works, including an iPad version). As a result, the Soor available today is more or less the same as [last year](/post/third-annual-ios-music-player-showcase/18)'s, including all the existing bugs like the ability to lock yourself out of the app it you tap "Connect with Apple Music" without "Sync Library" enabled.

If you have an Apple Music subscription and have "Sync Library" enabled, Soor is a treat worth checking out; its animations are buttery smooth, it features an album art visualizer (albeit a bit dull in comparison to [Vinyls], [Power Player], and [jetAudio]'s visualizers), and is deeply and richly integrated at every turn with Apple Music. However, unless you have *both* an Apple Music subscription and "Sync Library" enabled, Soor is simply too crippled functionally to recommend.

### ![Stezza's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/icon.png "Stezza's iOS app icon"){: .inline-app-icon } Stezza

<div class="edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/usage-poster.jpg" alt="Video demonstrating Stezza's usage" title="Demonstrating Stezza's usage">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/browse-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/browse-view.webp">
  <img type="image/jpeg" title="Stezza's browser" alt="Image of Stezza's browser" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/browse-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/album-view.webp">
  <img type="image/jpeg" title="Stezza's album view" alt="Image of Stezza's album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/stezza/album-view.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/stezza-music-player/id590317007">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Stezza's a curious player whose focus is solely on providing the best possible interface for sightless use, such as when driving. To facilitate this, the full-player serves as the springboard for the entire app (much like [Vinyls] and [Vinyl Fetish]) and features comically massive buttons for play/pause, previous, and skip functions that can be blindly tapped with ease. These massive controls bring additional accessibility benefits as well for listeners who find it hard to tap the smaller tap targets typically used in other players.

While Stezza does the job it set for itself well, it hasn't seen any noteworthy changes or improvements in years other than occasional patch releases to support newer iOS versions, and thus won't be featured in the showcase this year. However, if you find yourself using your phone in a car mount for playback control and are fed up with dangerously hunting for playback controls while driving (which you frankly shouldn't do, anyway), Stezza's ginormous buttons are still well worth checking out despite the lack of active development.

### ![TapTunes's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/icon.png "TapTunes's iOS app icon"){: .inline-app-icon } TapTunes

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-usage-poster.jpg" alt="Video demonstrating TapTunes's usage in light mode" title="Demonstrating TapTunes's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-album-view.webp">
  <img type="image/jpeg" title="TapTunes's light theme album view" alt="Image of TapTunes's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-full-player.webp">
  <img type="image/jpeg" title="TapTunes's light theme full-player" alt="Image of TapTunes's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-usage-poster.jpg" alt="Video demonstrating TapTunes's usage in dark mode" title="Demonstrating TapTunes's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-album-view.webp">
  <img type="image/jpeg" title="TapTunes's dark theme album view" alt="Image of TapTunes's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-full-player.webp">
  <img type="image/jpeg" title="TapTunes's dark theme full-player" alt="Image of TapTunes's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/taptunes/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/taptunes/id320145698">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

TapTunes is a [decade old](https://david-blundell.blogspot.com/2009/06/taptunes-and-music-trivia-submitted-to.html) niche player that focuses on providing unique visual ways to browse through your albums. Listeners familiar with [Longplay] may recognize a striking similarity in goals, but make no mistake: TapTunes is a vastly more feature-rich, robust, and engaging implementation of that vision, in no small part due to the sheer number of years behind it compared to the relatively young Longplay. Instead of just providing a single album grid with different sorting options like Longplay, TapTunes typically sorts randomly and provides a wild assortment of different display styles. There's "Scattered", which slowly animates all your albums spreading around the screen, as if you strewn your entire physical library onto the ground. Another noteworthy display style is "Stacked", which scrolls infinitely through a winding road of your library's albums at various shapes and sizes. Like with Longplay, this is all in an effort to facilitate library exploration and discovery, and works brilliantly to help inspire you to get out of and avoid musical ruts.

While TapTunes just received a major new 7.0 update at the very beginning of 2022 (featuring a refreshed app icon, widgets, and loads of other interface tweaks and improvements), it just barely missed the cut-off window to be considered a 2021 update. TapTunes' new update and any subsequent updates will instead be covered in further detail in the next annual showcase. To be clear, even if TapTunes didn't receive its major update at the very beginning of 2022, its novel browsing capabilities continue to be well worth a look for anyone wanting something richer than what its peers like [Longplay] can offer.

### ![Vinyls' iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/icon.png "Vinyls' iOS app icon"){: .inline-app-icon } Vinyls

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-usage-poster.jpg" alt="Video demonstrating Vinyls' usage in light mode" title="Demonstrating Vinyls' usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-browse-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-browse-view.webp">
  <img type="image/jpeg" title="Vinyls' light theme browser" alt="Image of Vinyls' light theme browser" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-browse-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-album-view.webp">
  <img type="image/jpeg" title="Vinyls' light theme album view" alt="Image of Vinyls' light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/light-album-view.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-usage-poster.jpg" alt="Video demonstrating Vinyls' usage in dark mode" title="Demonstrating Vinyls' usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-browse-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-browse-view.webp">
  <img type="image/jpeg" title="Vinyls' dark theme browser" alt="Image of Vinyls' dark theme browser" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-browse-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-album-view.webp">
  <img type="image/jpeg" title="Vinyls' dark theme album view" alt="Image of Vinyls' dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyls/dark-album-view.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/vinyls/id1556054655">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Vinyls is a delightful surprise this year that—as the name implies—focuses on providing a [skeuomorphic](https://en.wikipedia.org/wiki/Skeuomorph) vinyl record playback experience like [Vinyl Fetish]. Like Vinyl Fetish and [Stezza], the full-player itself serves as the launchpad for the entire app, and features a gorgeously rendered vinly record that spins and tonearm that follows along the groove as the track progresses. Despite the vinyl record visual candy on the full-player, Vinyls is surprisingly a general-purpose player; you can browse your library the usual way by songs, artists, etc. and unlike Vinyl Fetish can playback individual songs without issue. Functionally, the player is just like any other general-purpose player, but instead of displaying the album art in the full-player, Vinyls shows the faux vinyl record & tonearm. In actuality, this flexibility is to Vinyls' detriment, as this breaks the illusion and cheapens the vinyl record gimmick; for example, when playing an album, each song "completes" the faux vinyl record and visually resets the tonearm to the beginning for the next track. While this of course makes sense from a general-purpose player perspective, this flies in the face of the vinyl record player illusion. As a result, it's neither as good a vinyl record emulator as Vinyl Fetish due to not fully committing to the gimmick and not as good a general-purpose player as [Cs Music] and others that don't attempt halfheartedly integrating gimmicks like this that get in the way of general-purpose browsing and playback.

Unfortunately, the lack of ability to display large album art in the full-player instead of or in addition to the spinning record like Vinyl Fetish removes it from consideration. Nonetheless, if you find yourself desiring a cute full-player gimmick but are turned off by Vinyl Fetish's commitment to the illusion, Vinyls is certainly worth checking out.

### ![VOX's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/icon.png "VOX's iOS app icon"){: .inline-app-icon } VOX

<div class="edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/usage-poster.jpg" alt="Video demonstrating VOX's usage" title="Demonstrating VOX's usage">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/album-view.webp">
  <img type="image/jpeg" title="VOX's album view" alt="Image of VOX's album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/full-player.webp">
  <img type="image/jpeg" title="VOX's full-player" alt="Image of VOX's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vox/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/vox-mp3-flac-music-player/id916215494">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

At first glance, VOX received a healthy number of minor and patch releases this year to earn it a spot in the showcase. However, upon closer inspection, the bulk of these releases are one of the following:

* "Fixed Youtube playback"
* Adding support for a new upsell partner, [Qobuz](https://duckduckgo.com/?q=Qobuz&t=osx&ia=web), and fixing issues with that integration

Barely anything regarding the player app itself changed this year; VOX remains the same service upsell vehicle it was upon its introduction. This year has done nothing but continue to enforce that VOX's company, [Coppertino Inc.](https://apps.apple.com/us/developer/coppertino-inc/id410801091), considers the player just a blunt pipe to grossly advertise and deliver sub-par streaming services. This lack of support for the player itself kept VOX out of the showcase this year, and unlike every other honorable mentions is genuinely not worth anyone's time.

## Established

### ![Mixtapes' iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/icon.png "Mixtapes' iOS app icon"){: .inline-app-icon } Mixtapes

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-usage-poster.jpg" alt="Video demonstrating Mixtapes' usage in light mode" title="Demonstrating Mixtapes' usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-album-view.webp">
  <img type="image/jpeg" title="Mixtapes' light theme album view" alt="Image of Mixtapes' light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/full-player.webp">
  <img type="image/jpeg" title="Mixtapes' full-player" alt="Image of Mixtapes' full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-usage-poster.jpg" alt="Video demonstrating Mixtapes' usage in dark mode" title="Demonstrating Mixtapes' usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-album-view.webp">
  <img type="image/jpeg" title="Mixtapes' dark theme album view" alt="Image of Mixtapes' dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/full-player.webp">
  <img type="image/jpeg" title="Mixtapes' full-player" alt="Image of Mixtapes' full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/mixtapes-music-player/id1571885606">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Mixtapes is a new general-purpose player built by [Jake Nelson](https://twitter.com/jknlsn) that dropped late September at the tail end of 2021, and despite its young age already boasts a comprehensive and novel playlist and queue-focused experience. In spite of the third-party music player market's maturity, the concept of "smart" playlists remains rare; to date, the only players that provide a flavor of this capability are [Marvis Pro], [Albums], and [Soor](https://soor.app)[^apple-dropped-the-ball]. It comes as a suprise then to not only see a new player launch boasting this capacity front and center in its marketing and branding, but also to see this relatively complex capability launch right out of the gate in its first version. Even features that didn't make the cut for initial release have since been added in subsequent minor updates, such as full Apple Music support. However, to properly discuss Mixtapes, we need to first step back and take stock of the player holistically.

On launch, Mixtapes offers a comfortably traditional experience, complete with stock tab bar navigation and an interface strongly reminiscent of Apple's own [Music.app](/post/fourth-annual-ios-music-player-showcase/14) (in no small part due to its choice of red as its default accent color). Mixtapes' tab bar present the following menu items by default:

* Albums
* Discover
* Mixes
* Search
* More

The traditional browsers like "Albums" are close in appearance and navigation to Music.app with a couple crucial differences. Firstly, the "Albums" page offers a healthy selection of sorting options, including the coveted ability to sort albums by artist name  and then each artist's albums by release date. Secondly, Mixtapes offers a classic "[cover flow](https://en.wikipedia.org/wiki/Cover_Flow)"-style browsing experience when in landscape mode, the only player available today to offer this beloved but forgotten layout style. The "Discover" page is a recent addition as a part of it's first-class Apple Music integration, featuring an Apple Music-powered browsing experience with all the collections you've come to expect from the service ("Favorites Mix", "Stations for You", etc.). It's effectively a carbon copy of what you'd otherwise find in Music.app's "Listen Now" page, and it's great to have immediately accessible within Mixtapes itself without forcing listeners to bounce back to Music.app. While there's so little unique done to its contents I can't help but feel that it's perhaps a lazy integration, it's sure to delight heavy users of Apple Music. Additionally, for those that aren't or don't have a subscription, you can trivially swap out the "Discover" tab with a more traditional browser like "Artists".

Continuing on to the "More" page, it's a near carbon copy of the "More" page originally found on the legacy Music.app on iOS 7 and earlier. It's on this page extra browsers like songs and genres are accessible. However, in Mixtapes' case, a "Settings" menu item also makes an appearance on this page. Within "Settings" is a remarkably dense and deep tree of various behavioral and appearance options, including the ability to customize both the mini-player and full-player's controls and visuals, automatically skip & hide explicit tracks with its novel "family friendly mode", and even the ability to enable filtering by BPM for your smart mixes[^bpm]. It's also worth noting that Mixtapes offers a staggering 120 alternative app icons, the most extensive I've seen offered in any music player and easily beating out the previous leader, [Marvis Pro], by a whopping 80 icons. With Mixtapes, listeners who care deeply about maintaining a particular home screen aesthetic have never had a better chance of finding the perfect icon.

<figure class="two-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-icons-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-icons-1.webp">
  <img type="image/jpeg" title="Page 1 of alternative icons in light mode" alt="Image of page 1 of alternative icons in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-icons-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-icons-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-icons-2.webp">
  <img type="image/jpeg" title="Page 2 of alternative icons in light mode" alt="Image of page 2 of alternative icons in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/light-icons-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-icons-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-icons-1.webp">
  <img type="image/jpeg" title="Page 1 of alternative icons in dark mode" alt="Image of page 1 of alternative icons in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-icons-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-icons-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-icons-2.webp">
  <img type="image/jpeg" title="Page 2 of alternative icons in dark mode" alt="Image of page 2 of alternative icons in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/dark-icons-2.jpg">
</picture>
</a>
<figcaption>Mixtapes offers an <em>insane</em> breadth of alternative icons to choose from. This isn’t even all of them.</figcaption>
</figure>

Now with a deeper understanding of Mixtapes' design, traditional navigation, and startlingly extensive suite of settings, it's now finally time to dive into the player's namesake: its "Mixes" page. On this page, listeners can of course make regular mixes (playlists) manually, which is the typical player-specific playlist management seen in other players like [Plum]. Alternatively, listeners can create "smart" mixes to have Mixtapes automatically populate those playlists by artist, album, year, or genre. For example, if I wanted to create a playlist of pop tracks from 2021, I could easily do so by creating a new smart mix with two filters, the first to only include tracks with the "pop" genre and the second to only include tracks with a year equal to "2021". It bears noting that this system pales in comparison to [Marvis Pro]'s and [Albums]' equivalents, with Marvis Pro supporting a whopping thirty-five different filter criteria to choose from in comparison to Mixtapes' sad selection of five. However, what is there works exactly as described, and such a small suite of criteria may be easily forgiven given the app has only been available for a few months and is sure to receive expanded capabilities in the coming years.

That brings us finally to Mixtape's full-player, which by default features edge-to-edge album art, a deep album art blur as the background, and a modest suite of standard playback controls. The "deep blur" effect delivers variable results, sometimes looking incredible as is the case with [Yola](https://music.apple.com/us/artist/yola/203292917)'s [*Stand For Myself*](https://music.apple.com/us/album/stand-for-myself/1561240873) but other times looking nearly as bad as [Sathorn]'s full-player as is the case with [Bent Knee](https://music.apple.com/us/artist/bent-knee/474692510)'s [*Frosting*](https://music.apple.com/us/album/frosting/1588174160).

<figure class="three-images ios-screenshot">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/good.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/good.webp">
  <img type="image/jpeg" title="The full-player with a pleasing blur effect" alt="Image of the full-player with a pleasing blur effect" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/good.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/bad.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/bad.webp">
  <img type="image/jpeg" title="The full-player with a mediocre blur effect" alt="Image of the full-player with a mediocre blur effect" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/bad.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/ugly.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/ugly.webp">
  <img type="image/jpeg" title="The full-player with an ugly blur effect" alt="Image of the full-player with an ugly blur effect" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/ugly.jpg">
</picture>
</a>
<figcaption>The good, the bad, and the ugly.</figcaption>
</figure>

With that said, its batting average for good results remains well above the times it flops, and the functionality provided by the rest of the player more than makes up for those times.

At the bottom of the player is a novel, segmented tab control which provides the ability to create and switch between different queues on the fly. The feature is absolutely game changing; ever since my first iPod over a decade ago, I've been frustrated at the inability to preserve my playback queue from shuffled playlists. I frequently found myself getting halfway through a shuffled playlist (typically for an "oldies" shuffle during family vacations), only to find myself needing to temporarily switch to something else (say for a drive home), thus forever losing my shuffled playlist queue position and leaving me to manually skip through repeats the following day. Mixtapes is the first and only player that *finally* acknowledges that queue contents are important listener data and offers a solution to preserve them in the form of multiple queues, which can trivially be named and sorted for quick and convenient swapping in the full-player itself. After years of keeping a finger on the pulse of iOS's music player ecosystem, it pleases me to no end to still see such profoundly exciting and useful new features like this drop. With Mixtapes' leadership and a bit of luck, the days of seeing queue contents be treated so transiently and ambivalently by players may finally be coming to an end.

Make no mistake, Mixtapes' young age reveals itself at times, such as with its slim filter criteria and handful of nasty bugs[^handful-of-nasty-bugs], but its exciting features that can't be found anywhere else like cover flow and multiple queues make the experience undeniably captivating. We don't know yet what Mixtapes release cadence will look like, but if it's anything like the handful of releases it received following the launch just a few short months ago, then it's clear that Jake Nelson has big plans in mind with Mixtapes, and he's just getting started.

#### iPad Experience

Unfortunately, Mixtapes does not properly support the iPad.

#### Widgets

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-large-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-large-widget.webp">
  <img type="image/png" title="Mixtapes' large 'Now Playing' widget" alt="Image of Mixtapes' large 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-large-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-medium-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-medium-widget.webp">
  <img type="image/png" title="Mixtapes' medium 'Now Playing' widget" alt="Image of Mixtapes' medium 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-medium-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-small-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-small-widget.webp">
  <img type="image/png" title="Mixtapes' small 'Now Playing' widget" alt="Image of Mixtapes' small 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/1-small-widget.png">
</picture>
</a>
</div>
</div>

Mixtapes offers a single "Now Playing" widget collection in three sizes. Like all "Now Playing" widgets, they're populated with the album art of the currently playing track and sometimes additional metadata (depending on the size of the widget). However, Mixtapes's widgets are by far the most bizarre take on this classic widget type I've seen to date.

Against convention, both the small *and* large widget sizes display just the album art with no additional metadata whatsoever. While this of course works perfectly for the postage stamp-sized small widget, it's comically monstrous with the large widget, resulting in half your home screen displaying nothing but the album art. Granted, since no other player today aside from [Albums] provides the ability to display *just* the currently playing track's album art in a large widget, this is sure to please at least some listeners out there waiting patiently for a widget like this to come along, but for the majority of listeners I can't imagine this large widget design makes sense. Disappointingly, there's no customization available whatsoever for any of the sizes; you're stuck with what you get.

The medium widget is a bit more traditional by leveraging a two-column design, featuring the album art beside queue details, including the current song and the next three songs up in the active queue. Like the full-player's "deep blur" effect, the result is a bit hit and miss, sometimes resulting in visually nasty results like with Bent Knee's *Frosting* but other times looking gorgeous as is the case with Yola's *Stand For Myself*. Again, the lack of customization to display the song, album, and artist details instead of the queue is disappointing, but as a medium "Now Playing" widget focused on the queue, it's perfectly acceptable.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Apple Music integration</dt>
  <dd><p>While not anything particularly groundbreaking, Mixtapes offers a standard Apple Music discovery page and expected integration like the ability to search either your local library or Apple Music’s catalog.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Again, while not particularly groundbreaking, Mixtapes does indeed support a traditional lyrics view by tapping the album art.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
</dl>

<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>While Mixtapes full-player looks gorgeous in some cases, its results are exceptionally inconsistent and highly dependent on the album art.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> Discovery features</dt>
  <dd><p>Its “Smart Mixes” feature is a great start, but not counting Apple Music it’s the only means of discovery in the app, and its limited capabilities prevent it from replacing expected discovery collections like “Recently Added”.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> Album-focused features</dt>
    <dd><p>Much to my delight, my preferred album sorting method (Artist > Chronological) is supported. However, I’d love for Mixtapes to take its Smart Mixes further by providing the ability to optionally filter and sort albums instead or in addition to songs.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> iPad support</dt>
  <dd><p>It can perhaps be written off given Mixtape’s young age, but I still find myself disappointed at the lack of iPad version.</p></dd>
</dl>
</div>

### ![MPX EQ's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/icon.png "MPX EQ's iOS app icon"){: .inline-app-icon } MPX EQ

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-usage-poster.jpg" alt="Video demonstrating MPX EQ's usage in light mode" title="Demonstrating MPX EQ's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-album-view.webp">
  <img type="image/jpeg" title="MPX EQ's light theme album view" alt="Image of MPX EQ's light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-full-player.webp">
  <img type="image/jpeg" title="'Mixtapes' light full-player" alt="Image of 'Mixtapes' light full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-usage-poster.jpg" alt="Video demonstrating MPX EQ's usage in dark mode" title="Demonstrating MPX EQ's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-album-view.webp">
  <img type="image/jpeg" title="MPX EQ's dark theme album view" alt="Image of MPX EQ's dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-full-player.webp">
  <img type="image/jpeg" title="'Mixtapes' dark full-player" alt="Image of 'Mixtapes' dark full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/mpx-equalizer-bass-booster/id1578646614">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

This year, Femi Oduntan surprised listeners with a major [Music Player X] release built from scratch with a brand new interface. In another surprise, he released this redesign not as a major update to Music Player X, but rather as a new app altogether called MPX EQ, making a clean break from the original Music Player X in the process. As a part of this release, Music Player X was also made entirely free and will presumably switch to maintenance mode for the rest of its shelf life. Needless to say, a lot's riding on MPX EQ's success.

Unfortunately, the very first thing you'll notice about MPX EQ upon launch is the new business model. Instead of charging a one-time in-app purchase for premium features like in Music Player X, MPX EQ instead features a subscription-based model. For the majority of apps here, I intentionally omit discussing price because the price is typically nominal or the majority of core functionality can be enjoyed without even knowing there are purchase options for premium features available. However, I find this difficult to set aside with MPX EQ, since upon launch you're greeted with a paywall popup with a timed dismissal requesting either the monthly subscription of $4.99 or a yearly subscription of $29.99. After roughly ten seconds, you may dismiss the popup, but only after being prompted a final time to start a free trial (an obvious dark pattern since Apple's trial system automatically subscribes you to the entry level paid subscription tier upon trial expiration unless you remember to cancel the trail prior to that time). To avoid, you have to know to hit "Cancel" to finally get into the app proper without accidentally committing to a trial or immediately shelling out the subscription price. Despite feeling a bit gross, this experience itself isn't the reason I find it difficult to discuss MPX EQ without discussing its new business model, but rather because this popup process repeats for every six navigations you make in the app until you formally start a trial or subscribe. Realistically, you *have* to pay the subscription price to use MPX EQ.

To ensure I'm not misunderstood, I'm a firm advocate of paying for software you use and have no issue whatsoever with the principle of subscription-based pricing. For example, I happily pay for subscriptions to apps like [Albums], [Overcast](https://overcast.fm), and [Tweetbot](https://tapbots.com/tweetbot/). However, something about MPX EQ's subscription model feels deeply uncomfortable to me in contrast. After familiarizing myself with the player over the past few months, it became clear to me that upon looking broadly at what MPX EQ offers that the root of my discomfort is that it's simply not yet delivering the value its pricing model warrants.

To refocus back to the app itself, MPX EQ features a traditional tab bar instead of the custom scrollable menu seen on Music Player X. That bar contains a curious selection of four tabs: "Home", "Now Playing", "Equalizer", and "Settings".

The "Home" page naturally serves as the app's landing page, and is strongly reminiscent of [Music.app] and [Doppler]'s "Library" pages since it too serves as the singular entry point into browsing your library. Instead of providing the typical browsers like albums, artists, etc. in the tab bar or menu, MPX EQ exposes them solely at the top of its "Home" page, leaving the bottom half of the page open for its "Suggestions" discovery collection. In terms of design, it leans closer towards Music.app's approach, but unlike Music.app it's much more tolerable here because it's the first and primary tab of the lot and the rest of the tab bar isn't taken up shilling for a streaming service like in Music.app; your content and your control over that content's playback takes priority not only in the "Home" page but on every tab in the tab bar (save for "Settings").

There's plenty of fantastic ideas new to the Music Player X brand throughout the "Home" page; the aforementioned "Suggestions" discovery collection—while it's not particularly clear *how* MPX EQ determines what to suggest—is nonetheless a great addition for times listeners don't want to mindlessly scroll through their library and simply want a quick idea or two for something to throw on. The ability to change the layout style between a list or a grid also makes an appearance, along with some nifty sorting options like the ability to sort by duration. However, that's not to say all these ideas new to the MPX EQ redesign live up to their potential. The introduction of a new discovery feature in the form of the "Suggestions" collection is great to see, but just a single collection of this type is disappointing, especially considering others like "Recently Added" and "Recently Played" are considered tablestakes, nowadays. The ability to switch the layout style to a grid—while a great addition in theory—is crippled by defaulting to a tiny grid of three columns (at least on an iPhone Pro Max screen size), and offers no way to adjust the number of columns to a more comfortable size. Additionally, the layout setting is *global*, you cannot set a specific layout style on a per-page basis; if you want albums displayed as a grid, *everything* is rendered henceforth with a grid until you switch back to a list. After being spoiled by the assumption that layout settings like this are preserved per-page like on [Plum] and [Cs Music], it's frustrating in comparison to see MPX EQ bizarrely treat the setting as a global toggle.

Thankfully the rest of the tab bar fares much better overall. Much like Music Player X, MPX EQ makes the bewildering design decision of promoting its now playing queue to its own tab bar item, an unprecedented move given every other player's choice to expose the queue within the full-player itself. While unorthodox, I surprisingly found myself falling in love with it. The queue is *always* immediately accessible right from the tab bar regardless of where you are in the app, and I severely underestimated at first blush just how profound a usability improvement it provides in practice. It's to the point I hope the ability to display the queue as a tab or menu item becomes standard practice across the player landscape, and is frankly my favorite part of the app. The queue page itself also features another design element I absolutely love: the ability to clear the entire queue with just a single button tap. While perhaps irrational, I frequently get frustrated at most other players' inability to quickly and easily reset the current queue without immediately playing something else, and it's a tremendous quality of life improvement to find this coveted ability make its introduction in MPX EQ.

Continuing our tour through the tab bar, while the equalizer is arguably not quite as capable as [jetAudio]'s, it strikes a strong second place for best in-app equalizer. There are plenty of understandable presents like "Hi Mid" and "Bassy" to choose from, a marked improvement over the meaningless EQ options provided by iOS like "Pop" and "Rock". The EQ is perfectly understandable, supports an adjustable number of bands, and save for a few issues (such as the "Reset" button visually resetting the sliders but not *actually* resetting the playback equalization from the previous selections), it works exactly as you'd expect.

MPX EQ's choice of menu items may be unconventional, but its full-player is remarkably traditional in comparison. As you'd likely expect from other third-party players these days, it's launched from a mini-player that sits right atop the tab bar, but unfortunately its accompanying gesture animation is insanely janky and undeniably the worst in its class.

After launching the full-player, apart for the peculiar inclusion of skip back and forward 15 second buttons typically found in podcast players and a curious waveform button between them, you'll only find essential controls and metadata, resulting in a pleasing minimal design not too far off from Music Player X's full-player. Upon tapping that alluring waveform button, listeners are greeted with a novel fullscreen visualizer, featuring just the album art, bare minimum playback controls, and one of half a dozen different visualizer styles. Unfortunately, despite my love of iOS music player visualization, MPX EQ's visualizer support leaves a lot to be desired. Swapping visualizer styles is near impossible to discover, forcing listeners to first pause playback while on the visualizer page, tap where the visualizer *would* be shown, then resume playback to switch visualizers; simply tapping the visualizer area alone doesn't work. If there's another way to switch visualizers, I couldn't figure it out in all my time using the app. Additionally, my preferred visualizer (the "flame") is broken in the current App Store build for my device size, resulting in the flame hilariously dying out like a fire without enough kindling after only a few seconds of playback. A single bum visualizer style alone wouldn't be cause for much disappointment (after all, there are quite a few styles in [jetAudio] that I don't care for), but unfortuantely every other visualizer style currently offered by MPX EQ are subjectively poor in comparison, leaving me with one broken visualizer I would otherwise have liked, a handful of subpar alternatives, and an objectively terrible interface to switch between them.

<figure class="three-images ios-screenshot">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/hacker.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/hacker.webp">
  <img type="image/jpeg" title="MPX EQ in a custom Hacker theme" alt="Image of MPX EQ in a custom Hacker theme" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/hacker.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/red.webp">
  <img type="image/jpeg" title="MPX EQ in a custom Rosey Red theme" alt="Image of MPX EQ in a custom Rosey Red theme" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/red.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/yellow.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/yellow.webp">
  <img type="image/jpeg" title="MPX EQ in a custom Bumblebee theme" alt="Image of MPX EQ in a custom Bumblebee theme" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mpx-eq/yellow.jpg">
</picture>
</a>
<figcaption>MPX EQ supports the theming engine originally found in Music Player X with some quality of life improvements, such as the ability to now save your custom themes.</figcaption>
</figure>

With the brief tour of MPX EQ complete, I can't help but feel dumbfounded disbelief at the asking subscription price and disappointment in comparison to its predecessor. Much of Music Player X's DNA is here, such as the delightful ability to customize the entire app's theme color, and MPX EQ undeniably refines that feature with the ability to save your themes. However, it falls short of sticking the landing in nearly every area to the point where the app in its current form feels closer to an early access beta than a finished, publicly available product. Until MPX EQ's rough edges are addressed, I can't see listeners other than Music Player X diehard fans considering the player as it exists today worth its asking price.

Looking towards the future, there remains a lot to be hopeful for. Without a doubt, MPX EQ's navigational and visual design is in every measurable way a tremendous improvement over Music Player X, and given Music Player X's design also improved over the past couple years we can reasonably expect MPX EQ will enjoy a similar degree of interface polish throughout its life. Given Femi's legendary development pace, it's historically only a matter of time until the bugs and janky animations discussed earlier are also addressed. MPX EQ is off to a relatively shaky start, but it's undeniably brimming with the same character, promise, and purpose that Music Player X did. I can't help but be encouraged by this and look toward the imminent future where MPX EQ's subscription price is so obviously earned it doesn't even bare mentioning in the first place. The next year will tell if that optimism is well placed.

#### iPad Experience

MPX EQ technically supports the iPad, but like many other third party players MPX EQ's iPad version is just not up to the task. While the performance thankfully remains stable on both the iPad and iPhone versions, MPX EQ's iPad version instead falls short with its interface.

To start, there's no landscape mode to speak of. While standard fare for the iPhone, to only support portrait mode on the iPad is practically unheard of and is an immediate red flag that something's not right. After diving into the player proper, the grid layout—while unusually small on the iPhone—is comically small on the iPad version, resulting in thimble-size cells amidst a sea of wasted white space. While silly, that's at least better than the equalizer page on the iPad, which is straight-up broken; the page itself is blank, requiring listeners tap "Back" for a thin sheet containing the expected EQ page contents to slide out from the left of the screen. The full-player itself is thankfully not broken to that degree, but is also poorly optimized with plenty of wasted vertical whitespace uncomfortably filling the extra screen space which could have otherwise been filled with properly scaled and arranged interface elements.

Regrettably, in its current form, there's simply too much functionality that's either broken or so woefully unoptimized that MPX EQ's iPad version frankly isn't ready for public use, yet.

#### Widgets

MPX EQ—like its previous incarnation, Music Player X—does not provide any widgets.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> Light &amp; dark themes</dt>
  <dd><p>Like Music Player X before it, while it does indeed offer a theming system, that themeing system does not respond to iOS’s current theme option.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> iPad support</dt>
  <dd><p>Providing an iPad version at all is appreciated, but there’s far too many layout bugs and poor layout choices made on the larger screen for it to hold up.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> Discovery features</dt>
  <dd><p>An effort was made with the new “Suggestions” collection, but more is expected nowadays.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>Regrettably, the visualizer is difficult to use, majority of styles are not to my taste, and the one that is appears broken (the flames die out after a few seconds of playback). The full-player itself is not visually engaging or beautiful enough to compensate.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> Album-focused features</dt>
  <dd><p>The introduction of a grid layout option is fantastic in theory, but it’s far too compromised in its current form.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dd><p>MPX EQ was a great opportunity to add Apple Music support (where Music Player X did not), but this oppertunity was unfortunately missed.</p></dd>
  <dt><span class="bullet">:x:</span> Lyrics support</dt>
</dl>
</div>

### ![Musens' iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/icon.png "Musens' iOS app icon"){: .inline-app-icon } Musens

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-usage-poster.jpg" alt="Video demonstrating Musens' usage in light mode" title="Demonstrating Musens' usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-album-view.webp">
  <img type="image/jpeg" title="Musens' light theme album view" alt="Image of Musens' light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/full-player.webp">
  <img type="image/jpeg" title="Musens' full-player" alt="Image of Musens' full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-usage-poster.jpg" alt="Video demonstrating Musens' usage in dark mode" title="Demonstrating Musens' usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-album-view.webp">
  <img type="image/jpeg" title="Musens' dark theme album view" alt="Image of Musens' dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/full-player.webp">
  <img type="image/jpeg" title="Musens' full-player" alt="Image of Musens' full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/musens/id1560526260">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Musens is a brand new arrival from April 13th, 2021, and is the closest I've seen any app get to becoming a viable drop-in replacement for [Music.app]. While many general-purpose players are great, most are missing one or two features found in Music.app that keep them from being a viable full-time replacement for most listeners. Typically this takes the form of a lack of Apple Music service integration, but other times it's a lack of widget support, a lack of visualizer, or any other myriad of Music.app features that aren't "must haves" but necessarily hold back most other players from being considered a feature-complete Music.app replacement for the general population. This results in today's trend that third-party music players are more often than not *supplementary* to Music.app, with the expectation that Music.app is always kept handy just in case you need to stream a particular record, want a playback visualizer, or any other number of features the many listeners will quickly miss in third-party offerings. Not so with Musens; it's a general-purpose player with first-class Apple Music integration and widget support (that in and of itself is fairly surprising to both see supported for this category of player), but what makes it truly remarkable is its very own implementation of Music.app's beautiful lava lamp visualizer and Sonos-like "Party" feature, allowing anyone at the party to add to the queue as they please. No other third-party player offers this combination of features, and frankly I didn't expect I'd ever see supported. And yet, here they are, all presented with a relatively understated design, a standard iOS tab bar, and a number of Music.app similarities that make Musens feel immediately familiar on first launch.

On launch, Musens drops you into the first of five menu items:

* Home
* Playlists
* Artists
* Songs
* Albums

By far, the most interesting of all these is Musen's "Home" tab, which is strongly reminicent of Music.app's "Listen Now" page and [Mixtapes]'s recent "Discover" page. Like with Mixtapes, it seems the majority of its discovery collections are powered directly from Apple Music, so all the collections you'd expect like "Made For You", "Top Picks", and more are here. The page is nearly identical in every way to Music.app's "Listen now" page, so if you're not fond of it in Music.app, Musens certainly won't change your mind. In both Mixtapes' and Musens' cases, in a certain light I might look at this as lazy or uninspired, but given Musen's clear goal of being a better Music.app and not "just" a third-party supplement like most others (and the fact that Musens seems to be the first and only third-party player *with* this goal), this particular case feels admissible. Not to mention, if you love the "Listen Now" page and frequently find yourself missing it in other players, then you're all but guaranteed to love Musens' "Home" page since it's a near carbon copy.

So far with the "Home" tab, Musens seems near identical to Music.app, but those similarities rapidly fall off the minute we begin exploring more of the menu. Music.app's frustratingly haphazard menu of "Browse", "Radio", "Library", and "Search" are thankfully sidestepped entirely by Musens, instead opting for a sensible, understandable menu containing the likes of "Albums" and "Artists". While Musens has tight Apple Music integration, it clearly puts a focus on your local library by exposing those common browsing pages right in the tab bar, where Music.app instead flounders about with asinine tabs like "Radio". This to me is where Musens makes its vital differentiating stance from Music.app; based on its navigational organization, Music.app barely cares about *your* music, but Musens does, and it makes every effort to ensure it's just a tap away.

Musens's menus are by no means perfect; in contrast to some other general-purpose players that offer more niche browsing methods like genres or composers, Musens only supports browsing by playlists, artists, songs, or albums. Either because of this or as a side effect of this, Musens also lacks the ability to customize the tab bar. Granted, the default choices and arrangement is reasonable, but the lack of ability to adjust the menu contents is nonetheless disappointing after getting spoiled by [Cs Music] and [Power Player].

The browsing experience within each of these menu items is a little opinionated, but still perfectly reasonable. You can browse playlists and albums as grids and artists and songs as lists, but have no ability to change those layout styles like in [Plum] or [Cs Music]. Unlike the layout style, Musens does indeed allow changing the sort order, and provides a respectable number of options suited to each browser. While browsing particular albums, you'll also notice a whimsical animation of a faux vinyl record rolling out of the album art "sleeve", which is sure to elicit a smile from fans of vinyl records. Where Musens visual flare truly shines, however, is in its player view.

While it's becoming increasingly common for players to provide visualizers, it's still exceptionally rare to encounter a player with a visualizer that incorporates the album art. Not counting Musens, at the end of 2021 the only players that can claim this are [Power Player], [Soor], and [Music.app], but they're all flawed in various ways. Power Player's visualizer isn't nearly as reactive to the music as you'd expect, and its bubbly nature is arguably not well suited to a broad array of genres and tastes. Soor's visualizer is a canned gradient curve that cycles through a handful of primary colors from the album art with no dynamic visualization aspect whatsoever. Music.app's visualizer is blurred into a muted, homogenous paste that's both unappealing to look at and barely reacts to the music as a result (in contrast to its continuously gorgeous "Live Lyrics" visualizer). The playing field doesn't look particularly great until we turn our attention towards Musens's full-player. It unbelievably features an honest to goodness reimplementation of Music.app's brilliant "Live Lyrics" album art lava lamp visualizer, the only third-party player to boast this achievement. While the effect is naturally not quite as rich and dynamic as Apple's own (in no small part due to only featuring a single "blob"), its single "blob" is still comfortably discrete from the rest of the colors, subtly "jiggles" in reaction to the music, and moves about at a youthful pace similar to Music.app's. If you've found yourself longing to enjoy Music.app's "Live Lyrics" visualizer for your local library, Musens has gotten the closest I've seen any app get to this goal.

<figure class="two-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/musens-lava-lamp-poster.jpg" alt="Video demonstrating Music.app's full-player visualizer" title="Demonstrating Music.app's full-player visualizer">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/musens-lava-lamp.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/musens-lava-lamp.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/musens-lava-lamp.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/music-app-lava-lamp-poster.jpg" alt="Video demonstrating Music.app's lyrics view visualizer" title="Demonstrating Music.app's lyrics view visualizer">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/music-app-lava-lamp.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/music-app-lava-lamp.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/music-app-lava-lamp.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<figcaption>Musens’ visualizer on the left, Music.app’s “Live Lyrics” visualizer on the right. Despite picking a different primary color and only featuring one blob, Musens gets shockingly close to replicating Music.app’s effect. (sped up x10 to highlight the differences)</figcaption>
</figure>

The rest of the full-player itself leans towards minimalism in its approach, featuring only a smattering of controls next to a positively massive play/pause button. However, this minimalism serves as the full-player's Achilles heel, as it not only lacks lyrics capabilities (instead lazily outsourcing the feature to [Musixmatch](https://www.musixmatch.com)), but also lacks a means to view and edit the queue. You read that right, Musens does indeed *have* a queue that you can add songs to, but if you need to view or edit the queue beyond that you're forced to temporarily jump back to Music.app. It's far and away the single biggest issue Musens faces right now and I can't help but feel it was a mistake to ship without, especially considering its forward-thinking "Party" feature, which allows anyone with your Party Code to add songs to your queue via the Musens website.

With just how much personality and value Musens offers today, though, it's perhaps a little too easy to forget the app's practically brand new. The fact it came out of the gate in late 2021 with full Apple Music integration, arguably the best full-player visualizer on the market today, and a compelling "Party Mode" is commendable and implies that it's only a short matter of time until Musens supports in-app lyrics and queue management. The Musens approach of being an "actually good" Music.app won't be to everyone's taste, and may in fact hold the player back in some respects. For example, its entire reliance on Apple Music for discovery leaves those without an Apple Music subscription with a crippled and undeniably worse Musens experience (though the local-only experience is still reasonably respectable assuming you're willing to forgo the discovery features). However, for those that *do* have an Apple Music subscription, are fed up with Music.app, and continuously disappointed at the Apple Music integration found in other third-party players, Musens may just be the player you've been looking for.

#### iPad Experience

Musens does indeed support the iPad, but unfortunately much like [Plum] its performance characteristics on iPad are dreadful to the point of being unusable. It's a real shame, since Musens on iPad does make a conscious effort to optimize the layout for the larger screen, such as its use of the native iPad sidebar and gorgeous fullscreen player view. But due to its abhorrent performance it's simply not ready for general use.

#### Widgets

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-large-dark.webp">
  <img type="image/png" title="Musens' large 'Now Playing' widget in dark mode" alt="Image of Musens' large 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-medium-dark.webp">
  <img type="image/png" title="Musens' medium 'Now Playing' widget in dark mode" alt="Image of Musens' medium 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-medium-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-small-dark.webp">
  <img type="image/png" title="Musens' small 'Now Playing' widget in dark mode" alt="Image of Musens' small 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-small-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-large-light.webp">
  <img type="image/png" title="Musens' large 'Now Playing' widget in light mode" alt="Image of Musens' large 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-medium-light.webp">
  <img type="image/png" title="Musens' medium 'Now Playing' widget in light mode" alt="Image of Musens' medium 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-medium-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-small-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-small-light.webp">
  <img type="image/png" title="Musens' small 'Now Playing' widget in light mode" alt="Image of Musens' small 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/1-small-light.png">
</picture>
</a>
</div>
</div>

As we've come to expect, Musens heavily takes after Music.app with its approach to widgets, but unfortunately unlike its core app experience it does not offer any improvements over Music.app's offerings, and are arguably worse overall.

Like Music.app, there's a single "Now Playing" widget collection in which a widget for each of the three sizes is offered (sorry iPad, no "extra large" size). Also like Music.app, they each feature the current track's art and varying degrees of additional information as the size increases. Curiously, Musens decided to attempt showing the track title and artist for the small widget *directly beside the art*, which in practice means only a few sad track name characters are visible. Unsurprisingly, this makes it among one of the worst small widgets I've seen offered by any player. Thankfully, its medium and large sizes are perfectly reasonable, with the medium showing just the current track details and the large showing those details in addition to a short list of recent tracks.

All three widgets sport Musens' blue accent color gradient, which thankfully mutes itself to a dark blue while in dark mode. It's pleasing, but it's certainly disappointing to not have the ability to enable an album art blur effect for the background as an option to make the widget as a whole more dynamic and personal.

The widgets overall are nowhere near as good as Musens on iPhone, but is certainly nowhere near as bad as Musens on iPad. They're perfectly sufficient, but not anything particularly remarkable.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>Musens is the one and only third-party player I’ve encountered that replicates Music.app’s “Live Lyrics” lava lamp visualizer, and it’s far and away my favorite part of the entire app. Simply outstanding.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Apple Music integration</dt>
  <dd><p>While not anything particularly groundbreaking, Musens offers a standard Apple Music "Home page and expected integration like the ability to search either your local library or Apple Music’s catalog.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
</dl>

<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> Discovery features</dt>
  <dd><p>Its Apple Music “Home” page is a great start, but that alone is not sufficient since it both requires an Apple Music subscription and does not provide nearly enough discovery collections that have come to be expected nowadays, such as “Recently Added”.</p></dd>
  <dt><span class="bullet">:large_orange_diamond:</span> Album-focused features</dt>
  <dd><p>The grid layout in the “Albums” page is a great start, but a lack of my preferred album sorting method (Artist > Chronological) and any other album-focused features leaves me wanting.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Lyrics support</dt>
  <dd><p>Outsourcing a critical feature to <a href="https://www.musixmatch.com/">Musixmatch</a> is not the same as actually supporting the feature.</p></dd>
  <dt><span class="bullet">:x:</span> iPad support</dt>
  <dd><p>The performance is appaulingly bad, it’s simply not ready for general use.</p></dd>
</dl>
</div>

### ![Albums' iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/icon.png "Albums' iOS app icon"){: .inline-app-icon } Albums

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-usage-poster.jpg" alt="Video demonstrating Albums' usage in light mode" title="Demonstrating Albums' usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-album-view.webp">
  <img type="image/jpeg" title="Albums' light theme album view" alt="Image of Albums' light theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-full-player.webp">
  <img type="image/jpeg" title="Albums' light theme full-player" alt="Image of Albums' light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-usage-poster.jpg" alt="Video demonstrating Albums' usage in dark mode" title="Demonstrating Albums' usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-album-view.webp">
  <img type="image/jpeg" title="Albums' dark theme album view" alt="Image of Albums' dark theme album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-full-player.webp">
  <img type="image/jpeg" title="Albums' dark theme full-player" alt="Image of Albums' dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/albums-album-focused-player/id1469948986">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Few iOS music players available today pour more care and attention into the album browsing and playback experience than Albums. Despite only two short years passing since [its charming but shaky initial release](/post/second-annual-ios-music-player-competition#--albums), Adam Linder—Albums' developer—released a blistering and alarming rate of new features, UI enhancements, and bug fixes that makes Albums today one of if not arguably *the* definitive album-focused player on the market. There's two primary ways Albums strives to earn this title: its gold-standard album browsing feature set and its album-focused playback experience.

While the sheer quantity of ways you can browse your library in Albums is impressive enough, the majority are deeply powerful in a way no other player has yet been able to emulate. You've got your usual suspects like "Albums", "Artists", "Genres", and "Recently Added", but that's where the traditional browsing experience ends. With Albums, you can browse your library by:

* Release decade or release year
* Record label
* Album duration
* Album credit (engineer, producer, studio, and more)
* Personal "Insights" (like "Been a While", which collects albums you haven't listened to in over a year or "Over the Years", which collects records into time buckets based on your age like "High School", "My Mid 20s", etc.)

These are only a sampling of the many inspirational ways you can browse your library in Albums, and best of all these collections are available "out of the box" with little to no manual configuration[^caveat].

For those that are so inclined to fiddle, Albums provides means to manually craft your own collections with:

* "Quick Collections", which is a kind of spiritual album-centric successor to iTunes' "Smart Playlists". With it, you can dynamically populate and sort collections based on practically any criteria you can think of like play count, duration, and more.
* "Tags", which allows you to manually add any number of tags to the albums in your library. With it, you can create such wonderful collections as "Let's Get Sad, Yo" and "Play It Again, Sam" by tagging appropriate albums with those labels.

Its stupendous album-focused browsing experience alone is impressive, but Albums' distinctive full-player elevates the app even further. The first thing you'll notice is the full-player's unique "unified" progress bar; instead of displaying the progress and duration of the currently playing track, it displays the progress and duration of the *entire album*, with notches scattered throughout indicating the album's tracks. Visually speaking, it's the closest a traditional progress bar has gotten towards exposing this information that in most physical music formats was immediately visually accessible. For example, with cassettes you always had a clear sense of context throughout the record based on the amount of tape left in the spool, and for vinyl records how close the stylus was to the runout groove. Traditional digital progress indicators overwhelming tend to disregard this data entirely in lieu of a single track progress bar, so to finally see a progress bar design visually expose this information is a rare treat. Unfortunately, this continues to be at the expense of functionality; upon dragging the virtual play head, the bar clumsily morphs to instead display just the track's progress (like a traditional full-player's progress bar), leaving no way to drag the virtual play head anywhere across the record like the bar implies. However, since I rarely find myself needing to do this, the contextual benefits the "unified" progress bar provides continues to be worth the trade-off.

The other treat Albums' full-player provides is the inspired "Credits" tab; on this tab, the app fetches and elegantly groups album metadata from [Discogs](https://www.discogs.com) and [MusicBrainz](https://musicbrainz.org) to provide a virtual equivalent to the linear notes typically found on physical records. Depending on the record, you can expect to find everything from high-level information such as record label to low-level details such as the violinist on track 3. If that wasn't enough, Albums deep links credits into discrete collections in its browser, so for example if that violinist on track 3 happened to play on other records in your library, you could tap that credit to instantly browse all records in your collection that violinist played on. I frequently find myself deep-diving into the "Credits" tab while listening to records and discovering delightful surprises, like that both [Eagles](https://music.apple.com/us/artist/eagles/1053549)' [*One of These Nights*](https://music.apple.com/us/album/one-of-these-nights/635829971) and [CSNY](https://music.apple.com/us/artist/crosby-stills-nash-young/175818)'s [*Déjà Vu*](https://music.apple.com/us/album/d%C3%A9j%C3%A0-vu-50th-anniversary-deluxe-edition/1556346195) both shared the same lead art designer, [Gary Burden](https://en.wikipedia.org/wiki/Gary_Burden).

To be clear, Albums has its pain points; the app contains numerous minor cosmetic and functional bugs that continue to diminish the overall app's impression (certain actions will break other buttons from working temporarily[^reproduce-1], UI controls will update in some cases to report a state that isn't accurate[^reproduce-2], etc.). Minor bugs aside, the design still leaves a lot to be desired in certain areas of the app as well, such as in the full-player; while the full-player is functionally marvelous (thanks in no small part to its amazing "Credits" tab), the spatial organization continues to make little sense. Despite numerous hours with the app, upon launching the full-player I still find myself initially pausing for a moment or two, unsure how to reveal the "Credits" or "Track List" tabs.

With that said, Albums' surprisingly comprehensive and charming suite of features continues to delight and inspire in spite of its flaws. Features like "Credits" inspire me to pay more attention to producers and mixers, which I can then use to search for and identify new music I'm likely to enjoy. The "Insights" collections help give me a way to relive my music history, providing me a fun (and oftentimes embarrassing) walk down memory lane through the music I loved back when I was in high school[^oh-god-why]. With features like this and more, it's clear with each passing update (of which there were *many* the past couple years) that Adam continues to pour his heart into the app, and that effort continues to yield fruit. If you love records as an art form, you owe it to yourself to give it a try.

#### iPad Experience

Albums features a number of design tweaks to take full advantage of the iPad's larger screen. Instead of lazily scaling the app to fill the iPad's screen and calling it a day, features like the "Quick Actions" tray—which would otherwise be hidden until shown to conserve space on the iPhone—is displayed prominently and proudly right beside the progress bar. On the full-player, you can read lyrics without covering any part of the album art or forcing the album art to scale down, which on small screens like the iPhone is simply not feasible. There's plenty of pleasing interface tweaks that take full advantage of the larger screen to be found in Albums, and with this year's new iCloud Sync feature Albums' iPad experience is now among the best available.

#### Widgets

Albums' widgets have seen significant changes from last year. Albums now supports four unique widget collections of various sizes for you to choose from, and continues to contend with [Marvis Pro] and [Soor] for the title of richest music player widget support.

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-large-dark.webp">
  <img type="image/png" title="Albums' large 'Now Playing (Art)' widget in dark mode" alt="Image of Albums' large 'Now Playing (Art)' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-small-dark.webp">
  <img type="image/png" title="Albums' small 'Now Playing (Art)' widget in dark mode" alt="Image of Albums' small 'Now Playing (Art)' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-small-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-large-light.webp">
  <img type="image/png" title="Albums' large 'Now Playing (Art)' widget in light mode" alt="Image of Albums' large 'Now Playing (Art)' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-small-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-small-light.webp">
  <img type="image/png" title="Albums' small 'Now Playing (Art)' widget in light mode" alt="Image of Albums' small 'Now Playing (Art)' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/1-small-light.png">
</picture>
</a>
</div>
</div>

The first of these collections is the "Now Playing (Art)" collection, which features just the currently playing album art in small and large widget sizes with a tasteful blurred border. While the large size is subjectively ridiculous like [Mixtapes]' large "Now Playing" widget, it's less onerous in Albums since it provides an alternative large "Now Playing" widget, allowing listeners to choose whichever one best fits their needs. The tap action is customizable, allowing you to do any one of the following upon tap (which most of the other collections also support):

* Open App
* Open App to Now Playing
* Play/Pause
* Skip to Next Album
* Skip to Next Song

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-large-dark.webp">
  <img type="image/png" title="Albums' large 'Now Playing (Info)' widget in dark mode" alt="Image of Albums' large 'Now Playing (Info)' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-medium-dark.webp">
  <img type="image/png" title="Albums' medium 'Now Playing (Info)' widget in dark mode" alt="Image of Albums' medium 'Now Playing (Info)' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-medium-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-small-dark.webp">
  <img type="image/png" title="Albums' small 'Now Playing (Info)' widget in dark mode" alt="Image of Albums' small 'Now Playing (Info)' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-small-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-large-light.webp">
  <img type="image/png" title="Albums' large 'Now Playing (Info)' widget in light mode" alt="Image of Albums' large 'Now Playing (Info)' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-medium-light.webp">
  <img type="image/png" title="Albums' medium 'Now Playing (Info)' widget in light mode" alt="Image of Albums' medium 'Now Playing (Info)' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-medium-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-small-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-small-light.webp">
  <img type="image/png" title="Musens' small 'Now Playing (Info)' widget in light mode" alt="Image of Musens' small 'Now Playing (Info)' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/2-small-light.png">
</picture>
</a>
</div>
</div>

The second collection is an alternative to the first called "Now Playing (Info)", which for all four widget sizes features varying degrees of every kind of relevant "now playing" data you can imagine (album name, artist, song, track number, remaining duration, album art, etc.). While most are similar in use, the extra-large widget on iPad uniquely includes playback controls to play/pause, skip to the next track, and skip to the next album (though unfortunately these controls are not available as an option for the smaller sizes). To top it all off, the remaining duration counts down in close approximation along with your playback, a remarkable achievement given Apple's strict widget API limitations.

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-large-dark.webp">
  <img type="image/png" title="Albums' large 'Quick Actions' widget in dark mode" alt="Image of Albums' large 'Quick Actions' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-medium-dark.webp">
  <img type="image/png" title="Albums' medium 'Quick Actions' widget in dark mode" alt="Image of Albums' medium 'Quick Actions' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-medium-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-large-light.webp">
  <img type="image/png" title="Albums' large 'Quick Actions' widget in light mode" alt="Image of Albums' large 'Quick Actions' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-medium-light.webp">
  <img type="image/png" title="Albums' medium 'Quick Actions' widget in light mode" alt="Image of Albums' medium 'Quick Actions' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/3-medium-light.png">
</picture>
</a>
</div>
</div>

The third widget collection Albums' provides is its "Quick Action" collection, available in medium and large sizes. Each size exposes your custom "Quick Actions" and Albums' build-in ones to be easily launched from the widget itself. Quick Actions tapped in the widget work exactly like they do when tapped in the app; a random record will begin playing immediately according to whatever filtering criteria you set for that "Quick Action". In my opinion, these widgets are where "Quick Actions" shine brightest. I rarely find myself wanting to play a random record with "Quick Actions" when I'm already browsing around in the app, but I frequently find myself in the mood to do so when these "Quick Actions" are readily available with just a tap right from my home screen.

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-large-dark.webp">
  <img type="image/png" title="Albums' large 'Collections' widget in dark mode" alt="Image of Albums' large 'Collections' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-medium-dark.webp">
  <img type="image/png" title="Albums' medium 'Collections' widget in dark mode" alt="Image of Albums' medium 'Collections' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-medium-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-large-light.webp">
  <img type="image/png" title="Albums' large 'Collections' widget in light mode" alt="Image of Albums' large 'Collections' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-medium-light.webp">
  <img type="image/png" title="Albums' medium 'Collections' widget in light mode" alt="Image of Albums' medium 'Collections' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/4-medium-light.png">
</picture>
</a>
</div>
</div>

Albums' fourth and final widget collection is its "Collection" collection, available in every size except small. This collection lets you randomly display albums for nearly any collection Albums' provides in the app. If you can view it in Albums, chances are you can display its contents with these widgets. Albums displayed in each of the four widget sizes are discretely selectable; your currently selected tap action will be applied to whatever particular album you select in the widget (a feature which similar widgets from other players like [Longplay] shockingly lack). While this particular widget class isn't one I tend to place in my own home screen, this level of flexibility is commendable and sure to delight those that love displaying their library's albums in widgets.

#### New This Year

Albums received over a blistering twelve releases this year[^such-releases-much-wow], arguably most notable among them:

* Apple Music integration
* iCloud Sync
* CarPlay support
* Widget Updates (see ["Widgets"](#widgets) above)
* Listening Reports

I was thrilled to see rich Apple Music support roll out in Albums this year, and it works exactly like you'd expect; searching now displays a tab bar where you can search "My Library" and "Apple Music" (much like how you can in [Music.app]), and anything you search for in the "Apple Music" tab can be streamed or added to your library (which naturally requires enabling Music.app's "Sync Library" option, if that's your fancy). Records streamed this way are otherwise treated no differently than streaming a local record; you get the same full-player with the great "Credits" and "Statistics" tabs you've come to expect from the local experience Albums provides. Integration extends even further to (optionally) display albums not in your library on artist pages, helping further eliminate reasons to ever switch back to Music.app while listening.

The next big change was the introduction of iCloud Sync support, a much appreciated quality-of-life improvement for anyone duel-wielding an iPad and iPhone and want their "Quick Collections", downloaded credits, and other data consistent across all devices. Due to [Discogs](https://www.discogs.com)' strict API limitations, the automatic credits download option could take a considerable amount of time, so it's great to finally see Albums sharing that fetched data across all your devices and not needlessly repeating that expensive task for each. The Albums experience on my secondary device (my iPad) no longer feels like a compromised or cheapened version of the "real" app on my iPhone due to missing credits and other dynamic or custom data, *everything* that matters on my iPhone is now automatically there on the iPad, and visa versa. In my mind, this now marks the end of Albums' long migration to an uncompromising universal app, coming a long way its inception back in 2019 as an iPhone-only experience.

CarPlay support was additionally rolled out this year. While a tremendous new feature (especially considering barely any other players available today support it), there's unfortunately little I have to say about it. As a carless city pedestrian, I'll let Adam do the talking:

> The CarPlay app is split up into four tabs: Albums, Collections, Quick Actions, and Library. The first two are customizable. Think of the Albums tab as the 2021 version of the six-CD changer in your friend’s car from 2004. You can go to Settings -> CarPlay on your phone and choose the six albums you want available in the car.

While I don't own a car, I do occasionally rent one for vacations, and Adam's stated goals with the "Albums" tab is *exactly* what I do today; before beginning the trip, I queue up every album I want to listen to on the ride, so I eagerly await the ability to make on-the-fly changes at red lights or quick gas stops without needing to fiddle with my phone.

Aside from widget updates (covered above in the dedicated ["Widgets"](#widgets) section), the final major change of note this year was the introduction of listener reports. No doubt heavily inspired by the yearly ["Spotify Wrapped"](https://www.spotify.com/us/wrapped/), Albums now provides its own "wrapped"-like reports and can be adjusted for any arbitrary time period (not just the past year). The feature works remarkably well, displaying numerical data such as number of albums played and hours listened, a gorgeous album grid of your top albums by play count, numerous bar charts showing top artists, top genres, and more. It's a feast for the eyes and is a delightful way to gain insight into your listening habits from the past year you may not even have been aware of. In my case, I discovered I apparently only listened to albums in my library 51 days out of the year and had [Tyler, the Creator](https://music.apple.com/us/artist/tyler-the-creator/420368335) on heavy rotation ("[*CALL ME IF YOU GET LOST*](https://music.apple.com/us/album/call-me-if-you-get-lost/1573484415), B!#%&"). If you spend even a bit of your listening time on an iPhone or iPad, it's well worth the walk down memory lane.

<div class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-1.webp">
  <img type="image/jpeg" title="Page 1 of my Listening Report from this year in light mode" alt="Image of page 1 of my Listening Report from this year in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-2.webp">
  <img type="image/jpeg" title="Page 2 of my Listening Report from this year in light mode" alt="Image of page 2 of my Listening Report from this year in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-2.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-3.webp">
  <img type="image/jpeg" title="Page 3 of my Listening Report from this year in light mode" alt="Image of page 3 of my Listening Report from this year in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-light-3.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-1.webp">
  <img type="image/jpeg" title="Page 1 of my Listening Report from this year in dark mode" alt="Image of page 1 of my Listening Report from this year in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-2.webp">
  <img type="image/jpeg" title="Page 2 of my Listening Report from this year in dark mode" alt="Image of page 2 of my Listening Report from this year in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-3.webp">
  <img type="image/jpeg" title="Page 3 of my Listening Report from this year in dark mode" alt="Image of page 3 of my Listening Report from this year in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/report-dark-3.jpg">
</picture>
</a>
</div>

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Apple Music integration</dt>
  <dd><p>Albums features my preferred kind of Apple Music integration: the majority of the app experience is unchanged, but now you can seamlessly search for, stream, and tag Apple Music albums just like you could your local library. It’s as close to transparent integration as I’ve seen, and for my tastes that’s worthy of praise.</p></dd>
  <dt><span class="bullet">:trophy:</span> iPad support</dt>
  <dd><p>Albums’ iPad version is exceptionally performant and the interface is well optimized to take full advantage of the larger screen. It sets the standard for what players should strive for on the iPad.</p></dd>
<dt><span class="bullet">:trophy:</span> Discovery features</dt>
  <dd><p>The sheer number of discovery capabilities offered by Albums is astounding. You can browse by years & decades, duration, studios, record labels, old favorites, recently added, and more than I have space to type. The fact it all comes "as is" with virtually no configuration is industry leading.</p></dd>
<dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>While not particularly beautiful, Albums without a doubt features one of the most engaging full-players available today thanks to its statistics and credits tabs.</p></dd>
<dt><span class="bullet">:trophy:</span> Album-focused features</dt>
  <dd><p>There’s too much to summarize here here, but suffice to say Albums lives up to its namesake and then some. </p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Lyrics are supported in-app and are perfectly functional. However, it’s worth noting it’s not a particularly inspired implementation and could certainly use a refresh (it’s currently just shoved into a popup card).</p></dd>
</dl>
</div>

### ![Cs Music's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/icon.png "Cs Music's iOS app icon"){: .inline-app-icon } Cs Music

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-usage-poster.jpg" alt="Video demonstrating Cs Music's usage in light mode" title="Demonstrating Cs Music's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-album-view.webp">
  <img type="image/jpeg" title="Cs Music's light theme album-view" alt="Image of Cs Music's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-full-player.webp">
  <img type="image/jpeg" title="Cs Music's light theme full-player" alt="Image of Cs Music's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-usage-poster.jpg" alt="Video demonstrating Cs Music's usage in dark mode" title="Demonstrating Cs Music's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-album-view.webp">
  <img type="image/jpeg" title="Cs Music's dark theme album-view" alt="Image of Cs Music's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-full-player.webp">
  <img type="image/jpeg" title="Cs Music's dark theme full-player" alt="Image of Cs Music's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/cs-music-player/id924491991">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Few general-purpose players changed as radically as Cs Music over the past half decade. Cs Music endured a rebranding[^name-change], a failed redesign[^failed-redesign], a *successful* redesign, and plenty of smaller hills and valleys in-between. However, despite its many hurtles, Mike Clay's unyielding dedication to the app helped it continue to mature and flourish over the years into one of the best general-purpose players on the market.

Cs Music wears its influences on its sleeve. Much like [Music.app] prior to the iOS 8 redesign, Cs Music features a stock menu bar whose contents can be rearranged (the only modern player aside from [Power Player] and [Mixtapes] that support this ability). You have your choice of:

* Activity (a new discovery tab introduced this year, similar to other player's "Home" pages)
* Albums
* Artists
* Composers
* Genres
* Playlists
* Settings
* Songs

However, unlike Music.app and Power Player, search is promoted from a tab bar item into a permanent top bar button, so search is always available without needing to sacrifice a menu bar slot.

Each page's presentation style is comfortably adjustable, allowing you to select between "Grid", "List", or "Hybrid" layout options. While the "Grid" and "List" options are self-explanatory, the more unscrupulous "Hybrid" option is mostly the same as the "List" option but instead renders your pinned items as a grid. Additionally, each page supports a generous suite of sorting options, both in standard and reverse order:

* Alphabetical
* Year
* Last Played
* Date Added
* Play Count
* Duration
* Rating

This pleasing degree of customization carries through into the new "Activity" page, which allows you to rearrange the following discovery collections:

* Loved
* Pinned
* Recently Added
* Recently Played
* Recently Updated
* Top Rated

While that alone isn't noteworthy (Power Player added a similar "Home" page last year), Cs Music went the extra mile by allowing many of those discovery collections to target either songs, albums, artists, composers, or genres. The simple ability for listeners to decide what kind of entity to display in a given discovery collection makes Cs Music's "Activity" page much more widely useful since it is far more likely to support your listening and browsing preferences. Compared to its most direct equivalent of Power Player's comparatively restrictive "Home" page, Cs Music's "Activity" page provides a much more flexible and inherently personal experience.

<figure class="two-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-light-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-light-1.webp">
  <img type="image/jpeg" title="Page 1 of my Cs Music Activity page in light mode" alt="Image of page 1 of my Cs Music Activity page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-light-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-light-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-light-2.webp">
  <img type="image/jpeg" title="Page 2 of my Cs Music Activity page in light mode" alt="Image of page 2 of my Cs Music Activity page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-light-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-dark-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-dark-1.webp">
  <img type="image/jpeg" title="Page 1 of my Cs Music Activity page in dark mode" alt="Image of page 1 of my Cs Music Activity page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-dark-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-dark-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-dark-2.webp">
  <img type="image/jpeg" title="Page 2 of my Cs Music Activity page in dark mode" alt="Image of page 2 of my Cs Music Activity page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/activity-dark-2.jpg">
</picture>
</a>
<figcaption>Your “Activity” page might look totally different. For example, there’s nothing stopping you from configuring “Recently Played” to display songs, “Recently Added” to display artists, etc.</figcaption>
</figure>

Unlike [Plum] and Power Player, Cs Music's visual design is mostly utilitarian. There's no fancy artist pages, dynamic entity or album view themes, or anything of the sort. The design is elegant and tastefully executed, but purposefully doesn't stray much farther from that. With Cs Music, its feet are firmly on function over form. It's full-player, however, is the sole exception.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-red.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly red record" alt="Image of the album view in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-red.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-green.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly green record" alt="Image of the album view in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-green.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-blue.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly blue record" alt="Image of the album view in light mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/light-blue.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-red.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly red record" alt="Image of the album view in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-red.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-green.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly green record" alt="Image of the album view in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-green.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-blue.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly blue record" alt="Image of the album view in dark mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/dark-blue.jpg">
</picture>
</a>
<figcaption>The effect is boldly colored and blur-free like Power Player, but far more subtle in comparison.</figcaption>
</figure>

The first thing you'll notice in Cs Music's full-player is its massive, grippable progress and volume bars, followed by the only dynamic album art theming found anywhere in the app. Like Power Player, Cs Music takes primary and secondary colors from the album art to color the various controls, but unlike Power Player it *lightly* colors the background color based on the album art. This approach rarely yields results that are particularly noteworthy (a boon for reading accessibility) but as a result are overwhelmingly dull in comparison to Power Player's equivalents. For listeners that prioritize usability and readability but would still prefer just a spot of whimsy in their full-player, there are few other players than Cs Music's that perfectly fit that bill.

Through many years of ups and downs, Cs Music distilled itself down from its quirky original form into what I'd consider to be the ideal "simple" general-purpose player. With its generous use of lightly touched stock components, traditional interface, and relative lack of customization, it firmly feels like a native iOS app. While such an approach runs the risk of feeling lifeless like [Dot Music], Cs Music gracefully avoids this with a dash of colorful whimsy in its full-player, consistent but inoffensive light-blue branding, new "Activity" page, and more. If you prefer a bit more personality in your general-purpose player at the risk of visual simplicity and visual cohesion with stock iOS apps, others like Power Player are more likely to satisfy. Alternatively, if you prioritize stock components and brutalist interface design to the detriment of the player's visual and functional potential, you're sure to love Dot Music. However, for those that prefer a bit of both, Cs Music teeters right in the center in delicate balance.

#### iPad Experience

Cs Music does indeed support the iPad and follows an entirely functional but arguably lazy "scale to fit" approach in its implementation. As far as I can tell, there's no special accommodations or interface optimizations taking advantage of the iPad's larger screen; take whatever view you see on the iPhone, scale up, and you know exactly what the equivalent view on iPad looks like. This becomes especially disappointing when browsing through pages like "Artists" in landscape mode, which yields a massive swath of whitespace which could have been more appropriately utilized with multiple columns like in Apple's Files app.

The full-player suffers the most from a lack of iPad-specific attention. While I'm quite fond of the full-player in portrait mode (I actually prefer the scaling here since I love massive album art in full-players), the landscape experience is a different story. In landscape, instead of reflowing the album art and controls to sensibly leverage the new dimensions, the full-player horizontally squishes and stretches as-is to fill the screen. It recalls memories of the ["squat" third generation iPod Nano](https://apple.fandom.com/wiki/IPod_nano_(3rd_generation)), which is not a good thing at all.

With all that said, the iPad experience is entirely usable and fully featured with no noticeable performance issues or drawbacks aside from its lack of screen size optimizations. Coming from other apps like Plum and Musens which suffer show-stopping performance issues on iPad, or the plethora of others that don't even bother supporting the iPad at all, Cs Music at least providing a reasonably functional and performant option is appreciated. However, if you want a true iPad-optimized experience, you're best served looking elsewhere.

#### Widgets

At this time, Cs Music does not provide widget support.

#### New This Year

Right off the heels of a long-awaited redesign in 2020, Mike Clay kept pace this past year with some appreciated UI refinements and brand-new features. Specifically of note:

* The volume slider is now always visible in the full-player (previously, it required a "tap to expand" or a "tap and slide" to adjust like a [Touch Bar](https://www.imore.com/best-touch-bar-apps-macbook-pro) slider).
* A new "Activity" page may now be added to the menu bar, featuring a handful of common discovery collections like "Recently Added".
* All entities other than Songs may now be "Pinned" to be displayed both as a scrollable "pin reel" at the top of their respective pages and in the "Pinned" discovery collection in the new "Activity" page.

The new "Activity" page is a brilliant addition and finally addresses my long-held gripe about a lack of discovery features in Cs Music. Listeners that prefer to only display traditional pages like "Songs" or "Albums" may of course continue to do so, but for those that are willing to sacrifice a tab bar slot for discovery purposes, this capability is a welcome addition. This page contains a static list of discovery collections that—while they may be rearranged—may not be manually hidden or removed. The discovery collections currently offered are:

* Loved
* Pinned
* Recently Added
* Recently Played
* Recently Updated
* Top Rated

Thankfully, as you might assume, discovery collections with no contents (e.g. the "Pinned" collection if you don't yet have any pinned entities) are automatically hidden from view. Incredibly, "Recently Added" and "Recently Played" may be configured via a button in their headers to populate using any one of the following entities:

* Songs
* Albums
* Artists
* Composers
* Genres

Coming from Power Player's restrictive "Home" page (which locks you into "Recently Added" only displaying albums and "Recently Played" only displaying songs), it's fantastic to see Cs Music embrace the accessibility benefits gained from allowing this to be listener configurable; it doesn't matter what your particular tastes are with regards to "recent" content, you can easily adjust Cs Music to meet your needs. While decisions like this must of course be made with care to ensure Cs Music's renowned simplicity doesn't tarnish, Cs Music rarely yields to customization options like this, so the few times the scales tipped the other direction haven't yet been enough to warrant any concern.

The new pinning feature was yet another pleasant surprise to see come to Cs Music this year. It tastefully stays out of sight for listeners that don't care to use it or just want the "simple player" experience without any frills. However, for the more engaged or curious listener, the ability to pin items is just a "tap and hold" context menu away on practically every browser in the app[^practically-every]. Once you've pinned your first item, a new "Pinned" collection will automatically appear in the "Activity" page and at the top of that browsing page. Like with [Plum]'s "Pinned" feature this year, it's genuinely handy to be able to prominently display a particular album, artist, or other entity. These could perhaps be all-time favorites, or something that's currently in heavy rotation you'd like the quickest access to, or maybe even to serve as a reminder to check something out later when you've got more time. Regardless of the pinning reason, it's a simple but deceptively flexible system that I'm now finding harder and harder to live without in other players.

Coming from last year's redesign, I frankly wasn't expecting much movement on Cs Music other than some minor UI refinements. Given Cs Music's healthy but modest historical release cadence, the fact we received a brand new discovery-focused "Activity" page along with a new app-wide pinning feature so quickly and artfully after a major redesign is a [surprise, but a welcome one](https://www.youtube.com/watch?v=ca-e5MrVbVU). There's not much smoke hinting at where Cs Music will go next, but after two years of heavy maintenance it's clear it's on the move.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Cs Music’s lyrics support is the now “old school” approach of hiding the album art with a translucent scrollable lyrics view, but the feature exists and works well enough.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
  <dt><span class="bullet">:heavy_check_mark:</span> iPad support</dt>
  <dd><p>Its iPad version performs just as well as its iPhone counterpart, and the lack of screen size optimizations only yield minor cosmetic and usability annoyances and nothing show-stopping like on <a href="https://www.mpxeq.com">MPX EQ</a>’s iPad version. It’s not great, but I’m still happy it exists.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Discovery features</dt>
  <dd><p>The introduction of the “Activity” page this year was an outstanding achievement, and fully caught up Cs Music’s discovery capabilities to its peers.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>The extremely understated full-player dynamic theme is not fully to my taste, but there’s no denying its light hand helps it yield much more consistently pleasing results than other players with more inconsistent results like <a href="https://mixtapesapp.com">Mixtapes</a>.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Album-focused features</dt>
  <dd><p>The lack of support for my preferred album sorting method (Artist > Chronological) in the “Albums” page continues to be a disappointment, but the ability to customize the new discovery collections in the “Activity” page to display albums and the existing ability to browse albums with a grid helps make up for it.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
</dl>
</div>

### ![Doppi's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/icon.png "Doppi's iOS app icon"){: .inline-app-icon } Doppi

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-usage-poster.jpg" alt="Video demonstrating Doppi's usage in light mode" title="Demonstrating Doppi's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-album-view.webp">
  <img type="image/jpeg" title="Doppi's light theme album-view" alt="Image of Doppi's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-full-player.webp">
  <img type="image/jpeg" title="Doppi's light theme full-player" alt="Image of Doppi's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-usage-poster.jpg" alt="Video demonstrating Doppi's usage in dark mode" title="Demonstrating Doppi's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-album-view.webp">
  <img type="image/jpeg" title="Doppi's dark theme album-view" alt="Image of Doppi's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-full-player.webp">
  <img type="image/jpeg" title="Doppi's dark theme full-player" alt="Image of Doppi's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppi/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/doppi/id1002899671">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Reflecting on Doppi at the end of 2021 fills me with great sadness; after many long years of service, [Doppi officially went into maintenance mode on April 6th, 2021](https://twitter.com/doppi_app/status/1379581398114312199) after Radu Dutzan—Doppi's developer—accepted a position at Apple. I'm thrilled his hard work paid off with an opportunity to continue his craft in Apple's own apps (some of which like [Music.app] sorely need), but it's nonetheless difficult to accept this sudden and bittersweet end for Doppi. However, this is where my grieving will end; what Doppi has earned and deserves after all these years is a celebration of its legacy as it enters indefinite retirement, along with a proper showcase of the new features that released earlier this year prior to Radu's new career at Apple.

To describe Doppi as a general-purpose player with the usual suspects like "Albums", "Artists", and "Songs" accessible via tabs on a bottom navigation bar is both accurate and woefully inadequate. Despite leveraging a standard organizational foundation, there's not a single visible element or intractable control in Doppi that I'd describe as "stock". This in and of itself is not particularly unique (for example, both [Plum] and [Doppler] are also general-purpose players that opted for a custom UI), but Doppi is arguably the most successful in this approach. Doppi manages to strike the near-impossible [butter zone](https://www.theincomparable.com/theincomparable/200/) perfectly situated between [iOS's native design guidelines](https://developer.apple.com/design/human-interface-guidelines/ios/overview/themes/) and brand individuality, where every other player utilizing this approach arguably falls short of this goal to varying degrees.

For example, Doppi's unconventional tab bar allows it to be completely dynamic and hold as little as one or as many as all tabs in Doppi, allowing for a surprising degree of customization. For example, I *just* display the "Albums" tab, while other listeners might opt to instead just display "Composers" and "Songs", but someone else may want to display *all* tabs in the bar at all times. Whatever your preference, Doppi's dynamic tab bar accommodates. Custom menu solutions like this tend to feel exceptionally out of place in iOS, typically due to utilizing a vertical menu hidden behind a hamburger menu and/or swipe gesture. However, Doppi sidesteps this issue entirely with its pill-shaped, horizontally scrollable list of tab labels. This provides instant access to users like myself that just want no more than a handful of tab bar items while still allowing all tabs to be a quick horizontal scroll away for users that want it all. No accursed hamburger menu or undiscoverable swipe gesture required.

Then there's Doppi's radical full-player, starting with it's "minified" form. It's the only player I know that successfully communicates draggability with a "notch" pill similar to the one used by stock iOS apps. In a stroke of genius, Doppi also leverages this draggability notch as the mini-player's progress bar, which upon launching the full-player gracefully and dazzlingly scales up and into position as the full progress bar. The effect is jaw-dropping and needs to be dragged to be believed, in no small part due to Doppi allowing full gesture control throughout the entire animation. I cannot emphasize enough how much this smooth and magical flourish elevate's Doppi's experience, Doppi is worth the download just for the opportunity to try it out for yourself.

The full-player itself is just as startling as the gorgeous animation that launches it. Instead of a flat, singular view containing the album art and controls like nearly every other player, Doppi's full-player features two discrete cards floating above a translucent album art background. The top card displays the album art, while the bottom card houses the player's controls. The bottom card remarkably utilizes every square inch of its space without feeling cluttered; it features the textual metadata (song, album, and artist), playback controls (including shuffle and repeat), volume control, an airplay button, and even a "Love" button. That's not all though, a quick button tap or swipe gesture sweeps the two cards up and away to reveal either the playback queue or the track's lyrics. This makes the entire full-player experience feel alive, vibrant, and responsive in a way no other player has yet to capture.

In what is sure to be a tremendous feature for certain users, Doppi offers full independence from Music.app. Instead of forcing users to manage and sync their libraries with Apple's music apps, users can instead add and manage music directly in Doppi. Doppi supports adding music directly through the Files app, Airport, or the Share Sheet from another app. While these are all still Apple-centric methods of adding your music, having any kind of alternative means of library management in Doppi is tremendous and sure to be a killer feature for users wishing to finally untether their iPhone from Apple's shoddy music library solution.

In terms of customization, aside from allowing control over the tab bar's contents, Doppi provides a respectable number of cosmetic and functional settings. While they're nowhere near the level that [Albums], [Marvis Pro], and some other players provide, the few settings that *are* provided are tremendous, such as the ability to change the album sorting method, app accent color, app icon, and more. That means listeners that want to change the entire look of Doppi from the icon down to the accent color have full control to do so, a great boon for listeners wishing to express individuality with a consistent aesthetic or simply prefer Doppi in a different hue.

While Doppi's journey comes to a close this year and will remain so for the indefinite future, the tremendous leaps in design and user experience briefly highlighted above that Doppi introduced through its life assures it will remain competitive for years to come despite its promised lack of activity. There's no greater testament to Doppi's legacy and Radu's skills in the craft than that. Many people make apps. Few make them great, and fewer still achieve what Radu did with Doppi; making them timeless.

#### iPad Experience

Unfortunately, while an iPad-aware release of Doppi with optimizations for larger displays was in alpha testing earlier this year, Doppi's transition into maintenance mode following Radu's start at Apple put those plans indefinitely on ice. While a few lucky testers caught a brief glimpse into what that potential release may have looked like, there's no public Doppi version that supports the iPad, making it perhaps the biggest casualty of Doppi's abrupt maintenance mode transition.

#### Widgets

There was neither widget support introduced with iOS 14's release in 2020, nor any inkling such features were in development due to their complete absence in the beta builds through 2021. While I can't claim to know for sure, I'd wager there was no plans for widget support this year even if Doppi had continued development all the way through.

#### New This Year

There were three notable additions early this year that are worth highlighting:

* Support to sort albums by "Recently Added"
* Ability to create Doppi-exclusive playlists and import / "copy" playlists from Music.app
* Ability to view and edit track metadata

My single unadulterated complaint about Doppi last year was its continued lack of any kind of "Recently Added" collection or sort order, so I'm beyond thrilled to finally see it made its way to Doppi. It's exposed as a sort option in the "Albums" tab alongside the existing sort "By Album Title" and "By Artist Name" options, and works exactly as described by sorting your entire library in reverse chronological order with respect to the date they were added to your library. While it's disappointing we didn't get a proper discovery page this year like in [Cs Music], having any means of browsing now by recently added is appreciated.

Next up is the ability to now create playlists right within Doppi itself, though it's important to note that playlists created this way are not created in the Music.app library. Playlists created in Doppi are Doppi exclusive, and are therefore inaccessible to any other apps. Seeing as [Power Player] introduced the ability to create playlists this year as well but did so by writing created playlists into the Music.app library (and therefore allowing playlists created in Power Player to be accessible in other players), Doppi's take pales a bit in comparison. While the reason for the decision to isolate Doppi's playlist creations from Music.app is most likely tied to Doppi's optional support for independent library management, I can't help but feel Music.app playlist integration could be achieved while still preserving the ability to make Doppi-exclusive playlists for those with independently managed libraries by separating the playlists into two groups like Power Player's solution.

Finally, this year Doppi introduced a new "Get Info" track metadata editor. For users with independently managed libraries in Doppi, you now have the ability to edit track metadata like genre, album artist, and more right in Doppi itself. While users with libraries sourced from Music.app can't edit these fields in Doppi due to Apple's Music.app API limitations, that metadata is still available for you to view. While not an earth shattering feature for anyone that doesn't independently manage their libraries, it's nonetheless nice to see "Get Info" windows becoming an industry standard over the past year in Cs Music, Doppi, and others.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Light &amp; dark themes</dt>
  <dd><p>Light and dark modes are supported, have the optional ability to respect the system’s appearance setting, and also support your choice of “Black” or “Gray” for the dark mode appearance. The degree of simple theming control provided by Doppi is exceptional.</p></dd>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>It’s the most dynamic and fluid full-player available, an outstanding achievement.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span>Lyrics support</dt>
  <dd><p>The lyrics are full screen, editable within the app, and gorgeously accessible directly from Doppi’s dynamic full-player. The only thing keeping it back in my mind from being gold standard is the inability to read the lyrics beside the album art in landscape mode.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> Album-focused features</dt>
  <dd><p>The grid layout in the “Albums” page is a great start, but a lack of my preferred album sorting method (Artist > Chronological) and any other album-focused features leave me wanting.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> iPad support</dt>
  <dt><span class="bullet">:x:</span> Discovery features</dt>
  <dd><p>The release of a “Recently Added” sort option this year was necessary, but nowhere near sufficient.</p></dd>
</dl>
</div>

### ![Doppler's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/icon.png "Doppler's iOS app icon"){: .inline-app-icon } Doppler

<div class="edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/usage-poster.jpg" alt="Video demonstrating Doppler's usage" title="Demonstrating Doppler's usage">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/album-view.webp">
  <img type="image/jpeg" title="Doppler's album view" alt="Image of Doppler's album view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/full-player.webp">
  <img type="image/jpeg" title="Doppler's full-player" alt="Image of Doppler's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/doppler-mp3-flac-player/id1468459747">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

When narrowly observing Doppler as "just" an iOS music player, it's easy to lose the forest in the trees. What you'll immediately notice its custom, permanently dark visuals and singular "Library" tab like in [Music.app]. You may also notice its prominent first-class independent library management, which earned a coveted spot as the "Import" tab in the tab bar. These critical design choices and many others like it certainly differentiate Doppler from being considered a traditional player like [Power Player] or [Cs Music], but at the same time it's purposefully not as radical a departure as to be considered niche like [Albums] or [Vinyl Fetish], situating Doppler squarely in a strange twilight zone between the two.

To be clear, this positioning generally works in Doppler's favor. To start—while Doppler's permanent dark theme's lack of respect for the system's appearance continues to be my single biggest gripe with Doppler—the design's undeniably lovely. It features a not-quite-black background that looks great on both OLED and traditional LED displays, and works wonderfully to distinguish Doppler from its peers. Additionally, while permanent dark themes run the risk of feeling too cold, Doppler gracefully averts this thanks to generous splashes of color in its album views, which feature dynamic album art theming akin to [iTunes 11](https://panic.com/blog/itunes-11-and-colors/) and Power Player. It's a fun bit of whimsy that helps break up Doppler's otherwise serious demeanor.

<figure class="three-images ios-screenshot">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/red.webp">
  <img type="image/jpeg" title="The album view with a predominantly red record" alt="Image of the album view with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/red.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/green.webp">
  <img type="image/jpeg" title="The album view with a predominantly green record" alt="Image of the album view with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/green.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/blue.webp">
  <img type="image/jpeg" title="The album view with a predominantly blue record" alt="Image of the album view with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/blue.jpg">
</picture>
</a>
<figcaption>Doppler’s album view. Like Power Player, it’s heavily inspired by <a href="https://panic.com/blog/itunes-11-and-colors/">iTunes 11’s gorgeous dynamic album display theme</a>.</figcaption>
</figure>

The singular "Library" tab—while a huge complaint of mine on Music.app, surprisingly works on Doppler and again helps it stand out. Where Music.app's bland "Library" tab felt like an afterthought after first dedicating the majority of tab space and development attention towards Apple Music, Doppler's "Library" tab is front and center with a strongly opinionated, carefully designed interface. Doppler's "Library" tab features two discrete sections: the top section contains a "Recently Added" menu (which can optionally display recently added albums as a horizontally scrolling list) and an "All Songs" menu item which is the equivalent of the "Songs" browser you'd find in traditional players. The second section below this is the primary library browser, which displays a table of either the artists or albums in your library. That's the key ingredient that elevates Doppler singular "Library" tab above Music.app's sorry attempt: In Music.app, you have no control over what's displayed in the bottom section; you're stuck with "Recently Added". However, with Doppler, "Recently Added" can *optionally* still be visible in the top section, freeing up the bottom section to display your library. If you primarily browse your library through "Recently Added" and either "Albums" or "Artists" like I do, Doppler's Library tab is fantastic.

However, such an opinionated design necessarily fails to meet the needs of other listeners. If you primarily explore your library through "Songs", there's currently no way to use it for your bottom section; "Songs" is forever stuck as a menu item in the first section, treated like a second-class citizen to albums and artists. Additionally, if you're a listener that frequently hops between browsing by albums or artists, the *only* way to do this in Doppler is to trudge into settings and flip the "Library Screen" setting back and forth from "Artists" and "Albums". If either of these describe your listening habits, you're likely better off exploring other players for the time being.

What Doppler arguably misses in terms of "Library" tab customization it makes up for in droves with its staggering independent library capabilities. In addition to the expected integration with Music.app's library, Doppler optionally supports accepting music through following methods, organized in descending order of subjective usefulness:

* **Importing from Wifi** through a peer-to-peer connection to a nearby computer. While not necessarily the quickest way to import a single song or album, it's a wonderful, platform independent option for importing whole libraries worth of music in one batch.
* **Importing from Cloud services** via the Files app picker modal, so long as the cloud service you want to import from is present in the Files app as a "Location" (all major cloud services like [Dropbox](https://www.dropbox.com), [Onedrive](http://onedrive.live.com), etc. support this). This arguably isn't the best overall method since the Files app makes it somewhat cumbersome to select multiple audio files, but it's a nice option to have if you just need to quickly import a couple songs or a new album.
* **Importing with AirDrop** by simply selecting Doppler in the "Open with..." iOS prompt after accepting the drop. Like with importing from cloud services, this is most appropriate for small batches of audio files and not a great choice for importing whole libraries worth of music. Note this is of course only accessible to devices within Apple's ecosystem.
* **The iOS Share Sheet** via a handy "Add to Doppler" button when listening to an audio file at a direct URL in Safari. While I'm sure there's niche cases where this is nice to have, it's undeniably the least broadly useful means of importing since only a single audio file at a time can be imported this way.
* **Importing from a URL**, which requires the URL points directly to a file.  This is effectively the same thing as the "Importing from URL" option, but accessible inside Doppler itself.

This comprehensive support for importing music directly into Doppler is outstanding, in no small part due to the top two arguably most useful options utilizing protocols independent of Apple's ecosystem. Thanks to Doppler's extensive support, if you dislike using iTunes or Finder to manage and sync your iPhone's music library, Doppler is without question the best option available today.

With this in mind, Doppler's core strength becomes apparent once we step back and take into account the brand as a whole. Over the past year, [Ed Wellbrook](https://twitter.com/edwellbrook)—Doppler's developer—toiled away to release a brand new [Doppler macOS app](https://brushedtype.co/doppler/) and companion [Doppler Transfer macOS menu bar utility](https://brushedtype.co/doppler-transfer/). While technically out of scope to cover in detail here, I do believe these two new releases are essential to understanding not only Doppler the iOS app but Ed's long term vision for the brand as a whole. Doppler on macOS is a simple player and library management app. It's fairly barebones, but given the long history of bloat users endured with iTunes, having something as focused as Doppler's presentation on macOS is at the moment refreshing. Then there's Doppler Transfer, a menu bar utility to easily send music to Doppler on iOS either by WiFi or USB, and works remarkably well. While the ability to "sync" Doppler on macOS with Doppler on iOS doesn't yet exist (it's simply a one-way transfer at the moment), given that Doppler on macOS is both a player and full-blown music library manager and the fact a separate transfer utility already exists, I'd argue the next step and logical conclusion of this newly formed ecosystem is full Doppler-to-Doppler syncing capabilities just like iTunes used to offer and do so well back in the old days.

And with that, it all comes together; Ed's not just building an app, he's building a platform that offers both native iOS & macOS apps *and* syncing capabilities completely independent of Apple's Music apps, the first third-party solution of its kind to strive for this. For just a single developer, that's a Herculean task that demands admiration. While I continue to use Apple's music ecosystem for my library management for the purposes of keeping my finger on the heartbeat of iOS's music player community, I continue to detest every aspect of Apple's music platform. To finally see a viable alternative with Doppler for what continues to be a niche audience that love owning and managing their own music libraries is a sight I never dared to dream I'd see in my lifetime. The macOS and iOS apps themselves are far from perfect, but nonetheless the Doppler platform as a whole is fascinating and easily the most exciting thing happening in the broader Apple third-party music player ecosystem today. While it's yet to be seen if Ed has the bandwidth necessary to properly build out and support the expanded Doppler platform—especially given the relatively slow rate of new features and releases compared to its peers—I find myself reflecting on Doppler's progress this year with nothing but optimism for its future.

#### iPad Experience

Regrettably, there continues to be no Doppler iPad support.

#### Widgets

Like last year, no widget support.

#### New This Year

While Doppler enjoyed a shocking seventeen releases this year, the majority of which were bug fixes and performances improvements. With that said, there were a handful of notable feature additions this year, most of which focused on making independently managed Doppler libraries feel closer to a first-class citizen in the iOS ecosystem. Arguably, the most interesting of this year's changes are:

* CarPlay support
* Siri integration
* Audio spatialization support

Starting in 2.3, Doppler now provides a CarPlay app. Previously, listeners that independently managed their libraries with Doppler instead of through Apple couldn't access that music through Apple Music's CarPlay app, so up until now there's been no way for these listeners to access and play that music through CarPlay. For players that only use Music.app's library for their content, listeners could always just fall back to CarPlay's Music.app, but Doppler listeners with cord-cut libraries simply couldn't until this year. With this change, however, the last remaining issue holding back Doppler's independent library management for heavy CarPlay users is swept away.

Next up is Siri Command & Siri Suggestion support; again with 2.3, Doppler now not only exposes content in Spotlight searches but also exposes control with Siri. This year, you can now speak commands such as "Hey Siri, play [*Long Lost*](https://music.apple.com/us/album/long-lost/1557584746), the album, in Doppler". Again, while not necessarily a must-have feature for listeners that manage their library with Music.app (since they could always speak commands like this for Music.app even if the third-party player itself didn't offer support), this is yet another barrier that Ed smashed down this year, helping make Doppler-managed libraries feel closer than ever to a first-class iOS citizen.

Finally, as of 2.4.5, Doppler now offers separate control of Apple's recent [spatial audio feature](https://support.apple.com/en-us/HT212182) for multichannel or surround sound audio files, like those mastered with [Dolby Atmos](https://www.dolby.com/technologies/dolby-atmos/). For those unaware, as of iOS 14.5, when playing back Dolby Atmos tracks through supporting headphones, iOS automatically uses a virtual surround sound stage, creating a kind of 3D audio effect despite only listening on physically stereo headphones. This playback feature can also be enabled for nearly any headphone as well, though this requires explicitly enabling it in Apple's Settings app. With 2.4.5, Doppler offers a toggle of its own to control this feature, so listeners that only want it enabled in Doppler but want it disabled system-wide (and visa versa), may easily do so. While admittedly niche, the ability to control this feature at an individual app level is appreciated.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>Doppler’s dark theme looks particularly handsome in its full-player in no small part due to featuring a subtle translucent album art effect.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Album-focused features</dt>
  <dd><p>The “Library” tab can be tweaked to display albums, and albums displayed this way are delightfully sorted by my preferred method (Artist > Chronological). The only thing holding back Doppler from full marks is the continued inability to display albums with a grid layout.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> Discovery features</dt>
  <dd><p>The “Recently Added” section in the “Library” tab is great, but I expect more discovery capabilities nowadays, and this isn’t enough to keep up.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> Lyrics support</dt>
  <dt><span class="bullet">:x:</span> Light &amp; dark themes</dt>
  <dd><p>Doppler unfortunately continues to only offer a dark theme.</p></dd>
  <dt><span class="bullet">:x:</span> iPad support</dt>
</dl>
</div>

### ![jetAudio's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/icon.png "jetAudio's iOS app icon"){: .inline-app-icon } jetAudio

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-usage-poster.jpg" alt="Video demonstrating jetAudio's usage in light mode" title="Demonstrating jetAudio's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-album-view.webp">
  <img type="image/jpeg" title="jetAudio's light theme album-view" alt="Image of jetAudio's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-full-player.webp">
  <img type="image/jpeg" title="jetAudio's light theme full-player" alt="Image of jetAudio's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-usage-poster.jpg" alt="Video demonstrating jetAudio's usage in dark mode" title="Demonstrating jetAudio's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-album-view.webp">
  <img type="image/jpeg" title="jetAudio's dark theme album-view" alt="Image of jetAudio's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-full-player.webp">
  <img type="image/jpeg" title="jetAudio's dark theme full-player" alt="Image of jetAudio's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/jetaudio-hd-music-player/id894888135">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Among the ever-growing pool of third-party music players on iOS, it remains unusual for a player to support deep customization. In terms of sheer quantity of options, only two players boast settings screens rich enough to be considered a customization-forward player, and those are [Marvis Pro] and jetAudio. However, where Marvis Pro's customization focuses on providing listeners the ability to radically restructure the app's browsing navigation, jetAudio's customization does not. Instead, jetAudio's settings empower listeners to adjust nearly every visual and functional aspect of jetAudio's static browsing experience.

Given jetAudio's novel suite of options, it feels fitting to start with its Settings page. The settings are neatly organized into categories, most notably:

* **Browser:** Configure the core browsing experience, such as...
  * Change colors for the background, accent color, and navigation bar
  * Adjust layout, album art size, whether or not to show the album art at all, and more on a per-browser basis
* **Player:** Adjust the full-player experience, such as...
  * How to render the album art (Edge-to-edge? With margins? etc.)
  * Lyrics font size
  * Showing or hiding the various player controls
* **Playback:** Customize the audio playback itself, such as...
  * Whether or not to fade in or out upon playing or pausing
  * The transition type to use (gapless, crossfade, etc.)

This focus on settings and customization comes with the obvious benefits and drawbacks; users comfortable with diving through pages of settings screens to tweak apps to their personal tastes are sure to appreciate jetAudio empowering them to do so, given most players today typically don't meet this need. However, for listeners who'd rather not faff about in settings and simply want an opinionated player whose designer did the "hard work" already for them will likely have a worse experience than if they simply purchased a player that already met their needs "out of the box". Like many things in life, there's no "right" answer here, and whether or not jetAudio's approach is right for you is a deeply personal question that depends on whether or not you enjoy flicking through settings screens and experimenting with their contents.

Turning our attention towards jetAudio's browsing experience, it comes with all the browsers like "Albums" and "Artists" that you've come to expect from a general-purpose player. jetAudio opts for displaying these pages with a vertical menu that slides in from the left via a gesture or the hamburger menu on the top bar. This allows jetAudio the extra space to anchor its mini-player right at the bottom of the app instead of setting it on top of or "floating" above a tab bar as seen in many other players. As mentioned before, each of those browsing pages offer per-page customization to hide album art, adjust font size, change layout style, and more, giving you tremendous control over jetAudio's browsing experience. I love being able to make the "Songs" page display just a plain list without album art, the "Albums" page a x2 grid of my albums, and the "Artists" page a list view with album art, all thanks to jetAudio's settings.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-1.webp">
  <img type="image/jpeg" title="My jetAudio Albums page in light mode" alt="Image of my jetAudio Albums page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-2.webp">
  <img type="image/jpeg" title="My jetAudio Artists page in light mode" alt="Image of my jetAudio Artists page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-2.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-3.webp">
  <img type="image/jpeg" title="My jetAudio Songs page in light mode" alt="Image of my jetAudio Songs page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/light-3.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-1.webp">
  <img type="image/jpeg" title="My jetAudio Albums page in dark mode" alt="Image of my jetAudio Albums page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-2.webp">
  <img type="image/jpeg" title="My jetAudio Artists page in dark mode" alt="Image of my jetAudio Artists page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-3.webp">
  <img type="image/jpeg" title="My jetAudio Songs page in dark mode" alt="Image of my jetAudio Songs page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/dark-3.jpg">
</picture>
</a>
<figcaption>My preferred “Albums”, “Artists”, and “Songs” configurations.</figcaption>
</figure>

To be clear, this system isn't perfect; puzzlingly, despite jetAudio's extensive UI and behavior settings, there remains no way to hide or otherwise disable jetAudio's overly verbose "secondary details" labels. You're stuck with overly noisy details like number of tracks on a given album, number of entities on the given page, and more. While I'm sure these extra details would be appreciated by some listeners, to not provide a setting to quickly flick these details off is curious from an app with options for nearly every other aspect of the visual and functional experience, and is sure to leave listeners who prefer a more "clean" visual experience disappointed.

That brings us to the full-player, which at first blush appears underwhelmingly traditional. The relatively thin font and component sizes bring up strong memories of the iOS 7-era Music.app full-player design, with little deviation or differentiation to show for itself. This first impression is quickly smashed the minute the full-player options tray is first revealed. A staggering bounty of novel and uncommon options await you there, such as an unparalleled in-app equalizer, no less than twenty-five unique visualizers, and even a sleep timer. This tray and the various visual tweaks that listeners can make to the full-player propel jetAudio's initially plain full-player into one of the most engaging and functionally useful available today. Listeners that love carefully tuning their playback response curves or exploring colorful visualizers will frankly find no parallel to jetAudio's extensive and rich offerings. As we've also come to expect with jetAudio, however, the full-player's implementation would benefit from some polish, such as the continued lack of animation for displaying or hiding the options tray (which instead abruptly "blinks" in or out of existence) and the player's relatively stale visual design (particularly for the iconography and typography). Additionally, the full-player is bizarrely treated as a separate "page" you have to swipe from the left to dismiss, and serves as a constant reminder of jetAudio's old age.

So far, we've only scratched the surface of jetAudio's capabilities. jetAudio supports whole suites of hobby features not yet discussed like playback from network shares, rudimentary independent library management, and bewilderingly even a dedicated section for podcasts[^hot-take]. On one hand, this elevates jetAudio beyond a "mere" music player into a single destination audio playback utility, but in that same breath it arguably makes jetAudio bloated from feature creep for anyone looking for "just" a music player. Which side any given listener falls on is both up to their taste and needs; if you are looking for just a reasonably designed music player, jetAudio certainly feels like it threw everything and the kitchen sink in, and you'd probably be better served exploring other third-party players. However, if you are looking for a fully-featured audio playback utility to serve as a one-stop shop for all your audio playback needs or simply crave its niche features like in-app equalizers or visualizers, then jetAudio's kitchen sink can't be beat.

#### iPad Experience

jetAudio fully supports the iPad and largely functions exactly the same as a scaled-up version of its iPhone counterpart but with the special ability to adjust layout not only on a per-browser basis but also on an *orientation* basis. For example, you can choose to display artists as a list when in portrait mode but switch to a grid when in landscape mode. This affordance is arguably a band-aid to the lack of true multi-column support, but given today's overall sad landscape of third-party iPad support, the ability to make landscape use feel more natural in lieu of multi-column support is an acceptable compromise.

With the rest of jetAudio on iPad feeling little more than a scaled-up version of its iPhone counterpart, that only leaves the discussion of the iPad version's performance, which I'm pleased to report is adequate. The performance *is* noticeably worse for the same library on the iPad than the iPhone, but the app's responsiveness never gets anywhere close to the unusable mess [Plum] and [Musens] do on iPad. Assuming you can tolerate a minor performance dip, jetAudio on iPad is a suitable sibling to its performant iPhone counterpart.

#### Widgets

Regrettably, jetAudio's "kitchen sink" approach to feature development continues to not include widget support.

#### New This Year

jetAudio received a small handful of modest updates this year, mostly covering bug fixes and the following tweaks:

* Folders now display album art
* Full-screen visualizer capability along with five new visualizers
* Option to remember and resume playback position for songs longer than a certain length

Folder icons now featuring album art is a welcome addition for listeners who leverage jetAudio's supplementary independent library support, but the change that arguably has the broader impact this year is the new full-screen visualizer capability and the inclusion of five new visualizers. The full-screen visualizer option is absolutely delightful, allowing jetAudio's impressive arsenal of visualizers to take up every square inch of the display. When in full screen, the playback controls remain temporarily overlaid but disappear after a few seconds, leaving just the visualizer with no other distractions. The effect is dazzling and allows new visualizers like Black Hole and Quasicrystal to shine brighter than they ever could when forced into the small album art window like in previous years.

Finally, there's the fascinating new option for jetAudio to preserve playback position for songs longer than an adjustable duration. While undoubtedly a niche feature, this unique ability could prove game changing for listeners with libraries filled with long classical pieces, audiobooks, single-file vinyl rips, or any other kind of abnormally long audio file. Today, every other third-party player resets playback to the beginning when playing a given track regardless of whether or not the file's a minute long or an hour long. For most listeners with libraries rarely containing tracks longer than a handful of minutes, this blanket policy works just fine, but for listeners with substantial variation in track duration, to have the agency for the first time to instruct their player to remember their last playback position for tracks longer than a particular duration is a tremendous quality of life improvement which up until now has been completely unavailable.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>It’s deeply customizable, offers the best in-app equalizer solution to date, supports dozens of visualizers, and now this year supports running those visualizers in full screen. jetAudio sets the bar for full-player functionality.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Lyrics can be toggled on or off by tapping the album art and are badly overlaid onto when activated. It’s pretty hideous, but the feature is there and works.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
  <dt><span class="bullet">:heavy_check_mark:</span> iPad support</dt>
  <dd><p>There’s an iPad version available, and it’s reasonably performant with minimal screen size optimizations. Perfectly acceptable.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Album-focused features</dt>
  <dd><p>The “Albums” browser can be tweaked both to display albums as a grid and to sort by my preferred method (Artist > Chronological). There aren’t any other album-focused features to speak of, but this is certainly enough.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> Discovery features</dt>
  <dd><p>There’s nary a “Recently Added” or “Recently Played” collection to be found, deeply disappointing.</p></dd>
</dl>
</div>

### ![Longplay's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/icon.png "Longplay's iOS app icon"){: .inline-app-icon } Longplay

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-usage-poster.jpg" alt="Video demonstrating Longplay's usage in light mode" title="Demonstrating Longplay's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/full-player.webp">
  <img type="image/jpeg" title="Longplay's full-player equivalent" alt="Image of Longplay's full-player equivalent" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-usage-poster.jpg" alt="Video demonstrating Longplay's usage in dark mode" title="Demonstrating Longplay's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/full-player.webp">
  <img type="image/jpeg" title="Longplay's full-player equivalent" alt="Image of Longplay's full-player equivalent" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/longplay/id1495152002">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Longplay is a niche, album-focused player similar to [Vinyl Fetish] and [Albums]. The player is structurally simple to both; there is just a single, scrollable album grid that—upon revealing the menu with a swipe gesture—can be sorted or sized a myriad of different ways. That's the entire experience, there's no full-player, library browser, or even mini-player. You get a single album grid and different ways to sort or size the items in that grid, that's it.

To speak concretely, Longplay provides the following means of sorting the album grid, all of which are sorted in descending order:

* **Orderliness**, which sorts albums by artist name.
* **Addiction**, which sorts albums by the "amount of time spent listening". Based on this wording and the results I see, it appears this does not consider the raw number of times a record has been listened to and *just* considers the amount of time spent listening. This means long records I listen to occasionally like [*The Epic*](https://music.apple.com/us/album/the-epic/975610456) artificially weigh a heavier "addiction" than short albums I listen to far more frequently, making this sorting option frustratingly inaccurate for my library.
* **Brightness**, a unique sorting ability which roughly sorts albums by the album art's brightness.
* **Negligence**, which sorts albums by how much time has elapsed since you last listened. This option also considers your album star ratings when weighing negligence.
* **Recency**, which sorts albums by date added, exactly like you'd find in [Music.app].
* **Stars**, which sorts albums by star rating
* **Random**, which shuffles the albums randomly like the [Albums] "Home" tab does by default. You can easily re-shuffle the albums again by reselecting this sorting option.

Next up is Longplay's new sizing options, which allow you to scale up or scale down album art based on the following options:

* Recency
* Addiction
* Negligence
* Stars
* Length

The repeats from the sorting feature work exactly as you'd expect, but determines how big or small the album art should be. The "Length" option is the only unique "Size By" item, and again works like you'd expect; longer albums are scaled up, and shorter albums are scaled down.

While I'm largely indifferent to the sorting options available in Longplay (all but the "Brightness" option are available or have rough equivalents in many other players), I'm quite fond of the new "Size By" option in principle, particularly for sizing albums by duration. It's one of the few things Longplay does better than [Albums]; Albums buckets records into separate menus by duration, but Longplay instead visually represents this duration with the size, making library scans by duration quick and incredibly intuitive. Although, as an unavoidable consequence of the dynamic nature of the "Size By" option, the bottom half of the album grid typically contains large swaths of haphazard blank spaces, and it looks absolutely terrible. If you've ever visited an image-rich website which failed to load its style sheet, that's more or less what Longplay's new "Size By" option looks like once you start scrolling down.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-1.webp">
  <img type="image/jpeg" title="Example 1 of poor Longplay layout results in light mode" alt="Image of Example 1 of poor Longplay layout results in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-2.webp">
  <img type="image/jpeg" title="Example 2 of poor Longplay layout results in light mode" alt="Image of Example 2 of poor Longplay layout results in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/light-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-1.webp">
  <img type="image/jpeg" title="Example 1 of poor Longplay layout results in dark mode" alt="Image of Example 1 of poor Longplay layout results in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-2.webp">
  <img type="image/jpeg" title="Example 2 of poor Longplay layout results in dark mode" alt="Image of Example 2 of poor Longplay layout results in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/dark-2.jpg">
</picture>
</a>
<figcaption>This looks like something broke, not an expected result.</figcaption>
</figure>

Perhaps the most controversial aspect of Longplay's design isn't the choice to have a single, adjustable album grid, but rather the lack of dedicated full-player. Upon tapping an album in the grid to play, the album enlarges, a thick border surrounds the art, and a single pause button appears in the bottom-right corner of the art. That's as close as you get to a mini or full player in Longplay. There's no lyrics view, no skip/previous buttons, no track list, or anything else listeners have come to expect as music player staples. That means if you want to resume a partially completed record or accidentally tap and start another record in the grid, there's no way within Longplay to get back to your previous place, playback in Longplay **always** starts at the very beginning of the record. To me, this is the most egregious aspect of Longplay's design, it makes it borderline unusable for anything other than perhaps some fun ways to browse your library before deciding to play it in a "real" player that gives you proper playback control. However, this hardly seems worth hopping over to Longplay to do, since competitors in this niche space like [Albums] offer nearly every sorting discovery feature Longplay does but with the tremendous accessibility gains from providing a real full-player and browsable track list. In the current landscape, Longplay simply doesn't provide enough value to justify its steep accessibility deficit. By only providing a play/pause button, Longplay is simply not useful enough for playback, which I can't help but feel was a foolish mistake to make in a music player. While Longplay doesn't appear to be going the way of abandonware like the similarly niche [Jams On Toast] did thanks to a handful of releases this year from Adrian Schoenig—Longplay's developer—I can't help but see Longplay as it exists today as unreconcilable compromise.

#### iPad Experience

Longplay officially supports the iPad with an experience largely similar to the iPhone with one key difference: instead of a vertically scrollable album grid, the grid is *horizontally* scrollable on the iPad. Like on iPhone, the menu remains a background layer accessible with a swipe gesture, which on iPad makes it impossible to display with the gesture unless you scroll the grid all the way back to the left starting position. Thankfully, to work around this, a new menu button reveals itself once you start scrolling to the right, which upon tapping displays the navigation menu as a contextual popup. However, I can't help but feel this is an inelegant workaround for the inherently poor design choice to make the grid horizontally scrollable while preserving the original menu reveal gesture.

There's not much else to say about the Longplay iPad experience, it's largely the same experience as what you get on iPhone. If you already love Longplay on iPhone, you're sure to love it on iPad, though otherwise there's nothing here that would change your mind.

#### Widgets

Longplay's widgets remain unchanged from last year.

For those new to Longplay, Longplay offers a single widget class for both small and medium sizes, which display an album grid similar to what's available in the app itself. Visually, there's a spot of whimsy in the small widget with a slight perspective tilt, along with an optional sort name label for both sizes. Aside from that, there's no other visual flair available aside from the album art itself.

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/medium-widget.webp">
  <img type="image/png" title="Longplay's medium widget" alt="Image of Longplay's medium widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/medium-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/small-widget.webp">
  <img type="image/png" title="Longplay's small widget" alt="Image of Longplay's small widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/small-widget.png">
</picture>
</a>
</div>
</div>

For both widgets, you have your choice of sorting method much like in the app, but with an additional option exclusive to the widgets: "Different day, different order". This option cycles through the other sorting methods, choosing a different one for any given day.

Additionally, both widgets support your choice of tap action, including:

* **Play**, which launches Longplay and either begins playing the tapped record for the medium widget or begins playing a random record roughly near the top of your library based on the widget's selected sort option.
* **Play on...**, which launches Longplay and throws up iOS's Airplay / playback source modal. Playback like described for the "Play" tap action begins upon selecting a source and dismissing.
* **View albums**, which launches Longplay with the widget's active sorting option. No automatic playback occurs for this option.

While the medium widget size is perfectly reasonable, the small widget is only really useful if you want a weighted random album to be played based on your sort preference instead of the album you physically tapped[^api-limitations]. The medium widget does indeed allow discrete albums in the grid to be tapped and have your selected tap action applied to it, arguably making the medium size the more broadly useful of the two sizes.

While Longplay's widgets are a perfectly functional snapshot of the app's design and function, they have a fatal flaw; the widgets' album art grid is bewilderingly and frustrating low resolution, making Longplay's widgets look and feel cheap compared to the premium, high resolution album art rendered in its peers' widgets.

#### New This Year

This year, Longplay received three releases, among which is a minor release containing a handful of new features, notably:

* A new "Size By" option
* A new "Random" sort order option
* Alternative app icons

By far the biggest addition this year was the inclusion of the new "Size By" feature. It offers many of the same options already available in the "Sort By" setting, only this setting adjusts each album's size in the grid with respect to the selected option. For example, if selecting the existing "Recency" option in the "Size By" menu, albums recently added are rendered bigger in the grid and albums added long ago are rendered smaller. As touched on in the overview above, while this new feature is great in theory, its implementation leaves a lot to be desired; it tends to leave massive swaths of scattered blank space between records as you scroll through the grid, much like a webpage that failed to render correctly.

The new "Random" sort order is a nice addition, allowing listeners to randomly shuffle their library grid as many times as they want with just a tap, and does wonders to break up the organizational staleness that necessarily settles in with deterministic sorting.

<div class="one-image" style="max-width:520px;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/alt-icons.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/alt-icons.webp">
  <img type="image/jpeg" title="My jetAudio Albums page in light mode" alt="Image of my jetAudio Albums page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/longplay/alt-icons.jpg">
</picture>
</a>
</div>

Finally, Longplay now offers a generous assortment of alternative app icons to choose from. The new red and black options look slick, and the Pride/six colors variant are also visually pleasing and appreciated. While I personally love the original yellow icon and likely won't switch anytime soon, these are an overall handsome set of alternatives and are sure to delight listeners that love customizing their home screens.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
  <dt><span class="bullet">:heavy_check_mark:</span> iPad support</dt>
  <dd><p>I have my issues with the implementation, but Longplay does indeed support the iPad, and the iPad version is performant and fully functional.</p></dd>
    <dt><span class="bullet">:heavy_check_mark:</span> Discovery features</dt>
  <dd><p>Again, I have my issues with Longplay’s implementation, but there are plenty of discovery capabilities exposed via sorting and sizing options. While only a couple are unique to Longplay, they do their stated job well.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> Album-focused features</dt>
  <dd><p>There’s no denying the app is album-focused due to its grid layout and emphasis on album art. However, despite it’s plentiful sorting options, my preferred method (Artist > Chronological) is absent.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> Lyrics support</dt>
  <dt><span class="bullet">:x:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>There is none.</p></dd>
</dl>
</div>

### ![Marvis Pro's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/icon.png "Marvis Pro's iOS app icon"){: .inline-app-icon } Marvis Pro

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-usage-poster.jpg" alt="Video demonstrating Marvis Pro's usage in light mode" title="Demonstrating Marvis Pro's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-album-view.webp">
  <img type="image/jpeg" title="Marvis Pro's light theme album-view" alt="Image of Marvis Pro's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-full-player.webp">
  <img type="image/jpeg" title="Marvis Pro's light theme full-player" alt="Image of Marvis Pro's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-usage-poster.jpg" alt="Video demonstrating Marvis Pro's usage in dark mode" title="Demonstrating Marvis Pro's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-album-view.webp">
  <img type="image/jpeg" title="Marvis Pro's dark theme album-view" alt="Image of Marvis Pro's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-full-player.webp">
  <img type="image/jpeg" title="Marvis Pro's dark theme full-player" alt="Image of Marvis Pro's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/marvis-pro/id1447768809">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

When all's said and done, every player on the market today "is what it is"; the developer had a vision for the browsing and playback experience their app would provide, and then they developed a player that strove to meet that vision. When listeners are lucky, the developer spent some extra time providing settings to lightly tweak aspects of their player's appearance and behavior, but aside from some very rare exceptions, their app's fundamental browsing capabilities remain unchangeable. To be clear, this is partially what makes exploring the world of iOS music players so enjoyable; it's fascinating to explore the diverse ways developers answer the deceptively complicated question "how do listeners want to browse their library?".

Marvis Pro is different. Instead of trying to answer that question either for as wide an audience as possible like general-purpose players such as [Cs Music] or for as narrow an audience as possible like niche players such as [Vinyl Fetish], Marvis Pro's developer—[Aditya "Addy" Rajveer](https://twitter.com/AdityaRajveer)—stepped back and asked an entirely different question: "how can I make a player that allows listeners to browse their library *however they want*?" The answer to that question is Marvis Pro, which sports a groundbreaking section customization engine that fully empowers you to create the player of your dreams.

To speak concretely, upon launch, Marvis Pro funnels listeners into its "Home" landing page, which at first glance is filled with some reasonable discovery collections like "Recently Played". A quick tap of the hamburger menu at the top left or a left-to-right swipe gesture reveals Marvis Pro's menu, which includes the following items addition to the "Home" (most of which can also be trivially hidden or reorganized, if desired):

* Artists
* Albums
* Songs
* Playlists
* For You (powered by Apple Music)
* Genres
* Composers
* Compilations
* Settings

If this is where your exploration ends, you may determine Marvis Pro is simply another general-purpose player with a tasteful custom interface, akin to [Doppi] or [Plum]. However, a closer inspection of the "Home" page reveals a deeper story. Each of the discovery sections present on the page are built using Marvis Pro's modular section engine. Much like [LEGO](https://www.lego.com) blocks (or [erector sets](https://en.wikipedia.org/wiki/Erector_Set) for those "of a certain age"[^dad]), Marvis Pro provides listeners the fundamental building blocks to make their own ideal "Home" page, and what Marvis Pro ships with by default is simply a complete real-world example of what you could potentially build with those blocks.

In total, there are over a dozen different section types you can use as a starting point for any new sections you create. For local-only libraries, those include:

* Recently Played (Songs, Albums, Stations, or Apple Music)
* Recently Added (Songs, Albums, or Playlists)
* Most Played (Songs, Albums, or Artists)
* Top Rated (Songs or Albums)
* Loved (Songs, Albums, or Playlists)
* Forgotten (Songs or Albums)
* Library (Songs, Albums, Artists, etc.)

For Apple Music subscribers, additional section types like "For You", "Top Charts", and other classic Apple Music sections are available, as well.

Of course, simply providing a lot of different section types to choose from isn't particularly groundbreaking at this point, [Power Player] and [Cs Music]'s "Home" pages are functionally similar in this regard. What really sets Marvis Pro apart is the staggering depth of visual and functional customization it provides for those sections.

On any particular section, here's just a sampling of what's available as simple toggles and drop-downs:

* Change the sort type from a generous list of ten different options
* Choose which additional metadata is appended to the album's secondary details (e.g. time since last listen, year of release, etc.)
* Switch between list or grid layout (which have their own nested options such as the ability to adjust the number of columns and rows displayed)
* Select preferred artwork type (curved, flat, or circular)

Again, while these settings are indeed powerful and already provide listeners a tremendous degree of flexibility in their "Home" page designs, this only scratches the surface of what you can build with Marvis Pro's sections. The real power comes from the "Smart Rules" feature available for nearly every section type. This rules engine works similarly in concept to "Smart Playlists" in iTunes, "Smart Mixes" in [Mixtapes], and "Quick Actions" in [Albums]. With it, you can specify any number of filters interwoven and grouped together with any number of sorting actions or limits. Let's look at a basic example; let's say I want to create a section that contains albums from 2021. All I would need to do is create a new "Smart Rule" filter where `Year` `is` `2021`, and perhaps throw in a `SHUFFLED` sort rule for fun.

However, let's take that one step further; let's say I wanted a section which contained *all* my records organized by year in a similar fashion. I could simply create a new "Home" section, call it something fun like "Time Machine", then for any given year create a new "year" section just like before. And just like that, I have a "Time Machine" section on my Home Screen that—upon tapping—gives me a beautiful year-by-year adventure back through my favorite music. This is still of course a simple example, only a couple basic smart rules power my "Time Machine" section. The engine's flexible enough to be limited only by your own imagination.

<div class="two-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-light-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-light-1.webp">
  <img type="image/jpeg" title="My Home page Time Machine section in light mode" alt="Image of my Home page Time Machine section in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-light-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-light-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-light-2.webp">
  <img type="image/jpeg" title="My Time Machine page in light mode" alt="Image of my Time Machine page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-light-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-dark-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-dark-1.webp">
  <img type="image/jpeg" title="My Home page Time Machine section in dark mode" alt="Image of my Home page Time Machine section in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-dark-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-dark-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-dark-2.webp">
  <img type="image/jpeg" title="My Time Machine page in dark mode" alt="Image of my Time Machine page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/time-dark-2.jpg">
</picture>
</a>
</div>

It should be noted that an increasing number of players provide one or sometimes most of the abilities listed above, notable examples being [Albums], [Power Player], [Cs Music], and [Mixtapes]. However, with that said, none of them brilliantly combine all these abilities together into one cohesive "Home" page experience like Marvis Pro. It's truly a case where the result is greater than the sum of its parts.

Of course, there's more to Marvis Pro than just its Home page; Marvis Pro's overall presentation is consistently smooth throughout. Despite the player's heavy use of custom UI, it gracefully evades the performance issues that sometimes accompany it, providing a premium-feeling experience similar to [Doppi]. Like with traditional native apps like [Cs Music] and [Picky], you never have to wait for the app to render or refresh itself despite its reliance on custom components. At the risk of groans, ["it just works"](https://youtu.be/qmPq00jelpc?t=7).

The full-player itself takes a minimal approach, opting to hide ancillary controls like star ratings or the shuffle button either behind the "..." context menu or a quick swipe down gesture, much like iOS 13's Music.app. It works brilliantly in maintaining a visually clean and focused full-player, but this default configuration will likely irk listeners who prefer having instant access to even the most ancillary of controls. Those listeners need not worry, as Marvis Pro provides a full suite of player customization abilities, which allows (among other things) control over what elements or controls are visible.

Unbelievably, this just scratches the surface of how deep Marvis Pro's customization goes. For the listeners striving for an ["aesthetic AF"](https://www.instagram.com/p/CFSj3ZShlEX) player, there's a powerful theming engine which allows you to independently adjust the background color, translucency, and blur style of the main screens, mini-player, and full-player. There's also plenty of niche options, such as the ability to switch between using the iOS Music.app queue like [Cs Music] or an app-specific queue like [Plum]. There's so much available to explore in Marvis Pro that year after year it continues to maintain its title as the most customizable (and therefore the most theoretically personalized) player available.

Whether you're simply browsing for an actively maintained player with a bubbly custom UI similar to [Doppi]'s or intensely searching for a player with the deepest possible customization potential, Marvis Pro rises to the challenge. Marvis Pro empowers you to mold it to your own tastes and habits in a way few other players even attempt supporting, all while still maintaining an exceptionally elegant UI that feels right at home alongside the latest iOS look and feel guidelines. There's simply no other player that combines modern UI design and classic ["bicycle of the mind"](https://www.themarginalian.org/2011/12/21/steve-jobs-bicycle-for-the-mind-1990/) principles so tactfully together. Some players are good, others are perhaps even great, but Marvis Pro's UI and customization are firing on all cylinders, and it's an undeniable triumph.

#### iPad Experience

Marvis Pro sports one of the best overall iPad experiences of any player available on the market (arguably beaten out only by [Power Player] or [Albums]). It's as performant as its iPhone counterpart, and thanks to Marvis Pro's absolutely insane degree of interface customization it can easily be tweaked to take as little or as much advantage of the larger screen as you'd like. This customization system really shines on the iPad, since aside from the album view preserving itself at a reasonably small size and the mini-player tucking itself away to just the bottom-right edge of the screen, Marvis Pro doesn't provide much else in the way of default iPad-specific optimizations; whether or not Marvis Pro on iPad is simply a scaled version of its iPhone counterpart or configured into something that takes full advantage of the larger screen is entirely up to you.

#### Widgets

Aside from the addition of extra-wide widget sizes for iPadOS, Marvis Pro's impressive widget arsenal remains unchanged from last year.

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-large-dark.webp">
  <img type="image/png" title="Marvis Pro's large 'Now Playing' widget in dark mode" alt="Image of Marvis Pro's large 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-medium-dark.webp">
  <img type="image/png" title="Marvis Pro's medium 'Now Playing' widget in dark mode" alt="Image of Marvis Pro's medium 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-medium-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-small-dark.webp">
  <img type="image/png" title="Marvis Pro's small 'Now Playing' widget in dark mode" alt="Image of Marvis Pro's small 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-small-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-large-light.webp">
  <img type="image/png" title="Marvis Pro's large 'Now Playing' widget in light mode" alt="Image of Marvis Pro's large 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-medium-light.webp">
  <img type="image/png" title="Marvis Pro's medium 'Now Playing' widget in light mode" alt="Image of Marvis Pro's medium 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-medium-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-small-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-small-light.webp">
  <img type="image/png" title="Marvis Pro's small 'Now Playing' widget in light mode" alt="Image of Marvis Pro's small 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/1-small-light.png">
</picture>
</a>
</div>
</div>

Marvis Pro's widgets are divided evenly into two collections, starting with the "Now Playing" collection. Like most "Now Playing" widgets, by default every widget size features the album art and varying degrees of metadata depending on the size in question. However, like Marvis Pro itself, its widgets feature a staggering degree of customization that allows you to radically change both the widgets' appearance and behavior. For most widgets in this collection, you have access to the following controls:

* Theme (System, Light, or Dark)
* Style ("Default", which maintains padding around the artwork, or "Large Artwork", which stretches the artwork to be edge-to-edge with the widget's borders)
* Background (Blurred Artwork or Image, for those of you striving for an ["Aesthetic AF"](https://www.instagram.com/p/CFSj3ZShlEX) home screen)
* Tap Action (Launch Marvis, Open Full-Player, Present Actions, View Details, or Redirect to Music.app)
* Show Track Title toggle
* Show Artist toggle
* Show Album Title toggle
* Greyscale Artwork toggle
* Show Playback Controls toggle
* Show Up Next toggle
* Up Next - Tap To Play toggle

Arguably the most notable among the customization options is the ability to toggle displaying playback controls in the widget itself (excluding the small widget).

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-large-dark.webp">
  <img type="image/png" title="Marvis Pro's large 'Now Playing' widget in dark mode with playback controls enabled" alt="Image of Marvis Pro's large 'Now Playing' widget in dark mode with playback controls enabled" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-medium-dark.webp">
  <img type="image/png" title="Marvis Pro's medium 'Now Playing' widget in dark mode with playback controls enabled" alt="Image of Marvis Pro's medium 'Now Playing' widget in dark mode with playback controls enabled" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-medium-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-large-light.webp">
  <img type="image/png" title="Marvis Pro's large 'Now Playing' widget in light mode with playback controls enabled" alt="Image of Marvis Pro's large 'Now Playing' widget in light mode with playback controls enabled" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-medium-light.webp">
  <img type="image/png" title="Marvis Pro's medium 'Now Playing' widget in light mode with playback controls enabled" alt="Image of Marvis Pro's medium 'Now Playing' widget in light mode with playback controls enabled" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/alt-medium-light.png">
</picture>
</a>
</div>
</div>

In classic Marvis Pro fashion, each widget's default configuration is perfectly reasonable, and if you'd rather not futz about with settings, they're still likely to meet your needs. However, if you care even the slightest bit about getting your widgets and home screen "just so", Marvis Pro's "Now Playing" widget collection is exceptional.

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-large-dark.webp">
  <img type="image/png" title="Marvis Pro's large 'Now Playing' widget in dark mode" alt="Image of Marvis Pro's large 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-medium-dark.webp">
  <img type="image/png" title="Marvis Pro's medium 'Now Playing' widget in dark mode" alt="Image of Marvis Pro's medium 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-medium-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-small-dark.webp">
  <img type="image/png" title="Marvis Pro's small 'Now Playing' widget in dark mode" alt="Image of Marvis Pro's small 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-small-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-large-light.webp">
  <img type="image/png" title="Marvis Pro's large 'Now Playing' widget in light mode" alt="Image of Marvis Pro's large 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-medium-light.webp">
  <img type="image/png" title="Marvis Pro's medium 'Now Playing' widget in light mode" alt="Image of Marvis Pro's medium 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-medium-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-small-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-small-light.webp">
  <img type="image/png" title="Marvis Pro's small 'Now Playing' widget in light mode" alt="Image of Marvis Pro's small 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/2-small-light.png">
</picture>
</a>
</div>
</div>

Marvis Pro's other widget collection type, "Section", allows you to add a widget for a particular section in your Home page, and continues the trend of customization from the "Now Playing" collection. For most widgets in this collection, you have access to the following controls:

* Theme and Background, just like in the "Now Playing" collection
* Section (Any section you have on your Home page can be selected here to be displayed in the widget.)
* Show Or Hide Section Title
* Tap Action (Open Section, Open Selection, or Open Section & Selection)
* Style (List or grid, both with their own settings. Not applicable for the small widget.)

The sheer amount of customization provided by this collection allows you to effectively replicate your Marvis Pro Home page right on your iOS home screen. The only caveat to this widget type is by nature of its design you *have* to customize the widget to make it function, at a bare minimum by selecting the section you want to be displayed. Thus, if you abhor configuration of any kind this probably isn't the widget collection for you.

#### New This Year

Marvis Pro enjoyed a modest but respectable number of minor feature additions and improvements this year, most notably:

* The prophesized background customization settings [originally teased back in 2019](https://twitter.com/AdityaRajveer/status/1135947602191536128) (which I think earns a ["finally!"](https://daringfireball.net/linked/2011/09/29/finally))
* The full-player on iPad is now full screen

By far the biggest change this year was the release of background customization. With over two years between now and the originally teased screenshots on [Addy's Twitter](https://twitter.com/AdityaRajveer), it's not particularly clear what separates the teased images from what was finally released two years later. There's obviously additional customization behind the feature (you can select from a list of different background styles both for light and dark mode), but not enough for it to clearly be the reason for the delay. Regardless of the true cause of the delay, the fact remains it's at least available now and works exactly as we've come to expect features in Marvis Pro to function.

In Marvis Pro's "Settings" menu, there's a renovated "Background" appearance menu item, where you have full control over independently adjusting the background for the main screen, mini-player, and full-player. This control includes specifying the background image (none, artwork, or custom), the degree of blur effect, degree of image saturation, and even the overlay color to apply over the blur effect.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-red.webp">
  <img type="image/jpeg" title="The full-player in light mode with a predominantly red record" alt="Image of the full-player in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-red.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-green.webp">
  <img type="image/jpeg" title="The full-player in light mode with a predominantly green record" alt="Image of the full-player in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-green.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-blue.webp">
  <img type="image/jpeg" title="The full-player in light mode with a predominantly blue record" alt="Image of the full-player in light mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/light-blue.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-red.webp">
  <img type="image/jpeg" title="The full-player in dark mode with a predominantly red record" alt="Image of the full-player in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-red.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-green.webp">
  <img type="image/jpeg" title="The full-player in dark mode with a predominantly green record" alt="Image of the full-player in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-green.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-blue.webp">
  <img type="image/jpeg" title="The full-player in dark mode with a predominantly blue record" alt="Image of the full-player in dark mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/dark-blue.jpg">
</picture>
</a>
<figcaption>While I still prefer the full-player visual design of some other players, with some slight configuration Marvis Pro can now easily go toe-to-toe with them.</figcaption>
</figure>

The system is incredibly flexible, allowing listeners to make anything from the most modest of changes (such as just deepening the blur effect on the full-player) to app-wide theme adjustments similar to what you'd find in [Music Player X] and [MPX EQ]'s theming engine. While the system is indeed powerful, I can't help but feel some pre-made defaults would be a huge accessibility improvement, along with providing "pros" examples they can use as starting points. For example, there could be a "classic" default, a "deep blur" default, a "true black" default, and more, all which simply autofill the necessary values to Marvis Pro's "Background" appearance controls. With those minor grumblings set aside, the system is indeed powerful, can meet practically any visual need, and is clearly the single best appearance management system provided by any music player on iOS to date.

The other big change this past year (literally) was the promotion of Marvis Pro's previously thin iPad full-player to a full screen view. Speaking purely from a position of personal preference for a minute, I strongly feel that despite my insistence on utilizing the iPad screen to display more information that full-players are the only exception and should continue to take up the entire screen on iPads just their iPhone counterparts. There's something instinctually captivating about holding the iPad while it's proudly displaying the album art of the song you're currently listening to, as if you were holding a 12" vinyl record sleeve. To step back into my best attempt at objectivity, full-screen player views are simply the natural conclusion of min-maxing both the minimized and maximized player experiences; make the mini-player as minimal and immediately accessible as possible, and make the full-player as massive and captivating as possible. When listeners just want quick access, the mini-player experience is sufficient and they wouldn't bother with the full-player in the first place. However, when listeners want to linger, a sickly thin "maximized" full-player simply doesn't cut it, so it makes more sense to fully maximize that view to optimize for the times listeners want to dive deeper than what the mini-player can muster. This change isn't without precedent, as Music.app recently made this exact change in iPadOS 15 by changing their sad "skinny maximized" player on iPad to a real full-screen player.

While the change is certainly a good move, the newly maximized full-player is unfortunately not without issue. Like [Cs Music], Marvis Pro's full-screen player in landscape mode is comically bad, squishing its existing layout to fit the now constrained vertical screen instead of sensibly reflowing into a two-column layout like [Power Player].

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Apple Music integration</dt>
  <dd><p>You can easily search for and stream Apple Music content, but you can also create Apple Music-powered sections right in your “Home” page as well. Like with <a href="https://apps.apple.com/us/app/albums-album-focused-player/id1469948986">Albums</a>, this kind of seamless integration is exactly what I expect from premium Apple Music integration.</p></dd>
  <dt><span class="bullet">:trophy:</span> Light &amp; dark themes</dt>
  <dd><p>Marvis Pro’s theming is exceptional, you can tweak it to be as light or as dark as you want it, and your changes still respect iOS’s system appearance setting.</p></dd>
  <dt><span class="bullet">:trophy:</span> iPad support</dt>
  <dd><p>The iPad version is as performant as its iPhone counterpart, scales gracefully to accommodate the larger screen, and now features a gorgeous full-screen maximized player. I have a minor complaint with the way the full-player is handled in landscape mode, but the rest of the experience is close to flawless.</p></dd>
  <dt><span class="bullet">:trophy:</span> Discovery features</dt>
  <dd><p>Marvis Pro ships with a respectable array of discovery collections in its “Home” page by default, but the fact you can easily create your own using Marvis Pro’s section engine leaves Marvis Pro’s discovery capabilities with little contest.</p></dd>
  <dt><span class="bullet">:trophy:</span> Album-focused features</dt>
  <dd><p>Your “Home” page can be as tailored to albums as you’d like. You can also easily adjust the “Albums” layout to be a grid of your preferred size, and even my preferred sorting method (Artist > Chronological) is available (though this unfortunately remains trapped behind a hidden advanced settings screen).</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Lyrics are viewable upon scrolling down in the full-player much like in iOS 14’s Music.app, but I continue to dislike this approach to lyrics support since it’s quarantined away from both the playback controls and the album art. The feature exists and works without issue, but I find the implementation personally disappointing.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>It continues to not be the most beautiful or most interesting of full-players, but the introduction of background customization this year helped tremendously to freshen up the previously pleasing but standard visual appearance.</p></dd>
</dl>
</div>

### ![Music Player X's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/icon.png "Marvis Pro's iOS app icon"){: .inline-app-icon } Music Player X

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-usage-poster.jpg" alt="Video demonstrating Music Player X's usage in light mode" title="Demonstrating Music Player X's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-album-view.webp">
  <img type="image/jpeg" title="Music Player X's light theme album-view" alt="Image of Music Player X's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-full-player.webp">
  <img type="image/jpeg" title="Music Player X's light theme full-player" alt="Image of Music Player X's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-usage-poster.jpg" alt="Video demonstrating Music Player X's usage in dark mode" title="Demonstrating Music Player X's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-album-view.webp">
  <img type="image/jpeg" title="Music Player X's dark theme album-view" alt="Image of Music Player X's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-full-player.webp">
  <img type="image/jpeg" title="Music Player X's dark theme full-player" alt="Image of Music Player X's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/app/apple-store/id1221701870">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Music Player X—among one of the more curious players in the yearly showcase—is in even more of an usual position this year. In years past, its quirkiness came from its completely custom, [brutalist](https://onextrapixel.com/brutalist-web-design-trend/) interface, which practically bursts at the seams with chaotic but charming personality. However, this past year it's unusual particularly because its successor—[MPX EQ]—was officially released and Music Player X made 100% free. That's right, at least at the time of writing, you can newly download both Music Player X and its replacement right alongside one another. While it's entirely possible Femi Oduntan—the single developer behind both—intends to continue maintaining both for the foreseeable future like Mike does with [Cs Music] and [SongOwl], I can't help but look at this as the formal, graceful deprecation of Music Player X to give customers time to transition to the new version.

With that potential future aside, the app itself is still fully functional, available for download, and received a healthy number of new features in 2021 prior to MPX EQ's release which still award it a dedicated spotlight it this year's showcase. However, given Music Player X's now free and its replacement app is available and gaining steam, this will likely be a final goodbye.

Music Player X is perhaps the most radical general-purpose player available today. While the interface itself and browsing approach is typical fare ("Artists", "Albums", and other usual suspects are all here), not a single control or view in the app appears stock; nearly everything seems custom-made or at least heavily modded beyond recognition. This certainly yields Music Player X plenty of drawbacks, primarily that it barely feels like an iOS app anymore, and secondarily that it severely lacks the animation polish other apps get "for free" by using stock components. This results in a lack of comfort that makes some of its custom navigational flows feel so jarring that they are oftentimes confusing to navigate and back out of, among other issues. The custom UI is naturally strongly opinionated as well, which is sure to push away listeners that don't care for its brutalist, 90's era computing ascetic. With those huge caveats made clear, Music Player X's custom interface *does* allow it a substantial number of benefits, such as its immediately identifiable brand recognition[^brand-recognition]. You can easily and instantly recognize Music Player X even from a distance. This pairs hand-in-hand with its theming engine, which is the other huge benefit its fully custom UI provides. If you're a listener big on the ["aesthetic AF"](https://www.instagram.com/p/CFSj3ZShlEX) movement on iOS and meticulously customize your home screen and app icons to match a certain color scheme, Music Player X can be tweaked to perfectly match. For example, here's some fun alternative themes I whipped up.

<figure class="three-images ios-screenshot">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/hacker.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/hacker.webp">
  <img type="image/jpeg" title="Music Player X in a custom Hacker theme" alt="Image of Music Player X in a custom Hacker theme" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/hacker.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/rosey-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/rosey-red.webp">
  <img type="image/jpeg" title="Music Player X in a custom Rosey rosey-red theme" alt="Image of Music Player X in a custom Rosey Red theme" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/red.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/bee.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/bee.webp">
  <img type="image/jpeg" title="Music Player X in a custom Bumblebee theme" alt="Image of Music Player X in a custom Bumblebee theme" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-player-x/bee.jpg">
</picture>
</a>
<figcaption>I'll call them “Hacker Fantasy”, “Rosy-Red”, and “Bee Yourself”</figcaption>
</figure>

While the theming engine is a great addition, it's not without its share of problems. To start, the actual practice of adjusting the app's theme is cumbersome due to its lack of manual hex or RGB input; your precision is capped to arbitrarily dragging around the color picker until it gets visually close enough the to desired color. Additionally, there remains no way to either save multiple custom themes or define light & dark mode variants. There's also no mechanism available to export or import themes, preventing any means of theme sharing. Finally, I can't help but feel the lack of a "dynamic" theme option to automatically adjust the theme to match the current track's album art is a curious omission given the affinity for similar "dynamic" themes demonstrated in other players. However, if all you want is the ability to set a single theme with relatively low precision, then Music Player X's theming system is up to the task.

With regards to the browsing and playback experience itself, the usual collections like "Artists" and "Songs" are present, but have numerous quirks due to Music Player X's custom UI. For example, upon tapping a particular artist, instead of a new page sliding in from the right as is standard in iOS, a custom model blinks into view to display the artist's albums and songs. It's a strange choice, and unfortunately makes Music Player X feel even more foreign on iOS.

The full-player itself is remarkably plain and barely existent; instead of sliding in a full-player card like most other players these days, the artist, track name, album title, and album art blink into view upon launch, overloading the mini-player controls to also serve as the full-player's controls. While certainly unique (I can't think of any other player that behaves this way), it doesn't result in a particularly inspiring nor interesting view. In line with Music Player X's brutalist design, the full-player is fully utilitarian, you won't find a beautiful or engaging full-player experience here.

Finally, Music Player X provides some interesting bits and bobs, starting with its in-app equalizer. Listeners can adjust the playback frequency response at any time via the dedicated "EQ" menu item, or select from sensibly named presets like "Hi Mid" or "Bassy". While I prefer flat playback in my music players, this is certainly not the case for everyone, so the fact this is treated as a first-class feature in Music Player X is appreciated. Listeners can also enable an iTunes-style "crossfade" or manage a *very* limited library directly in the app independent of Apple's Music library. For those curious enough to scroll all the way to the end of the app's menu, they can also access the obscure and borderline useless "3D Audio" feature (not to be confused with Apple's ["Spatial Audio"](https://support.apple.com/en-us/HT212182) feature), which pans the audio from left to right at a set interval. This is all to say, Music Player X sports an overflowing grab bag of features and settings ranging the full spectrum from useful to bizarre. It's not polished and is certainly strange in areas, but it's undeniably fun to explore and certainly leaves an impression.

Music Player X is amateurish, strange, sometimes frustrating, but undeniably endearing. Despite its relatively young age, it strongly reminds me of the long-dead breed of iOS app from back when the App Store [first opened in 2008](https://en.wikipedia.org/wiki/App_Store_(iOS/iPadOS)), when developers were first learning the ins and outs of the platform and felt empowered to continuously experiment and break the mold with their designs in the process. Today, apps on iOS feel fairly homogenous; even apps with custom UI still follow the majority of the conventions coined by the OS (just with a different coat of paint coupled with a smattering of novel interaction differences). To be clear, this convergence is absolutely for the better, if for no other reason than the obvious accessibility and usability benefits that come with it. However, I can't help but feel something wild and fun was forever lost in the process. Getting to relive that on iOS—if even just for a bit—with Music Player X was a rare treat I didn't think I'd get the chance to see again.

#### iPad Experience

Music Player X does indeed support the iPad, but much like [Cs Music] it's nothing more than a scaled-up version of the iPhone app. However, the scaling is demonstrably worse on Music Player X because it literally scales *everything* (not just sensibly the scrollable views like Cs Music), most likely a side effect of its lack of stock iOS components. In practice, this means absolutely nothing about the iPad version takes advantage of the larger screen. For example, the menu bar *still* requires scrolling due to the icons scaling to a comically massive size instead of allowing all menu items to comfortably fit at a normal size on the iPad's larger screen.

Like Cs Music, the experience is still perfectly functional and doesn't exhibit any performance issues compared to its iPhone counterpart, but due to the lazy "scale everything" implementation it's one of the worst iPad versions available (beaten out only by [Plum] and [Musens] due to their crippling iPad performance issues).

#### Widgets

Music Player X does not provide widgets, and given its potential replacement was released this year, I'd wager it most likely never will.

#### New This Year

As is expected given the release of its major update in the form of [MPX EQ], Music Player X itself didn't see radical changes this year. However, there are certainly a few changes worth calling out:

* Removal of in-app purchase (all of Music Player X is now free)
* EQ presents are now available with understandable names like "Hi Mid" and "Bassy"

With that and some bug fix patches, that's all the releases Music Player X received this year. Music Player X going 100% free and preserved in the app store (at least for the time being) instead of getting taken down immediately like developers tend to do with these kinds of releases is refreshing to see, and a trend I hope continues for the obvious historical preservation benefits and for the odd listener or two that may still prefer the older releases at the expense of continued developer support.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> iPad support</dt>
  <dd><p>An iPad version technically exists, but the scaling it uses is comically bad.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> Lyrics support</dt>
  <dt><span class="bullet">:x:</span> Light &amp; dark themes</dt>
  <dd><p>While you can customize the theme, you can only have one theme active at a time, so light &amp; dark theming is not supported.</p></dd>
  <dt><span class="bullet">:x:</span> Discovery features</dt>
  <dt><span class="bullet">:x:</span> Beautiful or visually engaging full-player</dt>
  <dt><span class="bullet">:x:</span> Album-focused features</dt>
</dl>
</div>

### ![Music.app's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/icon.png "Marvis Pro's iOS app icon"){: .inline-app-icon } Music.app

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-usage-poster.jpg" alt="Video demonstrating Music.app's usage in light mode" title="Demonstrating Music.app's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-album-view.webp">
  <img type="image/jpeg" title="Music.app's light theme album-view" alt="Image of Music.app's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-full-player.webp">
  <img type="image/jpeg" title="Music.app's light theme full-player" alt="Image of Music.app's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-usage-poster.jpg" alt="Video demonstrating Music.app's usage in dark mode" title="Demonstrating Music.app's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-album-view.webp">
  <img type="image/jpeg" title="Music.app's dark theme album-view" alt="Image of Music.app's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-album-view.jpg">
</picture>
</a>
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-full-player.webp">
  <img type="image/jpeg" title="Music.app's dark theme full-player" alt="Image of Music.app's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/dark-full-player.jpg">
</picture>
</a>
</div>

Whether you're an album-focused listener like me, a fan of singles and playlist customization, or even a lover of classical compositions, Apple's Music.app does a brilliant job of systematically attempting and failing to meet your needs. Over the years I've continuously bemoaned Music.app's inability to focus on catering to any particular facet of the wide spectrum of listening habits, which yields a player that routinely makes halfhearted attempts to address every segment of the market without sealing the deal on any of them.

Fundamentally, Music.app's primary issue it it's first and foremost a delivery vehicle for the Apple Music streaming service, and this fact is immediately apparent upon scanning the app's stock tab bar items upon launch. Of the five tabs ("Listen Now", "Browse", "Radio", "Library", and "Search"), only "Library" and "Search" are useful to listeners that prioritize their library over the Apple Music service. This is indeed a great boon for Apple Music subscribers that *do* prefer the service's offerings over their own library, Music.app also poorly handles the cloud-primary "Sync Library" feature; Apple technically allows users to keep this feature off (which I continue to begrudgingly do), but unless you go all-in on a cloud-primary library with the "Sync Library" feature, Music.app's interface fights you at every corner. While browsing the Apple Music library, you'll encounter loads of <kbd>+</kbd> buttons strewn about to "add" entities to your library, which don't do anything unless you have "Sync Library" enabled (tapping them launches a helpful dialog prompting you to enable the feature). The strategy in play is clear; Apple could easily hide these buttons for customers without this feature enabled, which to me would be a usability win, but what they *really* want to do is drive the feature's adoption, and this [anti-pattern](https://en.wikipedia.org/wiki/Anti-pattern) they leverage is a great means of doing so. Mixing the local-only library with Apple Music also results in confusing items in the "Library" tab context menus as well, where the menus display options like "Delete from Library", "Remove from Library", and "Download" which only really make sense in a cloud-primary library like the one "Sync Library" provides (and even then, "Delete from Library" vs. "Remove from Library" is completely inscrutable). Design decisions like these add up to an uncomfortable experience for anyone that doesn't choose Apple's blessed configuration and make it difficult to feel Apple's truly prioritizes your needs over the needs of their service team's bottom line.

Let's step aside from this fundamental, intentional design flaw and focus on the details of Music.app's local library experience with its "Library" tab. As the name implies, the page serves as the springboard into your library, featuring a vertical menu at the top of items you'd expect like "Artists", "Albums", "Songs", and more. Below that vertical menu is a "Recently Added" collection containing a reverse chronological grid of sixty entities you've recently added to your library (which can be albums, songs, or even playlists). The rest of the browsing experience is perfectly plain with little to no frills whatsoever. Even the artist entity pages which could arguably benefit from some Apple Music hero images get no special treatment, the view's just a simple grid of the artist's records. While there's nothing necessarily noteworthy here, it works.

Things thankfully get interesting with Music.app's colorful full-player, freshly renovated in 2020 with iOS 14. Instead of the plain white or black backgrounds from previous releases, last year Apple introduced a reduced version of the gorgeous "lava lamp" visualizer (previously only accessible for "Live" lyrics) into the background of the standard full-player. What should have been a cause for celebration quickly turned sour, as it rapidly became apparent that the visualizer on the full-player was objectively less impressive than its "Live Lyrics" counterpart, apparently an effort on Apple's part to reduce battery impact. While admirable, their battery optimizations over-blur the effect's originally distinctive color blobs into an unintelligible, murky mess, often looking closer to slowly shifting sludge than wistfully drifting lava lamp blobs. Disappointments regarding the full-player's visual design aside, functionally Music.app's full-player is surprisingly well crafted. The album art's massive, the queue and lyrics features are prominently displayed as quickly accessible buttons at the bottom of the full-player, the volume slider is large and always visible (to me, a plus), and there's loads of convenient contextual menus to jump right to the album, artist, or playlist of the current track. While the dreadfully crippled visualizer does its part to hold the full-player back, the functional experience at the very least is soundly designed and among one one of the best for those that value full-player functionality.

#### iPad Experience

Paradoxically, the Music.app iPad experience is among the best you can find on the market. Instead of simply scaling the app, Apple seems to take nearly every opportunity available to optimize UI elements to take full advantage of the extra screen real estate the iPad provides; the tab bar is replaced with an iOS 14 sidebar, which not only helps instill Music.app on iPadOS as a first-class iPad experience, but also inherently avoids my complaints about the Apple Music service taking up precious tab bar space on the iPhone version.

The full-player also takes substantial advantage of the extra screen real estate; the full-player takes up the entire screen when launched, allowing the album art to shine in full glory. In landscape mode, the player supports the same duel-column display I cherish in [Power Player], where the entire full-player and lyrics are separated and organized into side-by-side columns. This allows listeners to comfortably appreciate the album art and follow along with lyrics at the same time. In terms of sheer platform optimization goes, Music.app on iPadOS is as good as it gets.

#### Widgets

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/large-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/large-widget.webp">
  <img type="image/png" title="Music.app's large 'Now Playing' widget" alt="Image of Music.app's large 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/large-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/medium-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/medium-widget.webp">
  <img type="image/png" title="Music.app's medium 'Now Playing' widget" alt="Image of Music.app's medium 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/medium-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/small-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/small-widget.webp">
  <img type="image/png" title="Music.app's small 'Now Playing' widget" alt="Image of Music.app's small 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/small-widget.png">
</picture>
</a>
</div>
</div>

The terrible, bright red widgets from last year's showcase are (mostly) gone! Now, Apple's singular widget collection features a blurred background and dynamic font colors from the currently playing track's album art. I despised the static, bright red background color from 2020's widgets, so I'm trilled to see Music.app's widgets visually calm down while also providing a more personal look and feel as natural consequence.

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-large.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-large.webp">
  <img type="image/png" title="Music.app's large 'Now Playing' widget" alt="Image of Music.app's large 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-large.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-medium.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-medium.webp">
  <img type="image/png" title="Music.app's medium 'Now Playing' widget" alt="Image of Music.app's medium 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-medium.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-small.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-small.webp">
  <img type="image/png" title="Music.app's small 'Now Playing' widget" alt="Image of Music.app's small 'Now Playing' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/gross-small.png">
</picture>
</a>
</div>
</div>

However, I say that red background is *mostly* gone, because whenever certain conditions are met (such as force quitting the app), the widget design reverts back to that brazen red from 2020. This is a problem for users that compulsively force quit their apps despite the detrimental impacts on app launch time and battery. Given that every third-party music player I've used with similar "Now Playing"-inspired designs handle this gracefully by remembering the details of what was playing even through force quits, it's ridiculous that Apple's own first-party offerings drop those details.

Other than that and the introduction of an "extra large" iPadOS-only widget, Music.app's "Listening Activity" widget collection remains the same as in 2020. For each size, the widget displays the album art, song title, and artist of the currently playing track, and launches the full-player upon tapping. All widgets but the small size also display recent listening history in the form of an album art grid, which upon tapping any particular one launches that album's view in the app.

All in, Music.app's "Listening Activity" widget collection is perfectly serviceable, but falls short of providing the customizability, range, and robustness many third-party players have trained us to expect.

#### New This Year

Barely anything changed in Music.app this year. While it's technically enough to meet my "actively maintained" requirement, I expected far more from Music.app given its symbolic importance as Apple's own app and functional importance to the ecosystem as a whole[^ecosystem]. 

What follows is a comprehensive list of every subjectively underwhelming Music.app change this year (not counting changes specific to the Apple Music streaming service):

* A new "Shared with You" collection is now available in the "Listen Now" tab which—you guessed it—displays music shared with you in Messages. While this is technically Apple Music adjacent (you can't stream that music in Apple Music without a subscription), you don't need an Apple Music subscription for music shared with you to appear. While you'll obviously need one to actually stream anything shared this way, simply having all music shared with you available to peruse in a single, nifty collection is pretty handy.
* While browsing your "Up Next" queue, you can long-press a song and tap the new "Move to Top" item to throw that song to the front of the queue.
* The widgets now display a blurred background and dynamic font colors of the currently playing track's album art.

In some fairness to Music.app's developers, a tremendous amount of effort this year was most likely dedicated towards the Apple Music service enhancements to support spatial audio and lossless streaming. However, the bulk of that work is exclusive to Apple's streaming service, so there remains little value gain for those not subscribed and leaves the Music.app library experience to mostly languish this year.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Lyrics support</dt>
  <dd><p>Music.app’s lyrics experience is delightful; the button to view lyrics is immediately accessible and visible, the lyrics are displayed in a massive scrollable view, and in landscape mode on iPad the lyrics are shown alongside the full-player just like in <a href="https://powerplayer.evenwerk.com">Power Player</a>. It’s outstanding.</p></dd>
  <dt><span class="bullet">:trophy:</span> iPad support</dt>
  <dd><p>In terms of sheer screen size optimization, it’s the best iPad music player available.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dd><p>Your library is practically an afterthought in Music.app; nothing makes me hate Apple Music more than Apple’s own Music.app.</p></dd>
  <dt><span class="bullet">:x:</span> Discovery features</dt>
  <dd><p>A single “Recently Added” discovery collection doesn’t cut it anymore, and no, Apple Music’s impersonal “Listen Now” page doesn’t count.</p></dd>
  <dt><span class="bullet">:x:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>The off-brand visualizer used in the full-player is not the same as the beloved one used in the “Live Lyrics” view. It consistently yields worse results, and if all we’re going to get is this crippled version, I’d rather see it removed entirely.</p></dd>
  <dt><span class="bullet">:x:</span> Album-focused features</dt>
  <dd><p>Your albums are displayed as a grid, but that’s about the only album-focused feature Music.app offers. That simply doesn’t cut it, anymore.</p></dd>
</dl>
</div>

### ![Picky's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/icon.png "Picky's iOS app icon"){: .inline-app-icon } Picky

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-usage-poster.jpg" alt="Video demonstrating Picky's usage in light mode" title="Demonstrating Picky's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-album-view.webp">
  <img type="image/jpeg" title="Picky's light theme album-view" alt="Image of Picky's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-album-view.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-full-player.webp">
  <img type="image/jpeg" title="Picky's light theme full-player" alt="Image of Picky's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-usage-poster.jpg" alt="Video demonstrating Picky's usage in dark mode" title="Demonstrating Picky's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-album-view.webp">
  <img type="image/jpeg" title="Picky's dark theme album-view" alt="Image of Picky's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-album-view.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-full-player.webp">
  <img type="image/jpeg" title="Picky's dark theme full-player" alt="Image of Picky's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/picky-music-player/id497110916">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Inherently, general-purpose players share more similarities with each other than niche players do with each other. All general-purpose players feature a design focused on browsing the classic ways like "Artists", "Albums", "Songs", etc., feature a full-player, and maybe a few settings or a special "Home" discovery page if you're lucky. Within that framework, there's indeed a tremendous amount of variability, but by design not nearly as much as between any two niche players, which more or less do *whatever they want* at the intentional sacrifice of providing general-purpose functionality. Not so with Picky; Picky remains one of the few general-purpose players that offers a unique spin on the otherwise traditional tab bar browser design.

At first glance, Picky is as traditional as it gets; it features a stock iOS tab bar containing the usual suspects ("Artists", "Artists", etc.), a classic (if not aging) iOS 7-style design, and other trappings of a seemingly standard general-purpose player. Where Picky shines, however, is not in its initial visual appearance, but rather the powerful functionality carefully woven into each of its browsing pages.

Starting with the "Artists" page, there's a curious filter button on the left side of the menu bar. Upon tapping, a novel slider view bounces down, allowing you to quickly and easily browse artists by the number of their songs in your library. For example, I can drag and drop the slider to easily just show artists that have 20 or more songs in my library. This ability is a game changer for listeners with massive libraries cluttered with singles and one-hit wonders, since Picky can quickly and easily filter them out at any time with a flick of a slider.

The "Albums" page is much the same, featuring a similar filter button, only this time yielding a slider to filter out albums that have less than an adjustable number of songs. Additionally, you can filter by genre using a horizontally scrollable list of genre buttons directly below the "number of songs" slider, a neat alternative to the otherwise standard "Genres" browser.

The filter button on the "Songs" page also features a filter slider and genre buttons, but the filter slider instead gives you the ability to filter out songs from artists with *more* than a certain number of tracks in your library, giving listeners the ability to easily browse the one-hit wonders and singles scattered throughout their library.

These fantastic filtering capabilities on each page make Picky one of the most compelling general-purpose browsing experiences you'll find, despite its traditional appearance. The only player that provides similar filtering capabilities out of the box is [Plum], and even then Plum's offerings are incomplete (it doesn't provide the filter slider on "Songs" and doesn't provide genre filtering). Frankly, if you have a massive library filled with complete albums, singles, EPs, and everything in between, Picky is a requirement for controlled, sane browsing on iOS.

To tie everything together, Picky provides an exceptionally gorgeous full-player which continues to be among the finest available on any player. It features what appears to be a custom translucency blur effect, since to this day none of iOS's stock blur effects are capable of replicating Picky's results.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-red.webp">
  <img type="image/jpeg" title="The full-player in light mode with a predominantly red record" alt="Image of the full-player in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-red.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-green.webp">
  <img type="image/jpeg" title="The full-player in light mode with a predominantly green record" alt="Image of the full-player in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-green.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-blue.webp">
  <img type="image/jpeg" title="The full-player in light mode with a predominantly blue record" alt="Image of the full-player in light mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-blue.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-red.webp">
  <img type="image/jpeg" title="The full-player in dark mode with a predominantly red record" alt="Image of the full-player in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-red.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-green.webp">
  <img type="image/jpeg" title="The full-player in dark mode with a predominantly green record" alt="Image of the full-player in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-green.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-blue.webp">
  <img type="image/jpeg" title="The full-player in dark mode with a predominantly blue record" alt="Image of the full-player in dark mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-blue.jpg">
</picture>
</a>
<figcaption>Even after all these years, no other player’s blurred album art effect goes toe-to-toe with Picky’s, even iOS’s built-in blur effects.</figcaption>
</figure>

While the results are consistently rich and captivating, various functional aspects of Picky's player are beginning to show their age. On iPhone "Max" sizes, the shuffle and repeat buttons are well past iOS's [safe areas](https://developer.apple.com/design/human-interface-guidelines/ios/visual-design/adaptivity-and-layout/), just barely away from touching the physical screen borders. Additionally, while Picky thankfully supports lyrics, its lyrics support is the now legacy approach of tapping the album art to fade in scrollable lyrics directly overtop the art, an approach hailing all the way back from the original iPhoneOS Music.app. In light of the many different approaches explored by [Doppi], [Power Player], and even Apple's own [Music.app] over the years, it's a shame to see Picky continue to pass on exploring alternative approaches that would allow either more lyrics to be visible or the album art to also be visible. To be clear, none of these issues are severe and the player is visually as beautiful as ever, but the time is definitely nearing for it to receive some attention after being neglected for the past few years.

Picky has its share of shortcomings elsewhere in the app, as well. It's easily one of the most recognizably aging players, featuring an iOS 7-style design that looks increasingly dusty year after year. For listeners that value modern visuals or visual cohesion with the platform's latest release version, Picky isn't even up for consideration. While the recent introduction of discovery features with its new "Library Discovery" feature in the later half of 2021 is great, Picky still remains a decent step or two behind its peers in the discovery game; while Picky has five great discovery collections available now in its search page, most of its contemporaries by now have entire pages dedicated to rich library discovery features. Listeners that value discovery over filtering capabilities are therefore likely to not have their needs fully met by Picky.

Despite its shortcomings, Picky remains a fantastic general-purpose player, overall. Its age allows it to be instantly recognizable and understandable, its new discovery features are modest but are elegantly designed and do their job without issue, and the full-player to this day remains one of the most beautiful available anywhere. Picky is not the most "sexy" option, it's not the most progressive option, but it's undeniably one of the most powerful and accessible general-purpose players available today.

#### iPad Experience

Picky offers full iPad support, but aside from a few visual tweaks does little to properly utilize the larger screen. Browsing in Picky (such as tapping into a particular artist in "Artists" and then drilling down into a particular album) does not utilize the iPadOS's multicolumn browser, leaving every browser to comically take up the entire page even in landscape mode.

There were a few affordances made for the larger screen, particularly in the full-player; on iPadOS, tapping the mini-player launches an iPhone-sized modal which houses the full-player exactly as you would see it on an iPhone. While technically an iPad optimization, I've historically came down hard on teeny "full-players" on the iPad, and Picky's iPadOS full-player is no exception. Picky's legendary full-player design is practically smothered by taking up only a fraction of the available screen space the iPad offers, and the choice to display it in a slim modal instead of leveraging the entire screen to do something more compelling like display the lyrics or queue alongside it only makes the overall effect even more disappointing.

While there doesn't appear to be much movement for Picky on iPadOS, the prompt extra-large widget support (an iPadOS-exclusive widget size) brings some hope that there may indeed be some proper iPad attention coming soon, but in the meantime, Picky's iPad version just doesn't cut it.

#### Widgets

Aside from the introduction of extra-large widgets on iPadOS, Picky's widgets remain unchanged from last year.

Picky supplies three unique widget collections: "Recently Added", "Recently Played", and "Random Pick". Every collection features Picky's signature orange as the background color in both light and dark mode. While it's a fun color, it's undeniably distracting and makes it difficult to comfortably put Picky widgets on the homescreen where their bright, orange-forward design will always fight for visual attention.

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/2-large-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/2-large-widget.webp">
  <img type="image/png" title="Picky's large 'Recently Added' widget" alt="Image of Picky's large 'Recently Added' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/2-large-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/2-medium-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/2-medium-widget.webp">
  <img type="image/png" title="Picky's medium 'Recently Added' widget" alt="Image of Picky's medium 'Recently Added' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/2-medium-widget.png">
</picture>
</a>
</div>
</div>

The first widget collection, "Recently Added", displays a grid of your most recently added albums, and is available in every size except small. Each size offers the ability to customize the size of the album art it displays, providing a choice between "Regular" (which equates to four albums on the medium widget) or "Compact" (which equates to ten albums on the medium widget). Here's what the widgets look like in "Compact" mode.

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/alt-large-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/alt-large-widget.webp">
  <img type="image/png" title="Picky's large 'Recently Played' widget in compact mode" alt="Image of Picky's large 'Recently Played' widget in compact mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/alt-large-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/alt-medium-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/alt-medium-widget.webp">
  <img type="image/png" title="Picky's medium 'Recently Played' widget in compact mode" alt="Image of Picky's medium 'Recently Played' widget in compact mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/alt-medium-widget.png">
</picture>
</a>
</div>
</div>

Regardless of the chosen album art size, no album metadata is displayed, only the album art and the widget collection's title ("Recently Played"). Upon tapping a given album in the widget, Picky launches and immediately begins playing the chosen record.

<div class="box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/1-large-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/1-large-widget.webp">
  <img type="image/png" title="Picky's large 'Recently Played' widget" alt="Image of Picky's large 'Recently Played' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/1-large-widget.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/1-medium-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/1-medium-widget.webp">
  <img type="image/png" title="Picky's medium 'Recently Played' widget" alt="Image of Picky's medium 'Recently Played' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/1-medium-widget.png">
</picture>
</a>
</div>
</div>

The second widget collection, "Recently Played", similarly displays a grid of your most recently played albums. This collection is identical in appearance and behavior in every way to the "Recently Played" collection, with the only difference being the contents.

<div class="box widget">
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/3-small-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/3-small-widget.webp">
  <img type="image/png" title="Picky's small 'Random Pick' widget" alt="Image of Picky's small 'Random Pick' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/3-small-widget.png">
</picture>
</a>
</div>
</div>

The third and final widget collection provided by Picky is "Random Pick", which is only provided in small. This widget collection is quite different in appearance and behavior to the other two collections in that only a single album is displayed (a random album from your library), its metadata is displayed (the album title and artist), and a special shuffle button is additionally accessible in the upper-right corner of the widget to immediately shuffle the album's contents. It's a delightful way to get a random suggestion for something to listen to, and its small size makes it easy to throw anywhere in the widget sidebar or home screen. Not to mention, its small size makes the predominantly bright orange design much less distracting.

#### New This Year

Charles kept plenty busy throughout 2021 with arguably the most substantial series of feature additions Picky's received in years. The most notable among them are:

* "Library Discovery" collections on the Search page
* Rich multi-disc album support
* Extra large iPadOS 15 widgets

Picky's new "Library Discovery" feature is easily the most exciting of the bunch and marks Picky's first foray into the realm of discovery. Up until now, Picky focused exclusively on delivering a focused library browser with novel filtering capabilities that were accessible with just a tap in the menu bar. However, the minute you wished to step out of the strict filter-based browsing paradigm into something discovery-based like "Recently Added", "Recently Played", etc., you were effectively forced to switch players. With "Library Discovery" this is no longer the case; Picky now offers a set of five album-based discovery collections accessible from the Search page. Those five collections are:

* **Recently Added:** Albums most recently added to your library
* **Recently Played:** Albums or albums of tracks you've recently listened to
* **Deep Cuts:** Albums with the fewest number of listens
* **Quick Plays:** Short albums or EPs in your library
* **Long Plays:** Long albums in your library

<div class="two-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-discovery-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-discovery-1.webp">
  <img type="image/jpeg" title="Picky's discovery collections in light mode" alt="Image of Picky's discovery collections in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-discovery-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-discovery-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-discovery-2.webp">
  <img type="image/jpeg" title="Picky's Recently Added discovery collection in light mode" alt="Image of Picky's Recently Added discovery collection in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/light-discovery-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-discovery-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-discovery-1.webp">
  <img type="image/jpeg" title="Picky's discovery collections in dark mode" alt="Image of Picky's discovery collections in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-discovery-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-discovery-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-discovery-2.webp">
  <img type="image/jpeg" title="Picky's Recently Added discovery collection in dark mode" alt="Image of Picky's Recently Added discovery collection in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/dark-discovery-2.jpg">
</picture>
</a>
</div>

Picky's discovery collections are static; you cannot show, hide, or rearrange them. They are presented as medium-sized rows (a curiously modern move for Picky, which up until now strictly used tightly packed cells like earlier versions of Music.app). These rows feature tasteful iconography on the left and a randomly chosen album for the collection in question on the right. That randomly chosen record doesn't just serve as a visual clue towards the collection's contents, it's also independently actionable; upon tapping the featured album art for a given collection, Picky navigates directly to that album's page. Otherwise, tapping anywhere else in that cell directs you to an otherwise standard Picky browser page which contains all the albums Picky deemed appropriate for the discovery collection in question.

There's a lot to love here. The mere presence of "Recently Added" and "Recently Played" alone are cause enough for celebration, leaving the other provided discovery collections to serve as icing on the cake. The feature was built with exceptional care; including a tappable "featured" album in the discovery collection cells themselves was a stroke of visual and functional brilliance, and the new iconography for each collection brings a flourish that breaths new life into Picky's otherwise historically modest design. However, the choice to house these new discovery collections in the Search page instead of in a dedicated "Home", "Activity" or "Discovery" view is questionable. While this is a great move in the sense that it's incredibly non-disruptive, its presence in "Search" feels wholly out of place. In every other player, listeners tap search tabs or buttons for one thing and one thing only: to quickly look up a specific entity. That typical use has no inherent synergy with the more lackadaisical adventuring mood that fuels poking around discovery collections. This means listeners using Picky have to remember to recontextualize its search feature to be this abnormally multi-purpose page, and I unfortunately find myself often forgetting it's there as a result. With that said, as a first pass into content discovery, there's far more to love here than not.

Picky this year also released rich multi-disc album support. Not only does each disc in a multi-disc album receive proper labeling and separation, you can also discretely play, shuffle, or add to queue the discs individually. For example, if you tap the play button on "Disc 1" of a particular multi-disc album, playback would stop once all contents are played on that disc and would *not* automatically proceed to the rest of the album's discs like with standard playback. While this is an exceptionally niche feature, Picky appears to be the only general-purpose player offering individual disc control like this, and it's absolutely wonderful for listeners with sprawling albums containing unique and independent discs. A somewhat recent example of this is [Kamasi Washinton](https://music.apple.com/us/artist/kamasi-washington/154076564)'s [*The Epic*](https://music.apple.com/us/album/the-epic/975610456), a 3-hour long jazz behemoth with three discrete album-length discs. In this particular case, separation of these discrete parts is sometimes ideal, if for no other reason than to provide a purposeful pause as an audible "palate cleanser" before beginning the next act. While some niche players like [Vinyl Fetish] also offer this separation, Picky is the first and only general-purpose player to do so, which by default makes it the ideal general-purpose player for playback of extra-long records or records where per-disc separation is desired.

Finally, Picky also provides extra-large widgets on iPadOS for its "Recently Played" and "Recently Added" widget collections. They are disappointingly identical in every way to their smaller counterparts, just horizontally stretched to fill the additional width the extra-large widget provides. While it would have been nice to see a bit more movement on Picky's widget support this year, if nothing else taking quick advantage of the new extra-large widget size on iPadOS is appreciated.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>While parts of the full-player are functionality starting to age, it’s still among the most consistently gorgeous players available today.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Picky’s approach is now firmly “old school”, but it does indeed support lyrics.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
  <dt><span class="bullet">:heavy_check_mark:</span> iPad support</dt>
  <dd><p>Picky offers a performant iPad version, but the minified “full”-player and lack of proper screen size optimizations are disappointing. However, it’s perfectly useable with no critical issues.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Discovery features</dt>
  <dd><p>Picky’s new “Library Discovery” collections are exceptionally designed and inspiring (if not slightly held back due to being stuffed into the Search page)</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> Album-focused features</dt>
  <dd><p>Picky disappointingly neither supports a grid layout nor my preferred sorting method (Artist > Chronological)</p></dd>
</dl>
</div>

### ![Plum's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/icon.png "Plum's iOS app icon"){: .inline-app-icon } Plum

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-usage-poster.jpg" alt="Video demonstrating Plum's usage in light mode" title="Demonstrating Plum's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/album-view.webp">
  <img type="image/jpeg" title="Plum's album-view" alt="Image of Plum's album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/album-view.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-full-player.webp">
  <img type="image/jpeg" title="Plum's light theme full-player" alt="Image of Plum's light theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-usage-poster.jpg" alt="Video demonstrating Plum's usage in dark mode" title="Demonstrating Plum's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/album-view.webp">
  <img type="image/jpeg" title="Plum's album-view" alt="Image of Plum's album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/album-view.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-full-player.webp">
  <img type="image/jpeg" title="Plum's dark theme full-player" alt="Image of Plum's dark theme full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/plum-music-player/id1441625664">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Plum is a general-purpose player packed with features and a visual design that's as fun and quirky as its name. Unlike other general-purpose players which also sport unique designs like [Power Player] and [Doppler], Plum's not strongly opinionated; Plum offers a surprisingly deep customization system that aims to meet listeners' needs regardless of their varied habits and tastes, all while still maintaining its distinctive voice. All too often, music player developers tightly couple unconventional designs with an firm grip on any ability to change how their player looks or behaves. While this design philosophy certainly has its merits, it nonetheless necessarily alienates listeners whose needs or tastes don't quite line up with that vision. Throughout the app, Plum strives for a more accessible and arguably more friendly approach.

From the moment you launch the app, you're greeted with an unorthodox mini-player which also doubles as the springboard into the app's unconventional menu system. Instead of displaying a tab bar or gesture-revealed menu hidden to the left like nearly every other general-purpose player, the UI instead shifts *up* to reveal the menu. Here you'll find the usual suspects like "Songs", "Albums", "Artist", etc., but with the neat bonus ability to set any particular menu item as the app's default landing page. For example, if you prefer browsing by albums like me, you have the ability to make it the default Plum experience.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-red.webp">
  <img type="image/jpeg" title="The modern full-player in light mode with a predominantly red record" alt="Image of the modern full-player in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-red.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-green.webp">
  <img type="image/jpeg" title="The modern full-player in light mode with a predominantly green record" alt="Image of the modern full-player in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-green.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-blue.webp">
  <img type="image/jpeg" title="The modern full-player in light mode with a predominantly blue record" alt="Image of the modern full-player in light mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-modern-blue.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-red.webp">
  <img type="image/jpeg" title="The modern full-player in dark mode with a predominantly red record" alt="Image of the modern full-player in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-red.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-green.webp">
  <img type="image/jpeg" title="The modern full-player in dark mode with a predominantly green record" alt="Image of the modern full-player in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-green.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-blue.webp">
  <img type="image/jpeg" title="The modern full-player in dark mode with a predominantly blue record" alt="Image of the modern full-player in dark mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-modern-blue.jpg">
</picture>
</a>
<figcaption>Plum's “Modern” full-player skin.</figcaption>
</figure>

The other core part of Plum's visual identity is its wild "Modern" full-player. It features massive typography, thick progress & volume bars, and sparse but massive buttons which help make it live up to its namesake and indeed feels fresh among today's pretty but arguably visually redundant full-player landscape. There's few buttons displayed by default, but tapping the album art reveals additional controls like the ability to "love"/"unlove", set star ratings, view lyrics, or launch the AirPlay modal, among others. To help bring some additional visual flair, a linear gradient featuring a primary color from the track's art fills the background, bringing the dynamic benefits the translucent background effect other players tend to use while still maintaining visual distinction. Naturally, its focus on hiding the majority of additional controls behind an album art tap won't be to everyone's taste, such as listeners that prefer having as many controls visible and immediately accessible as possible. These listeners need not fret, Plum is the only player today to boast the unique ability to swap to a completely different full-player altogether with a simple setting change.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-red.webp">
  <img type="image/jpeg" title="The classic full-player in light mode with a predominantly red record" alt="Image of the classic full-player in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-red.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-green.webp">
  <img type="image/jpeg" title="The classic full-player in light mode with a predominantly green record" alt="Image of the classic full-player in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-green.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-blue.webp">
  <img type="image/jpeg" title="The classic full-player in light mode with a predominantly blue record" alt="Image of the classic full-player in light mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-classic-blue.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-red.webp">
  <img type="image/jpeg" title="The classic full-player in dark mode with a predominantly red record" alt="Image of the classic full-player in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-red.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-green.webp">
  <img type="image/jpeg" title="The classic full-player in dark mode with a predominantly green record" alt="Image of the classic full-player in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-green.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-blue.webp">
  <img type="image/jpeg" title="The classic full-player in dark mode with a predominantly blue record" alt="Image of the classic full-player in dark mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-classic-blue.jpg">
</picture>
</a>
<figcaption>Plum's “Classic” full-player skin.</figcaption>
</figure>

The alternative player design—"Classic"—strongly invokes memories of iOS 8's Music.app full-player. Like the iOS 8 Music.app full-player, nearly every control you could possibly want is visible and immediately accessible as buttons, no "tap to show" commands required. Listeners that love instant access to common controls or simply prefer the "old school" look and feel are sure to love this option. It's fantastic to see Adam Wienconek—Plum's developer—investing development time into supporting this feature since it makes Plum's player experience widely accessible to both taste extremes; it doesn't matter if you prefer visual elegance or pure utility, Plum's got you covered.

Plum's browsing experience continues the momentum; while the usual suspects like "Songs" and "Albums" are here, Plum provides a deep level of flexibility to easily adjust these pages to your own tastes and values. Each of these pages feature a "..." menu in the upper-left which allows you to:

* Adjust sort type & order
* Show or hide a "Recently Added" section at the top of the page
* Use either a list or a grid for the page's contents
* Picky-style filtering to only display items with at least a certain number of songs

To top it off, the "Albums" and "Artists" pages allow you to "pin" any particular item to the very top of the page, which is a convenient way to ensure your all-time favorite couple albums or artists are always just a tap away. This degree of control and personalization is unusual for an app that's not fundamentally built around customization like [Marvis Pro], and thus helps Plum stand out and above its peers.

Stepping further into the unusual, there are a couple items in Plum's menu that are somewhat rare to see: "Favourites" and "Folders". The "Favourites" page is empty to start, but can be easily populated by long-tapping nearly any entity in the app (song, playlist, album, etc.). That alone is a nice feature to have, but Plum goes the extra mile to make a special, custom layout mode specific to favorites called "Mosaic". When enabled, Plum renders a beautiful, dynamic collage of all your favorited items. The effect is a delight and brings back fond memories of physically making similar collages when I was young to decorate my room. It's genuinely lovely to see a music player allow its listeners the ability to revisit that exercise in such a convenient and elegant way. Continuing Plum's trend of flexible and unopinionated design, this layout feature may of course be disabled to instead display favorite items traditionally as a series of pinwheel lists.

<div class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-1.webp">
  <img type="image/jpeg" title="Page 1 of the Mosaic layout style in light mode" alt="Image of page 1 of the Mosaic layout style in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-2.webp">
  <img type="image/jpeg" title="Page 2 of the Mosaic layout style in light mode" alt="Image of page 2 of the Mosaic layout style in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-2.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-3.webp">
  <img type="image/jpeg" title="Page 3 of the Mosaic layout style in light mode" alt="Image of page 3 of the Mosaic layout style in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-mosaic-3.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-1.webp">
  <img type="image/jpeg" title="Page 1 of the Mosaic layout style in dark mode" alt="Image of page 1 of the Mosaic layout style in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-2.webp">
  <img type="image/jpeg" title="Page 2 of the Mosaic layout style in dark mode" alt="Image of page 2 of the Mosaic layout style in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-3.webp">
  <img type="image/jpeg" title="Page 3 of the Mosaic layout style in dark mode" alt="Image of page 3 of the Mosaic layout style in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-mosaic-3.jpg">
</picture>
</a>
</div>

The "Folders" page offers users the ability to group together albums, artists, or playlists. This makes Plum's folders extraordinarily flexible, so what they can be used for is more of a personal question. For example, I personally enjoy using the feature to group music into emotional buckets; I have a folder of albums & artists for when I'm in a somber mood, a folder of albums & artists for when I'm in (or want to be in) a more cheerful mood, and so on. No matter how you'd personally like to use folders, Plum's flexibility likely allows you to do it.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-folders-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-folders-1.webp">
  <img type="image/jpeg" title="The Folders page in light mode" alt="Image of the Folders page in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-folders-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-folders-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-folders-2.webp">
  <img type="image/jpeg" title="An example folder in light mode" alt="Image of an example folder in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/light-folders-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-folders-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-folders-1.webp">
  <img type="image/jpeg" title="The Folders page in dark mode" alt="Image of the Folders page in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-folders-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-folders-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-folders-2.webp">
  <img type="image/jpeg" title="An example folder in dark mode" alt="Image of an example folder in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/dark-folders-2.jpg">
</picture>
</a>
<figcaption>Find yourself feeling content and at peace? Not to worry, “Let's Get Sad, Yo” will make quick work of that.</figcaption>
</figure>

Despite Plum's subjectively tasteful visual design and flexibility, there are certainly some areas where Plum's unique design falters that can't yet be addressed by adjusting settings. For example, while Plum's menu system is undoubtably unique, it's frustratingly slow due to a canned "show" animation that rapidly overstays its welcome. While some other players also have long, canned animations for their menus, they typically provide a gesture to bypass the canned animation entirely, which then limits the time required to show the menu to the speed of your finger. Unfortunately, this gesture in Plum is not particularly discoverable (it requires a swipe-up gesture on the *left side* of the menu, but not the right side where the menu icon resides). Without knowing this, you're forced to tap the button and wait for the canned animation to finish every single time. Then there's the search history list, which I find barely legible in certain scenarios, depending on what's displayed underneath the transparent search modal when actuated. However, these are admittedly minor, arguably subjective complaints and do little to detract from Plum's overall positive aftertaste[^puns].

There's loads of additional surprises to be discovered in Plum, such as its [Last.fm](https://www.last.fm)-powered artist & album descriptions and its lightning-fast search engine, so if you're looking for a new player experience that's not too complicated or niche, Plum is sure to satisfy.

#### iPad Experience

Plum does indeed support the iPad, though unlike its iPhone companion, the iPad performance is not up to snuff. Scrolling in "Albums" is painfully laggy on my 2017 iPad Pro, despite that same library scrolling smoothly without issue on my iPhone 12. While in fairness the iPad Pro I'm using is indeed old at this point, it's worth pointing out that Plum and [Musens] are the only two players I've experienced noticeable performance issues with on this hardware, all other players are either within reasonable tolerances or fully equivalent in performance. Thus, I have to assign the majority of the blame to the player in this case and not to the hardware's age.

Performance issues aside, there's a few design changes to take advantage of the larger screen that end up missing the mark. While it's great that Plum's menu is rendered as sidebar on iPad, there's no way to show or hide it; you're forever stuck with 1/3 of the screen taken up by Plum's sidebar on iPad. It makes Plum on iPad feel uncomfortably rigid and unyielding, which feels particularly strange given how flexible the iPhone experience is in comparison. The full-player is also uncomfortably designed on iPad; Plum opted to permanently display a tiny version of the iPhone's full-player at the bottom of the sidebar, yet upon tapping the album art *another* full-player pops up (this time as a modal along with the queue). It's truly surreal to me that a duplicate full-player visible right beside its clone is an expected part of the user experience on iPad, and to me indicates the player design and interaction model on iPad needs to go back to the drawing board.

Due to these suboptimal design choices and the aforementioned performance issues, the Plum iPad experience is simply not good enough yet to stand among its iPad-supporting peers like [Power Player]. Unfortunately, for the iPad, you're better off exploring elsewhere.

#### Widgets

Like last year, Plum does not offer any widgets.

#### New This Year

Plum enjoyed a staggering number of releases throughout 2021, including the major release of Plum 8.0. There's plenty to explore, so I'll focus on what I feel are the three most notable changes from this past year:

* Pinned items
* Massive performance improvements on iPhone
* Refreshed folders

The new "pinned items" feature allows you to manually pin multiple artists or albums to the top of their respective pages (even above the optional "Recently Added" section). What you "pin" is entirely up to you; you could pin a couple all-time favorites like I did, or alternatively pin records or artists that you might be hitting frequently as of late, or perhaps even pin records or artists you've been meaning to check out but haven't yet gotten to. Regardless of your reason for pinning, it's handy to have the ability to keep specific items no farther than just a tap away.

Next up are the tremendous performance improvements Plum on iPhone received this past year. In 2020, I harped on Plum's janky animations and overall sluggish performance compared to its peers, and claimed it was Plum's primary issue going into the new year. However, throughout 2021, Adam clearly made a goal of fine tuning Plum's iPhone experience, and it shows in just about every aspect of the app. *Everything*, from scrolling through albums to showing and dismissing the full-player, is now silky smooth. I mean no exaggeration when I say the "jank" plaguing Plum in 2020 is now practically nonexistent in today's Plum. Performance enhancements can be a grueling engineering exercise, so to witness such a radical improvement to Plum's iPhone experience in just this past year is remarkable.

Finally, Plum's "Folders" feature received a complete redesign, not only expanding the feature's capabilities but also promoting it to a dedicated menu item. Today, a given folder can contain albums, artists, and even playlists, allowing your folders to be more dynamic and useful than ever before. For example, I have a "Sonic Cheer" folder where I have a handful of albums and artists that never fail to cheer me up. If you're a heavy playlists user, you could also group together related Playlists and throw in some artists or albums if you wanted. Coming from the suffocating constraints of traditional playlists in so many other players, it's such a breath of fresh air to now have a flexible alternative available.

While Plum visually looks identical to last year, the breathtaking performance improvements, new features like "Pinned Items", and fresh takes on existing features like "Folders" make Plum feel like an entirely different app in use. It's unclear where Plum will continue to grow from here, but Plum's recent track record has me eager to follow along.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Light &amp; dark themes</dt>
  <dd><p>Plum of course respects iOS’s system appearance, but goes above and beyond by not only supplying a high-contrast option (which yields a “true black” appearance in dark mode), but also by providing the option to permanently keep the full-player in dark mode regardless. All players should strive for a degree of appearance control like Plum provides.</p></dd>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>Plum supplies two radically different player “skins” to choose from, and the “Modern” skin is a thorough departure from the conventions established by nearly all other players and is thus visually engaging through sheer novelty alone.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Lyrics support</dt>
  <dd><p>Like <a href="https://apps.apple.com/us/app/picky-music-player/id497110916">Picky</a>, the approach is firmly and disappointingly “old school” for both Plum’s “Classic” and “Modern” skins, but it at the very least supports lyrics.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Discovery features</dt>
  <dd><p>While Plum only strictly supports a single traditional discovery collection (“Recently Added”), support for listeners to craft their own discovery collections in the form of folders, pinning, and favorites help pick up the slack.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Album-focused features</dt>
  <dd><p>While Plum unfortunately continues to not support my preferred sorting method (Artist > Chronological), its ability to browse albums as a grid, the flexibility to set the “Albums” page as Plum’s home, and the wide breadth of user-generated options available like favorite albums, pinned albums, and folders help round out Plum’s album-focused abilities.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> iPad support</dt>
  <dd><p>Plum offers an iPad version, but the performance issues yield the app unusable, and the screen size optimizations made are questionable at best.</p></dd>
</dl>
</div>

### ![Power Player's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/icon.png "Power Player's iOS app icon"){: .inline-app-icon } Power Player

<div class="show-when-light edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-usage-poster.jpg" alt="Video demonstrating Power Player's usage in light mode" title="Demonstrating Power Player's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-album-view.webp">
  <img type="image/jpeg" title="Power Player's light theme album-view" alt="Image of Power Player's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-album-view.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/full-player.webp">
  <img type="image/jpeg" title="Power Player's full-player" alt="Image of Power Player's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/full-player.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large three-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-usage-poster.jpg" alt="Video demonstrating Power Player's usage in dark mode" title="Demonstrating Power Player's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-album-view.webp">
  <img type="image/jpeg" title="Power Player's dark theme album-view" alt="Image of Power Player's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-album-view.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/full-player.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/full-player.webp">
  <img type="image/jpeg" title="Power Player's full-player" alt="Image of Power Player's full-player" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/full-player.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/power-player-music-player/id1372545429">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Few players riff on the original iOS Music.app design as successfully as Power Player. This is in no small part due to how boldly it wears this influence on its sleeve; from its stock tab bar (complete with the venerable "..." item to see and optionally swap out the other tab bar items) to its limited array of settings (which are only accessible through the Settings app), the player can oftentimes feel as though it was plucked right out of the iOS 7 App Store back in 2013. In an environment where other players with similar origins like [Cs Music] have made conscious efforts over the past couple years to distance their UI from their roots, Power Player has instead staunchly kept its design feet firmly planted in its initial power stance.

To be clear, this design philosophy is to Power Player's betterment. Its simple pre-iOS 8 inspired design and carefully selected feature set make the app a breeze to use, and is in my esteem among the easiest to use among the App Store's entire music player lineup. If you find yourself bemoaning [Music.app]'s complexity inflation following the introduction of the Apple Music streaming service, Power Player is the spiritual continuation of what was lost all those years ago.

I hesitate to use the word "simple" to describe Power Player since that may do the disservice of making it seem uninspired like [Dot Music]. Power Player is living proof that a player can be refreshingly simple to use yet still embody a bold design voice and employ slim (but compelling) features that make it stand alone and above many of its peers.

To speak concretely, Power Player features numerous striking visual design choices throughout, including:

* App-wide translucency
* A full-player painted with just two primary colors from the currently playing track's album art (instead of a stock background color or album art translucency effect like nearly every other player)
* A dynamic album page theme, featuring colors from the album's art, much like in [iTunes 11](https://panic.com/blog/itunes-11-and-colors/) and [Doppler]'s album pages.

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-red.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly red record" alt="Image of the album view in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-red.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-green.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly green record" alt="Image of the album view in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-green.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-blue.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly blue record" alt="Image of the album view in light mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-blue.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-red.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-red.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly red record" alt="Image of the album view in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-red.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-green.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-green.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly green record" alt="Image of the album view in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-green.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-blue.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-blue.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly blue record" alt="Image of the album view in dark mode with a predominantly blue record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-blue.jpg">
</picture>
</a>
<figcaption>Power Player’s album page. Like <a href="https://brushedtype.co">Doppler</a>, it's heavily inspired by <a href="https://panic.com/blog/itunes-11-and-colors/">iTunes 11’s gorgeous dynamic album display theme</a>.</figcaption>
</figure>

Power Player pairs this opinionated but subjectively tasteful design with a number of relatively small but carefully crafted features, such as:

* A full-player visualizer (one of the few players on the market to provide such a feature)
* Full-screen lyrics, artfully treated as a "second page" just a swipe away in the full-player
* A "Home" tab with some pre-baked discovery views like "Recently Added", "Loved", and more.

Compared to apps like [Albums] and [Marvis Pro] which are practically bursting at the seams with features, it's difficult to articulate how Power Player can possibly manage to stack up. As with its simple but timeless navigational interface, its features are implemented with extreme care and precision. For example, to this day, Power Player boasts one of my favorite lyrics experiences because of how tastefully the feature is exposed. So many apps bewilderingly ignore lyrics entirely like [Doppler], stick them unceremoniously in a long, scrollable list of other information like [Marvis Pro], or smear them over the album art like [Picky]. Much like [Doppi]'s approach, Power Player brilliantly strikes the delicate compromise of having lyrics be discoverable and easily accessible without becoming intrusive for listeners that don't wish to use the feature.

That's not to say Power Player is without fault, far from it. While its opinionated design perfectly aligns with my tastes, by nature of Power Player leaning so heavily into its choices without allowing any options to tweak or opt out of them, your own impressions will naturally vary. For example, its emphasis on translucency as a core part of the visual experience and relative lack of customization are no doubt dealbreakers for some listeners. There's also the continued lack of full Apple Music service integration, which means you'll have to continue jumping back to [Music.app] or a supporting third-party player whenever you want to stream something you don't already have locally downloaded. While pain points like these were less of an issue when Apple Music was still young and few third-party players supported it in any capacity, with each passing year an increasing number of players roll out support, making it increasingly disappointing to see some apps like Power Player continue to hold out.

While I can't claim that Tim Evenwerk—Power Player's developer—will continue its early iPhoneOS-inspired interface and iOS 7-era visual design into the new year, the restraint and care he's exercised thus far with that foundation inspires confidence that even if we do see a Power Player 2.0 with a brand new design sometime this year, that new design is sure to still embody the original's core values. Whichever way the winds of change blow, Power Player has demonstrated through its life that it can be depended on to provide a premium and functionally accessible (if not potentially divisive) experience.

#### iPad Experience

The past couple years, I've raved about Power Player's exceptional iPad experience, and 2021 was no exception. All of what I loved about the experience in previous years remains; the [iTunes 11](https://panic.com/blog/itunes-11-and-colors/)-style expanding album "tray" effect is still there, much to my delight. Last year's "Loved" song styles continue to shine brightest on the iPad, where the larger display is leveraged to display massive, gorgeously color-matched cards practically begging to be touched. The lyrics experience on iPad still leads the pack as well with an complete full-player right beside a massive scrollable lyrics view when in landscape mode, ensuring that everything you'd possible want to read or interact with in the full-player is visible and accessible the entire time you're listening.

However, this year's new additions are a bit of a mixed bag on iPad. While the new bokeh-style visualizer looks great on the larger screen (if not a bit too distracting due to the "bubbles" not scaling up in size to adjust to the larger screen and simply multiplying in number), the new entity view design suffers. Unlike most other pages on iPad, the new entity page design did not receive any iPad-specific optimizations, leaving the hero image to take up a hilariously massive percentage of the screen, forcing even 12" iPad displays to scroll to see most of the entity page content. It's a real shame to see given Power Player's historically careful attention to the details in its iPad experience, and I can only hope these rough edges in its iPad UI will be smoothed out in future patches.

#### Widgets

Power Player's widgets remain the same as they were from 2020, with the sole exception of the addition of a new extra-large widget for iPads running iPadOS 15 and newer.

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-large-dark.webp">
  <img type="image/png" title="Power Player's large 'Home' widget in dark mode" alt="Image of Power Player's large 'Home' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-medium-dark.webp">
  <img type="image/png" title="Power Player's medium 'Home' widget in dark mode" alt="Image of Power Player's medium 'Home' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-medium-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-small-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-small-widget.webp">
  <img type="image/png" title="Power Player's small 'Home' widget" alt="Image of Power Player's small 'Home' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-small-widget.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-large-light.webp">
  <img type="image/png" title="Power Player's large 'Home' widget in light mode" alt="Image of Power Player's large 'Home' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-medium-light.webp">
  <img type="image/png" title="Power Player's medium 'Home' widget in light mode" alt="Image of Power Player's medium 'Home' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-medium-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-small-widget.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-small-widget.webp">
  <img type="image/png" title="Power Player's small 'Home' widget" alt="Image of Power Player's small 'Home' widget" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/1-small-widget.png">
</picture>
</a>
</div>
</div>

As a refresher, Power Player only provides a single "Home" widget collection that spans every available widget size. Each widget in this collection allows the ability to display one or more items from any section in Power Player's "Home" tab, which includes:

* Recently Added
* Recently Played
* Most Played
* Loved

With the exception of the admittedly disappointing absence of a "Now Playing" widget collection, Power Player's widget collection is respectable and moderately flexible by nature of allowing users to select a particular "Home" page section to display. With so many players in the showcase *still* lacking widget support entirely two full years after the feature's release in iOS 14, Power Player's widget suite remains ahead of most by simply existing. However, those coming from [Albums] or [Marvis Pro] that are used to a wide variety of widget collections or customization options will continue to be left wanting.

#### New This Year

Through the year, Power Player saw a healthy handful of minor releases containing dozens of bug fixes and new features. Notable among them are:

* A full-player visualizer
* Brand new "Artist", "Genre", and "Composer" entity pages, featuring full-screen dynamic themes and sub-sections containing albums, songs, "Loved" songs, and more.
* Enhanced playlist support, including playlist grouping and the ability to edit and create new playlists right in Power Player

Let's start with arguably the most noticeable and controversial change, the new bokeh-style visualizer. Instead of just displaying a solid album art-derived background color like last year, this year many translucent bubbles appear and drift about loosely along with your playback. The term "loosely" is generously applied, as to my eyes what's playing seems to have little to no noticeable impact on the visualizer itself. Thankfully, given the visualizer's floaty, carefree tone, it still manages to fit beautifully with genres like [bedroom pop](https://en.wikipedia.org/wiki/Lo-fi_music#Definitions_and_etymology) and [dream pop](https://en.wikipedia.org/wiki/Dream_pop). However, as you'd expect, those friendly, floaty bubbles are hilariously out of places for other genres like hip hop and metal, certainly not aided in those cases by how little the bubbles seem to react along to the music. With these caveats clear, I still see the visualizer as a welcome addition; it can be trivially disabled for those that dislike it, but for those like myself that have been clamoring for full-player visualizers for years, it's a welcome change to find other players embracing them, despite this particular one's flaws.

<div class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-artist-page-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-artist-page-1.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly red record" alt="Image of the album view in light mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-artist-page-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-artist-page-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-artist-page-2.webp">
  <img type="image/jpeg" title="The album view in light mode with a predominantly green record" alt="Image of the album view in light mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/light-artist-page-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-artist-page-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-artist-page-1.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly red record" alt="Image of the album view in dark mode with a predominantly red record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-artist-page-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-artist-page-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-artist-page-2.webp">
  <img type="image/jpeg" title="The album view in dark mode with a predominantly green record" alt="Image of the album view in dark mode with a predominantly green record" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/dark-artist-page-2.jpg">
</picture>
</a>
</div>

Next up are the brand-new "Artist", "Genre", and "Composer" entity page designs. Gone are the days of simply showing a list of albums, Power Player now features a [Music.app]-inspired edge-to-edge header image and stacked, horizontally scrollable sections for albums, songs, music videos, and more for the entity in question. While it's sure to be a divisive departure from the standard "list of items" design, I find this a wonderful improvement; these collections are now substantially more useful by allowing their contents to be exposed in a myriad of different ways; regardless of what you're looking to find, the new "Artist", "Genre", and "Composer" views do a far better job of helping you get there.

Finally, Power Player now sports enhanced playlist support, which allows users to edit and create playlists right in Power Player itself. Thankfully, playlists created within Power Player are not exclusive to Power Player like in [Doppi], this is honest-to-goodness [Music.app] playlist integration; playlists you create or edit in Power Player will become available in Music.app and other players that read from the Apple Music database. That's not all, for users with playlists of different make (such as smart playlists, genius playlists, etc.), Power Player now intelligently groups those playlists into folders of that type instead of treating all playlists as "the same" like most other players.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Lyrics support</dt>
  <dd><p>While lyrics support on the iPhone is good, the lyrics support on iPad (which allows you to view the lyrics in a separate column beside the standard full-player contents in landscape mode) is truly exceptional.</p></dd>
  <dt><span class="bullet">:trophy:</span> iPad support</dt>
  <dd><p>Were is not for Music.app and <a href="https://apps.apple.com/us/app/albums-album-focused-player/id1469948986">Albums</a>, Power Player would trivially claim the title of best iPad music player experience. Its album art “tray” effect, full screen full-player, and dual-column full-player & lyrics layout in landscape mode make it one of my only go-to players on the iPad.</p></dd>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>Its bold album art color theming and bubbly visualizer make Power Player’s full-player visually striking and as attractive as candy.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
  <dt><span class="bullet">:heavy_check_mark:</span> Discovery features</dt>
  <dd><p>Power Player now provides the ability to sort and hide “Home” page sections, which empowered me to make its “Home” discovery collections more personal and relevant to my own use. While the continued lack of ability to group by albums like in <a href="https://apps.apple.com/us/app/cs-music-player/id924491991">Cs Music</a> remains disappointing, Power Player’s offering are perfectly reasonable.</p></dd>
  <dt><span class="bullet">:heavy_check_mark:</span> Album-focused features</dt>
  <dd><p>Power Player on iPhone isn’t album-focused at all; you can’t browsed albums with a grid layout, and Power Player doesn’t support my preferred sorting method (Artist > Chronological). However, to me the album art “tray” visual flourish on iPad alone is genuinely enough to pick up the slack, it’s <em>that good</em>.</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
</dl>
</div>

### ![Vinyl Fetish's iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/icon.png "Vinyl Fetish's iOS app icon"){: .inline-app-icon } Vinyl Fetish

<div class="show-when-light edge-to-edge large two-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-usage-poster.jpg" alt="Video demonstrating Vinyl Fetish's usage in light mode" title="Demonstrating Vinyl Fetish's usage in light mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-album-view.webp">
  <img type="image/jpeg" title="Vinyl Fetish's light theme album-view" alt="Image of Vinyl Fetish's light theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-album-view.jpg">
</picture>
</a>
</div>
<div class="show-when-dark edge-to-edge large two-images ios-screenshot">
<video controls preload="none" poster="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-usage-poster.jpg" alt="Video demonstrating Vinyl Fetish's usage in dark mode" title="Demonstrating Vinyl Fetish's usage in dark mode">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-usage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-usage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-usage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-album-view.jpg">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-album-view.webp">
  <img type="image/jpeg" title="Vinyl Fetish's dark theme album-view" alt="Image of Vinyl Fetish's dark theme album-view" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-album-view.jpg">
</picture>
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://apps.apple.com/us/app/vinyl-fetish-music-player/id1490719457">
<img class="show-when-light" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/dark-download-on-the-app-store.svg" />
</a>
</figure>

Every year or so, a new niche player enters the scene. In the case of [Jams On Toast] in 2017 or [Longplay] in 2020, the concepts are intriguing but lack the developer attention necessary to make the result compelling enough to last beyond initial curiosity. However, in rare cases like with [Albums] in 2019, the developer continues to invest time and energy beyond the initial release towards fully realizing the player's original vision. As the name and promotional screenshots are quick to boldly demonstrate, Vinyl Fetish is a niche player. However, don't let the earnest but amateur visual design fool you; Vinyl Fetish is fiercely developed just like Albums and one of the most exciting album-focused experiences on iOS today.

At this point, an album-focused player isn't particularly novel. Jams On Toast, Longplay, Albums, and arguably [Vinyls](https://www.pnguin.app/vinyls)[^arguably-vinyls] all pride themselves on their album-focused design. However, with the exception of Albums, this focus tends to only run skin deep and rarely results in a browsing and listening experience appropriate for frequent use. Take Jams On Toast, which hung its hat on its brilliant "record crate" browsing mechanic, but delivered such a lackluster, barely present playback experience it was frankly easy to forget Jams On Toast even *could* play back the albums you were browsing. Longplay's story is much the same, only this time featuring a tightly packed album art grid and quirky sorting options to accompany its nearly nonexistent playback experience. Vinyls came close to breaking out of this development rut, but its initially beautiful playback interface is not much more than a thick layer of makeup. The faux vinyl record featured prominently at the center of the player is a static image that looks the same regardless of the record you're playing, quickly cheapening the illusion after more than a couple records. This is all to say, while the mere presence of album-focused niche players on iOS is no longer unique at face value, to find one that nails capturing the joy of browsing *and* playing a vinyl record is quite remarkable, indeed.

In classic niche player fashion, both Vinyl Fetish's home page and menu navigation are unconventional. Instead of dumping the user into a browser or a menu page like most players, Vinyl Fetish puts the spotlight squarely on its player view by featuring it as the heirarchical root of the entire app. This approach works remarkably well in Vinyl Fetish both due to how vital the player view is to the app's vision and how naturally simple the secondary views like the browser are as a result of its record-only focus (there's not a mess of browsing tabs here like on Vinyls). This lack of flexibility will of course turn away some listeners, but Vinyl Fetish leaning full-bore into album browsing and listening exclusively is fully to its benefit. In contrast to Vinyls, which bewilderingly tries its best to accommodate browsing by unrelated collections like "Songs" and feels confused as a result, Vinyl Fetish fully understands what it's about; it exists to emulate the joy of browsing and playing vinyl records. That's it.

Focusing more finely on Vinyl Fetish's player view, there are three main components:

* Platter, tonearm, and dynamically rendered record
* Record "sleeve"
* Control panel for playback controls

The first two components (the record player and record sleeve) can be positioned or scaled any particular way you wish, in addition to some minor rendering options like enabling a tilt or shadow on the sleeve. This alone provides a great deal of customization, but where Vinyl Fetish really shines is the customization it provides for the "vinyl" record itself. Through the app's "vinylize" process, you can choose a particular album from your Apple Music library to be available to browse and play in Vinyl Fetish, and upon selecting an album to "vinylize", Vinyl Fetish presents a number of options. Vinyl Fetish will first make a best attempt guess at dividing up the record into different sides based on the track lengths, which if wrong can be easily adjusted to your taste or corrected to match a physical pressing's arrangement. After approving the disk & side separation, you then have the freedom to change the side labels, vinyl color, and even transparency to your taste. All this customization is certainly powerful, and on its own elevates Vinyl Fetish above the shallow vinyl skeuomorphism found in competing apps like Vinyls. However, what really sets Vinyl Fetish apart is the delightfully accurate track rendering on its "vinyl record". All to often, when you see vinyl records used either as decoration or literal interface controls in players it's just a single pre-rendered image that quickly grows stale. However, with Vinyl Fetish, your vinylized records will all look different. [The Beatles](https://music.apple.com/us/artist/the-beatles/136975)' famous [side 2 medly](https://en.wikipedia.org/wiki/Abbey_Road#Medley) on [*Abbey Road*](https://music.apple.com/us/album/abbey-road-2019-mix/1474815798) looks as jam packed and eclectic as it sounds, [Kamasi Washington](https://music.apple.com/us/artist/kamasi-washington/154076564)'s extensive opuses on [*The Epic*](https://music.apple.com/us/album/the-epic/975610456) look as impressive and imposing as they sound (often just a song or two taking up an entire side all by themselves), and everything in between. The only thing tarnishing the overall effect is the record's cartoony rendering style, which has the unfortunate effect of making it feel a bit amateurish (especially in comparison to Vinyls lazily reused but otherwise gorgeous vinyl record image). Additionally, while the ability to choose your own side labels is perfectly functional, the inability to scale and adjust the images you choose to be *just right* is a bit aggravating. With those few caveats said, they do little to detract from the overall presentation, which is dynamic, customizable, and irresistible to lovers of the vinyl record medium[^irresistible].

<figure class="three-images ios-screenshot">
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-1.webp">
  <img type="image/jpeg" title="Abbey Road side B in Vinyl Fetish in light mode" alt="Image of Abbey Road side B in Vinyl Fetish in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-1.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-2.webp">
  <img type="image/jpeg" title="The Epic side E in Vinyl Fetish in light mode" alt="Image of The Epic side E in Vinyl Fetish in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-2.jpg">
</picture>
</a>
<a class="show-when-light" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-3.webp">
  <img type="image/jpeg" title="Out of the Blue side C in Vinyl Fetish in light mode" alt="Image of Out of the Blue side C in Vinyl Fetish in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/light-example-3.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-1.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-1.webp">
  <img type="image/jpeg" title="Abbey Road side B in Vinyl Fetish in dark mode" alt="Image of Abbey Road side B in Vinyl Fetish in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-1.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-2.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-2.webp">
  <img type="image/jpeg" title="The Epic side E in Vinyl Fetish in dark mode" alt="Image of The Epic side E in Vinyl Fetish in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-2.jpg">
</picture>
</a>
<a class="show-when-dark" href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-3.webp">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-3.webp">
  <img type="image/jpeg" title="OUt of the Blue side C in Vinyl Fetish in dark mode" alt="Image of OUt of the Blue side C in Vinyl Fetish in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/dark-example-3.jpg">
</picture>
</a>
<figcaption>In Vinyl Fetish, you can see the numerous vignettes in <em><a href="https://music.apple.com/us/album/abbey-road-2019-mix/1474815798">Abbey Road</a></em>’s <a href="https://en.wikipedia.org/wiki/Abbey_Road#Medley">medly</a>, the sprawling opuses in <em><a href="https://music.apple.com/us/album/the-epic/975610456">The Epic</a></em>, and even <a href="https://en.wikipedia.org/wiki/Out_of_the_Blue_(Electric_Light_Orchestra_album)#Concerto_for_a_Rainy_Day">“Concerto For A Rainy Day”</a> off <em><a href="https://music.apple.com/us/album/out-of-the-blue/1054525002">Out of the Blue</a></em> as originally intended.</figcaption>
</figure>

That just leaves the player view's control panel, where the bare minimum of playback controls are provided. You can obviously stop and start playback, but absent are the typical skip back and forward buttons. Instead, you can either drag and drop the tonearm as you would a real record player or alternatively swipe left or right to skip backward or forward, respectively. The ability to switch disks or sides is also available here, which yields delightful disk swapping or flipping animations as you progress through the record. Finally, the entire control panel can be hidden with a tap anywhere above the panel, giving you extra room to arrange and enjoy Vinyl Fetish's record sleeve and player.

As mentioned before, Vinyl Fetish's navigation is remarkably focused and simple. At the very bottom of the full-player is an unconventional menu bar which houses the settings, album browser, and <kbd>+</kbd> button to "vinylize" new albums from your library to add to your collection in Vinyl Fetish. The album browser lets you browse your vinylized records either as a list sorted by artist or a grid by artist. For the latter's layout style, on a given artist's page, you can also continue to maintain the grid layout style or alternatively dip into a bit of whimsy by selecting the "crate" layout style, which arranges that artist's records as if you were sifting through them in a record crate. The effect is strongly reminiscent of Jams On Toast, and in many respects is an improvement. For example, Vinyl Fetish adds some "thickness" and simulated weight to the records you sift through, making them feel far more realistic than Jams of Toast's paper-thin record crates.

If Albums is a requirement for listeners that love albums as a musical art form, Vinyl Fetish has proven itself to be a requirement for listeners who love the vinyl record music format. German Buela—Vinyl Fetish's developer—has developed one of the most unusual and niche players I've seen since Jams On Toast four years ago. Even the name itself—which is equal parts naughty and undeniably brilliant—can't help but stand out in the crowd. Vinyl Fetish still has lots of work ahead of it, such as higher resolution sleeve art, proper label placement control, and a professionally rendered vinyl record appearance, but despite its shortcomings it's difficult for listeners who love vinyl records to walk away from a listen in Vinyl Fetish without a smile on their face. Among the growing list of niche players that exist today on iOS, few realize their vision as successfully as Vinyl Fetish.

#### iPad Experience

Vinyl Fetish offers full iPad support, featuring a tweaked home screen/full-player with default layouts for both portrait and landscape modes that takes full advantage of the iPad's massive screen. The app arguably shines brightest with the iPad's larger screen, allowing nuances in Vinyl Fetish's dynamically rendered records to become even more visible, like the discrete gaps between tracks on a given side and the current side's label. The rest of the experience remains largely the same, but given Vinyl Fetish's slim feature set, the few tweaks made to the app's full-player launchpad are more than sufficient to make the app feel fully design and optimized for the larger screen.

While Vinyl Fetish is a fantastic stand-alone iPad experience, [no Universal App is an island](https://5by5.tv/hypercritical/9), and Vinyl Fetish's iCloud sync feature is not yet up to the task. After getting my configuration all set up on the iPhone, enabling the feature on my iPhone, then enabling it on my iPad, no data synced and continued to not sync for months until some secret incantation of adding new records and updating existing ones finally got my data to sync over. Unfortunately, even then my Vinyl Fetish sync issues weren't resolved, since all my synced records were missing their album art, and remain missing to this day. While sync is tricky business to get right and my experience could very well be an edge case, it nonetheless left me disappointed, especially in the light of the other players like Albums whose iCloud support has for me "just worked" since its initial release.

#### Widgets

<div class="show-when-dark box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-large-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-large-dark.webp">
  <img type="image/png" title="Vinyl Fetish's large 'Now Playing' widget in dark mode" alt="Image of Vinyl Fetish's large 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-large-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-medium-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-medium-dark.webp">
  <img type="image/png" title="Vinyl Fetish's medium 'Now Playing' widget in dark mode" alt="Image of Vinyl Fetish's medium 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-medium-dark.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-small-dark.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-small-dark.webp">
  <img type="image/png" title="Vinyl Fetish's small 'Now Playing' widget in dark mode" alt="Image of Vinyl Fetish's small 'Now Playing' widget in dark mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-small-dark.png">
</picture>
</a>
</div>
</div>
<div class="show-when-light box widget">
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-large-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-large-light.webp">
  <img type="image/png" title="Vinyl Fetish's large 'Now Playing' widget in light mode" alt="Image of Vinyl Fetish's large 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-large-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 40%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-medium-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-medium-light.webp">
  <img type="image/png" title="Vinyl Fetish's medium 'Now Playing' widget in light mode" alt="Image of Vinyl Fetish's medium 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-medium-light.png">
</picture>
</a>
</div>
<div style="flex:0 1 20%;">
<a href="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-small-light.png">
<picture>
  <source type="image/webp" srcset="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-small-light.webp">
  <img type="image/png" title="Vinyl Fetish's small 'Now Playing' widget in light mode" alt="Image of Vinyl Fetish's small 'Now Playing' widget in light mode" src="{{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/1-small-light.png">
</picture>
</a>
</div>
</div>

A single widget collection of three widget sizes is provided by Vinyl Fetish, which all showcases the "now playing" vinyl record side and sleeve. All three sizes are nearly identical, save for the addition of the album title and current side label on the medium and large sizes and some minor positional adjustments to accommodate the elongated medium size. The widget's background naturally assumes the color theme you selected in the app, which thankfully also continues to respect the system's theme for the "system" color theme options.

Unfortunately, the ability to change the widget's background color by means of the app's color theme settings is as far as the widget's customization goes; Vinyl Fetish provides no widget settings whatsoever for any of its widget sizes. Additionally, the record rendered in the widget is frustratingly a generic placeholder and not the one rendered in the app which accurately reflects the track separation. While these aspects of the collection are disappointing, what Vinyl Fetish provides remains nonetheless attractive and unique enough to likely still appeal to vinyl lovers.

#### New This Year

Unlike other players in the "Established" category of the showcase, I will not be covering what was new in Vinyl Fetish from 2021 because—unfortunately—this is one of the established players that slipped past my radar in [2020's showcase](/post/third-annual-ios-music-player-showcase). I only just learned of the player this year thanks to reader mail from Rafal Ruta, suggesting it was a player I might be interested in. Since I didn't establish the necessary understanding of the app's functionality to contextualize the progress it made this past year, I feel it's best to forgo the "New This Year" section for Vinyl Fetish. Otherwise, I'd have to dig through the change log and artificially guess at what the Vinyl Fetish experience was like at the end of 2020 to establish that context, which isn't fair to Vinyl Fetish nor the other established players.

#### Personal Assessment

<div class="admonition aside">
<dl>
  <dt><span class="bullet">:trophy:</span> Beautiful or visually engaging full-player</dt>
  <dd><p>The record with accurate track separation and ability to customize the record’s center label and color make Vinyl Fetish’s full-player a feast to the eyes.</p></dd>
  <dt><span class="bullet">:trophy:</span> Album-focused features</dt>
  <dd><p>It’s the only player I’m aware of that respects album <em>sides</em>, allowing me to enjoy my physical vinyl record side labels digitally while listening, and Vinyl Fetish even sorts albums with my preferred method (Artist > Chronological).</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:heavy_check_mark:</span> Light &amp; dark themes</dt>
</dl>

<dl>
  <dt><span class="bullet">:large_orange_diamond:</span> iPad support</dt>
  <dd><p>While Vinyl Fetish does an overall great job supporting the iPad, its iCloud Sync feature was far too flacky to be able to use the iPad version in practice. Still waiting on that album art to appear…</p></dd>
</dl>

<dl>
  <dt><span class="bullet">:x:</span> Apple Music integration</dt>
  <dt><span class="bullet">:x:</span> Lyrics support</dt>
  <dt><span class="bullet">:x:</span> Discovery features</dt>
</dl>
</div>

## Recommendations

### Entity Emphasis

Albums
: __[!["Albums" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/icon.png '"Albums" iOS app icon'){: .inline-app-icon } Albums](https://apps.apple.com/us/app/albums-album-focused-player/id1469948986):__ The ability to view and browse by credit, the unified progress bar, and absolutely insane number of discovery options provided with little to no configuration make Albums the undisputed champion of album-focused players. If you love albums as an art form, you own it to yourself to give Albums a look.

Favorites
: __[!["Plum" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/icon.png '"Plum" iOS app icon'){: .inline-app-icon } Plum](https://apps.apple.com/us/app/plum-music-player/id1441625664):__ Not only can you favorite *anything* (songs, albums, artists, playlists, and even folders), but Plum's presentation of those favorites is truly exceptional; you can select a traditional layout style to separate favorites by entity type, or alternatively select the lovely "Mosaic" layout style and enjoy a dynamic collage of your all your favorites at once.

Playlists
: * **Interested in both "smart" and manually crafted playlists?**
    * __[!["Mixtapes" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/mixtapes/icon.png '"Mixtapes" iOS app icon'){: .inline-app-icon } Mixtapes](https://apps.apple.com/us/app/mixtapes-music-player/id1571885606):__ While Marvis Pro has an exceptional "smart playlist" equivalent and Power Player has solid manual playlist support, Mixtapes is the only player available today that combines them both. It should be noted its "smart" playlist capabilities are fairly limited at the moment, but if support for *both* types are important to you, Mixtapes is the only player that can meet your needs.
* **Primarily interested in "smart" playlists?**
    * __[!["Marvis Pro" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/icon.png '"Marvis Pro" iOS app icon'){: .inline-app-icon } Marvis Pro](https://apps.apple.com/us/app/marvis-pro/id1447768809):__ If you are only interested in "smart" playlists, Marvis Pro is the indisputable champion. No other player even comes close to matching the sheer number of filtering and sorting options Marvis Pro offers.

Singles
: __[!["Picky" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/picky/icon.png '"Picky" iOS app icon'){: .inline-app-icon } Picky](https://apps.apple.com/us/app/picky-music-player/id497110916):__ While [Plum] puts up fierce competition by sporting similar capabilities for albums and artists, only Picky supports the fantastic "slide to filter" feature in album, artist, *and* song pages. This makes it trivial to browse your library for just one-hit wonders and hit singles, without—for example—irritatingly displaying all twenty-two tracks from [*Illinois*](https://music.apple.com/us/album/illinois/328074546)[^illinois].

Vinyl Records
: __[!["Vinyl Fetish" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/vinyl-fetish/icon.png '"Vinyl Fetish" iOS app icon'){: .inline-app-icon } Vinyl Fetish](https://apps.apple.com/us/app/vinyl-fetish-music-player/id1490719457):__ The abstract concept of a musical album is inherently different than the many physical manifestations of that concept. Vinyl records are one of a long history of various physical music formats that deliver what we consider an "album", and if you are really into the vinyl record format in particular, Vinyl Fetish is simply stunning and will deliver an experience no other album-focused player (even Albums) can match.

### Premium Lyrics Experience

On iPhone
: __[!["Marvis Pro" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/icon.png '"Marvis Pro" iOS app icon'){: .inline-app-icon } Marvis Pro](https://apps.apple.com/us/app/marvis-pro/id1447768809):__ Of all players, Marvis Pro is the only one that supports viewing the album art right alongside the lyrics while in landscape mode on iPhone. That awards it top marks in my book by default.

On iPad
: __[!["Power Player" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/icon.png '"Power Player" iOS app icon'){: .inline-app-icon } Power Player](https://apps.apple.com/us/app/power-player-music-player/id1372545429):__ While both [Music.app] and Power Player support dual column full-players in landscape mode on iPad, Power Player tips the scales in its favor by providing a more focused, elegant experience throughout the rest of the app like Music.app used to back in the day.

When Streaming
: __[!["Music.app" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/icon.png '"Music.app" iOS app icon'){: .inline-app-icon } Music.app](https://music.apple.com/):__ Despite my frustrations with [Music.app], there's no denying that if you're streaming Apple Music content and that content happens to support "Live Lyrics", no other third-party player comes close (in no small part due the gorgeous "lava lamp" visualizer remaining locked behind that specific criteria).

### Seamless Streaming Service Integration

Apple Music
: __[!["Marvis Pro" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/icon.png '"Marvis Pro" iOS app icon'){: .inline-app-icon } Marvis Pro](https://apps.apple.com/us/app/marvis-pro/id1447768809):__ If you want seamless, premium Apple Music streaming service integration, it doesn't get much better than Marvis Pro. While Music.app of course prominently features the Apple Music streaming service, it's at the expense of where the focus arguably *should* be, your library. Marvis Pro, in contrast, puts your library front and center, but you can search for and stream anything from Apple Music's library and display as much or as little of the Apple Music service on your "Home" page as you want.

Spotify
: __[!["Plum" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/plum/icon.png '"Plum" iOS app icon'){: .inline-app-icon } Plum](https://apps.apple.com/us/app/plum-music-player/id1441625664):__ Not only does Plum offer respectable [Spotify](https://www.spotify.com/us/) support, it's the *only* player in this year's showcase that boasts this ability. If you continue to grip onto a Spotify subscription on iOS and want your third-party player to support it, Plum's got your back.

### Industry-Leading Visualizers

__[!["jetAudio" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/jetaudio/icon.png '"jetAudio" iOS app icon'){: .inline-app-icon } jetAudio](https://apps.apple.com/us/app/jetaudio-hd-music-player/id894888135):__ While there's now a handful of players that support visualizers (in [Musens] case with exceptional quality), only jetAudio offers over thirty unique and compelling visualizers to choose from. It's in a league of its own.

### Gorgeous Full-Player

On iPhone
: * **Interested in movement?**
    * __[!["Musens" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/musens/icon.png '"Musens" iOS app icon'){: .inline-app-icon } Musens](https://apps.apple.com/us/app/doppi/id1002899671):__ The days of being bitterly disappointed at Music.app's diluted full-player visualizer are over; Musens captures the liveliness of Music.app's lava lamp "Live Lyrics" visualizer, but right in the full-player. Not diluted, and not locked behind a lyrics feature.
* **Prefer no movement?**
    * __[!["Power Player" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/icon.png '"Power Player" iOS app icon'){: .inline-app-icon } Power Player](https://apps.apple.com/us/app/power-player-music-player/id1372545429):__ If movement in your full-player isn't your flavor, there are few static full-players more bold and captivating than the one supplied by Power Player. While Picky's full-player is arguably equivalent in beautiful (albeit with a very different approach), Power Player's superior full-player lyrics support and optional visualizer nudge it ahead.

On iPad
: __[!["Power Player" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/icon.png '"Power Player" iOS app icon'){: .inline-app-icon } Power Player](https://apps.apple.com/us/app/power-player-music-player/id1372545429):__ If you're on an iPad, no other player is as beautiful as Power Player's without needlessly sacrificing functionality. [Marvis Pro]'s is arguably more pretty, but the poor use of screen space in landscape mode on iPad in comparison to Power Player's approach held it back.

### Independent Library Support

__[!["Doppler" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/doppler/icon.png '"Doppler" iOS app icon'){: .inline-app-icon } Doppler](https://apps.apple.com/us/app/doppler-mp3-flac-player/id1468459747):__ [Doppi]'s independent library support is indeed rich, but is unfortunately heavily reliant on Apple protocols and the Apple ecosystem. In comparison, Doppler offers industry-leading support for platform agnostic independent library management, allowing anyone (whether on Windows, Linux, whatever) to easily send music from their platform of choice to Doppler.

### Spiritual iPhoneOS Music app Successor

Toss-up between __[!["Power Player" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/icon.png '"Power Player" iOS app icon'){: .inline-app-icon } Power Player](https://apps.apple.com/us/app/power-player-music-player/id1372545429)__ and __[!["Cs Music" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/icon.png '"Cs Music" iOS app icon'){: .inline-app-icon } Cs Music](https://apps.apple.com/us/app/power-player-music-player/id1372545429)__, it really depends on whether or not you appreciate Power Player's bold transparency-forward design. If Power Player's extensive translucency is not to your taste for any reason, Cs Music is the closest alternative to what I'd consider to be the spiritual successor to iPhoneOS's original Music.app. However, if the translucency is to your taste, Power Player is strictly speaking the closest equivalent. While [Picky] got close, it does not support the required ability to customize the tab bar items.

### Discovery Features

Little To No Configuration?
: __[!["Cs Music" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/cs-music/icon.png '"Cs Music" iOS app icon'){: .inline-app-icon } Cs Music](https://apps.apple.com/us/app/power-player-music-player/id1372545429):__ With minimal but powerful options like the ability to reorganize and show/hide the various discovery collections combined with the ability to easily switch the entity type they display, Cs Music strikes the best compromise between out-of-the-box discoverability with a satisfying level of accessible customization.

Love Configuration?
: __[!["Marvis Pro" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/marvis-pro/icon.png '"Marvis Pro" iOS app icon'){: .inline-app-icon } Marvis Pro](https://apps.apple.com/us/app/marvis-pro/id1447768809):__ If you loved making "smart" playlists in iTunes back in the day or if you continuously find yourself longing for more power and control in other music players, Marvis Pro is the player you're looking for. Its exhaustive customization capabilities and section creation engine continue to lead Marvis Pro to the top of its class in the category.

Primarily Listen to Albums?
: __[!["Albums" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/albums/icon.png '"Albums" iOS app icon'){: .inline-app-icon } Albums](https://apps.apple.com/us/app/albums-album-focused-player/id1469948986):__ While Marvis Pro remains the theoretical champion of album discovery features, this carries a massive "lots of assembly required" asterisk. Albums' discovery options are outstanding out of the box with little to no configuration required, in contrast. Unless you're *really* into taking the time to create the album-focused experience you want, Albums is the overall best option.

### iPad Support

Willing to forgo some screen size optimization for a vastly improved album browsing experience?
: __[!["Power Player" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/power-player/icon.png '"Power Player" iOS app icon'){: .inline-app-icon } Power Player](https://apps.apple.com/us/app/power-player-music-player/id1372545429):__ While Power Player's iPad experience isn't quite as optimized as it could be (most notably due to its absense of multi-column browsing), it does offer a more optimized album browsing experience with its [iTunes 11](https://panic.com/blog/itunes-11-and-colors/)-style album art "tray" design. If you primarily listen to albums, the trade-off is worth it.

Want the best optimized iPad experience?
: __[!["Music.app" iOS app icon]({{ site.dropbox }}/fourth-annual-ios-music-player-showcase/music-app/icon.png '"Music.app" iOS app icon'){: .inline-app-icon } Music.app](https://music.apple.com/):__ For the best overall optimized iPad experience, Music.app remains the champ thanks to its full screen full-player, stock iPadOS sidebar, and multi-column browsing.

## Conclusion

As the music player genre continues to mature and grow, so does the options available to listeners. No matter the occassion, there's an app (and oftentimes many apps) that are perfectly suited to the occassion, whether you're working out, on a long commute, sitting down to actively listen to a record, or anything in between. When I first began taking notice of third-party music players back in 2014 with the launch of [Cesium](https://www.reddit.com/r/apple/comments/2n5b9b/i_couldnt_stand_musicapp_so_i_made_my_own_please/) (now [Cs Music]), not only were there only a fraction of the players available today, I found it near impossible to discover them in the first place. While the fantastic community of passionate iOS developers are fully to thank for the growth the music player genre enjoyed over the past half decade, it's my hope that this yearly showcase continues helps offset the App Store's poor search and discovery capabilities and exposes you to players you may not have otherwise been aware of.

To put it lightly, 2021 was a wild ride, and it's proving increasingly difficult to predict what the new year will bring. However, if this yearly assessment of the music player landscape has taught me anything, it's that I know for certain what we can expect in 2022; the music player ecosystem will continue to thrive. Happy listening into 2022, everyone!

<div class="article-linkback">
  <a href="/">⌘</a>
</div>

------

### Addendum: Looking Towards The Future

To speak personally for a moment, this year's showcase was difficult to complete. To my surprise, there were yet another crop of new apps this year, nearly doubling that of last year. While this is of course great news for the ecosystem, it put strain on the showcase's current format; it simply doesn't scale to meet the growing scope. I want more than anything to properly give the changes developers work hard on over the year the focus they deserve, but it's getting to the point where that's no longer feasible without sacrificing other aspects of the showcase. Additionally, this year in particular I felt my writing creep dangerously close to repetition, and now's the time to pivot before that repetition becomes unavoidable. While it's not clear to me yet what form the showcase will take next time, I nonetheless want to set expectations that for those reasons there will be changes. Thanks so much for understanding, and see you all next year.

-----

[^visualizer-at-launch]: I'd argue Vinyls' full-player spinning record (which includes a tonearm that tracks the song's progress) is a visualizer despite nothing in the animation reacting to the song's waveform.
[^apple-dropped-the-ball]: Comically—despite coining the concept of "smart playlists" in the general public with iTunes over a decade ago—Apple failed to port the feature in any capacity whatsoever over to iOS.
[^bpm]: BPM metadata is not automatically provided for music downloaded either through Apple Music or iTunes, and thus must be manually set by the listener in order for Mixtapes to target. With that said, there are sure to be a handful of listener libraries out there with meticulously maintained metadata and would be overjoyed at the ability to quickly create smart mixes containing only tracks within a specific BPM range.
[^handful-of-nasty-bugs]: For example, you can completely break the app by hiding all tab bar items aside from "Albums", "Artists", "Mixes", and "Search". Don't do this though, since the only way to fix is deleting and redownloading the app, losing your data in the process.
[^caveat]: For the personal "Insights" collections to work, you'll need to enter your birth year, and for credit-based collections like "Engineer", "Producer", etc. to work you'll need to enable the "Auto-Download Credits" option in settings and allow the process to fully complete.
[^reproduce-1]: To reproduce in the version available at time of writing, tap the new group button in the top menu of the "Albums" tab, then dismiss it. Afterwards, you'll be unable to access the settings menu.
[^oh-god-why]: I had an unhealthy obsession with [Coldplay](https://music.apple.com/us/artist/coldplay/471744), and still have a fondness for the band's earlier material to this day.
[^reproduce-2]: To reproduce in the version available at time of writing, launch the full-player, then play around with the tab bar a bit by tapping the items in the bar and using the swipe left or right gesture. It doesn't take much for the supposedly active tab bar item to get "out of sync" with what's actually displayed (and the tab view contents themselves disappear entirely in extreme cases)
[^such-releases-much-wow]: You can see Albums' impressive change log within the app itself at Settings > Change Log, a much appreciated feature for anyone finding themselves needing to dig through the year's releases. :sweat_smile:
[^name-change]: "Cs Music" was formally "Cesium", changed in [January 2019](https://twitter.com/CsMusicPlayer/status/1087797675284520960).
[^failed-redesign]: This "failed redesign" was a radical departure loved by some (such as myself) but reviled by others. Feelings were so strong towards the redesign Mike ended up spinning it off into its own app entirely ([SongOwl]), allowing himself a second pass at a more modest and traditional Cs Music redesign to please as much of the user base as possible.
[^practically-every]: The only entities that cannot yet be pinned are individual songs.
[^hot-take]: Hot Take: music players have always and will always be absolutely terrible podcast players. Get yourself a real podcast player instead like [Overcast](https://overcast.fm), don't even bother with features like this.
[^api-limitations]: This is almost certainly due to Apple's widget API limitations, given the small widget's playful perspective skew.
[^dad]: Not naming any names, Dad. :wink:
[^but-its-just-okay]: Music files added directly into Music Player X are only accessible in a dedicated "Downloads" menu, and no grouping or sorting is supported. It's *just* a list of songs you added, so it's nowhere near full independent library management.
[^brand-recognition]: This is insanely important. For example, in contrast, I can still barely tell [Dot Music] exists and isn't some kind of stock music player template due to its nonexistent design voice. It's like a house gutted of all signs of life upon being sold. Make no mistake, Music Player X's design *is* wild, but I'd pick that any day of the week than the opposite problem.
[^ecosystem]: Every player in this showcase relies either partially or fully on Music.app's APIs. Because of this, the importance Music.app's backend has on the App Store's music player ecosystem cannot be overstated.
[^puns]: Yes, I still think these food-related puns are funny, and no, I won't stop.
[^arguably-vinyls]: I [personally attest](/post/fourth-annual-ios-music-player-showcase/2#-vinyls) Vinyls is in fact no a niche, album-focused player and instead a general-purpose player mascarading as an album-focused experience.
[^irresistible]: At this point, I have easily sunk a couple hours importing albums from my library that I own physical pressings for and tweaking their colors, labels, and player themes to be *just so*. While this will certainly not be an attractive prospect to everyone, listeners who collect vinyl records and love fiddling around with software will likely love falling down the rabbit hole.
[^illinois]: [Sufjan Stevens](https://music.apple.com/us/artist/sufjan-stevens/4273404), I love ya, but cut it out.

[Albums]: https://apps.apple.com/us/app/albums-album-focused-player/id1469948986
[Cs Music]: https://apps.apple.com/us/app/cs-music-player/id924491991
[Doppi]: https://doppi.app
[Doppler]: https://brushedtype.co
[Dot Music]: https://www.dotmusicplayer.com
[Jams On Toast]: http://jamsontoast.com
[jetAudio]: https://apps.apple.com/us/app/jetaudio-music-player/id894888135
[Longplay]: https://adrian.schoenig.me/longplay/
[Marvis Pro]: https://appaddy.wixsite.com/marvis
[Mixtapes]: https://mixtapesapp.com
[MPX EQ]: https://www.mpxeq.com
[Musens]: https://musensapp.com
[Music Player X]: https://www.musicplayerx.com
[Music.app]: /post/fourth-annual-ios-music-player-showcase/14
[Picky]: https://apps.apple.com/us/app/picky-music-player/id497110916
[Plum]: https://apps.apple.com/us/app/plum-music-player/id1441625664
[Power Player]: https://powerplayer.evenwerk.com
[Sathorn]: https://sathorn.app
[SongOwl]: https://apps.apple.com/us/app/songowl-music-player/id1492630850
[Soor]: https://soor.app
[Stezza]: http://stezza.co
[Vinyl Fetish]: https://apps.apple.com/us/app/vinyl-fetish-music-player/id1490719457
[Vinyls]: https://www.pnguin.app/vinyls

*[API]: Application Programing Interface
*[LED]: Light-Emitting Diode
*[OLED]: Organic Light-Emitting Diode
*[RGB]: Red Blue Green
*[UI]: User Interface
*[USB]: Universal Serial Bus
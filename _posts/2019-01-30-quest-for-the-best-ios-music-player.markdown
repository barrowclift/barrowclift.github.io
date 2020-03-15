---
layout: post
title: "Quest for the Best iOS Music Player"
date: 2019-01-30 22:16:47
categories:
  - Technology
  - iOS
  - Design
  - Music
excerpt: "My quest to find a niche app that's unapologetically for people that love actively listening to and collecting music. Who will win?"
image: "quest-for-the-best-ios-music-player/share-image.jpg"
has_afterward: true
---

<style>
	.app-icon {
		height: 5em;
	}
	.inline-app-icon {
		display: inline-block;
		height: 1em;
		padding-left: 0.1em;
		padding-right: 0.1em;
		vertical-align: text-bottom;
	}
	article ul li,
	article ol li {
		margin-bottom: 0;
	}
	article li ul,
	article li ol {
		margin-top: 0;
	}
</style>

<figure markdown="1" class="edge-to-edge large shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/player-view-comparison.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/player-view-comparison.jpg)
</a>
</figure>

It's no secret I cherish music. That passion seeped not only into my physical library in the form of [vinyl records](post/why-vinyl) but also into my personal projects with the introduction of the [Bad Music Hertz](https://badmusichertz.com) website and podcast. It was only a matter of time until that same passion fueled a desire to find the perfect iOS music player.

By "perfect" player, I do not simply mean the app most appealing to the widest audience, or even the most well-rounded app (if that's what you're looking for, [The Sweet Setup's article](https://thesweetsetup.com/apps/best-ios-music-app-replacement/) is fantastic). No, what I wished to find in my quest was a niche app that's unapologetically for people that love actively listening to and collecting music.

<!--break-->

To help guide my search, I wrote out specific features and design decisions I would look for. Those being:

* Lyrics support
* Dark mode *and* a "true black" dark mode to take advantage of the OLED displays in Apple's latest phones
* Full iPad support
* Discovery options such as "Recently Added", "Added this day X years ago", etc. to help stimulate music selection
* Album-focused design, featuring:
	- The one, true album sorting method (alphabetically by artist then chronologically by release year, any other sorting for albums is wrong)
	- A grid view to aid in visual album searching
* A beautiful or visually engaging player view
* Active maintenance

None of the above requests were deal-breakers, however. Every single music player I've tried thus far fails to address at least one of these points, but plenty of them are still extremely good contenders by meeting the majority. My only deal-breaking requirements were:

* A native or native-like app. That means no web apps, lazy Android ports, or apps with badly designed custom interface elements. Apps that are performant and well designed enough to fool me into thinking they're native apps are fair game.
* Local-primary focus, so no exclusively streaming players. Apps that support both local and cloud libraries but present local collections as the assumed default are fair game.
* Large album art in the player view (preferably edge-to-edge)

Due to the player technically meeting the deal-breaking requirements, the official iOS Music.app will also be included for consideration with the qualifying third-party contenders.

## Disqualifications

Even with just a few deal-breaking requirements, many music apps failed to even make it to the starting line. They're listed below in order of preference:

* [Jams on Toast](http://www.jamsontoast.com) &ndash; The album art is not full-size in the player view. Gets an honorable mention though due to its unique and fun [cover flow](https://en.wikipedia.org/wiki/Cover_Flow)-inspired album view.
* [Loud](https://itunes.apple.com/us/app/loud/id1075155206) &ndash; Clearly not native, animations and UI elements are janky and feel brittle to the touch.
* [Stezza](http://stezza.co) &ndash; The player view does not feature large album art (and is otherwise clearly designed for the car, which is not my desired use case).
* [CloudBeats](https://www.cloudbeatsapp.com) &ndash; As the name would suggest, the app is not local-primary.
* [TapTunes](https://itunes.apple.com/us/app/taptunes/id320145698) &ndash; Obviously an Android port or a native app with *bad* custom UI elements. The app sticks out like a hideous pig and has no place existing on iOS.
* [Neutron](http://www.neutronmp.com) &ndash; Obviously an Android port or web app. If I wanted trash like this, I'd use Android.

-----

## Qualifying App Showdown

Seven apps survived the disqualification round and continued on to be evaluated over the course of six months. They are detailed below in alphabetical order.

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs.png){: .inline-app-icon } Cs (Formerly Cesium)

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/cs-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/cs-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/cs-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs-3.jpg)
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://itunes.apple.com/app/cesium-your-music-streamlined./id924491991?mt=8">
<img class="show-when-light" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/dark-download-on-the-app-store.svg" />
</a>
</figure>

Functional, but boring. Its interface is entirely utilitarian with little to no opinionated design in it. If that's what you're interested in, it's the best player of the bunch (especially if you loved the the original iOS 6 Music.app).

#### Pros

* Actively maintained
* Light iPad support (app isn't optimized for the larger display, much like iOS 7's Music.app on iPad)
* The only player to support iPad *and* sport full-screen album art on it, evoking feelings similar to that of holding a vinyl record sleeve. If that's an experience you love, Cs's iPad app player view is a delight
* Lyrics support
* Sane album sorting
* Dark mode and "true black" dark mode support
* Customizable accent colors

#### Cons

* Player view's visually boring
* No album grid view
* No discovery options

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler.png){: .inline-app-icon } Doppler

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/doppler-3.jpg)
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://itunes.apple.com/gr/app/doppler-music-player/id1252143995?mt=8">
<img class="show-when-light" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/dark-download-on-the-app-store.svg" />
</a>
</figure>

Promising, but still too young and missing too many features to seriously consider.

#### Pros

* One of the two apps of the bunch to be truly album-focused (albums are the "home" view)
* Actively maintained
* Sane album sorting
* Dark mode support
* Features "Recently added" discovery option akin to that in Music.app's
* The only app of the bunch to still maintain the whimsical album color-matching design in the album view formerly utilized by iOS 8's Music.app. In my opinion, that's a big positive.

#### Cons

* Player view's visually boring
* No lyrics support
* No iPad support
* No "true black" dark mode
* No album grid view

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute.png){: .inline-app-icon } Ecoute

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute-3.jpg)
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://itunes.apple.com/us/app/ecoute/id536882653">
<img class="show-when-light" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/dark-download-on-the-app-store.svg" />
</a>
</figure>

What was previously the gold-standard third-party music app is now a barely maintained shell of its former self, its future as bleak as its last design "update" in 2016. The poor thing needs a roadmap or to be finally put out of its misery.

#### Pros

* One of the two apps of the bunch to be truly album-focused (albums are the "home" view)
* Album grid view support
* Visually beautiful player
* Lyrics support

#### Cons

* Fails to sort albums the correct way (a surprising and debilitating shortcoming for an otherwise very album-centric app)
* No iPad support
* No "true black" dark mode
* No discovery options
* No development, future uncertain

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music.png){: .inline-app-icon } Music.app

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music-3.jpg)
</a>
</div>

Entirely inoffensive and mediocre across the board. Unfortunately, in Apple's effort to appeal to the widest possible market, they've created a bloated app that's needlessly complicated compared to every other third-party offering. However, to give credit where credit's due, Music.app easily has the best iPad-optimized app of the lot. Not to mention, most other offerings don't even support iPad, let alone optimize for the larger display. The only other app of the lot that even supports the iPad is Cs.

#### Pros

* Actively maintained (and has the unique advantage of being guaranteed to remain that way)
* Full iPad support
* Lyrics support
* Excellent discovery options ("Recently Added", "More by...", "You Might Also Like", etc.)

#### Cons

* Fails to sort albums the correct way
* No dark mode or "true black" dark mode
* Postage-stamp album art in iPad player view, and the iPhone's player view album art was just barely large enough to pass
* Confusing interface

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/picky.png){: .inline-app-icon } Picky

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/picky-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/picky-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/picky-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/picky-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/picky-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/picky-3.jpg)
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://itunes.apple.com/us/app/picky-music-player/id497110916">
<img class="show-when-light" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/dark-download-on-the-app-store.svg" />
</a>
</figure>

Cream of the crop for music selection and sorting, but needs visual work everywhere but the player itself. However, if you have a large library consisting of both singles and albums, this app's for you.

#### Pros

* Actively maintained
* iPad support
* Sane album sorting
* Dark mode support
* Visually beautiful player
* Lyrics support
* Best-in-class filtering and sorting (true to its name)

#### Cons

* No album grid view
* No discovery options
* No "true black" dark mode
* Small album art in iPad player view (though it's large enough on iPhone)

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/starling.png){: .inline-app-icon } Starling

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/starling-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/starling-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/starling-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/starling-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/starling-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/starling-3.jpg)
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://itunes.apple.com/app/id1210406576">
<img class="show-when-light" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/dark-download-on-the-app-store.svg" />
</a>
</figure>

A visually interesting player view in an otherwise visually dated and functionally compromised app. Needs a redesign to be seriously considered.

#### Pros

* Actively maintained
* Dark mode support
* Visually interesting player view (one of the two in the bunch to incorporate waveforms, the other being VOX)

#### Cons

* Fails to sort albums the correct way
* No album grid view
* No "true black" dark mode
* No lyrics support
* No iPad support
* Visually dated design (clearly from the thin-stroke, iOS 7 era of design)
* The slowest and worst performing app of the bunch

### ![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/vox.png){: .inline-app-icon } VOX

<div markdown="1" class="edge-to-edge large three-images shadow">
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/vox-1.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/vox-1.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/vox-2.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/vox-2.jpg)
</a>
<a href="{{ site.dropbox }}/quest-for-the-best-ios-music-player/vox-3.jpg">
![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/vox-3.jpg)
</a>
</div>

<figure style="text-align:center" class="inline app-download">
<a href="https://itunes.apple.com/app/apple-store/id916215494?mt=8">
<img class="show-when-light" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/light-download-on-the-app-store.svg" />
<img class="show-when-dark" src="{{ site.dropbox }}/second-annual-ios-music-player-competition/dark-download-on-the-app-store.svg" />
</a>
</figure>

What seems at first to be a well-made app quickly reveals it's nothing more than a delivery vehicle for the company's "premium" music storage service, leaving the app feeling like nothing more than an upsell trap. Needs to stop being a service delivery vehicle and focus on being an good app to be seriously considered.

#### Pros

* Actively maintained
* Visually interesting player view (one of the two in the bunch to incorporate waveforms, the other being Starling)
* Album grid view support
* Dark mode support

#### Cons

* "Premium" service cheapens the entire app
* Fails to sort albums the correct way
* No iPad support
* No "true black" dark mode
* No lyrics support
* No discovery options

-----

## Awards

Prettiest player: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/picky.png){: .inline-app-icon } Picky](https://itunes.apple.com/us/app/picky-filter-browse-play-your/id497110916?mt=8)
: While Ecoute comes close, I personally find Picky sports the prettiest player of the lot. The player view employs a blurring effect similar to that used in tvOS's Music.app, resulting in stunning visuals that are sure to keep the discerning eye entertained while listening.

Most interesting player: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/starling.png){: .inline-app-icon } Starling](http://starling.audio)
: While by no means the best player here (it doesn't even make it to being a good player), there's no denying the waveform visualization that Starling features on its player view is a fantastic feature, and one I can only hope the others will incorporate at some point. If you enjoy having something visual to look at while listening to music, this and Picky are your best bets.

All-around best iPad experience: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/apple-music.png){: .inline-app-icon } Music.app](https://www.apple.com/apple-music/)
: While Cs's full-screen album art in the iPad player view is a delight, the rest of the experience on iPad is incredibly disappointing; the iPad version is clearly nothing more than a "blown-up" version of the iPhone app. Music.app since iOS 10, on the other hand, is fully optimized for the large iPad display and shines brilliantly on it. However, if missing the edge-to-edge album art in the iPad player view is a deal breaker, use Cs instead.

Best dark and "true black" mode: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs.png){: .inline-app-icon } Cs](http://www.csmusicplayer.com)
: Cs is miles ahead of every other contender with its stupendous dark mode support; there's not another player on this list that supports true black dark mode, which single-handedly grants Cs the win.

Best album grid: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/ecoute.png){: .inline-app-icon } Ecoute](https://itunes.apple.com/us/app/ecoute/id536882653)
: Despite being close to abandonware at this point, Ecoute continues to hold the title as one of the few third-party iOS music players to support album grid view. This is my favorite means of visually searching for an album to play, which means I still continue to use Ecoute, Music.app, and VOX while deciding what to listen to (even if I soon switch to a different app to control the playback). Ecoute won out over Music.app and VOX by simply having a more informed and nuanced design.

Easiest-to-use app: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs.png){: .inline-app-icon } Cs](http://www.csmusicplayer.com)
: By far, the biggest complaint I hear the average person lob against Music.app is that it's [too darn confusing](https://www.reddit.com/r/apple/comments/3vk65z/the_current_music_app_has_to_be_the_worst_music/). If you share this complaint, look no further than Cs. In terms of UI, Cs is the spiritual successor to the original iOS 6 Music.app. If that was at one point your favorite music player, you'll feel right at home with Cs.

Largest album art display: [![]({{ site.dropbox }}/quest-for-the-best-ios-music-player/cs.png){: .inline-app-icon } Cs](http://www.csmusicplayer.com)
: If the largest-possible album art is your goal, then Cs is once again the best available choice. Not only is the album artwork edge-to-edge on iPhone displays, *it's also edge-to-edge on iPad*, which makes it feel like you're holding a 7" record sleeve while listening to records.

## Final Verdict

With all awards passed out, it's time to address my original goal: What *is* the best iOS music player for me? Was my quest successful?

Unfortunately, no.

I love Cs on my iPhone, but I sometimes want to browse my library with a grid view, so I switch to Ecoute or Music.app. However, on occasion, I want to look at the album art while listening, so I switch back to Picky or Cs. Other times, I'm on my iPad and I'm more or less forced to use Music.app. On rare occasions, I crave motion, so I switch to Starling to see the waveform. After half a year of jumping back and forth between all seven of these players, I'm forced to conclude that the "best" iOS music player simply doesn't exist yet.

However, that doesn't mean I've given up hope! While Music.app has been more-or-less feature-stagnant since iOS 10, third-party developers of apps like Cs, Picky, and Doppler continue to work tirelessly to bring new and exciting features like "true black" dark mode in Cs and the "Recently added" view in Doppler. The world of quality music players on iOS may be small, but it's thriving, and hints at great improvements down the road that may finally earn one of them a permanent residence on my Dock. Time will tell which one it is.

<div class="article-linkback">
	<a href="/">⌘</a>
</div>

------

## Honorable Mention

I could not end without briefly mentioning what I find to be the finest music player available on any platform, tvOS's Music.app. Not only does it feature an album grid view and dark mode support, but the player view is the most gorgeous and visually captivating of any other player (yes, even better than Picky's). While it utilizes a blurring effect similar to Picky's, tvOS's Music.app subtly mutates the image over time, resulting in lava lamp effect on the blurred image. The result is captivating.

*[OLED]: Organic Light Emitting Diode
*[UI]: User Interface
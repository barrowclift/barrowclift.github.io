---
title: "Eulogy for a Good Icon"
date: 2018-08-28 23:31:23

excerpt: |
    Icon redesigns are a difficult balancing act to pull off. Tower 2 did so gracefully, but what about Tower 3?
categories:
    - Technology
    - macOS
    - Design
    - Best Of
image: "eulogy-for-a-good-icon/share.jpg"

article:
    show-stamp: false
card:
    image: "eulogy-for-a-good-icon/card"
    background-color: "hsl(22, 72%, 75%)"
    foreground-color: "hsl(343, 11%, 24%)"
---

<style>
.high-sierra-dock img {
    border: 1px solid rgba(184, 180, 179, 0.50);
}
#dark .high-sierra-dock img {
    border-color: #4B4B45;
}
.three-fours-size img {
    width: 75%;
}
</style>

This past year, I've had the pleasure of using [Fournova]'s macOS [git] client, [Tower 2][Tower 2 Product Page], to [version control] my professional and personal work. After years of forcing myself to use the [inconsistent, cryptic commands][Git Koans] required to make version control with git marginally usable, I could finally relax and instead use Tower 2's intuitive graphical interface to make my versioning tasks as easy as clicking a button.

Tower 2 didn't just provide a suburb user experience, it also dazzled with a gorgeous, gold-standard macOS app icon. Icon redesigns are a difficult balancing act between the existing brand identity and the needs of the redesign (in this case, [macOS's 2014 redesign][Yosemite]). Despite the difficulty, Tower 2's refreshed icon danced between them with ease.

<div class="inline shadow">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/tower-2-icon-with-yosemite-background.jpg">
</div>

Naturally, when Tower 3's public beta was [announced][Tower 3 Announcement Page], I eagerly anticipated not only the upcoming features but also whatever exciting refresh the brand would receive. The [beta signup page][Tower 3 Beta Page] indicated a bold new direction (underwater air control tower?), but one that I was overall onboard with. Sure, the new concept didn't make much real-world sense, but it was fun! It left me filled with optimistic hope that Tower 3 would feature a great new icon.

<div class="inline macos-window-screenshot">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/tower-3-beta-signup-page.jpg">
</div>

However, before going any further, we must first concretely define *exactly* what makes a macOS app icon "good" with respect to the [macOS Human Interface Guidelines][macOS HIG] and establish why these guidelines are worth heeding in the first place. After all, why adhere to a design system if the system's fundamentally flawed?

We'll begin our journey by [spinning all the way back][Doctor Who] to 2000 to see where the modern Mac design guidelines got their start.

## The Original Mac OS X Design Guidelines

I'll be frank, the old world of "Mac OS X"[^mac-names] app icons are a complete and utter mess when framed in a modern context. Unlike iOS app icons, which are forcibly rendered to a specific shape (first the ["rounded rectangle"][iOS 6 Icon] and now the beloved ["squircle"][iOS 7 Icon]), Mac OS X imposed no such restrictions. Practically, this lack of enforcement resulted in every kind of shape, object, and creature under the sun appearing as an app icon on OS X at some point:

<figure class="edge-to-edge medium">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/bad-os-x-icons.png">
    <figcaption>
        Oh? Mac OS X doesn’t impose an icon shape? Bring on the rubber ducks!
    </figcaption>
</figure>

While Mac OS X didn't enforce a particular shape, it did meekly suggest *kinds* of shapes in the form of "app genres". The [guidelines outlined][Mac OS X HIG] two core "genres" of app and assigned each their own unique shape; productive, document-based programs such as [Pages] and [Mail] were suggested to feature a colored, tilted rectangle, and administrative, utility programs such as [System Preferences] and [Terminal] were suggested to be grey rectangles.

While a novel idea, the genre model quickly fell apart with the surprise introduction of a third app type that ended up not fitting into either category: media consumption apps such as [Safari] and [iTunes]. The limited model of "productivity" and "utility" genres only really made sense when computers were primarily used as productive machines for the workplace and home office. However, with computers becaming increasingly ubiquitous in average consumer homes, the limited, two-genre model offered no design guidance for the rapidly growing pile of music players, chat clients, and Internet browsers.

The absence of genre and Apple's own lack of direction in their own consumption-based apps like [iPhoto] and iTunes left third-party designers without a leg to stand on. As a result, they experimented. The [RSS] reader [NetNewsWire] sported a satellite, the [Twitter] client [Twitterrific] featured a badly rendered bird, and the video player [VLC] showcased a dirty traffic cone[^vlc]. No, I'm not joking.

To Apple's credit, they did eventually settle on unofficially using circles[^circle-examples] for the undocumented genre, but it was already too late. Even if they had documented the genre from the start, their implementations were still too inconsistent to leave any lasting impressions. For example, iPhoto&mdash;which by all accounts should have featured a circle icon&mdash;instead featured the productivity app's "tilted rectangle". This mistake wouldn't be corrected until the release of the [Photos] app in macOS thirteen years later.

An inconsistent implementation of an undocumented genre could be forgiven, but Apple also only halfheartedly adhered to the documented genres as well. For example, apps like Mail incorrectly placed the ink stamp on the [lower left hand side of the icon][Ink Stamp] while every other icon featuring a "tool" placed it on the lower *right hand* side. Like iPhoto, it took a whopping thirteen years for the issue to finally be [corrected](https://goo.gl/images/1Dm2SU) in Yosemite.

OS X's icon issues went deeper than just genre misuse. Observe the example dock below, taken from [OS X 10.6 "Snow Leopard"][Snow Leopard]

<div class="edge-to-edge large">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/snow-leopard-dock.png">
</div>

Some icons like Time Machine and [Facetime] are scaled differently than the others, making quick visual scans feel like rolling over a pothole infested road.

As for colors, there was no unifying color palette, which made the icons appear "muddy" together. Observe the palettes from the icons above isolated below, and the cacophony of colors becomes apparent.

<figure class="inline three-fours-size">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/os-x-color-palettes.png" class="show-when-light">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/os-x-color-palettes-dark.png" class="show-when-dark">
    <figcaption>
        Palettes generated by <a href="https://www.canva.com/color-palette/">canva.com</a>.
    </figcaption>
</figure>

While there was a "global light source" specified in the guidelines, it ironically failed at conveying consistent lighting. The guidelines encouraged icons to pretend they are placed at different places in a "room" to further enhance the [desktop metaphor](https://en.wikipedia.org/wiki/Desktop_metaphor). In practice, this meant docked icons appeared to be lit by completely different light sources instead of a global one, thus ruining the point of having a global light source in the first place. Take the icons below as an example; some apps like [Finder] had the light source coming from above, others like Terminal had it coming from the upper left, while others still like [Stickies](https://en.wikipedia.org/wiki/Stickies_(Apple)) seemingly had the light source coming directly from you. While this was intended to convey the "objects" are placed in different areas of the "room", the end result was icons that appeared to have no consistent lighting at all.

<figure class="edge-to-edge medium">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/lighting-comparison.png" class="show-when-light">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/lighting-comparison-dark.png" class="show-when-dark">
</figure>

All these flaws together made OS X's icon set feel like they didn't belong together in any meaningful way, and made OS X as a whole feel closer to a scrapbook than a cohesive product.

As we return to the present, the key takeaway to remember is there wasn't an *objective*, *strong* case back in the 2000's for declaring an OS X icon "good" or "bad" with respect to the platform's design guidelines. The language was debatably incorrect with regards to lighting and woefully incomplete in other areas like color and app genres. Not to mention, the guidelines that Apple *did* follow were simply too inconsistently implemented to leave any lasting impression, leaving the debate open on whether or not following the guidelines would encourage "good" icon design at all. This left third-party designers working based on their own varying tastes in the pursuit of "good" OS X icons, and the market flooded with icons doing whatever they pleased as a result.

## The New macOS Design Guidelines

It would be fourteen long years until the old OS X design language was finally refreshed in [OS X Yosemite][Yosemite]. With Yosemite, Apple seized the opportunity to look critically at the sad state of Mac app icons and refocus their original goals using what they had learned from OS X and iOS. One of the lessons learned was *not* to suddenly start enforcing icon shapes on macOS, unlike many Behance "designers" [predicted][Behance Prediction][^macos-redesign]. Instead, Apple tactfully decided to instead adjust their guiding hand and nurture the Mac's existing identity by providing a new genre schema, a unified color palette, and consistent lighting.

Long gone are the days of guessing what form light, media-based app icons should take, with Yosemite's robust genre schema and accompanying icon grid (the same from [iOS 7]'s, in fact), it's finally crystal clear:

1. Light, media-consumption based __apps__ like Safari and iTunes should use __circle__ icons.
2. Productive, document-based __applications__ like Pages and Mail should use __tilted rectangle__ icons.
3. Administrative, system-level __utilities__ like System Preferences and Terminal should use __rectangle__ icons.

<figure class="edge-to-edge medium">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/app-genres.png" class="show-when-light">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/app-genres-dark.png" class="show-when-dark">
</figure>

To reiterate, these shapes are not enforced in any way; Apple's not going to reject your text editor if it incorrectly uses a circle like [Atom] or a nonsensical shape like [Sublime Text]. Rather, Apple's templates and grid are meant to establish the *context* third-party icons are expected to harmoniously exist in, while also providing a great starting point for greenhorns.

Nowhere is Yosemite's new genres' success more apparent than in the example dock below from macOS [High Sierra].

<figure class="edge-to-edge large shadow high-sierra-dock">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/high-sierra-dock.png" class="show-when-light">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/high-sierra-dock-dark.png" class="show-when-dark">
</figure>

Did you notice how smoothly your eyes scanned through those icons just now? Thanks to macOS leveraging iOS 7's icon grid, the icons all gracefully lead into the other with no off-putting bumps, *even those that aren't strictly following their genre's guidelines*. Take [Messages], for example; despite not being a strict circle, it was clearly still created with the grid in mind to retain symmetrical consistency with the other icons. However, apps like Messages that break the genre mold are far and few between; more first-party apps than ever are faithfully following their genre's grid, like [Font Book], Mail, and all the previously undocumented consumption apps like iTunes and Photos.

Yosemite's genre consistency not only improves the overall aesthetics of the system, it also improves the system's usability. The consistency allows humans to establish emotional expectations from apps, even before consciously processing the icon or name, simply by seeing the icon's general form. For example, if a user glances at an icon and sees it's a titled rectangle, they can expect it's a productivity app of some sort. They didn't have to pause and interpret the icon's art to gain this information, it was gleamed just from the icon's form. This is a subtle but profound usability improvement over OS X's halfhearted and incomplete implementation, where these expectations were poorly formed and frequently broken.

As for colors, macOS High Sierra's icons show marked improvements due to the introduction of a [unified color palette](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/color/). Observe the newly generated color palettes from the same apps as before, only this time from macOS; they all clearly share the same blue and grey sources with each other&mdash;a marked improvement over the collection of seemingly random hues previously used by the same apps in OS X.

<figure class="three-fours-size">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/macos-color-palettes.png" class="show-when-light">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/macos-color-palettes-dark.png" class="show-when-dark">
    <figcaption>
        Palettes generated by <a href="https://www.canva.com/color-palette/">canva.com</a>.
    </figcaption>
</figure>

To address OS X's confusing lighting, Apple wisely chose to throw away the "room" metaphor and instead implement a consistent, precise light source on the icon itself, down to specific degrees for the "camera" and light. Apple also went the extra mile by providing additional "mood lighting" to each icon that closely resembles the beloved Hollywood ["amber and teal"](https://tvtropes.org/pmwiki/pmwiki.php/Main/OrangeBlueContrast) twilight tones[^beloved]. As a result, macOS's icons appear bathed in a warm, familiar glow that softly echos back happy memories from our favorite movies.

<figure class="edge-to-edge medium">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/system-preferences-lit-and-unlit.png">
    <figcaption>
        The actual System Preferences icon on the left and a modified version without the Hollywood lighting on the right. Look at the enhanced areas to more clearly see the effect.
    </figcaption>
</figure>

As we conclude our brief Mac design retrospective and return to Tower 3's icon, the key takeaway to remember is the newfound focus and consistency introduced in Yosemite's redesign provides an *objective*, *strong* case for declaring macOS icons as "good" or "bad" with respect to the platform's guidelines. Practically every omission or flaw in the original icon guidelines were addressed, making the guidelines themselves a more robust language overall. Additionally, Apple's newfound focus in implementing their own guidelines set a strong example for third-party designers to follow. The new message was clear: If you're on this platform, your icon should effortlessly blend into this context, regardless of whether or not you're strictly adhering to the guidelines.

## The Tower 3 Abomination

With a brand-new artistic vision documented and demonstrated by Apple, it was now up to third-party designers to use the guidelines to inform their product redesigns. Some, like Tower 2 and [Transmit 5], did so with grace. They not only embraced the guidelines, but also masterfully understood precisely when and how to break them, resulting in refreshed brands that remained as unique as their predecessors while still feeling right at home on the modern Mac dock. After all, only those that truly understand the fundamentals informing the guidelines are qualified to break them to positive effect.

During Tower 2's development, Fournova's designer, [Fabricio Rosa Marques][Marques], faced this task head on and dedicated himself to mastering macOS's design language for the update. He [thoroughly documented his choices][Tower 2 Design Article] while crafting the Yosemite-era Tower 2 icon on Fournova's [company blog][Tower Blog], which provided valuable insight into his creative process and the careful considerations he took to ensure he made a perfect Mac icon. His love of the Mac and his own tasteful intuition was proudly and clearly documented for all to see and appreciate. I simply couldn't wait to see what Marques had in store for Tower 3.

However, when time came for me to assist beta testing Tower 3, what awaited me in my Downloads folder was this hideous thing.

<div class="restrict-growth-to-half">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/tower-3-icon.png">
</div>

This is without a doubt the most incompetently made macOS icon I've ever seen. It fails at every measure to acknowledge the platform's design guidelines, resulting in an Mac icon that is objectively __awful__.

Let's start with the genre; if you were creating the icon instead, what genre would you assign it to? Is it a system utility? Not really, so rectangle's out. Is it a document-based productivity application? Debatable. Is it a light consumer app like iTunes and Siri? __Absolutely not__. And yet, by using the light, bubbly consumer app circle, that's exactly what Tower 3 claims to be. This demonstrates a complete failure of Fournova's designer to spend even just three minutes researching the design language or thinking critically before slapping something together.

Incorrect genre aside, even its implementation is a complete disaster. The matte aluminum border surrounding every other macOS icon in the genre was instead replaced with blue cellophane, making the icon feel positively cheap compared to the high-quality materials rendered by the others.

Tower 3's icon also features an unnaturally brisk and *hard* drop shadow, making it appear as if it's set in an entirely different plane from the others. Compare its shadow to the naturally blurred and spread drop shadow used by Safari and every other first-party Mac icon:

<div class="edge-to-edge medium">
    <img src="{{ site.dropbox }}/eulogy-for-a-good-icon/shadow-and-border-comparison.png">
</div>

The lighting is also bewilderingly bad, not because it's blatantly wrong like the border and drop shadow, but because it's *so close* to the actual documented position. Assuming the starting position of 15º off center, this is what the guidelines have to say:

> "To achieve a realistic drop shadow, imagine a light source that’s also facing the object, but is positioned just above center and tilted slightly downward."
>
>&#8213;[Apple's Human Interface Guidelines, 2018](https://web.archive.org/web/20180618155438/https://developer.apple.com/design/human-interface-guidelines/macos/icons-and-images/app-icon/)

So close, yet so far; Tower 3's light source is centered just __below__ center and tilted slightly __upward__, the opposite of the documented position and angle. To top it all off, it's even missing the gorgeous "golden hour" Hollywood lighting, leaving the icon as devoid of whimsy as it is of taste.

At this point, it's evident Tower 3's designer either completely ignored the platform's human interface guidelines or didn't even know they existed in the first place.

## How It Happened

If you have an eye for design, you may have already figured out what happened. It's not just Tower 3's drastically different aesthetic [^windows] that makes this whole situation so strange, it's the sudden absence of previously demonstrated design knowledge. An individual does not typically regress so drastically.

Without a doubt, Tower 1 & 2's designer, Marques, had nothing to do with Tower 3's design implementation, and I'd wager the new design in its entirety. Given his impressive knowledge base documented in his articles and previously demonstrated skills, it doesn't make sense all his experience and taste would suddenly vanish for Tower 3.

A quick investigation proved my theory; Marques silently vanished from Fournova's team page sometime between [October][Before] and [November][After] 2015 and was promptly replaced by a new designer called Chris Schupp, all right in the middle of Tower 2's lifecycle. By all accounts, Tower 3's icon is entirely Chris Schupp's work.

If you're unfamiliar with Chris Schupp's work, you're not alone. Compared to Marques's extensive online presence with his [detailed design articles][Tower 2 Design Article] and [gorgeous portfolio][Marques], Schupp's online presence is nonexistent. He's got no articles proving his design process, no online portfolio to speak of, and (seemingly) no past experience in the field.

In fairness to Schupp, an online portfolio, healthy design blog, and past work are by no means requirements for making great art. You have to start somewhere, after all! With that said, lacking those components does not instill confidence that Schupp's icon design demonstrated in Tower 3 has any critical thought or informed decisions backing it, putting his work squarely in the same camp as dime-a-dozen greenhorn graduates or the mountain of wannabe Behance "designers".

## Why Good Icon Design Matters

At the end of the day, why does it matter if the new Tower icon is bad? After all, many artistically-inclined individuals out there don't seem to mind the constant visual dissonance from other horribly designed things like Windows one bit. If even they don't care, why should you? I'd argue it matters more than you probably think&mdash;whether you're consciously aware of it or not&mdash;and it's because of human nature.

Pattern recognition is a fundamental human trait which we unconsciously leverage countless times each day. This trait is so innate, in fact, that Thomas Gilovich, a Professor of Psychology at Cornell University, [theorizes](https://archive.org/details/howweknowwhatisn00gilorich) being unable to establish patterns is the reason we tend to be so uneasy with chaos. That connection necessarily means having a lack of patterns or having those patterns betrayed in our operating systems makes us more uncomfortable than if those patterns were established and respected.

Is it a big deal if there's one or two poorly designed third-party icons that clash with macOS's design language? Not particularly. But there *is* an effect, however slight, that persists through the hours, days, and years you'll spend on the computer in your lifetime. Even the smallest pebble in your shoe can make the journey uncomfortable if it's long enough.

__You deserve better than that__, and designers like Schupp have a responsibility to educate themselves on how to deliver users a better experience. In the meantime, I'm pouring one out for the Tower 2 icon and its years of service as a shining example of good macOS icon design.

Cheers to Tower's good icon design, I can only hope one day it will return.

<div id="farewell-stamp">
    <a href="/about">⌘</a>
</div>

------

#### Acknowledgements

Much thanks to [Nick Keppol](https://twitter.com/nkeppol) from [The Syndicate](http://martiancraft.com/blog.html), whose wonderful ["Inspecting Yosemite's Icons"](http://martiancraft.com/blog/2014/07/inspecting-yosemite-icons/) article helped lay the foundation for this writing. Please support The Syndicate and Nick's work.

------

[^mac-names]: I'm using parenthesis very deliberately. What we now know as macOS has gone through numerous name changes through the years, starting with ["Mac OS X"](https://en.wikipedia.org/wiki/MacOS#Mac_OS_X) in 2001, to just ["OS X"](https://en.wikipedia.org/wiki/MacOS#OS_X) (pronounced "oh es ten") in 2012, then simply ["macOS"](https://en.wikipedia.org/wiki/MacOS#macOS) in 2016.
[^vlc]: No, the story behind [why they chose a traffic cone](http://nanocrew.net/2005/06/23/vlc-cone/) isn't cute, and the team should be ashamed that some people [suspect their app is broken](https://www.reddit.com/r/todayilearned/comments/1ttcpc/til_vlc_media_player_uses_a_traffic_cone_as_its/cebgwh5/) because of it.
[^circle-examples]: Notable examples would be [iTunes](https://goo.gl/images/b4Ec3y), [iBooks](https://goo.gl/images/x73ZFj), and [Safari](https://goo.gl/images/kyNg15).
[^macos-redesign]: This may seem like a peculiar decision since Apple successfully made a similar redesign with [iOS 7] back in 2013. If Apple pulled off the transition on iOS, why wouldn't they want do the same on macOS? Unfortunately&mdash;as far as the Mac is concerned&mdash;this is more a matter of "couldn't". Macs have a fraction of the userbase iPhones enjoy, and an even smaller fraction of active developers. The harsh transition from [iOS 6] to [7][iOS 7] can only work on platforms as healthy as iOS (and even then, some apps like [Instagram](https://www.instagram.com) infamously [dragged their feet](https://www.businessinsider.com/new-instagram-icon-design-2016-5), releasing their redesign a ludicrous three years later).
[^beloved]: While it certainly [has its detractors](https://theabyssgazes.blogspot.com/2010/03/teal-and-orange-hollywood-please-stop.html) (and I agree, it tends to be overused), I still do enjoy the effect, and apparently so does the majority of the movie-watching public.
[^windows]: Eagle-eyed readers may have noticed the icon seems suspiciously closer to a Windows icon than a macOS one (though I'd argue it's also a bad Windows icon). Perhaps that was Schupp's intention. However, if that was indeed the case, then it was laziness or cheapness that led Schupp to abandon good macOS design practices, or it's incompetence he couldn't pull it off. Either way, it's not a good look.

[Fournova]: https://www.fournova.com
[Tower Blog]: https://www.git-tower.com/blog/
[Tower 2 Product Page]: https://web.archive.org/web/20160513131955/https://www.git-tower.com/
[Tower 3 Announcement Page]: https://web.archive.org/web/20180327033209/https://www.git-tower.com/blog/tower-public-beta-2018-starts/
[Tower 3 Beta Page]: https://web.archive.org/web/20180419230054/https://www.git-tower.com/public-beta-2018
[Tower 2 Design Article]: https://web.archive.org/web/20150504083258/https://www.git-tower.com/blog/posts/tower2-yosemite-design

[Marques]: http://fabric8.de
[Before]: https://web.archive.org/web/20151011130552/http://www.fournova.com:80/company
[After]: https://web.archive.org/web/20151105092600/http://www.fournova.com:80/company/

[version control]: https://en.wikipedia.org/wiki/Version_control

[macOS HIG]: https://web.archive.org/web/20180618155427/https://developer.apple.com/design/human-interface-guidelines/macos/
[Mac OS X HIG]: http://interface.free.fr/Archives/AquaHIGuidelines.pdf
[Patterns Research]: https://www.scientificamerican.com/article/patternicity-finding-meaningful-patterns/

[Doctor Who]: https://www.youtube.com/watch?v=L3y0sCbq6Ak
[Git Koans]: http://stevelosh.com/blog/2013/04/git-koans/
[Behance Prediction]: https://web.archive.org/web/20130820144025/http://www.behance.net:80/gallery/OS-X-11-Inspired-by-iOS-7-(Safari)/9704887

[iOS 6 Icon]: http://mrgan.com/pub/iOS%20icons.png
[iOS 7 Icon]: https://stackoverflow.com/questions/20056075/golden-ratio-corner-rounded-frame-rectangle-button
[Ink Stamp]: https://goo.gl/images/mzNTwf

[Atom]: https://atom.io
[Facetime]: https://en.wikipedia.org/wiki/FaceTime
[Finder]: https://en.wikipedia.org/wiki/Finder_(software)
[Font Book]: https://en.wikipedia.org/wiki/Font_Book
[git]: https://git-scm.com
[iChat]: https://en.wikipedia.org/wiki/IChat
[iPhoto]: https://en.wikipedia.org/wiki/IPhoto
[iTunes]: https://www.apple.com/itunes/
[Mail]: https://en.wikipedia.org/wiki/Mail_(Apple)
[Messages]: https://en.wikipedia.org/wiki/IMessage
[NetNewsWire]: http://netnewswireapp.com
[Pages]: https://www.apple.com/pages/
[Photos]: https://en.wikipedia.org/wiki/Apple_Photos
[RSS]: https://en.wikipedia.org/wiki/RSS
[Safari]: https://www.apple.com/safari/
[Sublime Text]: https://www.sublimetext.com
[System Preferences]: https://en.wikipedia.org/wiki/System_Preferences
[Terminal]: https://en.wikipedia.org/wiki/Terminal_(macOS)
[Things 2]: https://culturedcode.com/things/
[Time Machine]: https://en.wikipedia.org/wiki/Time_Machine_(macOS)
[Transmit 5]: https://www.panic.com/transmit/
[Twitter]: https://twitter.com
[Twitterrific]: https://twitterrific.com/mac
[VLC]: https://www.videolan.org/vlc/

[iOS 6]: https://en.wikipedia.org/wiki/IOS_6
[iOS 7]: https://en.wikipedia.org/wiki/IOS_7

[Snow Leopard]: https://en.wikipedia.org/wiki/Mac_OS_X_Snow_Leopard
[Yosemite]: https://web.archive.org/web/20141130213350/https://www.apple.com/osx/
[High Sierra]: https://web.archive.org/web/20180801221725/https://www.apple.com/macos/high-sierra/
---
layout: post
title:  "Fearful Computing"
date:   2015-07-15 22:39:00
categories:
  - Technology
  - macOS
  - iOS
  - Windows
  - Pokémon
  - Stories
  - Best Of
excerpt: "Fear leads to anger, anger leads to hate, hate leads to throwing your computer out the nearest window."
share-image: "fearful-computing/windows-desktop.jpg"
---

When I was a child I &#8212; like most American children in the late 1990's &#8212; spent nearly all my car travel time engrossed in the world of Pokémon. The game cleverly leveraged the social pressures of competitive collecting utilized in the past for baseball cards with cute, digital monsters. Children were incentivized to trade with friends to obtain the bragging rights of collecting all 151 monsters which not only meant the game had a pervasive presence on the playground but also ensured that most of their free time would then be spent preparing for those trades by catching as many Pokémon as possible.

<figure markdown="1">
[![Pokémon screen shot with "Welcome to the Cable Club!" text bubble]({{ site.baseurl }}/images/assets/fearful-computing/cable-club.jpg){: .inline}]({{ site.baseurl }}/images/assets/fearful-computing/cable-club.jpg "Oh god it begins...")
</figure>

The actual process of trading in particular has remained curiously vivid in my mind after all these years. As far as I can confirm, the link cable used to connect the two Game Boys for the trade was my very first exposure to the concept of computer networking (albeit a very primitive implementation) and it scrambled my mind as a child. How on *earth* could it be possible to trade my digital monster companions using just a plain old cable? Despite the game's best efforts to abstract this complication away enough to ease its young players into the concept I remained terrified by it in my confusion. I was just so sure that I would find some way to screw it up and lose my monster, or worse, corrupt my game save. In fact, if I had my way I would have forgone trading entirely to remain in my little, comfortable island of understanding where I felt I had control.

Of course, this was never really an option. Doing so would not only jeopardize my game's progress but also cut me off socially from my peers. So I did what any child or adult does when forced into a situation they're afraid of; I insisted on complete control of the process. My fear of the unknown had taken form in an absurd set of requirements that must be followed during set-up and that only their strict adherence would guarantee the safety of my game save and monster during the trade. I had rationalized with myself that syncing up the in-game trade character's dialogue boxes on both Game Boys would somehow make them "see" each other more clearly and ensure a clear path of communication between them. It just seemed so natural to assume this cable connecting our Game Boys was a delicate, black magic ritual that I could easily break if I didn't set some silly, arbitrary set of obsessive rules to prevent. They were stupid, yes, but they made me *feel* like I was in control, it made me feel just barely comfortable enough with the concept in play to do the trade.

I have no doubt this will prove humorous but some of you may instead give pause and wonder why this sounds so strangely familiar...

The Comfort-Zone Trap
---------------------

Perhaps you've got a "kitchen sink" desktop where you throw every single file and application you've ever used instead of organizing them in the file system. Or maybe you insist on sending friends or coworkers CD's or flash drives in person for all data transfers instead of using email or cloud services like DropBox. Or perhaps you, like I currently, are skeptical of streaming services like Spotify and strangely insist on pack-ratting local copies of all your entertainment media to manage yourself.

Over the years I have witnessed and experienced many different manifestations of computing "quirks" all originating from some form of fear over a specific computing concept just like my Pokémon troubles back in grade school. In the case of the kitchen-sink desktop, for example, the fear finds it roots in a lack of comfort using and understanding the file system. For insisting on physical data transfers, the core fear is a deep distrust in computer networks and believing that seeing the full "path" the data takes from one person to another will make the transfer more secure (my distrust in Pokémon trading stemmed from this as well). In the case of streaming services, the fear I and some like me are currently wrestling with is losing complete local control over our media will for some ludicrous reason endanger their future existence. In every single one of these scenarios and many more like them the comfort zones we've barricaded ourselves into are prisons that are holding us back from not only enjoying our computing life to it's fullest potential but also are hurting our productivity. It is because of this that I believe fear is the most harmful emotion a person can experience when using a system. If you're afraid to use a specific app, do a particular task, or even use something as important and fundamental as the file system you're going to be far more likely to avoid exploring and learning how to better use them in the future. [Even Yoda knows what's up](https://youtu.be/kFnFr-DOPf8?t=3s).

The Cause
---------

Why does such a thing happen? How could we let something like this dictate our actions for so long? Well let me assure you that once again the fault for these feelings of discomfort and bad experiences lies squarely on the developers and designers behind these systems and applications we interact with. __These poor experiences are never your fault. Ever__.

<figure markdown="1">
[![Typical Windows desktop, lots of app icons everywhere]({{ site.baseurl }}/images/assets/fearful-computing/windows-desktop.jpg){: .responsive}]({{ site.baseurl }}/images/assets/fearful-computing/windows-desktop.jpg)
<figcaption>
This is the equivalent of the college professor who keeps every paper they own on their desk, also known as the default Windows experience
</figcaption>
</figure>

For one example let's look at the kitchen-sink desktops again, why are so many people afraid to use Windows Explorer to organize their files? The answer is quite clear, barring the barebones Linux console and other text-only UIs, Windows is hands down the worst implementation of the file system "desktop" paradigm in popular use today. It's the digital wild west, applications save scattered files and folders at seemingly random locations by default (often without the choice to change the location later) and usually next to what are actually "safe" folders meant for the users. Users have no mental model for what they can and cannot use freely and that model is in a constant state of flux. "Outlook" and "Custom Office Templates" folders are intruding in the user's Documents folder, "Lync Recordings" decided to show up in the user's home directory, and even still more garbage directories infest the drive root like Python installations and Apache libraries like tomcat if you're a developer. This gives the impression to users that the file system is not a safe place of their own but a place where things they don't understand or control rule. If there's a standard for these things Windows developers clearly don't have the discipline to follow it.

<figure markdown="1">
[![Windows Explorer window showing Internet Explorer's folder contents]({{ site.baseurl }}/images/assets/fearful-computing/internet-explorer.png){: .bound-responsive}]({{ site.baseurl }}/images/assets/fearful-computing/internet-explorer.png)
<figcaption>
You've never used a Windows computer before, let's play "guess what you have to double click to run your app"
</figcaption>
</figure>

And what of apps themselves? There's two application folders both with frightening and confusing names to normal users. What's "x86" mean[^x86]? Is "Program Files" files used by programs or programs themselves? Should I save my app to one of them? Which one? Even if a user can somehow guess their way through that mess even launching apps themselves is a disaster. Most Windows "apps" are actually just folders with a bunch of the applications resources and source files strewn about with a few .exe files, one of which is the one you're *actually* supposed to double click to launch the app (common apps guilty of the practice are Google Chrome, Notepad++, and Skype to name a few). Microsoft has tried to alleviate this by allowing app launching from the Start Menu but the messy implementation is still right there in plain view for everyone to stumble into and see. It's design like this that has scared the majority of desktop PC users away from the file system for years and makes them uncomfortable saving or accessing any file, folder, or application that isn't on their desktop.

<figure markdown="1">
[![Typical OS X desktop experience, desktop is clean of icons]({{ site.baseurl }}/images/assets/fearful-computing/os-x-desktop.jpg){: .responsive}]({{ site.baseurl }}/images/assets/fearful-computing/os-x-desktop.jpg "Amazing what some design competency can do, right?")
<figcaption>
No desktop shortcuts by default and apps are lovely, launchable, secret folders.
</figcaption>
</figure>

OS X's file system offers some much needed improvements like the consolidation and bundling of system files, keeping the user's home directory and sub directories as clean as possible through standards the majority of developers actually care enough to adhere to, and making apps a special launchable folder called an app bundle so the users never have to trek inside to launch it. It is certainly not without it's flaws though since OS X &#8212; like Windows &#8212; has two completely separate Application folders (which one should you choose?) and a "browser" style Finder application that oftentimes decides at random to garble folder contents like a digital tornado went through or randomly change the view style or window size of Finder windows.

With users continuing to avoid these headaches entirely and stick to the desktop where they feel they finally have some peace and control over their data it's apparent to me that the file system as we know it has failed and will eventually be phased out over the next ten years. People en masse have decided that it is not the correct solution to the problem by continuing to fight against the existing implementations or fleeing to other products. Again this and the other problems exposed above are not the users fault, but the fault of an incorrect solution.

The Cure
--------

I truly wish there there was "One Weird Trick" or "5 Easy Steps to Computer Wiz You Wouldn't BELIEVE" that I could share with you but the truth of the matter is the suggestions I have for you are probably not the ones you were hoping for. These aren't quick and dirty tricks nor are they easy but the *will* help alleviate your discomfort with whatever concept you're struggling with and eventually make you more confident and comfortable while at the computer. Remember, you don't have to be a "techie" to be comfortable using computers, it's a skill everyone can share.

* __Pick a Different Product__: While it's possible to overcome fear no matter what you're using there's no doubt that some products are far less scary by design and are more conducive to providing a safe environment. Take for example Apple's iOS Music app and the third party music app [Ecoute](http://www.pixiapps.com/ecouteios/). Apple's iOS 8.4 Music app is a bloated and buggy mess with confusing navigation, no focus, and [horrendous bugs](http://cezarywojcik.com/2015/06/30/apple-music-usability-nightmare) like albums getting split up, incorrect album art replacing user-chosen ones, phantom songs refusing to delete, etc. I've used computers for nearly all my life and been a developer for the past five years but even I was incredibly confused with the app (with most of my frustration coming from seeing my library get destroyed without knowing how to fix it). Ecoute on the other hand is the exact opposite. It's easy to navigate, focused, and doesn't destroy their user's music libraries. I think it's pretty easy to tell which one most people would feel safer and more comfortable mastering.
* __Stay Hungry, Stay Foolish__: OS X has been my desktop OS for over ten years now and to this day I'm still learning new features to improve my efficiency and computing happiness, and you can too! I recommend doing as many little things as you possibly can; when your computer says it updated to a new version, try taking a moment or two to read about the new version online and see if there's any new features you could use (or maybe bug fixes to ones you didn't even know about). Or perhaps next time you're using your favorite application open up the Settings or Preferences and take a peak in there to see if there's anything cool that interests you. If you like reading you might want to consider following a news website like [iMore](http://www.imore.com) or [Six Colors](http://sixcolors.com) which post all kinds of [fantastic reviews](http://www.imore.com/os-x-yosemite-review) and [help articles](http://sixcolors.com/post/2015/07/hands-on-with-photos-for-mac-11/) which are appropriate for everyone. These are all tiny things that don't take much time and in isolation aren't that big a deal but together over time will help make you a more cultured individual and improve your computing life.
* __Practice, Practice, Practice__: Like most things in life, you can read about computers and download apps all you want but you won't become any better at actually using them until you do. If you read up on a feature that sounded interesting to you, try using it for the next week or so to see if you get any benefit from it. If you just acknowledge a feature but don't try it out it's incredibly easy to forget about it and end up never using it, even though it might be something you'd love. Same goes for apps. If you download an app you think you'll enjoy to replace an old one but continue to use the old one after just trying the new one once you're not doing yourself any good. Give apps an honest try of at least a couple uses before deciding to trash it. I have found that many apps I didn't like at all initially have oftentimes grown to be my most precious and favorite apps in my collection like [Vesper](http://vesperapp.co), [Overcast](https://overcast.fm/), and [f.lux](https://justgetflux.com/). Computing skills are a muscle that needs to be exercised just a little bit and if you do over time you'll reap the benefits.

Our Responsibility As Developers and Designers
----------------------------------------------

Us developers and designers have a responsibility to fix this at the root. Users should never have had to shoulder this cognitive burden to begin with. There *can* exist operating systems and apps that would make fear in computing all but obsolete, the proof is in the pudding of what I adamantly believe is the finest operating system currently available: iOS. Apple realized that with the iPhone they finally had a chance to start over, to make an operating system where the file system as we knew it was never exposed to the user at all. The user didn't have to manage their files, *their apps would*. That shift in responsibility meant that the cornerstone of the user experience would be the functionality the user expected by means of apps and not the constant headache of trying to get to the functionality from the file system.

If you're still not convinced, let's take a random photo file you want to find on Windows, where is it? Well, it could be literally anywhere. Did you download it? If so it's maybe in your Downloads folder, or maybe you moved it to your Desktop because you didn't know where to put it. Or maybe you accidentally moved it somewhere it "doesn't belong" like Documents and forgot that's where you put it, or maybe even somewhere in your Pictures folder but you can't remember where. You would perform a file system search for it but you don't remember what the name of the picture was. OS X is only marginally better. There's a reasonable chance it's in the Photos app, but that still required user action to accomplish if you downloaded it or obtained it from another computer.

Now let's try to find a random photo on iOS. It's in your Photos app.

There's a powerful lesson to be learned from this. Humanistic operating systems and apps are an achievable goal, we've gotten close (iOS) and almost unanimously achieved it in some cases ([Vesper](http://vesperapp.co)). With the roaring success of Apple's user-first design leaving Windows and their IT department-first design scrambling to keep up it's clear that humanistic design is winning, and there's nothing to fear about that. ⌘

----------  

[^x86]: Refers to the [family of microprocessors](https://en.wikipedia.org/wiki/X86) used in most computers today. Windows split the Program Files folder in two so that one could be for 32-bit apps and the other for 64-bit apps. [Why didn’t they just abstract this needless detail away from users](http://superuser.com/a/442269)? In plain English because they wanted to make their lives and the lives of IT departments easier and didn't give a damn if it confused you.
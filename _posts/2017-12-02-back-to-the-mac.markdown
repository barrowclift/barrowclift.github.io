---
title: "Back to the Mac"
date: 2017-12-02 23:20:40
timelocked: true

excerpt: |
    The feature listicle that macOS deserves.
categories:
    - Technology
    - Organization
    - macOS
    - Best Of
image: "back-to-the-mac/share.jpg"

card:
    image: "back-to-the-mac/card"
    background-color: "hsl(183, 60%, 53%)"
    foreground-color: "hsla(0, 0%, 100%, 0.95)"
---

<style>
.footnotes .macbook {
    width:75%;
}
.bigfoot-footnote__content img.finder,
.finder {
    max-width: 130px;
    width: 40vw;
    display: block;
}
.screensharing path,
.screensharing rect {
    fill: #007AFF;
}
.screensharing {
    height: 1em;
    margin
}
.apple-logo {
    display: inline-block;
    height: 0.9em;
}
</style>

About a year ago, I published a light "listicle" to highlight some of the smaller features in the then-new [iOS 10](https://web.archive.org/web/20161018023634/https://www.apple.com/ios/ios-10/) and [watchOS 3](https://web.archive.org/web/20160914123844/https://www.apple.com/watchos/). Before diving into the details, [I mentioned offhand](/articles/listing-the-little-things#fn:where-is-macos) that I omitted [macOS 10.12](https://web.archive.org/web/20160915010119/https://www.apple.com/macos/sierra/) simply because there wasn't anything particularly interesting to include from that release.

Unfortunately, this year's [macOS 10.13 "High Sierra"](https://arstechnica.com/gadgets/2017/09/macos-10-13-high-sierra-the-ars-technica-review/) release is again slim with regards to user-facing features, despite macOS falling increasingly behind iOS in feature parity. After all, macOS *still* does not have Message stickers and animations, *still* has the same broken App Store, and *still* has all its preexisting problems like pitiful window management and the festering mess that is iTunes. Year after year, Tim Cook's Apple continues to demonstrate they don't care about macOS by simply ignoring it.

In light of this, I've decided to completely ignore whatever new hotness iOS got this year and instead shine the spotlight on the operating system that remains deeply important to millions of people's digital lifestyles (despite being continually sidelined by Cook's Apple). To give macOS the time it deserves, I'm sharing all the small but fantastic features I've picked up over these ten years that help make macOS the finest desktop operating system available.

For those wanting to jump right in, I've sorted the features by importance; the topmost sections are must know, while the bottommost ones are just curious oddities. You can click on any individual features that interest you, or browse entire sections if you're feeling adventurous. Have fun exploring!

#### I Wish I Had Known That Sooner <small>Things everyone with a Mac should know</small>

<ul class="tight">
    <li><a href="#emoji-picker-shortcut-">Emoji Picker Shortcut ✨</a></li>
    <li><a href="#display-the-date-in-the-menu-bar-clock">Display the Date in the Menu Bar Clock</a></li>
    <li><a href="#quicklook-for-superior-file-browsing">Quicklook for Superior File Browsing</a></li>
    <li><a href="#spotlight-calculator-for-instant-calculations">Spotlight Calculator for Instant Calculations</a></li>
    <li><a href="#tap-for-definitions-synonyms-and-more">Tap for Definitions, Synonyms, and More</a></li>
    <li><a href="#automatic-birthdays-in-calendar">Automatic Birthdays in Calendar</a></li>
    <li><a href="#taking-instant-beautiful-screenshots">Taking Instant, Beautiful Screenshots</a></li>
    <li><a href="#builtin-screen-recording">Built-In Screen Recording</a></li>
    <li><a href="#builtin-screensharing">Built-In Screensharing</a></li>
</ul>

#### I Want to Work Better <small>Essentials for people aspiring to work smarter, not harder</small>

<ul class="tight">
    <li><a href="#text-navigation-shortcuts">Text Navigation Keyboard Shortcuts</a></li>
    <li><a href="#window-tab-and-app-management-shortcuts">Window, Tab, and App Management Shortcuts</a></li>
    <li><a href="#custom-autocorrect-substitutions">Custom Autocorrect Substitutions</a></li>
    <li><a href="#go-to-desktop-keyboard-shortcut-for-file-dialogs">“Go To Desktop” Keyboard Shortcut for File Dialogs</a></li>
    <li><a href="#customize-toolbar-items">Customize Toolbar Items</a></li>
    <li><a href="#always-search-current-folder-in-finder">Always Search Current Folder in Finder</a></li>
    <li><a href="#automator-101-">Automator 101 🤖</a></li>
    <li><a href="#get-info-multiple-files-at-once">"Get Info" Multiple Files at Once</a></li>
</ul>

#### Huh, Neat <small>Tips that only fussy people like me care about</small>

<ul class="tight">
    <li><a href="#large-album-art-player-in-itunes">Large Album Art Player in iTunes</a></li>
    <li><a href="#fix-ugly-app-icons">Fix Ugly App Icons</a></li>
    <li><a href="#dark-mode-">Dark Mode 🌚</a></li>
    <li><a href="#auto-hidden-dock">Auto-Hidden Dock</a></li>
    <li><a href="#rearrange-menu-bar-icons">Rearrange Menu Bar Icons</a></li>
</ul>

--------

## I Wish I Had Known That Sooner

### Emoji Picker Shortcut ✨

Who am I kidding, the macOS emoji picker is the feature people will love the most from this list[^i-guess]. You can launch the picker yourself in practically any application with <kbd>^</kbd> + <kbd>⌘</kbd> + <kbd>spacebar</kbd>.

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/emoji-picker-poster.jpg" alt="Video demonstrating the macOS emoji picker">
        <source src="{{ site.dropbox }}/back-to-the-mac/emoji-picker.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/emoji-picker.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/emoji-picker.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

### Display the Date in the Menu Bar Clock

<div class="admonition update">
    <p class="admonition-title">Update: September 6, 2018</p>
    <p>I’ve been informed there's another method for checking the date that’s arguably easier than opening Calendar or checking Notification Center; you can alternatively click the Menu Bar Clock to see the full date in a popup menu.</p>
</div>

Why Apple to this day hides the date in the macOS Menu Bar clock, I'll never know. To check the date with the default settings, you'd need to open up Calender or check Notification Center&mdash;both of which are nonstarters. Checking the time *and* date should be as immediate and instinctual as glancing at a wristwatch or a family calendar on a nearby wall. If you agree, open up System Preferences (<svg class="apple-logo" viewBox="0 0 17 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.1,14.23 C15.99,14.54 15.88,14.83 15.77,15.11 C15.48,15.77 15.14,16.38 14.75,16.95 C14.21,17.72 13.77,18.25 13.43,18.54 C12.91,19.02 12.34,19.27 11.74,19.28 C11.31,19.28 10.79,19.16 10.18,18.91 C9.57,18.66 9.01,18.54 8.5,18.54 C7.96,18.54 7.39,18.66 6.77,18.91 C6.15,19.16 5.66,19.29 5.28,19.3 C4.7,19.32 4.13,19.07 3.55,18.54 C3.18,18.22 2.72,17.67 2.17,16.89 C1.58,16.06 1.09,15.1 0.71,14 C0.3,12.81 0.1,11.66 0.1,10.55 C0.1,9.28 0.38,8.18 0.93,7.26 C1.36,6.52 1.94,5.94 2.66,5.51 C3.38,5.08 4.16,4.86 5,4.85 C5.46,4.85 6.06,4.99 6.81,5.27 C7.56,5.55 8.04,5.69 8.25,5.69 C8.41,5.69 8.94,5.52 9.84,5.19 C10.69,4.88 11.41,4.76 12,4.81 C13.6,4.94 14.8,5.57 15.6,6.7 C14.17,7.57 13.46,8.78 13.48,10.34 C13.49,11.55 13.93,12.56 14.8,13.36 C15.18,13.74 15.61,14.02 16.1,14.23 Z M12.08,0.31 C12.09,0.44 12.1,0.56 12.1,0.69 C12.1,1.64 11.75,2.53 11.06,3.35 C10.22,4.33 9.21,4.89 8.12,4.8 C8.11,4.69 8.1,4.57 8.1,4.44 C8.1,3.53 8.5,2.55 9.2,1.75 C9.55,1.35 10,1.01 10.54,0.74 C11.09,0.48 11.6,0.33 12.08,0.31 Z"></path></svg> > "System Preferences..."), click on "Date & Time", and in the "Clock" tab check the box that says "Show the day of the week".

<div class="inline">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/menu-bar-date.jpg 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/menu-bar-date.jpg" alt="Image showing the macOS menu bar clock with the date displayed alongside the time">
</div>

### Quicklook for Superior File Browsing

Don't you wish you could visually zip through files on a computer as quickly and easily as you can physical objects like photos and pages? Sure, text searching is preferred when possible, but there are times brief visual parsing is preferable, like when you're picking a particular photo out from a set. Unfortunately, on inferior systems like Windows, you are left no choice but to either increase the thumbnail images to clown-shoe proportions or double-click each and every file until you find the one you're looking for.

Quicklook on macOS completely solves this problem, and is perhaps my single favorite and most used macOS feature. Simply select a file and press <kbd>spacebar</kbd>. You'll get an instant, enlarged preview window proudly displaying the contents of the file you selected. Now navigate around with the arrow keys or pointer to select different files, *the Quicklook preview window instantly updates to display the currently selected file's contents*. This method of visual searching is indispensable, and is well worth the few seconds it takes to become acclimated to it. Say goodbye to dozens of double clicks or hilariously large "thumbnails" and hello to quicker looks.

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/quicklook-poster.jpg" alt="Video demonstrating the benefits of Quicktime">
        <source src="{{ site.dropbox }}/back-to-the-mac/quicklook.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/quicklook.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/quicklook.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

### Spotlight Calculator for Instant Calculations

What's your process for quick calculations? Do you bring up the Calculator app? Do you use a physical calculator? If either of these are the case, allow me to show you a better way: Spotlight.

Spotlight is the little magnifying glass on the right side of the Menu Bar and is used for quickly searching files and apps, among other things. One of those "other things" is support for basic arithmetic. Simply launch Spotlight with the global shortcut <kbd>⌘</kbd> + <kbd>spacebar</kbd> and enter whatever equation you need calculated. The results will be displayed automatically, and can even be copied to your clipboard with the "copy" shortcut (<kbd>⌘</kbd> + <kbd>C</kbd>).

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/spotlight-calculator-poster.jpg" alt="Video demonstrating the Spotlight being used for basic calculations">
        <source src="{{ site.dropbox }}/back-to-the-mac/spotlight-calculator.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/spotlight-calculator.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/spotlight-calculator.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

With Spotlight as your calculator, you no longer have to waste time opening and closing a separate calculator application or digging up old, physical calculators; any calculation is just a shortcut away. With just a minute or two of practice, you'll be flying through equations faster than you ever thought you could.

### Tap for Definitions, Synonyms, and More

No doubt, there's been plenty of times you need to quickly look up the definition of a word while reading or writing, what do you do? Do you open Safari and Google it? Or do you instead open up the Dictionary app and search there? What if I told you the definition was always just a tap away?

With the default macOS settings, simply tap the word with three fingers and a delightful definition window will pop up for you. This gesture works in practically every application, and can easily be changed to four fingers or other desired combinations in System Preferences.

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/tap-to-define-poster.jpg" alt="Video showcasing macOS's 'tap to define' feature">
        <source src="{{ site.dropbox }}/back-to-the-mac/tap-to-define.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/tap-to-define.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/tap-to-define.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

### Automatic Birthdays in Calendar

Remembering everyone's birthdays can be a daunting task (especially if you're built for process-based thinking instead of rote memorization, [like myself](/articles/turtles-hares-and-hot-rods)). Thankfully, macOS and iOS take this problem away entirely by adding Contact birthdays into Calendar automatically. Simply ensure that the desired contacts have birthdays set in their contact cards.

The Calendar app will automatically see these birthdays and create yearly, repeating events for them accompanied with a cute birthday present emoji &#x1F381;. If you had set the optional birth year for your contacts as well, the birthday events will even include how old they are in their reminder notifications. Forgetful people, rejoice!

### Taking Instant, Beautiful Screenshots

You may be aware that Windows supports taking screenshots of windows with the [Snipping Tool](https://en.wikipedia.org/wiki/Snipping_Tool). If you are, you're also aware of how hilariously hideous the results are. As expected, Microsoft implemented the feature with their usual level of polish, resulting in tiresome file dialogs for screenshots of un-cropped windows, all bundled together with a [grotesque app icon](https://en.wikipedia.org/wiki/Snipping_Tool#/media/File:Snipping_Tool_10_Icon.png).

<figure class="edge-to-edge small no-border-radius">
    <img src="{{ site.dropbox }}/fearful-computing/internet-explorer.png" alt="Image of Windows File Explorer screenshot. If you have difficulties seeing, or the image didn't load for some reason, just take my word for it that it looks like ass">
    <figcaption>
        People, you know you don’t have to put up with this shit, right?
    </figcaption>
</figure>

Thankfully, there's a *vastly* nicer way on macOS to take any kind of screenshot, the [Grab app](https://en.wikipedia.org/wiki/Grab_(software)) (or more specifically, its keyboard shortcuts). Whenever you want to take a screenshot of your entire computer screen in macOS, enter the shortcut <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>3</kbd>. If your volume is on, you'll hear a pleasing camera shutter, signaling that the screenshot has been successfully saved to your Desktop&mdash;no unnecessary save dialogs to slog through.

If you wanted to take a screenshot of a given section of your screen (not the full screen, but also not necessary a full window), enter the shortcut <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>4</kbd> and your cursor will transform into a crosshair. With this crosshair, you can click and drag anywhere on the screen and upon release a screenshot of that selection will be automatically saved to your Desktop, again accompanied by the camera shutter sound.

While these are certainly helpful, this is technically nothing Window's Snipping Tool couldn't do. Where macOS's Grab app truly shines is it's superior window screenshots, which are lovely little window images like this:

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/screenshot-example.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/screenshot-example.png" alt="Image of a lovely macOS window screenshot">
</div>

To make your own, enter the shortcut you did to get the click-and-drag crosshairs before (<kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>4</kbd>), only this time instead of clicking and dragging, press <kbd>spacebar</kbd>. Your crosshairs will transform into a little camera icon, and with that icon you can click on *any* window in macOS to get a perfect window screenshot saved to your Desktop with the familiar camera shutter sound.

Unfortunately, keyboard shortcuts are not easy to remember or execute, so to help with this task the screenshot shortcuts are summarized below. As always, you can just use the Grab app itself if you don't want to memorize the shortcuts (thought I highly suggest you do).

* Fullscreen screenshot: <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>3</kbd>
* Selection screenshot: <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>4</kbd>
* Window screenshot: <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>4</kbd>, then press <kbd>spacebar</kbd> to toggle to crosshair to a camera

### Built-In Screen Recording

Years ago, I wanted to record my Windows 7 screen for a potential article. However, I was having difficulty finding the application to do so. "No big deal." I thought, "It wasn't exactly obvious how to screen record on the Mac either, I'll just look up  online which app to use."

There was none. There is none. Windows 7, the *"gold standard"* operating system used by the vast majority of the world's population at the time had absolutely __no way__ to screen record without installing some rubbish, third-party shareware application online. Users had to wait until Windows 10 to finally get shoddy, built-in screen recording by means of the Xbox app.

This is not a problem at all on macOS. Simply open up the [QuickTime app](https://en.wikipedia.org/wiki/QuickTime) with Spotlight (<kbd>⌘</kbd> + <kbd>spacebar</kbd>, type "QuickTime", and press <kbd>return</kbd>). Once the app is open, click "File" > "New Screen Recording". You'll get a small popup window with a VU meter and record button. Click that red button and follow the brief onscreen instructions to begin. Just like that, you're screen recording like a pro!

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/quicktime-screen-recording.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/quicktime-screen-recording.png" alt="Image of the screen recording Quicktime window">
</div>

### Built-In Screensharing

This is it, the final "must know" macOS feature. While the chances of you ever needing to screenshare someone are relatively low, just knowing it's there and how to do it for that potential *one time* can be a sanity saver. In case you're unfamiliar with the term, screensharing is a feature that lets you control a friend or family member's computer remotely as if you were right there next to them doing it yourself. With screensharing, you could be on the other side of the world and help someone with a task by literally doing it for them; no endless troubleshooting email chains or frustratingly long phone calls required.

If this sounds complicated, don't be worried; macOS makes screensharing (mostly) a breeze by integrating the feature into the [Messages app](https://en.wikipedia.org/wiki/Messages_(Apple)#macOS_version) and Apple IDs. To request temporary control of a friend or family member's screen, first open up the Messages app and select your chat thread with the individual. If you don't have an existing thread with the other party, send them a quick, friendly message to start one.

<div class="admonition">
    <p class="admonition-title">Note</p>
    <p>The bubble should be blue to indicate they have an active Apple ID with iMessage enabled. If it’s not blue, either you or the receiving party don’t have iMessage enabled. <a href="https://www.imore.com/how-set-messages-your-mac">Read here to find out how to turn it on</a>.</p>
</div>

With the thread visible, click the blue "Details" button in the upper right-hand side of the Messages window and a little window will popup with recently shared files and additional contact buttons. One of those buttons is <span class="hint--top hint--rounded hint--bounce" data-hint="The button to start screensharing looks like me!"><svg class="screensharing" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect x="13" y="16" width="29" height="21" rx="2"></rect><path d="M29,15 L29,7 C29,5.8954305 28.1045695,5 27,5 L2,5 L2,5 C0.8954305,5 -1.3527075e-16,5.8954305 0,7 L0,7 L0,24 C1.3527075e-16,25.1045695 0.8954305,26 2,26 L12,26 L12,17 C12,15.8954305 12.8954305,15 14,15 L29,15 Z"></path></g></svg></span>, and clicking it displays two choices, neither of which make any sense. To assist with Apple's horrible labeling, I've translated the options for you below.

* "Invite to share my screen" = Request they control my computer
* "Ask to share screen" = Ask if I can control their computer

Once you choose an option and the other party accepts, screensharing begins! You can simply do whatever you need to do and quit the Screensharing app when you're finished.

-----

## I Want to Work Better

### Text Navigation Shortcuts

Since the personal computer's inception, work has been intrinsically and intimately tied to the keyboard. Yet, it seems the vast amount of people are completely unaware of macOS's powerful text editing shortcuts. As a result, whenever the cursor has to move somewhere (which happens a __lot__ when entering text), people commonly hop back and forth between the keyboard and mouse or slam down on the arrow keys as they wait for the cursor to sift through every character to the desired destination. Neither are desirable, and both are painful to watch.

If you're reading this, you already have at least a passing interest in wanting to work better on macOS (congratulations!). Even with that sliver of interest, I implore you to do yourself the favor and familiarize yourself with the following shortcuts. Don't hesitate to open up a text document and play around! Practice makes perfect. I mean no hyperbole when I say it'll change the way to you write on your computer forever, and then you too can forever wince at others stuck juggling their hands between the keyboard and mouse like a circus act or wasting ages while the cursor visits every blessed character on the way to its destination. It's time to work *smarter*, not harder, and this is the first step.

* Jump the cursor to the previous or next word: <kbd>⌥</kbd> + <kbd>◀</kbd> / <kbd>►</kbd>
* Jump the cursor to the beginning or end of a line: <kbd>⌘</kbd> + <kbd>◀</kbd> / <kbd>►</kbd>

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/text-navigation-poster.jpg" alt="Video demonstrating mastery over macOS's text navigation shortcuts">
        <source src="{{ site.dropbox }}/back-to-the-mac/text-navigation.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/text-navigation.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/text-navigation.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

### Window, Tab, and App Management Shortcuts

Quickly switching tabs, closing windows and tabs, or quitting apps is easier said then done, especially [if you juggle a loony number of windows and tabs during your work](https://overcast.fm/+CdRRhGxw/1:33:05). Sure, the pointer can be situationally preferable for this task, but I find more often than not the task devolves into a game of "chase the little 'x' buttons" to close the desired windows and tabs. Not to mention, in web browsing I find myself frequently switching between tabs, which would usually require numerous mouse hops.

Wouldn't it be nice to have the option to quickly execute these tasks from the keyboard so you don't have to use the mouse *every single time* you need to make a little change? Thankfully, with macOS, you can.

To start, you can easily switch to the previous and next tabs of any tabbed window in macOS with <kbd>⌘</kbd> + <kbd>shift</kbd> + <kbd>{</kbd> / <kbd>}</kbd>, where the left curly bracket switches to the previous tab and the right switches to the next tab. Try switching between tabs this quickly with the pointer!

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/switch-tabs-shortcut-poster.jpg" alt="Video showing how you can quickly switch between tabs with the keyboard shortcut">
        <source src="{{ site.dropbox }}/back-to-the-mac/switch-tabs-shortcut.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/switch-tabs-shortcut.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/switch-tabs-shortcut.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

Quickly switching tabs is nice and all, but it doesn't do much if you still have to play "hunt for the 'x' button" with the mouse whenever you want to close some of them. To leverage the power of the tab switching shortcut, it should be used in conjunction with the universal "close tab / window" shortcut, <kbd>⌘</kbd> + <kbd>W</kbd>. If there are tabs, this shortcut will close the currently selected tab, and if there are no tabs (just a window), this shortcut will close the window. After a little bit of practice, you'll never be able to go back to the hunting and pecking for 'x' buttons with the pointer again.

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/tab-shortcut-comparison-poster.jpg" alt="Video showing tab switching and tab closing shortcuts executed together">
        <source src="{{ site.dropbox }}/back-to-the-mac/tab-shortcut-comparison.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/tab-shortcut-comparison.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/tab-shortcut-comparison.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

Additionally&mdash;whenever you're completely done with an application&mdash;you can use <kbd>⌘</kbd> + <kbd>Q</kbd> to quit the whole thing (this is the equivalent of the red 'X' window button in Windows).

### Custom Autocorrect Substitutions

Autocorrect on iOS and macOS has been somewhat of a mixed bag for me. On one hand, it helps me through words that have no business being spelled the way they are like "thoroughly", but on the other hand it does sometimes get confused and begin "correcting" words it shouldn't (and can duck right off when it does).

To help make the feature slightly more appealing&mdash;potentially enough to make up for its false positives&mdash;you can specify your own autocorrections. The sky's the limit with custom autocorrect substitutions, and here's just a few examples to give you an idea of how it can be used:

* Frequent responses, for example "meetingnow" → "I'm in a meeting right now, sorry! I'll call you later."
* Text-based emoji, for example "myman" → "(☞ﾟヮﾟ)☞"
* Arithmetic characters, for example "u_pi" → "π"
* Email address, for example "@@" → "youremail@foobar.com"

Adding your own autocorrections couldn't be easier; open up System Preferences (<svg class="apple-logo" viewBox="0 0 17 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.1,14.23 C15.99,14.54 15.88,14.83 15.77,15.11 C15.48,15.77 15.14,16.38 14.75,16.95 C14.21,17.72 13.77,18.25 13.43,18.54 C12.91,19.02 12.34,19.27 11.74,19.28 C11.31,19.28 10.79,19.16 10.18,18.91 C9.57,18.66 9.01,18.54 8.5,18.54 C7.96,18.54 7.39,18.66 6.77,18.91 C6.15,19.16 5.66,19.29 5.28,19.3 C4.7,19.32 4.13,19.07 3.55,18.54 C3.18,18.22 2.72,17.67 2.17,16.89 C1.58,16.06 1.09,15.1 0.71,14 C0.3,12.81 0.1,11.66 0.1,10.55 C0.1,9.28 0.38,8.18 0.93,7.26 C1.36,6.52 1.94,5.94 2.66,5.51 C3.38,5.08 4.16,4.86 5,4.85 C5.46,4.85 6.06,4.99 6.81,5.27 C7.56,5.55 8.04,5.69 8.25,5.69 C8.41,5.69 8.94,5.52 9.84,5.19 C10.69,4.88 11.41,4.76 12,4.81 C13.6,4.94 14.8,5.57 15.6,6.7 C14.17,7.57 13.46,8.78 13.48,10.34 C13.49,11.55 13.93,12.56 14.8,13.36 C15.18,13.74 15.61,14.02 16.1,14.23 Z M12.08,0.31 C12.09,0.44 12.1,0.56 12.1,0.69 C12.1,1.64 11.75,2.53 11.06,3.35 C10.22,4.33 9.21,4.89 8.12,4.8 C8.11,4.69 8.1,4.57 8.1,4.44 C8.1,3.53 8.5,2.55 9.2,1.75 C9.55,1.35 10,1.01 10.54,0.74 C11.09,0.48 11.6,0.33 12.08,0.31 Z"></path></svg> > "System Preferences..."), click on the "Keyboard" item, and then select the "Text" tab. There, you can add whatever autocorrect substitutions you want to the table on the left.

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/custom-autocorrect-settings.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/custom-autocorrect-settings.png" alt="Image of the text substitutions System Preferences pane">
</div>

To get started, I've included a few of my favorite substitutions for you to consider adding to your own autocorrection collection:

<table class="fancy">
    <thead>
        <tr>
            <th style="text-align: left">Replace</th>
            <th style="text-align: left">With</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: left">-&gt;</td>
            <td style="text-align: left">→</td>
        </tr>
        <tr>
            <td style="text-align: left">&lt;-</td>
            <td style="text-align: left">←</td>
        </tr>
        <tr>
            <td style="text-align: left">shrugguy</td>
            <td style="text-align: left">¯\<em>(ツ)</em>/¯</td>
        </tr>
        <tr>
            <td style="text-align: left">lod</td>
            <td style="text-align: left">ಠ_ಠ</td>
        </tr>
    </tbody>
</table>

Once you've added your desired substitutions, using them is as easy as typing misspelled words. Simply let macOS handle everything for you, continue typing as you normally would; the substitutions will happen auto-magically.

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/text-substitution-poster.jpg" alt="Video showing the custom autocorrection in action">
        <source src="{{ site.dropbox }}/back-to-the-mac/text-substitution.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/text-substitution.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/text-substitution.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

### "Go To Desktop" Keyboard Shortcut for File Dialogs

The vast amount of time I'm saving a new file, I save to my Desktop for sorting later. This effectively treats the Desktop as my active "workspace", and any new files I'm currently working on will remain there until I'm done with them and they're sorted away wherever they need to go.

Since I save files to the Desktop so frequently, I'm happy to say there's a shortcut to snap any Open/Save file dialog windows to the Desktop. You can think of this shortcut like the iPhone Home Button, where entering it will *always* take Open/Save file dialogs immediately to the Desktop. Like many other tips in this category, while this can be achieved with the pointer and manually clicking "Desktop" in the sidebar every time, it's *must* faster to use the shortcut.

To leverage this functionality yourself, whenever you have an Open/Save file dialog, use the shortcut <kbd>⌘</kbd> + <kbd>D</kbd> to instantly go to your Desktop.

### Customize Toolbar Items

All the work improvement tips up to this point have involved the keyboard to varying degrees, but not all work improvements require committing cryptic shortcuts to memory! With the power of macOS, you can customize the toolbar buttons of practically every application to fit your particular needs and work style. Think of this like arranging your physical desk with the things you need, and nothing you don't. Do you not use pens that much (or at all)? Then you put them away and bring out the pencils. Do you have a single notebook? Or dozens of sticky notes instead? The customizations and combinations are endless, and everyone has their own particular tastes and styles.

Tell me then, why do so many people continue to use default application toolbars?

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/finder-default.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/finder-default.png" alt="Image of the default Finder toolbar">
</div>

Take for example the nightmare that is the Finder window toolbar. It looks like something Google made, with loads of mystery meat hieroglyphic buttons most people will never use, or even need. Thankfully, you can change it and nearly every macOS application's toolbar by going to "View > Customize toolbar..." in the menu bar. A helpful dialog will slide down filled with various buttons, and from that point on you simply drag and drop in or out whatever you want until you're satisfied.

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/customize-toolbar-sheet.png 100w" sizes="50px" alt="Image of the Finder toolbar customization pane">
</div>

Don't be afraid to experiment! You wouldn't just buy a desk from an IKEA showroom and keep all the stuff on the desk *exactly* like IKEA had arranged it, would you? No! You'd get your arrangement *just right* to fit the way you work, and you should consider doing the same to your toolbars. Don't worry, You can always get back the default toolbar by dragging the "default set" back up to the top, so there's no risk of "breaking it". Once you've chosen just the stuff __you__ want, click the "Done" button to save your changes.

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/finder-custom.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/finder-custom.png" alt="Image of my customized Finder toolbar">
</div>

For inspiration, just compare the noisy mess that is the default Mail compose window toolbar to the one I use. For as much as Apple touts being simple and elegant, it's amazing they don't have something like mine as the default, right?

<figure class="inline macos-window-screenshot">
    <p><img srcset="{{ site.dropbox }}/back-to-the-mac/mail-default.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/mail-default.png" alt="Image of the default Mail Compose toolbar"></p>
    <figcaption>Default</figcaption>
</figure>

<figure class="inline macos-window-screenshot">
    <p><img srcset="{{ site.dropbox }}/back-to-the-mac/mail-custom.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/mail-custom.png" alt="Image of my custom Mail Compose toolbar"></p>
    <figcaption>Custom</figcaption>
</figure>

### Always Search Current Folder in Finder

It's no secret Finder (and by extension the file system paradigm of folders and files) utterly baffle most people. For proof, look no further than the Desktop; for both Windows and macOS, the majority of people seem [far more comfortable keeping all their files on the Desktop](/articles/fearful-computing#the-comfortzone-trap) instead of braving the scary world of the Finder or Explorer to properly sort them away. Comically, Apple's approach to making the system less scary was giving the Finder app a smiley face icon and ignoring the underlying issues, like putting lipstick on a pig[^finder].

While there's nothing I can write here that will fix Finder[^fftf], I can at least suggest a change that's the equivalent of adding a small teaspoon of sugar to swill: searching the current folder by default instead of the entire home directory.

If a search is being made in an opened folder, *why* should that search ever default to searching an entirely different folder instead? If I issued a command for a robot to search my desk drawer for something, I'd consider the robot defective it searched the *entire house* instead of just the specified drawer. The same logic applies to digital folders; if I start a search in a folder, __I expect the search to occur in that folder__. If I wanted to search another folder, __I'd have gone to that folder and started the search there__. If you agree, navigate to "Finder > Preferences...", and in the "Advanced" tab where it says "When performing a search", select "Search the Current Folder". You can now enjoy a marginally less horrible file browser while searching the folders you were expecting to in the first place.

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/finder-preferences.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/finder-preferences.png" alt="Image of the finder Preferences window">
</div>

### Automator 101 🤖

If you're a developer, you've undoubtably written small utility scripts to help you with common tasks like data or file manipulations and are already familiar with just how much time and mental energy they save you. Even if you're not a developer per-say, you may have relied on scripts before for other things and not even known it, like macros for Excel. Now, imagine the same conveniences those scripts offer, but baked into the very core of your operating system. Meet [Automator](https://en.wikipedia.org/wiki/List_of_macOS_components#Automator), the unsung hero of macOS efficiency.

What can you do with Automator? Practically anything. Want to make PDFs from selected images directly in Finder? [Automator's got you covered]({{ site.dropbox }}/downloads/back-to-the-mac/Make PDF from Images.zip). Want to convert selected text into an MP3 for listening during a commute? What if you wanted this ability for *any* selectable text in macOS? [Not a problem for Automator](http://automator.us/leopard/examples/ex07/index.html). Frustrated about having no quick, easy, and universal way to convert image formats? [Come on, give Automator something hard to do]({{ site.dropbox }}/downloads/back-to-the-mac/Change Image Format.zip)!

Making your own scripts like the ones I mentioned above are shockingly easy. First, open up the Automator app, which is easily identifiable due to its striking resemblance to Eve from Pixar's *Wall-E*[^wall-e].

![Image showing Auto the Automator robot and Wall-E's Eve side-by-side]({{ site.dropbox }}/back-to-the-mac/automator-and-eve.png)

Once opened, you're met with a plentiful list of "Actions" to the left and a chronological timeline to the right where you can drag and drop various actions together to create your desired script. However, if making your own doesn't really interest you, you can search the web for [dozens of pre-made ones](http://macosxautomation.com/services/download/index.html#), ready for use. Additionally, I've linked my favorites below for you to download:

<ul class="tight">
    <li><a href="{{ site.dropbox }}/downloads/back-to-the-mac/Change Image Format.zip">Change Image Format</a></li>
    <li><a href="{{ site.dropbox }}/downloads/back-to-the-mac/Combine PDFs.zip">Combine PDFs</a></li>
    <li><a href="{{ site.dropbox }}/downloads/back-to-the-mac/Convert Text to Audio File.zip">Convert Text to Audio File</a></li>
    <li><a href="{{ site.dropbox }}/downloads/back-to-the-mac/Make PDF from Images.zip">Make PDF from Images</a></li>
    <li><a href="{{ site.dropbox }}/downloads/back-to-the-mac/Rename Files Sequentially.zip">Rename Files Sequentially</a></li>
</ul>

To install these scripts, simply double click any ones you've downloaded and click the "Install" button in the popup. From then on you'll be able to access them by right clicking applicable files in Finder (if you've got a lot of them, they'll instead be grouped under a new "Services" submenu).

<div class="edge-to-edge medium shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/services-poster.jpg" alt="Video showing where the Automator services are located">
        <source src="{{ site.dropbox }}/back-to-the-mac/services.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/services.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/services.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

Now we're getting to the good stuff; do you have a mundane, repetitive task you need to do every day for work that demands mouse interactions? What if I told you Automator could watch you do it and then quickly play back that repetitive task indefinite times while you sit back and enjoy your morning coffee? There are entire jobs that could be compressed into just a short half hours' worth of actual work with such power, and Automator's got it.

Unfortunately, due to the specialized nature of mouse-driven automation, there's no pre-canned Automator scripts I can provide you. I can, however, point you towards some guides to show you the ropes if you're interested (and as always, I stand by the best way to truly learn this feature is to experiment on your own):

<ul class="tight">
    <li><a href="https://macosxautomation.com/training/automator/tut04/02.html"><em>Mac OS X Automation</em> - “Tutorial 04: Recording”</a></li>
    <li><a href="https://hacksformacs.wordpress.com/2013/05/27/controlling-the-gui-via-automator/"><em>Hacks for Macs</em> - “Controlling the GUI via Automator”</a></li>
    <li><a href="https://www.youtube.com/watch?v=5o_JrForn6Y"><em>Peachpit TV</em> - “Recording Manual Events in Automator with Ben Waldie”</a></li>
</ul>

### "Get Info" Multiple Files at Once

macOS is great at many things, but "Get Info" windows aren't one of then. If you've ever made the mistake of right clicking a bunch of selected files and clicking "Get Info...", you already know why. For those don't, [have you even won a round of Windows Solitaire](https://www.youtube.com/watch?v=yiGT_7Dgq0I)?

<figure class="edge-to-edge large shadow">
    <img src="{{ site.dropbox }}/back-to-the-mac/death-by-get-info.jpg" alt="Loads of Finder &quot;Get Info&quot; windows, LOADS OF THEM">
    <figcaption>
        God dammit, Apple…
    </figcaption>
</figure>

Thankfully, there *is* a way to consolidate multiple "Get Info" windows into one, but it requires a special interaction: <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>. "What could this window possibly be useful for?", you may ask. It's indispensable for showing/hiding the extensions of multiple files at once (the only other option being to "Get Info" files one-by-one), and it can be quite useful for changing permissions of numerous files at once without having to fire up Terminal and memorize the necessary Unix commands. Now, instead of drowning in countless individual "Get Info" windows, next time you need to edit multiple files at once you can instead fuse them together into a single, sensible window for your edits.

<div class="inline macos-window-screenshot">
    <img srcset="{{ site.dropbox }}/back-to-the-mac/consolidated-get-info-window.png 100w" sizes="50px" src="{{ site.dropbox }}/back-to-the-mac/consolidated-get-info-window.png" alt="The consolidated Finder &quot;Get Info&quot; window">
</div>

-----

## Huh, Neat

### Large Album Art Player in iTunes

[Not many people buy music anymore](http://gloriousnoise.com/2015/music-sales-over-the-years-2014-year-end-soundscan-data). Sales of music on traditional media has all but vanished, leaving download sales to [slowly but surely be devoured by streaming services](http://variety.com/2017/digital/news/streaming-services-us-music-revenue-2016-1202019504/) like [Spotify](http://spotify.com) and [Apple Music](https://www.apple.com/music/). Now we can have the privilege of renting our music while still "enjoying" the [timid, postage stamp album art](https://images.techhive.com/images/article/2016/07/ios-10-ipad-music-2-100669691-large.png) that comes with most digital music files.

Yet here I remain, feebly clinging to my digital collection of meticulously selected, high-fidelity album art so I have something I can actually see while enjoying my albums. In a sea of other ~~nerds~~ "hackers" [that seem to love the idea of browsing their music collection as if it was an Excel spreadsheet](https://news.ycombinator.com/item?id=15548986), people like me that care even the slightest bit about something as inconsequential as high-resolution album art are far and few between.

If by some miracle you are among the remaining dozen people like me that are fussy about such things, iTunes 11's redesigned mini player was no doubt a disappointment for you. Prior to the redesign, the "mini player" was really just media controls layered over a fully resizable window proudly displaying the full size album art of the currently playing song. Wanted to see the album art even bigger? The only limit was your screen size.

Following iTunes 11's mini player redesign, the mini player's window size was locked at the comically small width and height of 600px&mdash;a pale imitation of its predecessor. Mini? Sure. A great replacement for album art lovers? Not even close.

As fate would have it, *you can still get the old mini player back*, even in the latest version of iTunes (at time of writing, 12.7.1.14). To get the old player back, <kbd>⌘</kbd> + click the album art of the currently playing song in the menu bar and the old mini player will pop up in all its glory. Rejoice with the other dozen of us in being able to finally see your album art again.

<div class="edge-to-edge large shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/itunes-mini-players-poster.jpg" alt="Video comparing the new and old iTunes mini-players">
        <source src="{{ site.dropbox }}/back-to-the-mac/itunes-mini-players.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/itunes-mini-players.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/itunes-mini-players.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

### Fix Ugly App Icons

What do [Sublime Text](https://www.sublimetext.com), [MakeMKV](http://makemkv.com), and [Photoshop](https://www.photoshop.com) all have in common? Why, hideous icons, of course!

Terrible macOS icons come in all kinds. Some, like [Sublime Text](https://www.sublimetext.com), are made competently enough, but outright ignore the [platform icon schema](http://martiancraft.com/blog/2014/07/inspecting-yosemite-icons/) and severely clash with the look-and-feel of the system as a result. However, others like [MakeMKV](http://makemkv.com) look like a [grade-schooler’s thirty-second Microsoft Paint job](https://dl2.macupdate.com/images/icons256/34693.png?d=1504635390) and should be jettisoned into the nearest black hole. Sure, the apps themselves are great, but there's no reason it has to be at the expense of stomaching their dumpster fire icon designs. What's an overly fussy person like me to do?

Much to my glee, macOS offers a convenient way to replace practically *any* file's icon by means of the handy "Get Info" window [mentioned earlier](#get-info-multiple-files-at-once). To do so, you'll need to follow these steps:

1. Open the replacement icon's image file in [Preview](https://en.wikipedia.org/wiki/Preview_(macOS)) by double-clicking the file.
2. Select the whole image with <kbd>⌘</kbd> + <kbd>A</kbd> or by click-and-dragging.
3. Copy the selection to your clipboard with <kbd>⌘</kbd> + <kbd>C</kbd>
4. Open up the offending app's "Get Info" window with <kbd>⌘</kbd> + <kbd>I</kbd>
5. In the "Get Info" window, select the offending icon in the top-left corner of the window and paste the new icon in its place with <kbd>⌘</kbd> + <kbd>V</kbd>.

### Dark Mode 🌚

Let it be said: the dark side has its perks. Besides [shooting lighting out your fingertips](https://www.youtube.com/watch?v=e_DqV1xdf-Y), having a dark background *and* dark UI elements make late-night computing much easier on the eyes. Don't believe me? Open up [this image]({{ site.dropbox }}/back-to-the-mac/all-black/) late at night in fullscreen Safari, then switch to [this image]({{ site.dropbox }}/back-to-the-mac/all-white/). I'd be willing to bet you winced when you swapped from the calming black image to the stark white one.

In the past, the only action we could take to combat this was changing our desktop background. The Dock (if visible) and Menu Bar were still white as always, resulting in an unappealing visual clash between the white UI elements and black background. With the advent of [macOS Yosemite](https://web.archive.org/web/20141021032812/http://www.apple.com/osx/), however, our prayers were finally answered in the form of a half-baked, barely thought out "dark mode" which only changed the Menu Bar and Dock to dark-themed variants&mdash;leaving every other white UI element untouched. While poorly executed, the "Dark Mode" at the very least does allow dark backgrounds to blend naturally into the rest of the Desktop UI, allowing black images to be a visually pleasing, viable background choice on macOS for the first time.

If you've always found yourself gravitating towards dark backgrounds, you owe it to yourself to give Dark Mode a spin if you haven't already[^website-dark-mode]. Enabling it's as easy as opening up System Preferences (<svg class="apple-logo" viewBox="0 0 17 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M16.1,14.23 C15.99,14.54 15.88,14.83 15.77,15.11 C15.48,15.77 15.14,16.38 14.75,16.95 C14.21,17.72 13.77,18.25 13.43,18.54 C12.91,19.02 12.34,19.27 11.74,19.28 C11.31,19.28 10.79,19.16 10.18,18.91 C9.57,18.66 9.01,18.54 8.5,18.54 C7.96,18.54 7.39,18.66 6.77,18.91 C6.15,19.16 5.66,19.29 5.28,19.3 C4.7,19.32 4.13,19.07 3.55,18.54 C3.18,18.22 2.72,17.67 2.17,16.89 C1.58,16.06 1.09,15.1 0.71,14 C0.3,12.81 0.1,11.66 0.1,10.55 C0.1,9.28 0.38,8.18 0.93,7.26 C1.36,6.52 1.94,5.94 2.66,5.51 C3.38,5.08 4.16,4.86 5,4.85 C5.46,4.85 6.06,4.99 6.81,5.27 C7.56,5.55 8.04,5.69 8.25,5.69 C8.41,5.69 8.94,5.52 9.84,5.19 C10.69,4.88 11.41,4.76 12,4.81 C13.6,4.94 14.8,5.57 15.6,6.7 C14.17,7.57 13.46,8.78 13.48,10.34 C13.49,11.55 13.93,12.56 14.8,13.36 C15.18,13.74 15.61,14.02 16.1,14.23 Z M12.08,0.31 C12.09,0.44 12.1,0.56 12.1,0.69 C12.1,1.64 11.75,2.53 11.06,3.35 C10.22,4.33 9.21,4.89 8.12,4.8 C8.11,4.69 8.1,4.57 8.1,4.44 C8.1,3.53 8.5,2.55 9.2,1.75 C9.55,1.35 10,1.01 10.54,0.74 C11.09,0.48 11.6,0.33 12.08,0.31 Z"></path></svg> > "System Preferences...") and clicking the "Use dark menu bar and Dock" checkbox in the "General" Preference Pane. Below's a screenshot of my Desktop with the setting enabled to give you an idea of what to expect.

<div class="edge-to-edge large shadow">
    <img src="{{ site.dropbox }}/back-to-the-mac/dark-mode.jpg" alt="Image of my desktop with Dark Mode enabled">
</div>

### Auto-Hidden Dock

The vast majority of Macs you'll find out in the wild are laptops, just take a look at any college campus or Mac-friendly corporate workplace to confirm for yourself. External monitors aside, that means there's a shocking percentage of users who primary experience macOS on tiny 12"-15" screens. Efficient use of the scarce screen real estate in these situations is *incredibly* important, yet I see most people still opting to keep the Dock always visible at the bottom of their screens.

Depending on the Dock size and the number of docked apps, an always-visible Dock can hoard around 9% of precious screen space on the 12" MacBook[^dock]. That space can't be shared with your content since the Dock prevents users from dragging-and-dropping apps over it, which leaves the bottom 9% of the screen as little more than a marginally useful screen bezel. That's absolutely unacceptable. The user should be allowed to utilize their whole screen for their precious content instead of accepting 9% of the screen as a permanent sacrifice to the OS.

With macOS's auto-hiding Dock feature enabled, however, that 9% of the screen is all yours again to do with as you please. Go right ahead, fully expand your window vertically! That display is *yours* to control now! Imagine just how much more words you could read and areas of images you could see with that space put back into your hands.

"But where did the Dock go?", you may ask. It went where it belongs, *out of the way*. For the few times you need to use it, simply move your pointer down to the very bottom of the screen (or to the side of the screen where your Dock was before being hidden, if you had changed it previously). macOS will see this action, temporarily slide the Dock back into view for you to use, and then slide it back out of view when you're done. The action is effortless.

### Rearrange Menu Bar Icons

Third party menu bar icons come in all kinds of styles. Some have thick stroke lines like [Plex](https://www.plex.tv) and [Airserver](http://www.airserver.com), while others are thin and wispy like [Time Machine](https://support.apple.com/en-us/HT201250) and [Spotlight](https://support.apple.com/en-us/HT204014). By default, additions to the menu bar are sorted right to left in the order they're added, which isn't exactly preferable for users that tend towards visual organization systems. From a visual perspective, having something whispy like [Time Machine](https://support.apple.com/en-us/HT201250) sandwiched between beefy icons like [KeepingYouAwake](https://github.com/newmarcel/KeepingYouAwake) and [Tweetbot](https://tapbots.com/tweetbot/) looks utterly ridiculous. You may have even already tried dragging and dropping the icons around like you can on the Dock only to discover it's not possible. While not exactly discoverable, the menu bar icons thankfully *can* be reorganized by combining <kbd>⌘</kbd> with your click-and-drag. Give it a try!

<div class="inline shadow">
    <video controls preload="none" poster="{{ site.dropbox }}/back-to-the-mac/menu-bar-arrange-poster.jpg" alt="Video showcasing menu bar icon rearrangement" class="menu-bar-arrange">
        <source src="{{ site.dropbox }}/back-to-the-mac/menu-bar-arrange.mp4" type="video/mp4">
        <source src="{{ site.dropbox }}/back-to-the-mac/menu-bar-arrange.webm" type="video/webm">
        <source src="{{ site.dropbox }}/back-to-the-mac/menu-bar-arrange.ogv" type="video/ogg">
        [HTML5 video tag not supported by your browser]
    </video>
</div>

-----

Things have changed so much the past five years. Apple's focus has all but vanished from macOS in lieu of the shareholder darling, iOS, leaving poor macOS to live on in little more than maintenance mode at worst and with [shoddy drive-by updates by B-Team developers](https://512pixels.net/2016/03/typos-in-disk-utility/) at best.

However, even with the poor treatment its receives, macOS continues to stand strong against the test of time, helped by its suite of powerful, delightful features that continue to put smiles on the faces of average consumers and developers alike. Hopefully, these features brought a smile to your face as well. While that's all the features I have to highlight at this time, with any luck there will be a list of new features to highlight in next year's update. For macOS's sake, I certainly hope so.

-----

[^i-guess]: ![I GUESS]({{ site.dropbox }}/back-to-the-mac/i-guess.png)
[^finder]: Although, there's no denying he's utterly adorable.<br>![macOS Finder icon]({{ site.dropbox }}/back-to-the-mac/finder.png)
[^fftf]: Fun Fact: <abbr title="Fix the 🙊 Finder">FTFF</abbr> was a well known acronym chanted by many Mac fans back in the early days of the Mac OS X. I'll give you one guess as to what it stood for, fill in the missing word: "Fix the 🙊 Finder".
[^wall-e]: The similarity to Apple's design aesthetic was no coincidence; *Wall-E*'s director, Andrew Stanton, revealed in [an interview with Fortune](http://money.cnn.com/2008/05/09/technology/siklos_walle.fortune/index.htm?postversion=2008051208) that Apple's "playbook for design" drove Eve's seamless and sleek character design.
[^website-dark-mode]: If dark mode's your thing, try clicking the moon in the upper right-hand corner of this site's menu (or tapping the logo on mobile devices). This site fully supports dark mode for late night reading, and remembers your preference for next time!
[^dock]: ![MacBook screenshot showcasing the space taken up by the Dock]({{ site.dropbox }}/back-to-the-mac/macbook-dock.jpg)

*[VU]: Volume Unit
*[MP3]: Moving Picture Experts Group Layer-3 Audio
*[FTFF]: Fix the F#!&ing Finder
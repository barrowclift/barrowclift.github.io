---
title: "Revisiting the Game Boy"
date: 2026-04-13 07:18:49-0400

excerpt: |
    Escaping the modern tech industry to get back to basics and explore the extensive Game Boy catalog.
categories:
    - Technology
    - iOS
    - Design
image: "revisiting-the-game-boy/share.jpg"
card:
    light:
        image: "revisiting-the-game-boy/light-banner"
        background-color: "hsl(41, 89%, 60%)"
        foreground-color: "hsl(0, 0%, 0%)"
    dark:
        image: "revisiting-the-game-boy/dark-banner"
        background-color: "hsl(41, 89%, 60%)"
        foreground-color: "hsl(0, 0%, 0%)"
---

<div class="inline shadow">
    <picture class="show-when-light">
        <source type="image/webp" srcset="{{ site.dropbox }}/revisiting-the-game-boy/light-banner.webp">
        <img alt="A pixelated Pokémon Yellow Edition Game Boy Color with a cheerful smile. The background features a mesh gradient of each of the five colors featured in the Game Boy Color logo" title="What a happy boy 💛" src="{{ site.dropbox }}/revisiting-the-game-boy/light-banner.jpg">
    </picture>
    <picture class="show-when-dark">
        <source type="image/webp" srcset="{{ site.dropbox }}/revisiting-the-game-boy/dark-banner.webp">
        <img alt="A pixelated Pokémon Yellow Edition Game Boy Color with a cheerful smile. The background features a mesh gradient of each of the five colors featured in the Game Boy Color logo" title="What a happy boy 💛" src="{{ site.dropbox }}/revisiting-the-game-boy/dark-banner.jpg">
    </picture>
</div>
<style>
    kbd.b,
    #dark kbd.b {
        background-image: radial-gradient(hsl(145, 65%, 70%), hsl(145, 40%, 31%));
        border-radius: 100%;
        padding-left: 0.3em;
        padding-right: 0.3em;
        color: hsl(145, 40%, 20%);
        border: 1px solid hsl(145, 40%, 20%);
        border-bottom-width: 2px;
        border-top-width: 0;
        border-left-width: 0;
        border-right-width: 0;
    }
</style>

It's difficult to pinpoint exactly where my renewed interest in Game Boy hardware and the broader retro community sprung from. Some amount of blame surely falls on repeatedly feeling unimpressed by the mainline *Pokémon* releases over the past half decade, which consistently featured [downright ugly art direction and intolerable performance](https://www.digitalfoundry.net/articles/digitalfoundry-2022-pokemon-scarlet-and-violet-are-comprehensive-technical-failures). Similarly—while *The Legend of Zelda: Breath of the Wild* was an inarguable [generation-defining achievement](https://www.polygon.com/2019/11/11/20955542/legend-of-zelda-breath-of-the-wild-best-games-decade/)—it was also a stark departure from the "typical" Zelda formula that made the series so beloved in the first place. And unfortunately, when time came for Nintendo's next Zelda game, they opted to pawn off [over-inflated *Breath of the Wild* DLC](https://kotaku.com/breath-of-the-wild-is-getting-a-sequel-because-the-team-1835624233) as their next mainline entry instead of developing a proper new game. Further, in a cruel twist of fate, by the time that fool's gold was paraded out as their new game, the open world genre *Breath of the Wild* had breathed fresh life into just a few short years prior had already once again grown [dank and tired](https://www.cbr.com/open-world-games-problems-criticism/). Both series left me disheartened and wistfully remembering their better years, back when the crucible of primitive Game Boy hardware forged whatever games were left standing into hardened diamonds that nailed the fundamentals of function and design.

A fair bit of the blame must also fall on the incredible talents of YouTube entertainers such as [Odd Tinkering](https://www.youtube.com/@OddTinkering), [Techmoan](https://www.youtube.com/@Techmoan), and [James Channel](https://www.youtube.com/@Games_for_James). While each channel certainly has a unique style and voice all their own, they each share a common interest in showcasing old equipment, tearing them down, and repairing them to varying extents. While these channels are clearly not meant to be strictly educational, they nonetheless gradually taught me with each video by demystifying the "opaque boxes" of technology that so many of us fear to open up and peer inside. Techmoan's videos highlighted just how simple many of the repairs for broken hardware tend to be; you'd be shocked to find out just how many "broken" Hi-Fi systems, tape decks, boomboxes, etc. are simply due to perished belts (i.e. disintegrating rubber bands). Odd Tinkering's videos showcased just how far you can go with a repair; his videos heavily feature hardware I'd wager many would deem irredeemable junk and too far gone to fix. Yet every time—without fail—he gets them working again *and* fully refurbished with simple but effective cleaning techniques (quite literally, often just taking the thing apart and dumping everything but the motherboard into [soapy water for a scrub](https://youtu.be/SV_NXiUYTxA?si=NOwANYoWxt0mjRFx).). Finally, there's James Channel, whose goblin spirit frequently (and *brutally*) beats hardware into working submission or into [unholy algorithm-friendly abominations](https://www.youtube.com/watch?v=sbvp3kuU2ak). And yet, his nightmarish process demonstrated time and time again how shockingly resilient consumer electronics often are, and how just a little bit of know-how and the right tools can fix a myriad of sins (existing or self-inflicted, which much to my amusement is often the latter for James Channel).

Finally, there's broader disillusionment with the modern tech industry. It's in large part due in recent years to the AI craze that's been infesting every aspect of our lives like an airborne disease, but AI's not the only cause. The current landscape of modern technology as a whole has gotten better in many regards, certainly, yet somehow gotten worse at the same time. You can't use the console you just purchased for [a thousand dollars](https://blog.playstation.com/2026/03/27/new-price-changes-for-ps5-ps5-pro-and-playstation-portal-remote-player/), you need to first connect it to the Internet, update, and restart. Whoops, sorry, now your game also needs to update, hope you weren't in a rush. Oh, now you're gaming on the go and your battery's out? Sorry, your hardware's hermetically sealed, so without mains power or paying a premium for an *external* battery pack to charge your *internal* battery, you're sunk. Oh dear, a simple but critical component failed and you want to try fixing it yourself? Good luck carefully prying the delicate glass shell apart that was firmly glued into place as a permanent, constant reminder we're unwelcome inside.

Further, the move to digital downloads was every bit a curse as it was a blessing; nobody owns games anymore, [they're just licenses](https://consumer.ftc.gov/consumer-alerts/2024/04/do-you-really-own-digital-items-you-paid) which can be revoked or expired for any myriad of reasons just as easily as they were purchased. Even if we assume ambivalent support will exist forever from these companies and their servers, the DRM woven into every "purchase" makes portability and interoperability impossible without piracy or using deep technical know-how to crack it yourself. And in some cases, the content you "purchased" is locked *to that specific hardware*, as Nintendo [frustratingly did with the 3DS](https://www.reddit.com/r/3DS/comments/27gdvr/are_eshop_games_still_tied_to_the_3ds_or_your/). Best hope you don't lose or break your unit, because you'll also forever lose your entire library as well. And even if all of the above somehow wasn't a concern, I don't *feel* like I have a game collection anymore; if a loved one visits and wants to browse my library, *what library*? It doesn't exist, there's nothing here. There's real, tangible joy to be hand in physical artifacts which digital "purchases" can never replicate. I no longer ruffle through things in physical space with my meaty fingers while trying to figure out a game to play. I no longer hear the satisfying "ca-CHUNK" of putting a cartridge into a system to play. I no longer have to be intentional about what games I want to bring somewhere; everything's everywhere, all the time, and *I don't think that's always a good thing* (if you've ever sat there endlessly scrolling through Netflix's catalog of millions of programs with "nothing to watch", then you know exactly what I'm talking about). I'm a creature of flesh and bone living in physical space, yet I've gradually over time eliminated every scrap of the living experience in pursuit of digital convenience. We've achieved things in this future of ours I could only dream about 30 years ago, and now I'm left with nothing.

Seeking respite, I decided to dig up my old Game Boy hardware (a blue Game Boy Pocket and a Pokémon Yellow Edition Game Boy Color), I found they were both in rough shape. The Pocket—while surprisingly in good cosmetic condition—had suffered moderate corrosion from the leaking alkaline batteries I left in the unit over two decades ago, and it would need a deep clean to stop the corrosion from continuing to cause permanent damage. While the Color's leak was nowhere near as severe, the unit was filthy and in rough cosmetic shape. The plastic screen lens was riddled with battle scars from the flippant care of a young boy. Grim filled every cavity, giving the recessed Nintendo logo on the front shell the illusion of brown paint from years of filth nestling into its valleys. Worst of all, a careless mistake on a roadtrip in my youth caused me to spill a disconcerting amount of orange juice directly into the unit through the speaker and button slots. Miraculously, the unit continued to work afterwards despite this (though the <kbd class="b">B</kbd> button from that point on remained sticky and lost all tactile feedback). Needless to say, it was in dire need of a long-delayed deep clean, the exact sort of cleaning I watched Odd Tinkering do dozens of times in his videos, and will be the focus for the rest of the article.

Since I had no idea at the time this would be something I'd want to write about, I neglected to take a proper "before" picture of the dirty unit prior to disassembling. However, what I *can* share is a couple shots of everything taken apart prior to cleaning, which was originally intended just for sharing in my family's chat thread.

<figure class="edge-to-edge array duo shadow">
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/disassembled-shell.webp">
        <img title="So gross..." alt="My Pokémon Yellow Edition Game Boy Color disassembled and separated into two piles; the leftmost pile consists of all the soiled non-electrical components that can be safely cleaned in soapy water, and the rightmost pile consists of just the motherboard." src="{{ site.dropbox }}/{{ page.slug }}/disassembled-shell.jpg">
    </picture>
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/soiled-motherboard.webp">
        <img title="The lesson to learn here is children are disgusting." alt="A shot of the fossilized orange juice on the user-facing “front side” of the motherboard" src="{{ site.dropbox }}/{{ page.slug }}/soiled-motherboard.jpg">
    </picture>
    <figcaption>Keen eyes will note the black tar of ~25 years old orange juice festering in the cavities and seams of the disassembled shell on the left image. Wish I could say the fossilized orange juice in the right image was any better.</figcaption>
</figure>

Next, I gently scrubbed every non-electrical component in warm, soapy water and left them out to air dry.

<figure class="edge-to-edge array duo shadow">
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/dirty-water.webp">
        <img title="Cursed water" alt="The soapy water after cleaning all components. It used to be a light dish soap blue, but now tinged filthy green from the cleaning process." src="{{ site.dropbox }}/{{ page.slug }}/dirty-water.jpg">
    </picture>
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/disassembled-and-cleaned.webp">
        <img title="All clean! ☺️" alt="Every part of the unit aside from the motherboard all cleaned and air drying" src="{{ site.dropbox }}/{{ page.slug }}/disassembled-and-cleaned.jpg">
    </picture>
    <figcaption>That water used to be light blue…</figcaption>
</figure>

With that out of the way, I switched gears to cleaning and lightly restoring the motherboard. I first used rubbing alcohol and a toothbrush to scrub away the crystalized alkaline substance and what little I could of the orange juice reside that had quite literally fossilized on the board. Once I'd cleaned what I could, I did some truly shoddy soldering work to replace the three capacitors and the speaker (as mentioned before, it was caked in fossilized orange juice, which didn't do wonders for the sound). While the capacitors seemed to still be in good working order, capacitors generally degrade and fail with time, so I decided to replace them while in the area. I have no pictures of this particular part of the process, but that's probably for the best since I did an objectively awful job of it. The <abbr title="Surface Mount Capacitor">SMC</abbr>s were particularly difficult for me to safely remove, not helped by the fact it seems nobody can agree on the "right" way to do it. But like James Channel haplessly demonstrates time and time again, these things can take a *lot* of abuse, and everything worked like a charm afterwards despite my rubbish soldering work.

You may be surprised to read I intentionally kept the original non-backlit TFT LCD instead of opting for one of the many available after-market IPS or OLED replacements. I decided to keep the original screen for a few reasons:

1. I'm genuinely fond of the original screen's characteristics (both good and bad). While modern backlit screens are undeniably nice, I wanted to have at least one Game Boy Color that remained as close to the original as possible so I could always have the option of a time-accurate play session.
2. The replacement screens are generally  not drop-in replacements. The majority outright do not fit original shells, and the few that "do" require destroying the shell by cutting away bits of the plastic to make room for the new screen. Since my Pokémon Yellow Edition is relatively rare in comparison to standard Game Boy Color units, I felt no compulsion to mutilate it.
3. I already planned to sacrifice a separate, standard Game Boy Color unit for modern conveniences like a backlit screen. My brother graciously donated his old [Grape color edition](https://en.wikipedia.org/wiki/Game_Boy_Color#/media/File:Game_Boy_Color_Purple.jpg) for the cause, and I used *that* unit for my [Ship of Theseus](https://en.wikipedia.org/wiki/Ship_of_Theseus) experiments.

To cap off my light restoration pass, after extensive searching I found a suitable replacement for the profoundly abused plastic screen lens (a glass one too, if you can believe it!). This was a task easier said than done, as the market is flooded with insultingly bad reproductions. For just a few quick examples, one such reproduction failed to include the light reflection in Togepi's eyes, giving the poor creature a demonic air. Another bewilderingly used a *heavy* stroke for Pikachu's mouth, resulting in an image somehow even more terrifying than the soulless-eyed Togepi. Another lens outright forgot Pikachu's nose.

<figure class="edge-to-edge array shadow">
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/soulless-eyes.webp">
        <img title="Togepi hungers for the souls of mortals." alt="An awful reproduction of the original screen lens which features Togepi without light reflections on the eyes, resulting in an unsettling image" src="{{ site.dropbox }}/{{ page.slug }}/soulless-eyes.jpg">
    </picture>
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/big-lips.webp">
        <img title="My goodness, what on earth have they done to you, Pikachu?!" alt="An awful reproduction of the original screen lens which features Pikachu with a wildly off-model, massive mouth" src="{{ site.dropbox }}/{{ page.slug }}/big-lips.jpg">
    </picture>
    <img title="Hey Pikachu, got your nose!" alt="An awful reproduction of the original screen lens where Pikachu's nose is inexplicably missing" src="{{ site.dropbox }}/{{ page.slug }}/no-nose.jpg">
    <figcaption>Utter trash. I refuse to link to the listings to not further boost the seller’s placement in search results. Always exercise caution when it comes to unofficial reproductions.</figcaption>
</figure>

However, amongst this cesspool I managed to find a reproduction that was not only faithfully done, but on glass! A pleasant surprise, since the majority of the listings found in my search were plastic, just like the original part. The lens isn't perfect—reproductions rarely are; Togepi's line stroke is *slightly* lighter than the original, and two of the tiny leftmost shapes on Togepi's egg pattern in the original are missing (the single biggest mistake of the reproduction, in my opinion). With that said, this particular mistake I'm able to tolerate, helped in part because the color accuracy on the reproduction is incredible, even *fixing* Pikachu's curiously off-model neon yellow featured on the original to better match Pikachu's actual hue. On the off-chance anyone else is in the market for a reproduction of the Pokémon Yellow Edition screen lens, [Collector Land Gaming Supplies](https://www.ebay.com/str/collectorlandgamingsupplies?_trksid=p4429486.m3561.l161211)' listing [here](https://www.ebay.com/itm/314035967606?var=612710570170) is overall excellent and the best available reproduction available today.

With the cleaning and restoration complete, it was finally time to reassemble. Not too shabby at all!

<figure class="edge-to-edge array duo shadow">
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/cleaned-shell.webp">
        <img title="Cleaned up nicely!" alt="My Pokémon Yellow Edition Game Boy Color fully reassembled, cleaned, and sporting a new screen lens." src="{{ site.dropbox }}/{{ page.slug }}/cleaned-shell.jpg">
    </picture>
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/{{ page.slug }}/new-glass-screen-lens.webp">
        <img title="Pikachu’s never looked better on this unit" alt="A close-up on the new glass screen lens, showcasing Pikachu’s corrected colors." src="{{ site.dropbox }}/{{ page.slug }}/new-glass-screen-lens.jpg">
    </picture>
    <figcaption>All cleaned, lightly refurbished, and reassembled. And the <kbd class="b">B</kbd> button feels great, again!</figcaption>
</figure>

Despite the cleaning and restoration both remaining relatively surface-level and light in comparison to some of the insane projects Odd Tinkering and other creatives do on their channels, I still learned a lot from the process and happily regard it a tremendous success. It's been a delight having an excuse to revisit old favorites like *The Legend of Zelda* and *Pokémon* again on the original hardware, but it's surprisingly been just as much fun (if not more) discovering other classics like *For the Frog the Bell Tolls* and *Alice in Wonderland*[^yes-really]. I'm not stopping at old games, either; there's [a package](https://incube8games.com/products/infinity-gbc) arriving next month from a studio called [incube8](https://incube8games.com) that's developing and publishing *brand new* Game Boy Color games, and it will be my first truly new Game Boy Color game in nearly 25 years. And there remains a [thriving homebrew community](https://itch.io/games/tag-gameboy) where I've yet to even scratch the surface.

But best of all, when I want to play a game, I just put it in and play: no Internet, no updates. When I run out of power, I swap the batteries. If I don't have any rechargeable or alkaline spares with me, I can snag a pair of AA's from anywhere for cheap and get 30+ hours of play. If something inside fails, I know I can take it apart with a few screws and fix it. When I travel, I'm forced to be an active participant in my own enjoyment and to think critically about what games I want to bring with, so the analysis paralysis of having everything, everywhere, always, is gone. If I lose or irreversibly break the unit, I can just get another one; there's no DRM, device "checkouts", or other faff which would lock me out of my own library, all my games would work just the same with whatever new unit I get. The unit does *one thing*, and that's play the games I own and put into it. It doesn't need the Internet, it doesn't need updates, and there's not a god damn LLM in sight.

It's good to be back.

-----

[^yes-really]: Yes, really. I've been infatuated with Disney's *Alice in Wonderland* for as long as I can remember, and the team at [Digital Eclipse](https://en.wikipedia.org/wiki/Digital_Eclipse) did a lovely job bringing that movie's innate charm to life on the GBC. It featured shockingly great art direction and gameplay variety, though I will admit the music and sound design were a little weak.

*[AI]: Artificial Intelligence
*[DLC]: Downloadable Content
*[DRM]: Digital Rights Management
*[GBC]: Game Boy Color
*[IPS]: In-Plan Switching
*[LCD]: Liquid-Crystal Display
*[LLM]: Large Language Model
*[OLED]: Organic Light-Emitting Diode
*[SMC]: Surface Mount Capacitor
*[TFT]: Thin-Film-Transistor

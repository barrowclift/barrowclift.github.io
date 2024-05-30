This is a small web app to establish a virtual Development Card deck for you and friends or family to use while playing a game of "Settlers of Catan" remotely. It's as simple as can be; only one game can run at any given time for a given instance and anyone with the password you (the admin) set in advance may join.

This light app supports both light mode...

<div class="inline">
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/projects/code/development-card-simulator/light-screenshot.webp">
        <img type="image/png" src="{{ site.dropbox }}/projects/code/development-card-simulator/light-screenshot.png">
    </picture>
</div>

And dark mode (controlled by your system's theme).

<div class="inline">
    <picture>
        <source type="image/webp" srcset="{{ site.dropbox }}/projects/code/development-card-simulator/dark-screenshot.webp">
        <img type="image/png" src="{{ site.dropbox }}/projects/code/development-card-simulator/dark-screenshot.png">
    </picture>
</div>

<p style="text-align:center;">
    <a href="https://github.com/barrowclift/development-card-simulator" style="padding-left:2em;padding-right:2em;text-align:left;width:auto;text-decoration:none;" class="button">Clone On Github</a>
</p>

-----

### Why a virtual, shared development card deck? Why not let everyone use their own decks?

Development cards are already [fairly powerful](https://boardgamegeek.com/thread/151481/he-who-has-development-cards-wins) for "real" in-person Catan games, but having each player use their own deck for remote games has two critical issues:

* It radically throws off the Development Card deck balance
* The state of unplayed and played Development Cards for other players is no longer accessible public knowledge

For example, let's focus on the 5 Victory Point cards in every standard 25 card Development deck; For "real" games, that puts a player sitting at a solid 20% chance of drawing a Victory Point as their their first development card. For each subsequent draw done by yourself or other players, that chance will fluctuate, either going up (if cards other than Victory Points are drawn) or down (if the remaining Victory Points are getting drawn).

However, for remote games, those odds don't fluctuate with other players' draws, *only yours*. So say three other players draw development cards prior to you, and each of them were extraordinarily lucky to draw a Victory Point. For "real" games, that means you'd only have a 9.09% chance of drawing one of the remaining Victory Points, but for remote games that chance is still the default (20%) because nobody has yet drawn from your deck.

[Others have tried addressing this](https://www.reddit.com/r/Catan/comments/l9571v/remote_play/glg93wk/) by choosing a player's deck as the "real" one and having them close their eyes, draw, and hold it up to the camera when another player builds one, but that doesn't address the not knowing the state of unplayed and played development cards for other players. You either need to write it down yourself or ask occasionally, not ideal.

This projects sets out to provide a centralized, friendly website that addresses both of those critical issues in remote Catan play.
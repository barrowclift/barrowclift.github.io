---
layout: parallax
title: "The Largest Video Game Ever Made"

design:
    force-dark-mode: true
    oled: true
    browser-theme-color-dark: "#0D0D0D"

parallax:
    background:
        dark-color: "hsl(0, 0%, 0%)"
    foreground:
        dark:
            background-color: "hsl(0, 0%, 4%)"
            foreground-color: "hsl(0, 0%, 100%)"
    banner-video: "projects/code/largest-video-game-ever/tetris"
    banner-poster: "projects/code/largest-video-game-ever/tetris-poster.jpg"
    banner-hover-text: "Video of Marc playing tetris on the Cira Center skyscraper"

menubar:
    dark:
        foreground-color: "hsla(0, 0%, 100%, 0.6)"
---

<style>
    .news-logo {
        height: 4.9vw;
        max-height: 22px;
        margin: 1rem 1vw;
        margin-top: 0.275em;
        margin-bottom: 0;
    }
    .press-list a {
        display: inline-block;
        margin-top: 1em;
        margin-bottom: 0;
    }
    .press-list {
        padding: 0;
    }
    @media (min-width: 700px) {
        .news-logo {
            max-height: 32px;
            margin-right: 0.75rem;
            margin-left: 0.75rem;
            margin-top: 0.3em;
        }
    }
    @media (min-width: 900px) {
        .news-logo {
            min-height: 35px;
            margin-right: 1.125rem;
            margin-left: 1.125rem;
        }
        .press-list {
            text-align: center;
            margin: auto;
        }
    }
</style>

# The Largest Video Game Ever

On April 19th, 2013 nearly one hundred people gathered outside the Philadelphia Art Museum to await the anticipated kick-off event for [Philly Tech Week](http://www.phillytechweek.com/). Their eyes focused on Philadelphia's beautiful Cira Center, a building painted with hundreds of brilliant LED lights that in the past has shown simple images or animations in the night. On that night, however, they were waiting to witness (and even play!) the largest video game of all time on the building's north face.

The event was the work of Drexel University's [Dr. Frank Lee](http://www.pages.drexel.edu/~fjl24/), a game design professor who had a vision of Tetris blocks falling on Cira Center's broad north side. He then spent the next five years pitching the idea up [Brandywine Reality Trust](http://www.brandywinerealty.com/)'s corporate ladder (Cira Center's owners) in an attempt to make his vision a reality. A few months before Philly Tech Week began, he finally received the required approval and immediately assembled a team of Drexel colleagues and students to make his dream a reality. I had the opportunity and privilege of being a part of that team.

Those months were a frantic scramble. Designing the games themselves was trivial, but learning how the existing system worked and building the necessary engine for it to perform like a computer display proved to be a challenging process. It required a great deal of collaboration with Brandywine Reality Trust every step of the way, for everything from frequent building access to fixing burnt out and incorrectly mapped LEDs. Thanks to both party's efforts, the necessary piping was completed just in time, leaving the crowd of spectators to kick off 2013's Philly Tech Week with Pong on the Cira Center's grand LED matrix "screen" from the historic Philadelphia Art Museum.

## The Team

* [Dr. Frank Lee](http://www.pages.drexel.edu/~fjl24/) - Project lead
* [Dr. Santiago Ontanon](https://sites.google.com/site/santiagoontanonvillar/) - Pong, various programming support
* [Gaylord Holder](https://www.cs.drexel.edu/~gholder/) - Networking, LED map parser, various systems support
* [Marc Barrowclift](/about) - Display manager, emulator, and Tetris

## Press

<video class="shadow" controls preload="none" poster="{{ site.dropbox }}/projects/code/largest-video-game-ever/news-coverage-poster.jpg" alt="News segment featuring a brief interview with team">
    <source src="{{ site.dropbox }}/projects/code/largest-video-game-ever/news-coverage.mp4" type="video/mp4">
    <source src="{{ site.dropbox }}/projects/code/largest-video-game-ever/news-coverage.webm" type="video/webm">
    <source src="{{ site.dropbox }}/projects/code/largest-video-game-ever/news-coverage.ogv" type="video/ogg">
    [HTML5 video tag not supported by your browser]
</video>

<div class="press-list">
    <a href="http://arstechnica.com/gaming/2013/04/selling-coding-and-playing-the-worlds-largest-videogame/">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/ars-technica.png" alt="Ars Technica" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/ars-technica-white.png" alt="Ars Technica" />
    </a>
    <a href="http://www.fastcolabs.com/3008594/worlds-biggest-game-pong-heres-how-they-built-it?partner=rss">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/fast-company.png" alt="Fast Company" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/fast-company-white.png" alt="Fast Company" />
    </a>
    <a href="http://www.myfoxphilly.com/story/21895571/professor-planning-pong-game-on-cira-building">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/myfoxphilly.png" alt="MyFoxPhilly.com" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/myfoxphilly-white.png" alt="MyFoxPhilly.com" />
    </a>
    <a href="http://technical.ly/philly/2013/04/03/how-frank-lee-got-pong-on-the-cira-centre/?utm_source=feedburner&utm_medium=feed&utm_campaign=Feed%3A+TechnicallyPhilly+(Technically+Philly)">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/technically-philly.png" alt="Technically" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/technically-philly-white.png" alt="Technically" />
    </a>
    <a href="http://drexel.edu/now/news-media/releases/archive/2013/November/CiraPongGuinness/">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/drexel-now.png" alt="Drexel NOW" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/drexel-now-white.png" alt="Drexel NOW" />
    </a>
    <a href="http://articles.philly.com/2013-04-05/news/38309615_1_drexel-university-cira-centre-led-lights">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/philly.com.png" alt="philly.com" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/philly.com-white.png" alt="philly.com" />
    </a>
    <a href="http://landing.newsinc.com/shared/video.html?freewheel=91048&sitesection=WPHL_nws_loc_sec&VID=24746524">
        <img class="news-logo show-when-light" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/phl17.png" alt="My PHL 17" />
        <img class="news-logo show-when-dark" src="{{ site.dropbox }}/projects/code/largest-video-game-ever/phl17-white.png" alt="My PHL 17" />
    </a>
</div>
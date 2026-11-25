---
title: 'Cumulus: A Summer Sky for Omarchy'
description: 'A closer look at the Cumulus theme: painted-sky blue, cloud cream and poppy orange, four wallpapers and animated boot intros.'
pubDate: 'Nov 25 2026'
heroImage: 'cumulus.webp'
tags: ['linux', 'omarchy', 'desktop', 'themes']
---

Most Omarchy themes are variations on the same dark gray. [Cumulus](https://github.com/erikrjohansson/omarchy-cumulus-theme) by Erik Johansson goes somewhere else entirely: a painted summer sky behind towering clouds. It's a dark theme, but it doesn't feel like a terminal. It feels like a place.

## The palette

Windows, menus and notifications use a deep sky blue (`#193e58`) with warm cloud-cream text (`#eee2cc`) and a pale blue accent (`#77baf3`). Poppy orange (`#fba35e`) shows up where your attention is needed: bar alerts, active items and the notification countdown.

The terminal colors are pulled from the same world — sky, cloud, meadow green and poppy orange — so switching from a browser window to Neovim doesn't feel like switching to a different machine. There are blue Yaru folder icons too, which sounds like a small thing until you see the file manager with them.

## Install it

For Omarchy 4 with Omarchy Shell:

```bash
omarchy theme install https://github.com/erikrjohansson/omarchy-cumulus-theme
```

Updates are `omarchy theme update`, and if it isn't for you, `omarchy theme remove cumulus`. That's the whole commitment.

## Switching backgrounds: keys or CLI

The fast way is `Super + Ctrl + W` (or `Super + Ctrl + Space`), which opens the background picker for the current theme. You'll find the same picker under Style → Background in the Omarchy menu (`Super + Space`). Press `Super + K` if you ever want a cheat sheet of all the hotkeys.

If you prefer the command line — or you're having an AI agent tweak your desktop — the `omarchy theme bg` commands do the same job:

| What you want | Command |
| --- | --- |
| Cycle to the next wallpaper | `omarchy theme bg next` |
| See which one is active | `omarchy theme bg current` |
| Set a specific image or video | `omarchy theme bg set <path-to-media>` |
| Open the folder for extra backgrounds | `omarchy theme bg install` |
| Toggle the animated boot intros | `omarchy theme bg intro toggle` |

The same applies to themes themselves: `Super + Ctrl + T` opens the theme picker, while `omarchy theme list` and `omarchy theme set <name>` work from a terminal. Run plain `omarchy` to see everything else the CLI can do.

## Four skies, four stories

There are four wallpapers at 6688 × 3764: **cloud town** (the default), **cottage**, **airship** and **lighthouse**. Each one has its own little animated boot intro — the cloud opens to reveal the town, clouds build up behind the cottage, the airship flies in, and the cloud rises from the sea. They play on Omarchy 4.5 and later; pick your favorite under Style → Unlock in the Omarchy menu.

## Why I like it

The best themes have a point of view, and Cumulus has one you can feel in every corner of the desktop. It's not just a wallpaper with some colors bolted on: `colors.toml` and `shell.toml` carry the same decisions through the bar, launcher, menus, lock screen, notifications and terminal. Even the window borders shift from a bright top edge to a hazy horizon blue.

If you're bored of your setup but don't want to rebuild it, this is the cheap thrill you're looking for. One command to install, one command to take it back.

Grab it on [GitHub](https://github.com/erikrjohansson/omarchy-cumulus-theme) and let the clouds in. ☁️

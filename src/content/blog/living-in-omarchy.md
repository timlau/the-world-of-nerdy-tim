---
title: 'Living in Omarchy: One Year of a Very Opinionated Desktop'
description: 'What stuck after a year of running Omarchy on Fedora, and the handful of tweaks I actually kept.'
pubDate: 'Nov 12 2026'
---

I have a bad habit of rebuilding my desktop setup every few months. New distro, new bar, new set
of keybindings I will forget by Thursday. Omarchy is the first setup that survived a full year
mostly intact.

## What I like

The appeal is not that it does anything magical. It is that someone else already made the
decisions. Tiling layout, a sensible bar, a theme system that applies everywhere, and keybindings
that are documented in one place.

- **Themes are global.** One command changes terminals, editor, bar, and notifications together.
- **The defaults are good.** I stopped tweaking because there was nothing obviously broken.
- **It stays out of the way.** Config is plain text in `~/.config`, not a custom DSL.

## What I changed

Not much, honestly. I remapped a few keys, added a couple of window rules for apps that refuse to
behave, and switched the terminal font. That is the whole list.

```ini
# ~/.config/hypr/hyprland.conf (excerpt)
windowrulev2 = float, class:^(pavucontrol)$
windowrulev2 = size 900 600, class:^(pavucontrol)$
```

## The takeaway

The best desktop environment is the one you stop thinking about. For me that turned out to be the
one where the interesting decisions were already made, and the remaining ones are easy to change.

If you keep rebuilding your setup every season, try letting someone else's opinions run for a
year. You might accidentally get some work done.

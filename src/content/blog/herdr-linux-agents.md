---
title: 'Herdr: Coding Agents That Outlive the Window'
description: 'A Linux-first look at Herdr: one-line install, herdr-core terminals, SSH machines, and a window your agent can rewrite.'
pubDate: 'Nov 26 2026'
heroImage: 'herdr.webp'
tags: ['linux', 'omarchy', 'agents', 'desktop']
---

[Herdr](https://herdr.dev/) is a desktop app for running coding agents, but calling it "a GUI for Claude Code" misses the interesting part. Your agents live in a small server called **herdr-core** on your machine. The window is just one way to look at them — and the window itself is made of plain files your agent can change. It runs on macOS and Windows too, but the Linux install is unusually well behaved, so it fits right into a keyboard-driven setup like Omarchy.

## One line in the terminal

```bash
curl -fsSL https://releases.herdr.dev/app/install.sh | sh
```

That's the whole install. There are builds for x86_64 and arm64, and the script verifies a SHA-256 checksum before unpacking anything. On Linux it puts the app in `~/.local/share/herdr-app`, drops a `herdr-app` launcher in `~/.local/bin`, and installs a `.desktop` entry and icon so Herdr shows up in your app menu. It respects `XDG_DATA_HOME` if you move your data elsewhere, and even pokes the KDE icon cache so Plasma doesn't show a blank icon after a fresh install. The launcher declares `StartupWMClass=herdr-app`, which is handy when you want window rules for it in Hyprland.

The app updates itself after that. If `~/.local/bin` isn't on your `PATH`, add it — that's also where `hc`, the herdr-core CLI, ends up.

If you only want the runtime for a headless box, install the core on its own:

```bash
curl -fsSL https://releases.herdr.dev/core/install.sh | sh
```

## The agents don't live in the window

This is the part that sold me. herdr-core runs every agent in a terminal that belongs to the *server*, not to a window. Close Herdr, update it, or let it crash: your agents keep working, and you attach again where you left off.

```bash
hc run cargo test              # run and wait, like a shell
hc run --bg --name web bun dev # start it in the background
hc ls                          # what's running
hc attach web                  # take it over; ctrl+\ detaches
```

A **space** is a repo, and a **tab** is a task inside it. Status comes from the program itself through [OSC 7501](https://herdr.dev/core/), an open protocol for "working / done / needs you" — no screen scraping and no hardcoded list of agents. Even your own script can speak it with one line:

```bash
printf '\e]7501;state=blocked:app=my-agent\e\\'
```

Claude Code and Codex report their state this way; real terminals mean any other agent works too, it just won't have a status until it says one.

## Every machine in one sidebar

Add any box you can reach over SSH — a server, a VM, a cloud sandbox, the workstation that never sleeps:

```bash
hc machine add box@my-server
hc run --on my-server --bg claude
hc ls                # local and remote terminals together
```

Tailscale works fine here. Herdr connects straight to your machines: no account, and terminals don't pass through Herdr's servers. Your laptop can sleep while the agents on the server keep going.

Agents can also hand work to other agents and get the result back without you playing messenger. A parent starts a reviewer with `hc run --bg --name review codex "review src/x.rs. Done: hc send $HC_TERMINAL_ID"`, can steer it with `hc send review "also check the tests"`, and reads the report with `hc read review`. The reply lands in the parent agent's input when the helper finishes.

## A window you can prompt

Herdr keeps its layout, tabs, keys and theme as ordinary files:

```text
~/.config/herdr-app/
├── AGENTS.md        # what an agent is allowed to change
├── settings.json
├── keys.json
├── layouts/
├── mods/
└── themes/
```

Point your agent at `AGENTS.md` and ask. "Make me a board with columns for needs you, working and done." "Put a timer on each tab." "Use a light theme and Geist Mono at 15." For built-in parts like the tab bar, the agent clones the file before editing it, so Herdr's own stays untouched.

## No two Herdrs look alike

The picture above is just one possible Herdr, and that's the point. A layout is a JSON file describing what goes where; mods are small JavaScript files that add behavior; themes are files too. None of that touches the agents running underneath — it only changes how you see and steer them. Two people can install the same app and end up with completely different windows: a kanban board, a Star Trek LCARS console, a pixel-art office where blocked agents raise their hands, or a quiet single-pane setup with a different palette.

The [gallery](https://herdr.dev/gallery/) has hundreds of community layouts and mods to borrow, and you can switch between your own layouts with `ctrl-shift-l`. To grab one, give your agent a prompt like:

```text
Read ~/.config/herdr-app/AGENTS.md, then add this layout: herdr.dev/layouts/herdrdev/pasture
```

Your agent reads every file before adding it next to yours. On Linux, that means a new look is just more plain text under `~/.config`: it lives in your dotfile backups, can be copied to another machine, and shows up as a diff you can review.

That's the whole appeal: no opaque GUI settings database. The app, herdr-core and [Herdr TUI](https://github.com/herdrdev/herdr) are all Apache 2.0, so you can read the code or build your own client on top of `hc`. There are phone apps as well, if you want to answer an agent from the bus.

## Worth a look?

Two honest caveats: this is still early software, and asking an agent to rewrite your window means reviewing what it actually changed. Community layouts and mods aren't reviewed by Herdr, so let your agent read the files before adding them. I'd also read any `curl | sh` script before running it, Herdr's included.

But the design is refreshingly Unix-shaped: a small server that owns the processes, plain-text config, SSH as the network layer, and a GUI that is optional rather than authoritative. If you're already running agents on Linux and tired of babysitting terminal panes, [Herdr](https://herdr.dev/download/) is worth an afternoon.

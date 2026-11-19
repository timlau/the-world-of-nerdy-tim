---
title: 'Packaging Audio Plugins for Fedora Without Losing Your Mind'
description: 'A few hard-won notes on building VST3 and LV2 plugins as proper RPM packages.'
pubDate: 'Oct 28 2026'
---

Audio plugins are an awkward packaging target. They are shared libraries, but the host loads
them at runtime, they have their own search paths, and half of them bundle a copy of JUCE that
you absolutely should not install system-wide.

Here is the short version of what I have learned building RPM packages for them.

## Pick one bundle

Plugins usually ship as:

- **VST3** — a directory under `/usr/lib64/vst3/`
- **LV2** — a directory under `/usr/lib64/lv2/`
- **CLAP** — a `.clap` file under `/usr/lib64/clap/`

A single package can provide more than one, but do not try to also ship a standalone app, a
preset pack, and a documentation bundle in the same spec if you can avoid it. Split them.

## Do not bundle libraries you can depend on

The temptation is to vendor everything. Resist it. System libraries get security updates; your
vendored copy does not.

```spec
BuildRequires:  cmake
BuildRequires:  gcc-c++
BuildRequires:  libcurl-devel
BuildRequires:  alsa-lib-devel
```

If you do have to use a bundled dependency, document why in the spec file. Future you will
appreciate the note.

## Test with a real host

`ninja install` succeeding tells you nothing about whether the plugin loads. Test with at least
two hosts (a DAW and a simple validator) before calling it done. A plugin that crashes
`pluginval` will crash someone's session at 2 a.m.

## The unglamorous part

Most of the work is not DSP. It is file paths, desktop files, license handling, and making sure
the uninstall actually removes the thing. That is fine. Packaging is the difference between
"works on my machine" and "works on somebody else's machine", and that is worth the effort.

---
title: 'A Tiny GTK4 App in Zig: First Impressions'
description: 'What it feels like to build a small native desktop app with Zig and GObject, and where the rough edges are.'
pubDate: 'Oct 05 2026'
---

I have been using Zig for small command-line tools for a while. This month I tried building a
real GUI with it: GTK4, Adwaita, the whole thing. Here is the honest version.

## The good

Zig's build system is refreshingly simple once it clicks. Cross-compiling is not a special
project; it is a flag. And `comptime` makes generating bindings far less painful than the
equivalent C macros.

```zig
const std = @import("std");
const gtk = @import("gtk");

pub fn main() !void {
    const app = gtk.Application.new("io.github.timlau.demo", .default_flags);
    defer app.unref();
    _ = app.run();
}
```

That is not a working app yet, but it is close, and it compiles in under a second.

## The rough edges

GObject bindings are the hard part. The C API is designed around macros, reference counting, and
signal callbacks, and translating that into something that feels natural in Zig takes work.
Documentation is thin, so you spend a lot of time reading generated bindings and C headers side
by side.

The other issue is memory. Zig gives you the tools to be precise, but GTK expects you to follow
its ownership rules. Mixing the two mental models is where bugs hide.

## Would I do it again?

Yes. The result is a single small binary with no runtime to install, startup is instant, and the
app feels like it belongs on the desktop. For a small utility, that trade-off is excellent.

For anything bigger, I would probably still reach for Python and GTK, or a web frontend. But for
tiny tools, Zig has earned a spot in the toolbox.

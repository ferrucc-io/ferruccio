---
title: "Fix Shift+Return in Ghostty Terminal"
date: 2026-01-01T12:00:00+01:00
draft: false
---

If you're using [Ghostty](https://ghostty.org) and pressing Shift+Return gives you `[27;2;13~` instead of a newline, here's the fix.

By default, Ghostty sends an escape sequence for Shift+Return. To make it behave like a normal newline, add this to your config:

```
keybind = shift+enter=text:\n
```

Or just run this one-liner:

```bash
echo 'keybind = shift+enter=text:\n' >> ~/.config/ghostty/config
```

Your config file is at `~/.config/ghostty/config` on macOS.

After saving, restart Ghostty or reload with Cmd+Shift+, and you're good to go.

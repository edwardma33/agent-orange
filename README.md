# Agent Orange

A near-black developer theme with orange focus and quiet semantic color. Agent Orange keeps the interface out of the way during long sessions while preserving clear signals for changes, warnings, and errors.

This repository contains the theme ports and the website that presents them. It is designed to be installed directly from GitHub.

## Install

### Neovim

Agent Orange works with Neovim's built-in package manager. Add this to `init.lua`:

```lua
vim.pack.add({
  "https://github.com/edwardma33/agent-orange",
})

vim.cmd.colorscheme("agent_orange")
```

For a reproducible release, pin a semver tag:

```lua
vim.pack.add({
  {
    src = "https://github.com/edwardma33/agent-orange",
    version = "v0.1.0",
  },
})
```

Use `vim.cmd.colorscheme("agent_orange_light")` for the light variant. The root `colors/agent_orange.lua` and `colors/agent_orange_light.lua` files are package-manager entrypoints; the canonical colorscheme source remains at `themes/nvim/agent_orange.lua`.

To follow macOS appearance when you reload your config, choose the colorscheme after reading `AppleInterfaceStyle`:

```lua
local handle = io.popen("defaults read -g AppleInterfaceStyle 2>/dev/null")
local appearance = handle and handle:read("*a") or ""
if handle then handle:close() end

vim.cmd.colorscheme(appearance:match("Dark") and "agent_orange" or "agent_orange_light")
```

### ShadCN

The public repository is also a ShadCN GitHub registry. In an initialized ShadCN project, install the theme with:

```bash
npx shadcn@latest add edwardma33/agent-orange/agent-orange
```

Add `#v0.1.0` after the item name to install a tagged version. The registry applies the Agent Orange CSS variables in both light and dark blocks. The standalone CSS source is available at `themes/shadcn/agent_orange.css`.

### Warp

Clone the repository into Warp's custom themes directory:

```bash
mkdir -p ~/.warp/themes
git clone https://github.com/edwardma33/agent-orange.git ~/.warp/themes/agent-orange
```

Restart Warp or open the theme picker, then choose **Agent Orange** or **Agent Orange Light**. Warp discovers custom YAML themes in subdirectories; the theme files are at `themes/warp/agent_orange.yml` and `themes/warp/agent_orange_light.yml`.

### Expo / React Native

Copy `themes/expo/agent-orange.js` into your app’s theme directory, then import its shared colors or ready-to-use styles:

```tsx
import { colors, semanticColors, styles } from "./theme/agent-orange";

// Example: <View style={styles.surface} />
//          <Text style={{ color: semanticColors.success.foreground }} />
```

## Develop

```bash
npm install
npm run dev
```

Run the distribution checks before publishing:

```bash
npm run themes:check
npm run themes:nvim:check
npm run registry:check
npm run lint
```

The production website can be verified with `npm run build`. It uses `next/font/google`, so the build requires access to Google Fonts unless those fonts are self-hosted.

## Releases

Use semver Git tags (for example, `v0.1.0`) when publishing stable theme versions. Both Neovim's `vim.pack` and ShadCN GitHub registry installs can target those tags. Before making a release, run the checks above, then commit and push the tag.

## Theme sources

- `themes/agent_orange.tokens.json` — shared palette contract
- `themes/warp/agent_orange.yml` — Warp terminal theme
- `themes/warp/agent_orange_light.yml` — Warp light terminal theme
- `themes/nvim/agent_orange.lua` — Neovim colorscheme implementation
- `themes/shadcn/agent_orange.css` — standalone ShadCN tokens
- `themes/expo/agent-orange.js` — Expo and React Native StyleSheet

Licensed under the [MIT License](LICENSE).

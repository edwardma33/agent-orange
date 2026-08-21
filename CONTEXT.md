# Agent Orange theme context

## Purpose

Agent Orange is a family of developer themes for people who want their workspace to recede while retaining clear operational signals. It started with a Warp terminal theme and is being extended to editor and website surfaces. The visual reference is the dark, restrained product UI shown in the original Claude/Superset-inspired screenshot: nearly black panels, soft gray text, and a small amount of deliberate orange.

The intended feeling is focused, technical, calm, and slightly industrial. It should feel like an excellent dark interface for long sessions, not a neon cyberpunk theme or a brown retro terminal.

## Visual system

- Base: near-black `#111111`; surfaces may rise slightly to `#161616`; borders and cursor-line treatments use quiet charcoal grays.
- Default text: soft near-white `#e8e8e8`, never stark pure white. Secondary text and comments recede into gray.
- Primary accent: orange `#ff6b00`. Use it sparingly for focus, active navigation, cursor/current-line emphasis, important keywords, and calls to action.
- Semantic colors: mint green is success/addition, muted rose is error/removal, amber is warning/search/constant emphasis, and cool blue/cyan/purple provide code differentiation.
- Contrast: hierarchy comes first from value (black, gray, soft white); color is a secondary semantic signal. Large areas should remain neutral.

`themes/agent_orange.tokens.json` is the canonical palette contract. When adding another platform, keep the base, foreground, orange accent, and semantic roles aligned with it; `themes/warp/agent_orange.yml` remains the ANSI reference implementation.

## Theme behavior

- Keep backgrounds neutral and opaque by default. Avoid gradients, glow, textures, and large colored panels.
- Preserve familiar semantic meanings: green for successful/added states, rose/red for errors or removals, amber for warnings, and orange for the active/focused brand signal.
- In code themes, distinguish member/property names from modules or package names. Agent Orange uses soft purple for members so expressions such as `boilerplate.MainGoFileData` do not collapse into one flat gray run.
- Prefer muted, readable syntax colors over broad saturation. Bright variants are reserved for ANSI bright colors or genuinely important emphasis.
- Use `agent_orange` as the cross-platform theme identifier. Follow each platform's native file conventions, such as Warp YAML and Neovim `colors/agent_orange.lua`.

## Website copy direction

Describe the theme in plain, precise language. Lead with its visual behavior: "near-black," "orange focus," "muted semantic color," and "made for long sessions." Emphasize clarity and signal over visual spectacle.

Useful phrases:

- “A near-black developer theme with orange focus and quiet semantic color.”
- “Built to keep the interface out of the way while making changes, warnings, and errors easy to read.”
- “Monochrome at rest; expressive when the work needs a signal.”
- “Soft contrast for long sessions, with color reserved for meaning.”

Avoid calling it neon, cyberpunk, retro, cozy, or aggressively orange. Do not use military or chemical-defoliant references in product copy; the name is treated as a visual identity, while the copy should stay focused on the theme's design and use.

## Current artifacts

- `themes/warp/agent_orange.yml` is the canonical Warp theme and ANSI palette.
- `themes/nvim/agent_orange.lua` is the Neovim colorscheme implementation.
- `themes/shadcn/agent_orange.css` provides standard Shadcn tokens plus Agent Orange semantic status tokens.
- `themes/expo/agent-orange.js` provides reusable React Native colors, status colors, and baseline `StyleSheet` rules.
- `themes/chatgpt/agent_orange_dark.txt` and `themes/chatgpt/agent_orange_light.txt` are import strings for the unified ChatGPT desktop app, covering Chat, Work, and Codex.
- `themes/agent_orange.tokens.json` is the shared palette contract; run `npm run themes:check` after changing it.

When adding a new platform theme or website description, update this document only if the shared visual language or naming rules change.

# Agent Orange theme tokens

`agent_orange.tokens.json` is the shared palette contract for every port. It keeps the base surface, foreground, orange focus, and semantic roles consistent while allowing a platform to express them through its native format.

| Role | Color | Use |
| --- | --- | --- |
| Base / surface | `#111111` / `#161616` | Resting workspace and raised UI |
| Focus | `#ff6b00` | Active state, cursor, current item, primary intent |
| Success | `#44c995` | Additions, success, valid state |
| Warning | `#e7b34a` | Search, attention, constants, warnings |
| Danger | `#d46a78` | Errors, removals, destructive state |
| Info | `#779ecb` | Functions, informational diagnostics |
| Member | `#c5a1e8` | Properties, fields, member access |
| Type | `#80d1ca` | Types, interfaces, type-like constructs |

Run `npm run themes:check` after changing a shared value. It verifies that the Warp, Neovim, ShadCN, Expo, and GitHub-installable ShadCN registry forms still contain their required shared values.

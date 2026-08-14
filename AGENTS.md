<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Agent Orange theme rules

- Before editing any theme port, read `CONTEXT.md` and `themes/agent_orange.tokens.json`.
- Treat `themes/agent_orange.tokens.json` as the shared palette authority. Keep ports aligned with it and run `npm run themes:check` after changing any shared color or semantic role.
- Preserve the visual contract: near-black neutral surfaces, soft white text, and `#ff6b00` reserved for focus and primary intent. Use green for success/additions, amber for warnings, rose for errors/removals, blue/cyan for informational and type roles, and purple for members/properties.
- Do not introduce gradients, glow, textures, or large colored panels into theme surfaces. Color should communicate state, not decorate idle UI.
- Keep the Neovim port’s Tree-sitter/LSP, diagnostics, GitSigns, Telescope, and `nvim-cmp` highlight groups semantically aligned when expanding syntax or plugin coverage.
- Keep the Shadcn port compatible with standard Shadcn variables. Its `--success`, `--warning`, `--danger`, and `--info` tokens are intentional extensions for application status UI.
- Keep the Expo port as a static, branded dark React Native `StyleSheet` JavaScript module. Preserve its `colors` and `semanticColors` exports so consuming apps can use palette roles without copying raw values.

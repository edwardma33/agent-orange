---
name: agent-orange
description: Build product UI, web pages, prototypes, and developer-theme ports in the Agent Orange visual system. Use when applying Agent Orange to an existing Shadcn installation or other interface, prototyping a new page, extending an existing port, adding a platform port, or creating a theme where no native port exists.
---

# Agent Orange

Apply Agent Orange as a complete interface language, not merely a palette. Make product UI feel like the Agent Orange site: composed, technical, near-black at rest, hard-edged, typographically deliberate, and expressive only when the work needs a signal.

## Start with the shared contract

Before editing, read these files in order:

- `CONTEXT.md`
- `themes/agent_orange.tokens.json`
- The closest existing implementation in `themes/`, when the task involves a port

Treat `themes/agent_orange.tokens.json` as the color authority. For an existing app, also inspect its current theme integration before changing styles. Do not introduce substitute brand colors or broaden orange beyond focus and primary intent.

## Build Agent Orange UI

Use this for a website, product screen, prototype, dashboard, or documentation surface that already has Agent Orange tokens available.

- Create an intentional, editorial composition: generous empty space, aligned content columns, a compact mono eyebrow, a large monospace display heading, and a quiet supporting paragraph. Prefer an asymmetric hero or a restrained two-column arrangement over a generic centered SaaS layout.
- Pair dense technical artifacts with calm copy. A bordered code window, configuration snippet, token readout, or status line can anchor a feature area; it must look functional, not decorative.
- Use square or visually hard corners. Avoid pills, soft cards, decorative rounding, oversized radii, gradients, glows, and texture.
- Use thin charcoal borders and neutral base/surface planes to create structure. Keep large areas near-black and opaque; hierarchy should come from value, whitespace, scale, and type before color.
- Set display headings in JetBrains Mono (`--font-heading`). Use Inter (`--font-sans`) for body copy. Use mono for labels, paths, metadata, controls, and code.
- Use tight heading tracking, readable body leading, and short, direct copy. Describe near-black surfaces, orange focus, quiet semantic color, and long-session clarity—not spectacle.
- Build controls as crisp rectangles. Reserve solid orange fills and orange focus treatment for the primary action or the currently active item.
- Map semantic roles consistently: green for success/additions; amber for warnings; rose for errors/removals; blue/cyan for information and types; purple for members/properties. Do not use semantic color as idle decoration.

Use the Agent Orange site as a visual reference, not a layout to copy. Preserve the same restraint, technical utility, and ratio of neutral space to color while making the composition serve the product's content.

## Build or extend a port

1. Check whether the target supports a native theme or color-scheme format. Read its current official documentation before writing the port.
2. If it does, add or update `themes/<platform>/` in that native format. Preserve the platform's conventions and include supported light and dark variants only when they can be implemented faithfully.
3. If it does not, implement the theme where the platform can consume it: a documented token module, component theme, or app-level stylesheet. State the installation or import path plainly.
4. Preserve native conventions while applying the shared semantic roles. Do not force website UI patterns into a native editor or terminal.

## Publish a new port

When the new artifact belongs in this repository, include it in the site:

1. Add a `ports` entry in `app/page.tsx` with the platform, category, concise description, source path, source link, and download route.
2. Add the artifact to `app/api/themes/[platform]/route.ts` with its content type and attachment filename. Do not invent light/dark controls for a single-file workflow artifact.
3. Use the same card layout and status semantics as the existing ports. Identify non-theme workflow artifacts honestly (for example, `Skill` or `Workflow`) rather than presenting them as an editor theme.
4. Update `CONTEXT.md` only when the shared visual language, naming contract, or supported-artifact inventory has changed.

## Verify

- Run the target platform's formatter, parser, or headless validation when available.
- Run `npm run themes:check` after changing shared tokens or a port that the checker covers.
- Run `npm run lint` and `npm run build` after changing the website or download route.
- Visually inspect the website at desktop and narrow widths. Confirm hard corners, typography, neutral surfaces, readable contrast, and sparse orange usage.
- Keep unrelated working-tree changes untouched.

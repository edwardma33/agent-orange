import { siteConfig } from "@/lib/site";

export type InstallStep = {
  title: string;
  description: string;
  code?: string;
};

export type Port = {
  slug: string;
  name: string;
  kind: string;
  description: string;
  introduction: string;
  filePath: string;
  format: string;
  pagePath: string;
  downloadPath?: string;
  sourceHref: string;
  logo?: string;
  modes: boolean;
  installCommand?: string;
  seoTitle: string;
  seoDescription: string;
  features: string[];
  installSteps: InstallStep[];
};

const githubUrl = siteConfig.githubUrl;

export const themePorts: Port[] = [
  {
    slug: "neovim",
    name: "Neovim",
    kind: "Editor",
    description:
      "A practical Neovim colorscheme for focused editing, diagnostics, diffs, and code.",
    introduction:
      "Agent Orange for Neovim is a near-black colorscheme built for long editing sessions. Orange marks focus, while diagnostics, diffs, types, and properties keep their own restrained semantic colors.",
    filePath: "agent_orange.lua",
    format: "Lua colorscheme",
    pagePath: "/themes/neovim",
    downloadPath: "/api/themes/nvim",
    sourceHref: `${githubUrl}/blob/main/themes/nvim/agent_orange.lua`,
    logo: "https://cdn.simpleicons.org/neovim/e8e8e8",
    modes: true,
    seoTitle: "Neovim Theme — Near-Black Lua Colorscheme",
    seoDescription:
      "Install Agent Orange, a near-black Neovim theme with orange focus, Tree-sitter and LSP highlights, diagnostics, GitSigns, Telescope, and light and dark modes.",
    features: [
      "Tree-sitter and LSP semantic highlights",
      "Diagnostics, diffs, GitSigns, and search states",
      "Telescope and nvim-cmp interface coverage",
      "Matching light and dark variants",
    ],
    installSteps: [
      {
        title: "Install with Neovim packages",
        description:
          "Add the repository with Neovim's built-in package manager, then select the dark colorscheme.",
        code: `vim.pack.add({
  "https://github.com/edwardma33/agent-orange",
})

vim.cmd.colorscheme("agent_orange")`,
      },
      {
        title: "Use the light variant",
        description:
          "The same Lua source exposes a warm light palette without changing the semantic color roles.",
        code: `vim.cmd.colorscheme("agent_orange_light")`,
      },
    ],
  },
  {
    slug: "warp",
    name: "Warp",
    kind: "Terminal",
    description:
      "A complete Warp terminal palette with restrained ANSI color and an orange cursor.",
    introduction:
      "Agent Orange for Warp keeps the terminal near-black at rest and reserves its brighter palette for commands, status, and ANSI output. The orange cursor makes the active point unmistakable without coloring the whole surface.",
    filePath: "agent_orange.yml",
    format: "YAML theme",
    pagePath: "/themes/warp",
    downloadPath: "/api/themes/warp",
    sourceHref: `${githubUrl}/blob/main/themes/warp/agent_orange.yml`,
    logo: "https://cdn.simpleicons.org/warp/e8e8e8",
    modes: true,
    seoTitle: "Warp Terminal Theme — Near-Black and Orange",
    seoDescription:
      "Install Agent Orange for Warp, a near-black terminal theme with an orange cursor, restrained ANSI colors, and matching light and dark variants.",
    features: [
      "Complete normal and bright ANSI palette",
      "Orange cursor and focus accent",
      "Neutral opaque terminal surfaces",
      "Matching light and dark YAML themes",
    ],
    installSteps: [
      {
        title: "Install as a custom Warp theme",
        description:
          "Clone the repository into Warp's custom theme directory, restart Warp, and select Agent Orange in the theme picker.",
        code: `mkdir -p ~/.warp/themes
git clone https://github.com/edwardma33/agent-orange.git ~/.warp/themes/agent-orange`,
      },
    ],
  },
  {
    slug: "shadcn",
    name: "Shadcn/UI",
    kind: "Interface",
    description:
      "Semantic Shadcn tokens tuned for warm light and near-black dark interfaces.",
    introduction:
      "Agent Orange for Shadcn/UI supplies standard Shadcn variables plus intentional status tokens for product interfaces. It keeps existing Shadcn components compatible while adding consistent success, warning, danger, and information roles.",
    filePath: "agent_orange.css",
    format: "CSS variables",
    pagePath: "/themes/shadcn",
    downloadPath: "/api/themes/shadcn",
    sourceHref: `${githubUrl}/blob/main/themes/shadcn/agent_orange.css`,
    logo: "https://cdn.simpleicons.org/shadcnui/e8e8e8",
    modes: true,
    seoTitle: "Shadcn/UI Theme — Dark and Light CSS Variables",
    seoDescription:
      "Add Agent Orange to Shadcn/UI with compatible CSS variables, near-black dark surfaces, warm light surfaces, orange focus, and semantic status tokens.",
    features: [
      "Standard Shadcn variable compatibility",
      "Application success, warning, danger, and info tokens",
      "Warm light and near-black dark blocks",
      "Orange reserved for focus and primary intent",
    ],
    installSteps: [
      {
        title: "Install from the Shadcn registry",
        description:
          "Run the registry command in an initialized Shadcn project. The item applies both light and dark variable blocks.",
        code: `npx shadcn@latest add edwardma33/agent-orange/agent-orange`,
      },
    ],
  },
  {
    slug: "expo",
    name: "Expo",
    kind: "Native",
    description:
      "A React Native StyleSheet with reusable palette roles and status colors.",
    introduction:
      "Agent Orange for Expo and React Native is a static JavaScript theme module with shared colors, semantic status roles, and baseline StyleSheet rules. Apps can consume named roles without copying raw values across screens.",
    filePath: "agent-orange.js",
    format: "React Native StyleSheet",
    pagePath: "/themes/expo",
    downloadPath: "/api/themes/expo",
    sourceHref: `${githubUrl}/blob/main/themes/expo/agent-orange.js`,
    logo: "https://cdn.simpleicons.org/expo/e8e8e8",
    modes: true,
    seoTitle: "Expo and React Native Theme Module",
    seoDescription:
      "Use Agent Orange in Expo and React Native with static light and dark StyleSheet modules, reusable colors, and semantic success, warning, danger, and info roles.",
    features: [
      "Static JavaScript with no runtime theme dependency",
      "Reusable colors and semanticColors exports",
      "Baseline React Native StyleSheet rules",
      "Separate light and dark modules",
    ],
    installSteps: [
      {
        title: "Add the theme module",
        description:
          "Copy the dark or light JavaScript file into your app's theme directory, then import the roles or ready-to-use styles.",
        code: `import {
  colors,
  semanticColors,
  styles,
} from "./theme/agent-orange";`,
      },
    ],
  },
  {
    slug: "chatgpt-desktop",
    name: "ChatGPT Desktop",
    kind: "Desktop",
    description:
      "A unified theme for Chat, Work, and Codex with solid surfaces and clear diffs.",
    introduction:
      "Agent Orange for ChatGPT Desktop packages the visual system as a compact import string. It aligns Chat, Work, and Codex around opaque surfaces, readable changes, orange focus, and restrained semantic color.",
    filePath: "agent_orange_dark.txt",
    format: "ChatGPT theme import",
    pagePath: "/themes/chatgpt-desktop",
    downloadPath: "/api/themes/chatgpt",
    sourceHref: `${githubUrl}/blob/main/themes/chatgpt/agent_orange_dark.txt`,
    logo: "/chatgpt.svg",
    modes: true,
    seoTitle: "ChatGPT Desktop Theme for Chat, Work, and Codex",
    seoDescription:
      "Download the Agent Orange ChatGPT Desktop theme for Chat, Work, and Codex, with near-black surfaces, orange focus, readable diffs, and light and dark variants.",
    features: [
      "One visual system across Chat, Work, and Codex",
      "Opaque near-black and warm light surfaces",
      "Clear added and removed diff colors",
      "Inter UI and JetBrains Mono code typography",
    ],
    installSteps: [
      {
        title: "Import the theme string",
        description:
          "Download the light or dark text file, copy its complete import string, and paste it into ChatGPT Desktop's theme import control.",
      },
    ],
  },
];

export const skillPort: Port = {
  slug: "skill",
  name: "Agent Orange Skill",
  kind: "Workflow",
  description:
    "A reusable guide for building Agent Orange UI, new ports, and aligned theme surfaces.",
  introduction:
    "The Agent Orange skill gives coding agents the visual rules, semantic palette, publishing workflow, and verification steps needed to extend this theme family without diluting its design language.",
  filePath: "SKILL.md",
  format: "Coding agent skill",
  pagePath: "/skill",
  sourceHref: `${githubUrl}/blob/main/.agents/skills/agent-orange/SKILL.md`,
  modes: false,
  installCommand: "npx skills add edwardma33/agent-orange",
  seoTitle: "Coding Agent UI Theme Skill",
  seoDescription:
    "Install the Agent Orange coding-agent skill for building restrained developer UI, creating theme ports, and preserving a shared semantic color system.",
  features: [
    "Agent Orange product UI composition rules",
    "Shared palette and semantic role guidance",
    "Native developer-theme port workflow",
    "Publishing and verification checklist",
  ],
  installSteps: [
    {
      title: "Install with the Skills CLI",
      description:
        "Choose the target coding agent, project or global scope, and whether the skill should be linked or copied.",
      code: `npx skills add edwardma33/agent-orange`,
    },
  ],
};

export const allPorts = [...themePorts, skillPort];

export function getThemePort(slug: string) {
  return themePorts.find((port) => port.slug === slug);
}

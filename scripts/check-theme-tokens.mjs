import { readFile } from "node:fs/promises";

const tokens = JSON.parse(await readFile(new URL("../themes/agent_orange.tokens.json", import.meta.url), "utf8"));

const checks = [
  {
    file: "themes/warp/agent_orange.yml",
    values: ["base", "foreground", "focus", "danger", "success", "warning", "info", "member", "type"],
  },
  {
    file: "themes/nvim/agent_orange.lua",
    values: ["base", "foreground", "focus", "danger", "success", "warning", "info", "member", "type"],
  },
  {
    file: "themes/shadcn/agent_orange.css",
    values: ["focus", "danger", "success", "warning", "info"],
  },
  {
    file: "themes/expo/agent-orange.js",
    values: ["base", "foreground", "focus", "danger", "success", "warning", "info", "member", "type"],
  },
  {
    file: "registry.json",
    values: ["base", "foreground", "focus", "danger", "success", "warning", "info", "member", "type"],
  },
];

let hasFailure = false;

for (const { file, values } of checks) {
  const contents = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const missing = values.filter((name) => !contents.includes(tokens.color[name]));

  if (missing.length > 0) {
    hasFailure = true;
    console.error(`${file} is missing shared token values: ${missing.join(", ")}`);
  }
}

if (hasFailure) process.exit(1);

console.log("Theme ports match the shared Agent Orange palette.");

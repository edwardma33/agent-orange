import { readFile } from "node:fs/promises";

const tokens = JSON.parse(await readFile(new URL("../themes/agent_orange.tokens.json", import.meta.url), "utf8"));
const lightValues = ["base", "foreground", "focus", "focusText", "danger", "success", "warning", "info", "member", "type"];

const checks = [
  {
    file: "themes/warp/agent_orange_light.yml",
    values: ["base", "foreground", "focus", "danger", "success", "warning", "info", "member", "type"],
    palette: "light",
  },
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
    values: ["focus", "danger", "success", "warning", "info", "member", "type"],
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

for (const { file, values, palette = "color" } of checks) {
  const contents = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const missing = values.filter((name) => !contents.includes(tokens[palette][name]));

  if (missing.length > 0) {
    hasFailure = true;
    console.error(`${file} is missing shared token values: ${missing.join(", ")}`);
  }
}

for (const file of ["themes/shadcn/agent_orange.css", "registry.json"]) {
  const contents = await readFile(new URL(`../${file}`, import.meta.url), "utf8");
  const missing = lightValues.filter((name) => !contents.includes(tokens.light[name]));

  if (missing.length > 0) {
    hasFailure = true;
    console.error(`${file} is missing light Agent Orange token values: ${missing.join(", ")}`);
  }
}

if (hasFailure) process.exit(1);

console.log("Theme ports match the shared Agent Orange palette.");

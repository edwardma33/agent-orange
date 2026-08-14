import { readFile } from "node:fs/promises";
import { registrySchema } from "shadcn/schema";

const registry = JSON.parse(await readFile(new URL("../registry.json", import.meta.url), "utf8"));
const result = registrySchema.safeParse(registry);

if (!result.success) {
  console.error(result.error.format());
  process.exit(1);
}

const theme = registry.items.find((item) => item.name === "agent-orange");
if (!theme || theme.type !== "registry:theme") {
  console.error("registry.json must define the Agent Orange registry:theme item.");
  process.exit(1);
}

console.log("ShadCN GitHub registry is valid.");

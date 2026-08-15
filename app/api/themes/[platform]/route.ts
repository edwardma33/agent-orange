import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const themes = {
  warp: {
    file: "themes/warp/agent_orange.yml",
    filename: "agent_orange.yml",
    lightFile: "themes/warp/agent_orange_light.yml",
    lightFilename: "agent_orange_light.yml",
    contentType: "application/x-yaml; charset=utf-8",
  },
  nvim: {
    file: "themes/nvim/agent_orange.lua",
    filename: "agent_orange.lua",
    lightFilename: "agent_orange_light.lua",
    contentType: "text/x-lua; charset=utf-8",
  },
  shadcn: {
    file: "themes/shadcn/agent_orange.css",
    filename: "agent_orange.css",
    contentType: "text/css; charset=utf-8",
  },
  expo: {
    file: "themes/expo/agent-orange.js",
    filename: "agent-orange.js",
    contentType: "text/javascript; charset=utf-8",
  },
} as const;

export async function GET(_request: Request, context: RouteContext<"/api/themes/[platform]">) {
  const { platform } = await context.params;
  const theme = themes[platform as keyof typeof themes];

  if (!theme) {
    return new NextResponse("Theme not found", { status: 404 });
  }

  const mode = new URL(_request.url).searchParams.get("mode");
  const isLightMode = mode === "light" && ("lightFile" in theme || platform === "nvim");
  const isShadcnMode = platform === "shadcn" && (mode === "light" || mode === "dark");
  const filename = isShadcnMode ? `agent_orange.${mode}.css` : isLightMode && "lightFilename" in theme ? theme.lightFilename : theme.filename;
  const source = await readFile(join(process.cwd(), isLightMode && "lightFile" in theme ? theme.lightFile : theme.file), "utf8");
  let contents = source;

  if (platform === "nvim" && mode === "light") {
    contents = `vim.g.agent_orange_variant = "light"\n${source}`;
  }

  if (isShadcnMode) {
    const blockPattern = mode === "light" ? /:root\s*\{([\s\S]*?)\n\}/ : /\.dark\s*\{([\s\S]*?)\n\}/;
    const match = source.match(blockPattern);

    if (!match) {
      return new NextResponse("Theme mode not found", { status: 500 });
    }

    contents = `/* Agent Orange for shadcn/ui — ${mode} */\n:root {${match[1]}\n}\n`;
  }

  return new NextResponse(contents, {
    headers: {
      "Content-Disposition": `attachment; filename=${filename}`,
      "Content-Type": theme.contentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

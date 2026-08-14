import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const themes = {
  warp: {
    file: "themes/warp/agent_orange.yml",
    filename: "agent_orange.yml",
    contentType: "application/x-yaml; charset=utf-8",
  },
  nvim: {
    file: "themes/nvim/agent_orange.lua",
    filename: "agent_orange.lua",
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

  const contents = await readFile(join(process.cwd(), theme.file));

  return new NextResponse(contents, {
    headers: {
      "Content-Disposition": `attachment; filename=${theme.filename}`,
      "Content-Type": theme.contentType,
      "Cache-Control": "public, max-age=3600",
    },
  });
}

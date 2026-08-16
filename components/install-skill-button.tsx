"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

type CopyState = "idle" | "copied" | "unavailable";

export function InstallSkillButton({ command }: { command: string }) {
  const [state, setState] = useState<CopyState>("idle");

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command);
      setState("copied");
      window.setTimeout(() => setState("idle"), 1800);
    } catch {
      setState("unavailable");
    }
  }

  const copied = state === "copied";
  const label = copied ? "Copied" : state === "unavailable" ? "Copy failed" : "Copy";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={copyCommand}
        aria-label={state === "unavailable" ? "Clipboard access is unavailable; copy the install command manually" : "Copy install command"}
        className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-2 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
      >
        {copied ? <Check className="size-3.5" aria-hidden="true" /> : <Copy className="size-3.5" aria-hidden="true" />}
        {label}
      </button>
      <span className="sr-only" aria-live="polite">{copied ? "Install command copied to clipboard." : state === "unavailable" ? "Clipboard access is unavailable. Copy the command shown above manually." : ""}</span>
    </div>
  );
}

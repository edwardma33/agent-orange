"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const storageKey = "agent-orange-preview-theme";
const changeEvent = "agent-orange-theme-change";

function getTheme(): Theme {
  return window.localStorage.getItem(storageKey) === "light" ? "light" : "dark";
}

function subscribe(callback: () => void) {
  window.addEventListener(changeEvent, callback);
  return () => window.removeEventListener(changeEvent, callback);
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    window.localStorage.setItem(storageKey, nextTheme);
    window.dispatchEvent(new Event(changeEvent));
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} preview`}
      title={`Switch to ${isDark ? "light" : "dark"} preview`}
      className="inline-flex h-8 items-center gap-1 rounded-md border border-border bg-card p-1 font-mono text-[10px] uppercase tracking-[0.08em] text-muted-foreground transition-colors hover:border-[var(--agent-orange-focus)] hover:text-foreground"
    >
      <span className={`inline-flex h-6 items-center gap-1 rounded px-1.5 transition-colors ${!isDark ? "bg-accent text-foreground" : ""}`}>
        <Sun className="size-3" aria-hidden="true" /> Light
      </span>
      <span className={`inline-flex h-6 items-center gap-1 rounded px-1.5 transition-colors ${isDark ? "bg-accent text-foreground" : ""}`}>
        <Moon className="size-3" aria-hidden="true" /> Dark
      </span>
    </button>
  );
}

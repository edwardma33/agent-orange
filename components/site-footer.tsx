import { GitHubLogo } from "@/components/site-header";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        Agent Orange / developer themes
      </p>
      <a
        href={siteConfig.githubUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-[var(--agent-orange-focus-text)]"
      >
        <GitHubLogo className="size-3.5 invert dark:invert-0" /> GitHub
      </a>
    </footer>
  );
}

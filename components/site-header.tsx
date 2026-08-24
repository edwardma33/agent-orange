import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { siteConfig } from "@/lib/site";

export function GitHubLogo({ className }: { className: string }) {
  return (
    <Image
      src="https://cdn.simpleicons.org/github/e8e8e8"
      alt=""
      aria-hidden="true"
      width={16}
      height={16}
      unoptimized
      className={className}
    />
  );
}

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="group flex items-center gap-2.5" aria-label="Agent Orange home">
          <span className="grid size-7 place-items-center rounded-[7px] bg-[var(--agent-orange-focus)] text-[11px] font-black text-[#111111] transition-transform group-hover:-rotate-6">
            AO
          </span>
          <span className="font-heading text-sm font-bold tracking-[-0.02em]">Agent Orange</span>
        </Link>
        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground sm:gap-5">
          <Link href="/#ports" className="hidden transition-colors hover:text-foreground sm:block">
            Ports
          </Link>
          <ThemeToggle />
          <a
            href={siteConfig.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-foreground transition-colors hover:border-[var(--agent-orange-focus)] hover:text-[var(--agent-orange-focus-text)]"
          >
            <GitHubLogo className="size-3.5 invert dark:invert-0" /> GitHub
            <ArrowUpRight className="size-3" aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Bot, Check, Command, Download } from "lucide-react";
import { InstallSkillButton } from "@/components/install-skill-button";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { GitHubLogo, SiteHeader } from "@/components/site-header";
import { allPorts } from "@/lib/ports";
import { absoluteUrl, siteConfig } from "@/lib/site";

const homepageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${absoluteUrl("/")}#website`,
      url: absoluteUrl("/"),
      name: siteConfig.name,
      description: siteConfig.description,
      inLanguage: "en",
    },
    {
      "@type": "SoftwareSourceCode",
      "@id": `${absoluteUrl("/")}#source`,
      name: siteConfig.name,
      description: siteConfig.description,
      url: absoluteUrl("/"),
      codeRepository: siteConfig.githubUrl,
      license: `${siteConfig.githubUrl}/blob/main/LICENSE`,
      programmingLanguage: ["Lua", "CSS", "JavaScript", "YAML"],
      runtimePlatform: ["Neovim", "Warp", "Shadcn/UI", "Expo", "ChatGPT Desktop"],
      isAccessibleForFree: true,
    },
  ],
};

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-[var(--agent-orange-focus)] selection:text-primary-foreground">
      <JsonLd data={homepageJsonLd} />
      <SiteHeader />

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 pb-24 pt-16 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-32 lg:pt-24">
        <div className="max-w-2xl">
          <p className="mb-7 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-[var(--agent-orange-focus)]" />
            Developer themes / {String(allPorts.length).padStart(2, "0")} ports
          </p>
          <h1 className="font-heading text-5xl font-semibold leading-[0.98] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl">
            Agent Orange is a developer theme built for signal.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            Near-black developer themes for Neovim, Warp, Shadcn/UI, Expo, and ChatGPT Desktop. Orange marks focus while quiet semantic color keeps changes, warnings, and errors easy to read.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#ports" className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
              Explore ports <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
            <span className="inline-flex h-11 items-center rounded-md border border-border px-3.5 font-mono text-xs text-muted-foreground">
              light / dark preview
            </span>
          </div>
          <dl className="mt-14 grid max-w-lg grid-cols-3 border-y border-border py-5">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Surface</dt>
              <dd className="mt-1.5 font-mono text-sm text-foreground">warm / quiet</dd>
            </div>
            <div className="border-l border-border pl-5">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Focus</dt>
              <dd className="mt-1.5 font-mono text-sm text-[var(--agent-orange-focus)]">#ff6b00</dd>
            </div>
            <div className="border-l border-border pl-5">
              <dt className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">State</dt>
              <dd className="mt-1.5 font-mono text-sm text-foreground">Clear</dd>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          <div className="absolute -left-3 top-8 h-[calc(100%-64px)] w-3 border-y border-l border-border" />
          <div className="overflow-hidden rounded-lg border border-border bg-card shadow-xl shadow-black/10 dark:shadow-black/30">
            <div className="flex h-11 items-center justify-between border-b border-border px-4">
              <div className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-[var(--dim)]" />
                <span className="size-2 rounded-full bg-[var(--dim)]" />
                <span className="size-2 rounded-full bg-[var(--dim)]" />
              </div>
              <span className="font-mono text-[10px] text-muted-foreground">agent_orange</span>
              <Command className="size-3.5 text-muted-foreground" aria-hidden="true" />
            </div>
            <div className="space-y-5 p-5 font-mono text-[12px] leading-6 sm:p-7 sm:text-[13px]">
              <p className="text-muted-foreground">{`// signal, not spectacle`}</p>
              <p>
                <span className="text-[var(--agent-orange-focus)]">const</span> <span>theme</span> <span>=</span>{" "}
                <span className="text-[var(--agent-orange-info)]">createTheme</span><span>(</span><span>&#123;</span>
              </p>
              <div className="space-y-1 border-l border-border pl-4">
                <p><span className="text-[var(--agent-orange-member)]">background</span><span className="text-muted-foreground">:</span> <span className="text-[var(--agent-orange-success)]">&quot;adaptive&quot;</span><span className="text-muted-foreground">,</span></p>
                <p><span className="text-[var(--agent-orange-member)]">focus</span><span className="text-muted-foreground">:</span> <span className="text-[var(--agent-orange-success)]">&quot;#ff6b00&quot;</span><span className="text-muted-foreground">,</span></p>
                <p><span className="text-[var(--agent-orange-member)]">warnings</span><span className="text-muted-foreground">:</span> <span className="text-[var(--agent-orange-warning)]">&quot;clear&quot;</span><span className="text-muted-foreground">,</span></p>
                <p><span className="text-[var(--agent-orange-member)]">errors</span><span className="text-muted-foreground">:</span> <span className="text-[var(--agent-orange-danger)]">&quot;present&quot;</span><span className="text-muted-foreground">,</span></p>
              </div>
              <p><span>&#125;</span><span>)</span></p>
              <div className="flex items-center gap-2 pt-1 text-[var(--agent-orange-success)]">
                <Check className="size-3.5" aria-hidden="true" />
                <span>ready for the long run</span>
              </div>
            </div>
          </div>
          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
            orange reserved for intent
          </p>
        </div>
      </section>

      <section id="ports" className="scroll-mt-6 border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--agent-orange-focus-text)]">Available now</p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">Choose your surface.</h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Each port follows the same quiet foundation, expressed through its platform&apos;s native conventions.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {allPorts.map((port) => (
              <article key={port.name} className="group rounded-lg border border-border bg-card p-5 transition-colors hover:border-[var(--agent-orange-focus)] sm:p-6">
                <div className="flex items-start justify-between">
                  <div className="grid size-11 place-items-center rounded-md border border-border bg-background text-foreground group-hover:border-[var(--agent-orange-focus)]">
                    {port.logo ? (
                      <Image src={port.logo} alt="" aria-hidden="true" width={20} height={20} unoptimized className="size-5 invert dark:invert-0" />
                    ) : (
                      <Bot className="size-5" aria-hidden="true" />
                    )}
                  </div>
                  <span className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{port.kind}</span>
                </div>
                <h3 className="mt-8 font-heading text-2xl font-semibold tracking-[-0.035em] text-foreground">
                  <Link href={port.pagePath} className="transition-colors hover:text-[var(--agent-orange-focus-text)]">{port.name}</Link>
                </h3>
                <p className="mt-2 min-h-18 text-sm leading-6 text-muted-foreground">{port.description}</p>
                <div className="mt-7 border-t border-border pt-4">
                  <p className="font-mono text-xs text-foreground">{port.filePath}</p>
                  <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">{port.format}</p>
                  {port.installCommand ? (
                    <p className="mt-3 overflow-x-auto border border-border bg-background px-2 py-1.5 font-mono text-[10px] text-muted-foreground">{port.installCommand}</p>
                  ) : null}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <a href={port.sourceHref} target="_blank" rel="noreferrer" className="inline-flex size-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-[var(--agent-orange-focus)] hover:text-[var(--agent-orange-focus-text)]" aria-label={`View ${port.name} source on GitHub`}>
                        <GitHubLogo className="size-4 invert dark:invert-0" />
                      </a>
                      <Link href={port.pagePath} className="inline-flex h-9 items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-muted-foreground transition-colors hover:text-[var(--agent-orange-focus-text)]">
                        Details <ArrowUpRight className="size-3" aria-hidden="true" />
                      </Link>
                    </div>
                    {port.installCommand ? (
                      <InstallSkillButton command={port.installCommand} />
                    ) : port.downloadPath && port.modes ? (
                      <div className="flex gap-2">
                        <a href={`${port.downloadPath}?mode=light`} className="inline-flex h-9 items-center gap-1.5 rounded-md border border-border px-2 text-[10px] font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-[var(--agent-orange-focus)]" aria-label={`Download ${port.name} light theme`}>
                          <Download className="size-3.5" aria-hidden="true" /> Light
                        </a>
                        <a href={`${port.downloadPath}?mode=dark`} className="inline-flex h-9 items-center gap-1.5 rounded-md bg-primary px-2 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90" aria-label={`Download ${port.name} dark theme`}>
                          <Download className="size-3.5" aria-hidden="true" /> Dark
                        </a>
                      </div>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

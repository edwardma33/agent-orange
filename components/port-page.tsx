import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bot, Check, Download } from "lucide-react";
import { InstallSkillButton } from "@/components/install-skill-button";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { GitHubLogo, SiteHeader } from "@/components/site-header";
import { allPorts, type Port } from "@/lib/ports";
import { absoluteUrl } from "@/lib/site";

export function PortPage({ port }: { port: Port }) {
  const relatedPorts = allPorts.filter((candidate) => candidate.slug !== port.slug).slice(0, 3);
  const isSkill = port.slug === "skill";

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Agent Orange",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: port.name,
        item: absoluteUrl(port.pagePath),
      },
    ],
  };

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground selection:bg-[var(--agent-orange-focus)] selection:text-primary-foreground">
      <JsonLd data={breadcrumbJsonLd} />
      <SiteHeader />

      <article>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 lg:px-8 lg:py-24">
          <div>
            <Link
              href="/#ports"
              className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-[var(--agent-orange-focus-text)]"
            >
              <ArrowLeft className="size-3.5" aria-hidden="true" /> All ports
            </Link>
            <p className="mt-12 flex items-center gap-2 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
              <span className="size-1.5 rounded-full bg-[var(--agent-orange-focus)]" />
              {port.kind} / {port.format}
            </p>
            <h1 className="mt-5 max-w-3xl font-heading text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-foreground sm:text-5xl lg:text-6xl">
              {isSkill ? "Agent Orange coding agent skill." : `Agent Orange for ${port.name}.`}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              {port.introduction}
            </p>
          </div>

          <aside className="self-end border border-border bg-card p-5 sm:p-6" aria-label={`${port.name} artifact details`}>
            <div className="flex items-start justify-between">
              <div className="grid size-12 place-items-center border border-border bg-background">
                {port.logo ? (
                  <Image
                    src={port.logo}
                    alt=""
                    aria-hidden="true"
                    width={22}
                    height={22}
                    unoptimized
                    className="size-5.5 invert dark:invert-0"
                  />
                ) : (
                  <Bot className="size-5.5" aria-hidden="true" />
                )}
              </div>
              <span className="border border-border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {port.kind}
              </span>
            </div>
            <dl className="mt-10 grid gap-4 border-y border-border py-5">
              <div className="grid grid-cols-[5rem_1fr] gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">File</dt>
                <dd className="text-right font-mono text-xs text-foreground">{port.filePath}</dd>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Format</dt>
                <dd className="text-right font-mono text-xs text-foreground">{port.format}</dd>
              </div>
              <div className="grid grid-cols-[5rem_1fr] gap-3">
                <dt className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">Modes</dt>
                <dd className="text-right font-mono text-xs text-foreground">
                  {port.modes ? "light / dark" : "single workflow"}
                </dd>
              </div>
            </dl>

            {port.installCommand ? (
              <div className="mt-5">
                <p className="overflow-x-auto border border-border bg-background px-3 py-2 font-mono text-[11px] text-muted-foreground">
                  {port.installCommand}
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <SourceLink port={port} />
                  <InstallSkillButton command={port.installCommand} />
                </div>
              </div>
            ) : port.downloadPath ? (
              <div className="mt-5 flex items-center justify-between gap-4">
                <SourceLink port={port} />
                <div className="flex gap-2">
                  <a
                    href={`${port.downloadPath}?mode=light`}
                    className="inline-flex h-10 items-center gap-1.5 border border-border px-3 text-[10px] font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-[var(--agent-orange-focus)]"
                  >
                    <Download className="size-3.5" aria-hidden="true" /> Light
                  </a>
                  <a
                    href={`${port.downloadPath}?mode=dark`}
                    className="inline-flex h-10 items-center gap-1.5 bg-primary px-3 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
                  >
                    <Download className="size-3.5" aria-hidden="true" /> Dark
                  </a>
                </div>
              </div>
            ) : null}
          </aside>
        </section>

        <section className="border-y border-border bg-secondary">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8 lg:py-20">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--agent-orange-focus-text)]">
                Coverage
              </p>
              <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground">
                Built for the work state.
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground">
                Neutral surfaces stay quiet. Color appears when focus, status, or code meaning needs to be read quickly.
              </p>
            </div>
            <ul className="grid gap-px border border-border bg-border sm:grid-cols-2">
              {port.features.map((feature) => (
                <li key={feature} className="flex min-h-24 items-start gap-3 bg-card p-5 text-sm leading-6 text-foreground">
                  <Check className="mt-1 size-4 shrink-0 text-[var(--agent-orange-success)]" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--agent-orange-focus-text)]">
              Installation
            </p>
            <h2 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.04em] text-foreground sm:text-4xl">
              Put it on your surface.
            </h2>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {port.installSteps.map((step, index) => (
              <section key={step.title} className="border border-border bg-card p-5 sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 font-heading text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
                {step.code ? (
                  <pre className="mt-6 overflow-x-auto border border-border bg-background p-4 font-mono text-xs leading-6 text-foreground">
                    <code>{step.code}</code>
                  </pre>
                ) : null}
              </section>
            ))}
          </div>
        </section>

        <section className="border-t border-border bg-secondary">
          <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
            <div className="flex items-end justify-between gap-6">
              <div>
                <p className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                  Same system
                </p>
                <h2 className="mt-3 font-heading text-2xl font-semibold tracking-[-0.04em] text-foreground">
                  Explore another port.
                </h2>
              </div>
              <Link
                href="/#ports"
                className="hidden font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-[var(--agent-orange-focus-text)] sm:block"
              >
                View all
              </Link>
            </div>
            <div className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
              {relatedPorts.map((related) => (
                <Link
                  key={related.slug}
                  href={related.pagePath}
                  className="group bg-card p-5 transition-colors hover:bg-accent sm:p-6"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{related.kind}</p>
                  <h3 className="mt-4 flex items-center justify-between font-heading text-lg font-semibold text-foreground">
                    {related.name}
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-[var(--agent-orange-focus-text)]" aria-hidden="true" />
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </article>

      <SiteFooter />
    </main>
  );
}

function SourceLink({ port }: { port: Port }) {
  return (
    <a
      href={port.sourceHref}
      target="_blank"
      rel="noreferrer"
      className="inline-flex h-10 items-center gap-2 border border-border px-3 font-mono text-[10px] uppercase tracking-wide text-muted-foreground transition-colors hover:border-[var(--agent-orange-focus)] hover:text-[var(--agent-orange-focus-text)]"
    >
      <GitHubLogo className="size-3.5 invert dark:invert-0" /> Source
      <ArrowUpRight className="size-3" aria-hidden="true" />
    </a>
  );
}

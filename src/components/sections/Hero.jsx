import { hero, mailtoHref } from "@/content/pl";
import { projects } from "@/data/projects";
import { countProduction } from "@/lib/projects";
import Button from "@/components/ui/Button";

export default function Hero() {
  const productionCount = countProduction(projects);

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden">
      <div
        className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_30%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-24">
        <p className="font-mono text-xs tracking-widest text-accent uppercase sm:text-sm">
          {hero.eyebrow}
        </p>

        <h1
          id="hero-title"
          className="mt-5 max-w-4xl text-[2.1rem] leading-[1.1] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {hero.headline} <span className="text-accent">{hero.headlineAccent}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
          {hero.lead}
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#projekty" size="lg" icon="arrowDown">
            {hero.primaryCta}
          </Button>
          <Button
            href={mailtoHref}
            variant="outline"
            size="lg"
            icon="mail"
            iconPosition="start"
          >
            {hero.secondaryCta}
          </Button>
        </div>

        <p className="mt-10 flex items-center gap-3 text-sm text-muted">
          <span className="relative flex size-2.5" aria-hidden="true">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-status-production/60" />
            <span className="relative inline-flex size-2.5 rounded-full bg-status-production" />
          </span>
          <span>
            <strong className="font-semibold text-fg">
              {hero.productionCount(productionCount)}
            </strong>{" "}
            {hero.productionNote}
          </span>
        </p>
      </div>
    </section>
  );
}

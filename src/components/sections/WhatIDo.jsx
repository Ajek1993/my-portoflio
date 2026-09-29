import { whatIDo } from "@/content/pl";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WhatIDo() {
  return (
    <section
      id={whatIDo.id}
      aria-labelledby="what-i-do-title"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          id="what-i-do-title"
          eyebrow={whatIDo.eyebrow}
          title={whatIDo.title}
        />

        <ul className="mt-12 grid gap-4 md:grid-cols-3">
          {whatIDo.areas.map((area) => (
            <Reveal
              as="li"
              key={area.category}
              className="group relative flex flex-col rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-border-strong"
              style={{ "--cat": `var(--color-cat-${area.category})` }}
            >
              <span className="flex size-11 items-center justify-center rounded-xl border border-[color-mix(in_oklab,var(--cat)_40%,transparent)] bg-[color-mix(in_oklab,var(--cat)_12%,transparent)] text-(--cat)">
                <Icon name={area.category} className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{area.title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{area.text}</p>
              <p className="mt-5 border-t border-border pt-4 text-sm text-subtle">
                <span className="text-fg">{whatIDo.exampleLabel}</span> {area.example}
              </p>
              <a
                href="#projekty"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-(--cat) hover:underline"
              >
                {whatIDo.seeProjects}
                <Icon name="arrowRight" className="size-4" />
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

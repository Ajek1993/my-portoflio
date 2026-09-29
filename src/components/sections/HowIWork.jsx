import { howIWork } from "@/content/pl";
import Icon from "@/components/ui/Icon";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

function SplitCard({ title, items, accent }) {
  return (
    <div className="rounded-2xl border border-border bg-surface p-6">
      <h3
        className={`font-mono text-xs tracking-widest uppercase ${accent ? "text-accent" : "text-muted"}`}
      >
        {title}
      </h3>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item} className="flex gap-2.5 text-fg">
            <Icon
              name="check"
              className={`mt-0.5 size-4 shrink-0 ${accent ? "text-accent" : "text-subtle"}`}
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function HowIWork() {
  return (
    <section
      id={howIWork.id}
      aria-labelledby="how-i-work-title"
      className="border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          id="how-i-work-title"
          eyebrow={howIWork.eyebrow}
          title={howIWork.title}
          lead={howIWork.lead}
        />

        <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {howIWork.steps.map((step, index) => (
            <Reveal as="li" key={step.title} className="bg-bg p-6">
              <span className="font-mono text-sm text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          <SplitCard
            title={howIWork.split.me.title}
            items={howIWork.split.me.items}
            accent
          />
          <SplitCard title={howIWork.split.ai.title} items={howIWork.split.ai.items} />
          <div className="rounded-2xl border border-accent/30 bg-accent-soft p-6">
            <h3 className="flex items-center gap-2 font-mono text-xs tracking-widest text-accent uppercase">
              <Icon name="ai" className="size-4" />
              {howIWork.toolkit.title}
            </h3>
            <p className="mt-4 leading-relaxed text-fg/90">{howIWork.toolkit.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

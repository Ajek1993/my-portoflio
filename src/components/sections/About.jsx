import Image from "next/image";
import { about, cv, technologiesSection } from "@/content/pl";
import { technologyGroups } from "@/data/technologies";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function About() {
  return (
    <section
      id={about.id}
      aria-labelledby="about-title"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">
          <div>
            <SectionHeading
              id="about-title"
              eyebrow={about.eyebrow}
              title={about.title}
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ol className="mt-10 grid gap-3 sm:grid-cols-2">
              {about.timeline.map((step, index) => (
                <li
                  key={step.label}
                  className="flex gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                >
                  <span className="font-mono text-sm text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-medium text-fg">{step.label}</span>
                    <span className="block text-sm text-subtle">{step.text}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface">
              <Image
                src={about.photo}
                alt={about.photoAlt}
                width={720}
                height={960}
                sizes="(min-width: 1024px) 360px, 384px"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
            <div className="mt-4 rounded-2xl border border-border bg-surface p-5">
              <h3 className="font-semibold">{cv.title}</h3>
              <p className="mt-1 text-sm text-muted">{cv.text}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {cv.files.map((file) => (
                  <Button
                    key={file.href}
                    href={file.href}
                    variant="outline"
                    size="sm"
                    icon="download"
                    iconPosition="start"
                    external
                  >
                    {file.label}
                  </Button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-20">
          <SectionHeading
            eyebrow={technologiesSection.eyebrow}
            title={technologiesSection.title}
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {technologyGroups.map((group) => (
              <Reveal
                key={group.id}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <h3 className="font-mono text-xs tracking-widest text-accent uppercase">
                  {group.name}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md bg-surface-2 px-2.5 py-1 text-sm text-fg"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

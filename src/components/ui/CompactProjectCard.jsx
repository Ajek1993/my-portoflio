import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function CompactProjectCard({ project, labels, showImage = false, href }) {
  const links = [
    ["live", "external"],
    ["repo", "github"],
  ].filter(([key]) => project[key]);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface/60">
      {showImage && project.image && (
        <div className="relative aspect-video border-b border-border">
          <Image
            src={project.image}
            alt={labels.imageAlt(project.name)}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top opacity-80 transition-opacity hover:opacity-100"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-surface-2 text-(--cat)"
            style={{ "--cat": `var(--color-cat-${project.category})` }}
          >
            <Icon name={project.category} className="size-4" />
          </span>
          <div>
            <h4 className="font-semibold tracking-tight">
              {href ? (
                <Link href={href} className="hover:text-accent">
                  {project.name}
                </Link>
              ) : (
                project.name
              )}
            </h4>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{project.summary}</p>
          </div>
        </div>
        <p className="mt-4 font-mono text-xs text-subtle">{project.stack.join(" · ")}</p>
        <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 pt-4 text-sm">
          {href && (
            <Link
              href={href}
              className="inline-flex items-center gap-1.5 font-medium text-accent hover:underline"
            >
              {labels.more}
              <Icon name="arrowRight" className="size-4" />
            </Link>
          )}
          {links.map(([key, icon]) => (
            <a
              key={key}
              href={project[key]}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium text-fg hover:text-accent"
            >
              <Icon name={icon} className="size-4" />
              {labels.links[key]}
            </a>
          ))}
          {!project.repo && (
            <span className="inline-flex items-center gap-1.5 text-subtle">
              <Icon name="lock" className="size-4" />
              {labels.privateCodeShort}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

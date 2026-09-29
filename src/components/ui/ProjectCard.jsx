import Link from "next/link";
import Image from "next/image";
import Badge from "./Badge";
import Icon from "./Icon";
import ProjectPlaceholder from "./ProjectPlaceholder";

const LINK_ORDER = [
  ["live", "external"],
  ["demo", "external"],
  ["repo", "github"],
];

function ProjectLinks({ project, labels }) {
  const links = LINK_ORDER.filter(([key]) => project[key]);

  if (links.length === 0 && !project.repo) {
    return (
      <p className="flex items-center gap-2 text-sm text-subtle">
        <Icon name="lock" className="size-4" />
        {labels.privateCode}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {links.map(([key, icon]) => (
        <a
          key={key}
          href={project[key]}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center gap-2 rounded-full border border-border-strong px-3.5 text-sm font-medium text-fg transition-colors hover:border-accent hover:text-accent"
        >
          <Icon name={icon} className="size-4" />
          {labels.links[key]}
        </a>
      ))}
      {!project.repo && (
        <span className="flex items-center gap-2 text-sm text-subtle">
          <Icon name="lock" className="size-4" />
          {labels.privateCode}
        </span>
      )}
    </div>
  );
}

export default function ProjectCard({ project, labels, href }) {
  const statusColor = `var(--color-status-${project.status})`;
  const categoryLabel = labels.categories[project.category];

  return (
    <article
      id={`projekt-${project.slug}`}
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-border-strong"
    >
      <div className="relative border-b border-border">
        {project.image ? (
          <div className="relative aspect-video">
            <Image
              src={project.image}
              alt={labels.imageAlt(project.name)}
              fill
              sizes="(min-width: 1024px) 560px, (min-width: 768px) 50vw, 100vw"
              className="object-cover object-top"
            />
          </div>
        ) : (
          <ProjectPlaceholder
            name={project.name}
            category={project.category}
            label={categoryLabel}
          />
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap gap-2">
          <Badge color={statusColor}>{labels.statuses[project.status]}</Badge>
          <Badge color={`var(--color-cat-${project.category})`}>{categoryLabel}</Badge>
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight">
          {href ? (
            <Link href={href} className="hover:text-accent">
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h3>
        {project.client && (
          <p className="mt-1 text-sm text-subtle">
            {labels.client} {project.client}
          </p>
        )}
        <p className="mt-3 leading-relaxed text-muted">{project.summary}</p>

        <ul className="mt-5 flex flex-wrap gap-1.5" aria-label={labels.stack}>
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-surface-2 px-2 py-1 font-mono text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>

        {href && (
          <Link
            href={href}
            className="mt-6 inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-accent hover:underline"
          >
            {labels.more}
            <Icon name="arrowRight" className="size-4" />
          </Link>
        )}

        <div className="mt-auto pt-6">
          <ProjectLinks project={project} labels={labels} />
        </div>
      </div>
    </article>
  );
}

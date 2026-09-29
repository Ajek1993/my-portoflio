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

export default function ProjectCard({ project, labels }) {
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

        <h3 className="mt-4 text-xl font-semibold tracking-tight">{project.name}</h3>
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

        <details className="group mt-6 border-t border-border pt-4 [&[open]_.chevron]:rotate-45">
          <summary className="flex list-none items-center justify-between gap-2 rounded-md text-sm font-medium text-fg">
            <span className="group-open:hidden">{labels.details}</span>
            <span className="hidden group-open:inline">{labels.hideDetails}</span>
            <Icon
              name="plus"
              className="chevron size-4 text-accent transition-transform"
            />
          </summary>
          <dl className="mt-4 space-y-4 text-sm leading-relaxed">
            {[
              ["problem", labels.problem],
              ["solution", labels.solution],
              ["outcome", labels.outcome],
            ].map(([key, label]) => (
              <div key={key}>
                <dt className="font-mono text-xs tracking-widest text-accent uppercase">
                  {label}
                </dt>
                <dd className="mt-1 text-muted">{project[key]}</dd>
              </div>
            ))}
          </dl>
        </details>

        <div className="mt-auto pt-6">
          <ProjectLinks project={project} labels={labels} />
        </div>
      </div>
    </article>
  );
}

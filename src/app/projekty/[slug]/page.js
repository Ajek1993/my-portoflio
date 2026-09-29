import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { mailtoHref, projectCard, projectPage, site } from "@/content/pl";
import { projects } from "@/data/projects";
import {
  getProjectByPage,
  getProjectPages,
  getRelatedProjects,
  projectPath,
} from "@/lib/projects";
import { projectSchema } from "@/lib/structuredData";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import CompactProjectCard from "@/components/ui/CompactProjectCard";
import Icon from "@/components/ui/Icon";
import JsonLd from "@/components/ui/JsonLd";
import ProjectPlaceholder from "@/components/ui/ProjectPlaceholder";

export const dynamicParams = false;

export function generateStaticParams() {
  return getProjectPages(projects).map((project) => ({ slug: project.page }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectByPage(projects, slug);
  if (!project) return {};

  const title = projectPage.metaTitle(
    project.name,
    projectCard.categories[project.category],
  );
  const path = projectPath(project);
  return {
    title,
    description: project.summary,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.shortTitle}`,
      description: project.summary,
      url: path,
      type: "article",
      locale: "pl_PL",
      siteName: site.name,
      ...(project.image
        ? { images: [{ url: project.image, width: 1600, height: 900 }] }
        : {}),
    },
  };
}

const SECTIONS = ["problem", "solution", "outcome"];
const LINKS = [
  ["live", "external"],
  ["demo", "external"],
  ["repo", "github"],
];

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectByPage(projects, slug);
  if (!project) notFound();

  const path = projectPath(project);
  const categoryLabel = projectCard.categories[project.category];
  const links = LINKS.filter(([key]) => project[key]);
  const related = getRelatedProjects(projects, project);

  return (
    <>
      <JsonLd data={projectSchema(project, `${site.url}${path}`)} />
      <Navbar />
      <main id="tresc">
        <article className="mx-auto max-w-4xl px-4 pt-10 pb-20 sm:px-6 sm:pt-14">
          <nav aria-label={projectPage.breadcrumbLabel} className="text-sm text-subtle">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-fg">
                  {projectPage.home}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/#projekty" className="hover:text-fg">
                  {projectPage.projects}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-muted">
                {project.name}
              </li>
            </ol>
          </nav>

          <header className="mt-8">
            <div className="flex flex-wrap gap-2">
              <Badge color={`var(--color-status-${project.status})`}>
                {projectCard.statuses[project.status]}
              </Badge>
              <Badge color={`var(--color-cat-${project.category})`}>
                {categoryLabel}
              </Badge>
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-balance sm:text-5xl">
              {project.name}
            </h1>
            {project.client && (
              <p className="mt-3 text-subtle">
                {projectCard.client} {project.client}
              </p>
            )}
            <p className="mt-5 text-lg leading-relaxed text-muted sm:text-xl">
              {project.summary}
            </p>
          </header>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border">
            {project.image ? (
              <Image
                src={project.image}
                alt={projectCard.imageAlt(project.name)}
                width={1600}
                height={900}
                sizes="(min-width: 896px) 848px, 100vw"
                className="h-auto w-full"
                priority
              />
            ) : (
              <ProjectPlaceholder name={project.name} category={project.category} />
            )}
          </div>

          <div className="mt-12 space-y-10">
            {SECTIONS.map((key) => (
              <section key={key} aria-labelledby={`sekcja-${key}`}>
                <h2
                  id={`sekcja-${key}`}
                  className="font-mono text-xs tracking-widest text-accent uppercase"
                >
                  {projectPage[key]}
                </h2>
                <p className="mt-3 text-lg leading-relaxed text-fg/90">{project[key]}</p>
              </section>
            ))}

            <section aria-labelledby="sekcja-stack">
              <h2
                id="sekcja-stack"
                className="font-mono text-xs tracking-widest text-accent uppercase"
              >
                {projectPage.stack}
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-sm text-fg"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="sekcja-linki">
              <h2
                id="sekcja-linki"
                className="font-mono text-xs tracking-widest text-accent uppercase"
              >
                {projectPage.links}
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                {links.map(([key, icon]) => (
                  <Button
                    key={key}
                    href={project[key]}
                    variant="outline"
                    size="sm"
                    icon={icon}
                    iconPosition="start"
                    external
                  >
                    {projectCard.links[key]}
                  </Button>
                ))}
                {!project.repo && (
                  <span className="inline-flex items-center gap-2 text-sm text-subtle">
                    <Icon name="lock" className="size-4" />
                    {projectCard.privateCode}
                  </span>
                )}
              </div>
            </section>
          </div>

          <aside className="mt-16 rounded-2xl border border-accent/30 bg-accent-soft p-6 sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight">
              {projectPage.cta.title}
            </h2>
            <p className="mt-3 text-fg/85">{projectPage.cta.text}</p>
            <div className="mt-6">
              <Button href={mailtoHref} icon="mail" iconPosition="start">
                {projectPage.cta.button}
              </Button>
            </div>
          </aside>
        </article>

        {related.length > 0 && (
          <section
            aria-labelledby="inne-projekty"
            className="border-t border-border bg-surface/40"
          >
            <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <h2 id="inne-projekty" className="text-2xl font-semibold tracking-tight">
                  {projectPage.related}
                </h2>
                <Link
                  href="/#projekty"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline"
                >
                  {projectPage.backToProjects}
                  <Icon name="arrowRight" className="size-4" />
                </Link>
              </div>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <CompactProjectCard
                      project={item}
                      labels={projectCard}
                      href={projectPath(item)}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

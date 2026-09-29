import { projectCard, projectsSection } from "@/content/pl";
import { projects } from "@/data/projects";
import { getProjectsByGroup, projectPath } from "@/lib/projects";
import CompactProjectCard from "@/components/ui/CompactProjectCard";
import Reveal from "@/components/ui/Reveal";

function Group({ id, eyebrow, title, lead, items, showImage, gridClass }) {
  if (items.length === 0) return null;
  return (
    <div id={id} className="scroll-mt-20">
      <p className="font-mono text-xs tracking-widest text-accent uppercase">{eyebrow}</p>
      <h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="mt-2 text-muted">{lead}</p>
      <ul className={`mt-8 grid gap-4 sm:grid-cols-2 ${gridClass}`}>
        {items.map((project) => (
          <Reveal as="li" key={project.slug}>
            <CompactProjectCard
              project={project}
              labels={projectCard}
              showImage={showImage}
              href={project.page ? projectPath(project) : undefined}
            />
          </Reveal>
        ))}
      </ul>
    </div>
  );
}

export default function MoreProjects() {
  const { casual, course } = projectsSection;

  return (
    <section
      aria-label={`${casual.title}, ${course.title}`}
      className="border-t border-border bg-surface/40"
    >
      <div className="mx-auto max-w-6xl space-y-20 px-4 py-20 sm:px-6 sm:py-24">
        <Group
          {...casual}
          items={getProjectsByGroup(projects, "casual")}
          gridClass="lg:grid-cols-2"
        />
        <Group
          {...course}
          items={getProjectsByGroup(projects, "course")}
          showImage
          gridClass="lg:grid-cols-3"
        />
      </div>
    </section>
  );
}

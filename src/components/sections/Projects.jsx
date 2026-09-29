import { projectCard, projectsSection } from "@/content/pl";
import { projects } from "@/data/projects";
import { getProjectsByGroup, projectPath } from "@/lib/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

export default function Projects() {
  const mainProjects = getProjectsByGroup(projects, "main");

  return (
    <section
      id={projectsSection.id}
      aria-labelledby="projects-title"
      className="border-t border-border"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
        <SectionHeading
          id="projects-title"
          eyebrow={projectsSection.eyebrow}
          title={projectsSection.title}
          lead={projectsSection.lead}
        />
        <ul className="mt-12 grid gap-5 md:grid-cols-2">
          {mainProjects.map((project) => (
            <Reveal as="li" key={project.slug}>
              <ProjectCard
                project={project}
                labels={projectCard}
                href={projectPath(project)}
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

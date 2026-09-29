import { site } from "@/content/pl";
import { projects } from "@/data/projects";
import { getProjectPages, projectPath } from "@/lib/projects";

export default function sitemap() {
  const lastModified = new Date();
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    ...getProjectPages(projects).map((project) => ({
      url: `${site.url}${projectPath(project)}`,
      lastModified,
      changeFrequency: "monthly",
      priority: project.group === "main" ? 0.8 : 0.5,
    })),
  ];
}

export const GROUPS = ["main", "casual", "course"];
export const STATUSES = ["production", "demo", "own", "archived"];
export const CATEGORIES = ["business", "automation", "ai", "web"];

function compareProjects(a, b) {
  const aArchived = a.status === "archived";
  const bArchived = b.status === "archived";
  if (aArchived !== bArchived) return aArchived ? 1 : -1;
  return a.order - b.order;
}

export function getProjectsByGroup(projects, group) {
  return projects.filter((p) => p.visible && p.group === group).sort(compareProjects);
}

export function countProduction(projects) {
  return projects.filter((p) => p.visible && p.status === "production").length;
}

export const PROJECT_PAGE_GROUPS = ["main", "casual"];

export function projectPath(project) {
  return `/projekty/${project.page}`;
}

export function getProjectPages(projects) {
  return projects.filter(
    (p) => p.visible && p.page && PROJECT_PAGE_GROUPS.includes(p.group),
  );
}

export function getProjectByPage(projects, page) {
  return getProjectPages(projects).find((p) => p.page === page) ?? null;
}

/** Other projects to suggest on a project page: same group first, then the rest. */
export function getRelatedProjects(projects, current, limit = 3) {
  const candidates = getProjectPages(projects).filter((p) => p.slug !== current.slug);
  const sameGroup = candidates
    .filter((p) => p.group === current.group)
    .sort((a, b) => a.order - b.order);
  const others = candidates
    .filter((p) => p.group !== current.group)
    .sort((a, b) => a.order - b.order);
  return [...sameGroup, ...others].slice(0, limit);
}

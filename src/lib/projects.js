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

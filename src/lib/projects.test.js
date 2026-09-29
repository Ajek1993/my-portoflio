import { describe, expect, it } from "vitest";
import {
  countProduction,
  getProjectByPage,
  getProjectPages,
  getProjectsByGroup,
  getRelatedProjects,
  projectPath,
} from "./projects";

const sample = [
  { slug: "a", group: "main", order: 2, visible: true, status: "production" },
  { slug: "b", group: "main", order: 1, visible: true, status: "archived" },
  { slug: "c", group: "main", order: 3, visible: true, status: "own" },
  { slug: "d", group: "main", order: 0, visible: false, status: "production" },
  { slug: "e", group: "casual", order: 1, visible: true, status: "production" },
];

describe("getProjectsByGroup", () => {
  it("returns only visible projects of the group", () => {
    const slugs = getProjectsByGroup(sample, "main").map((p) => p.slug);
    expect(slugs).not.toContain("d");
    expect(slugs).not.toContain("e");
  });

  it("sorts by order and puts archived projects last", () => {
    expect(getProjectsByGroup(sample, "main").map((p) => p.slug)).toEqual([
      "a",
      "c",
      "b",
    ]);
  });
});

describe("countProduction", () => {
  it("counts visible production projects across groups", () => {
    expect(countProduction(sample)).toBe(2);
  });
});

describe("project pages", () => {
  const withPages = [
    { slug: "a", page: "strona-a", group: "main", order: 1, visible: true },
    { slug: "b", page: "strona-b", group: "main", order: 2, visible: true },
    { slug: "c", page: "strona-c", group: "casual", order: 1, visible: true },
    { slug: "d", page: "strona-d", group: "main", order: 3, visible: false },
    { slug: "e", page: null, group: "course", order: 1, visible: true },
  ];

  it("builds the Polish project path", () => {
    expect(projectPath(withPages[0])).toBe("/projekty/strona-a");
  });

  it("lists only visible main and casual projects with a page", () => {
    expect(getProjectPages(withPages).map((p) => p.slug)).toEqual(["a", "b", "c"]);
  });

  it("finds a project by page slug and ignores hidden ones", () => {
    expect(getProjectByPage(withPages, "strona-b").slug).toBe("b");
    expect(getProjectByPage(withPages, "strona-d")).toBeNull();
  });

  it("suggests related projects from the same group first", () => {
    expect(getRelatedProjects(withPages, withPages[0], 2).map((p) => p.slug)).toEqual([
      "b",
      "c",
    ]);
  });
});

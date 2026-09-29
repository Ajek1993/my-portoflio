import { describe, expect, it } from "vitest";
import { countProduction, getProjectsByGroup } from "./projects";

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
    expect(getProjectsByGroup(sample, "main").map((p) => p.slug)).toEqual(["a", "c", "b"]);
  });
});

describe("countProduction", () => {
  it("counts visible production projects across groups", () => {
    expect(countProduction(sample)).toBe(2);
  });
});

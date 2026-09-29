import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import {
  CATEGORIES,
  GROUPS,
  PROJECT_PAGE_GROUPS,
  STATUSES,
  getProjectsByGroup,
} from "@/lib/projects";
import { projects } from "./projects";

const PUBLIC_REPOS = [
  "Demo-RentalToDoApp",
  "TombRaiderSite",
  "TranscriptionApp",
  "BriefMaker",
  "DajSuchara",
  "zoom-clone",
  "facebook-copy",
  "Fleet_Manager",
  "OddajRzeczy",
  "Best_Shop",
  "Car-Sharing",
].map((name) => `https://github.com/Ajek1993/${name}`);

const REQUIRED_STRINGS = ["slug", "name", "summary"];

describe("projects data", () => {
  it.each(projects.map((p) => [p.slug, p]))("%s has valid required fields", (_, p) => {
    for (const key of REQUIRED_STRINGS) {
      expect(typeof p[key], key).toBe("string");
      expect(p[key].length, key).toBeGreaterThan(0);
    }
    expect(p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    expect(GROUPS).toContain(p.group);
    expect(STATUSES).toContain(p.status);
    expect(CATEGORIES).toContain(p.category);
    expect(Number.isFinite(p.order)).toBe(true);
    expect(typeof p.visible).toBe("boolean");
    expect(Array.isArray(p.stack) && p.stack.length > 0).toBe(true);
  });

  it("uses unique slugs", () => {
    const slugs = projects.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("uses unique order within each group", () => {
    for (const group of GROUPS) {
      const orders = projects.filter((p) => p.group === group).map((p) => p.order);
      expect(new Set(orders).size, group).toBe(orders.length);
    }
  });

  it("main and casual projects describe problem, solution and outcome", () => {
    for (const p of projects.filter((p) => p.group !== "course")) {
      for (const key of ["problem", "solution", "outcome"]) {
        expect(typeof p[key], `${p.slug}.${key}`).toBe("string");
      }
    }
  });

  it("points images at existing files in /public", () => {
    for (const p of projects.filter((p) => p.image)) {
      expect(p.image.startsWith("/"), p.slug).toBe(true);
      expect(existsSync(path.join(process.cwd(), "public", p.image)), p.image).toBe(true);
    }
  });

  it("links only public repositories", () => {
    for (const p of projects.filter((p) => p.repo)) {
      expect(PUBLIC_REPOS, p.slug).toContain(p.repo);
    }
  });

  it("uses https for external links", () => {
    for (const p of projects) {
      for (const key of ["repo", "live", "demo"]) {
        if (p[key]) expect(p[key], `${p.slug}.${key}`).toMatch(/^https:\/\//);
      }
    }
  });

  it("gives every main and casual project a unique Polish page slug", () => {
    const withPages = projects.filter((p) => PROJECT_PAGE_GROUPS.includes(p.group));
    for (const p of withPages) {
      expect(p.page, p.slug).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
    }
    const pages = withPages.map((p) => p.page);
    expect(new Set(pages).size).toBe(pages.length);
  });

  it("keeps the agreed order of main projects", () => {
    expect(getProjectsByGroup(projects, "main").map((p) => p.slug)).toEqual([
      "rental-orders",
      "home-budget",
      "car-service-schedule",
      "bruxa-gaming",
      "apartment-kabaty",
      "allegro-catalog",
      "epirejestr",
      "transcription-tool",
    ]);
  });
});

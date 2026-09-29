import { describe, expect, it } from "vitest";
import { hero } from "@/content/pl";
import { pluralPl } from "./plural";

const FORMS = ["aplikacja", "aplikacje", "aplikacji"];

describe("pluralPl", () => {
  it.each([
    [1, "aplikacja"],
    [2, "aplikacje"],
    [4, "aplikacje"],
    [5, "aplikacji"],
    [12, "aplikacji"],
    [14, "aplikacji"],
    [22, "aplikacje"],
    [0, "aplikacji"],
  ])("%i -> %s", (n, expected) => {
    expect(pluralPl(n, FORMS)).toBe(expected);
  });
});

describe("hero.productionCount", () => {
  it("builds a grammatical sentence", () => {
    expect(hero.productionCount(5)).toBe("5 aplikacji używanych na co dzień");
    expect(hero.productionCount(3)).toBe("3 aplikacje używane na co dzień");
  });
});

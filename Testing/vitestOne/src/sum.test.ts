import sum from "./sum.js";
import { describe, expect, it } from "vitest";

describe("#sum", () => {
  it("returns 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });

  it("returns same number with one number", () => {
    expect(sum(4)).toBe(4);
  });

  it("returns number 6 with 1, 2, 3", () => {
    expect(sum(1, 2, 3)).toBe(6);
  });
});

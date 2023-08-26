import { describe, expect, it } from "vitest";

describe("index", () => {
  it("passes in CI", () => {
    expect(1).toBe(2);
  });
});

import { sumClamp } from "../src/sumClamp";

describe("sumClamp", () => {
  it("should sum to zero", () => {
    expect( sumClamp([], 10)).toBe(0);
  });

  it("should sum up to zero from some numbers", () => {
     expect( sumClamp( [5, 5, 5, 5], 10)).toBe(2);
  })
})
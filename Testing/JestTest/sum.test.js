const {sum, addOne} = require("./sum");


test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("should add one", () => {
  expect(addOne(4)).toBe(5);
});

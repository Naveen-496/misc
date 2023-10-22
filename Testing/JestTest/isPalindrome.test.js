const { isPalindrome } = require("./isPalindrome");

test("should return true", () => {
  expect(isPalindrome("tabt")).toBe(false);
});

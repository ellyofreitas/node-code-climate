const sum = require("./sum");

test("should be sum correctly", () => {
  const result = sum(1, 1);

  expect(result).toBe(2);
});

test("should be throw error when not pass a", () => {
  expect(() => sum()).toThrow(new TypeError('a must be required'));
});

test("should be throw error when not pass b", () => {
  expect(() => sum(1)).toThrow(new TypeError('b must be required'));
});

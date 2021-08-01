const calc = require('./calc');

describe('calc', () => {
  test("should be throw error when not pass op", () => {
    expect(() => calc()).toThrow(new TypeError('op must be required'));
  });

  test("should be throw error when not pass a", () => {
    expect(() => calc('+')).toThrow(new TypeError('a must be required'));
  });

  test("should be throw error when not pass b", () => {
    expect(() => calc('+', 1)).toThrow(new TypeError('b must be required'));
  });

  test("should be sum", () => {
    const result = calc('+', 1, 1);

    expect(result).toBe(2);
  });
})

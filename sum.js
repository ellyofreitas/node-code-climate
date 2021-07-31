module.exports = (a, b) => {
  if (!a) throw new TypeError('a must be required')
  if (!b) throw new TypeError('b must be required')

  return a + b;
};

const sum = require('./sum');
const sub = require('./sub');
const mut = require('./mut');
const assert = require('./assert');

module.exports = (op, a, b) => {
  assert(!!op, 'op must be required');
  assert(!!a, 'a must be required');
  assert(!!b, 'b must be required');

  switch (op) {
    case '+':
      return sum(a, b);
    case '-':
      return sub(a, b);
    case '*':
      return mut(a, b);
    default:
      throw new Error('op not implemented')
  }
}

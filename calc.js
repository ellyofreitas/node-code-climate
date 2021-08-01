const sum = require('./sum');
const sub = require('./sub');
const mut = require('./mut');
const div = require('./div');
const assert = require('./assert');

module.exports = (op, a, b) => {
  assert(!!op, 'op must be required');
  assert(!!a, 'a must be required');
  assert(!!b, 'b must be required');

  if (op === '+') {
    return sum(a, b);
  }
  if (op === '-') {
    return sub(a, b);
  }
  if (op === '*') {
    return mut(a, b);
  }
  if (op === '/') {
    return div(a, b);
  }

  throw new Error('op not implemented')
}

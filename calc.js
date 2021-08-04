const sum = require('./sum');
const sub = require('./sub');
const mut = require('./mut');
const div = require('./div');
const assert = require('./assert');

module.exports = (op, a, b) => {
  assert(!!op, 'op must be required');

  if (op === '+') {
    if (!a) throw new Error('a must be required')
    if (!b) throw new Error('b must be required')
    return sum(a, b);
  }
  if (op === '-') {
    if (!a) throw new Error('a must be required')
    if (!b) throw new Error('b must be required')
    return sub(a, b);
  }
  if (op === '*') {
    if (!a) throw new Error('a must be required')
    if (!b) throw new Error('b must be required')
    return mut(a, b);
  }
  if (op === '/') {
    if (!a) throw new Error('a must be required')
    if (!b) throw new Error('b must be required')
    return div(a, b);
  }

  throw new Error('op not implemented')
}

const assert = require('./assert');

module.exports = (a, b) => {
  assert(!a, 'a must be required');
  assert(!b, 'b must be required');
}

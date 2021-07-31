const checkParams = require('./check-params');

module.exports = (a, b) => {
  checkParams(a, b)

  return a + b;
};

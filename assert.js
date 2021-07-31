module.exports = (conditional, message) => {
  if (conditional) throw new Error(message)
}

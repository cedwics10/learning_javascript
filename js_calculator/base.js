function isNumber (n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

function isNotNumber (n) {
  return !isNumber(n)
}
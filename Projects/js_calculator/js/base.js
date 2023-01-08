function isInt (n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}
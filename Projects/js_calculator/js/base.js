function isFloat(val) {
  var floatRegex = /^-?\d+(?:[.,]\d*?)?$/;
  if (!floatRegex.test(val))
    return false;

  val = parseFloat(val);
  if (isNaN(val))
    return false;
  return true;
}

function isInt(val) {
  var intRegex = /^-?\d+$/;
  if (!intRegex.test(val))
    return false;

  var intVal = parseInt(val, 10);
  return parseFloat(val) == intVal && !isNaN(intVal);
}
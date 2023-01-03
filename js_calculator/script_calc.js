// créer la fonction supprimer un caractère
resetGlobals()

function resetCalculator() {
  resetGlobals()
  document.getElementById('calc-operation').innerText = '0'
  document.getElementById('calc-typed').innerText = '0'
  console.log('Reset calculator')
}

function sCharAlreadyExists(new_symbol) {
  lastExpression = calcExpression.slice(-1)
  numberSpecialChars = specialSymbols.length
  console.log(new_symbol)

  if (lastExpression == []) return false
  if (!specialSymbols.indexOf(new_symbol)) return false

  let key = 0
  while (key < numberSpecialChars) {
    if (lastExpression.includes(specialSymbols[key])) return true
    key++
  }
  return false
}

function specSymbolFirst(new_symbol) {
  if (calcExpression.length > 0) {
    return false
  }

  if (specialSymbols.indexOf(new_symbol) == '-1') {
    return false
  }
  return true
}

function specSymbolRepeated(new_symbol) {
  if (!specialSymbols.indexOf(new_symbol)) return false

  currentSign = calcExpression.slice(-1)

  if (currentSign.length > 0) currentSign = currentSign[0]
  else return false

  if (!specialSymbols.includes(new_symbol)) return false

  for (key = 1; key < specialSymbols.length; key++) {
    if (currentSign.includes(specialSymbols[key])) {
      return true
    }
  }
  return false
}

function wrongSyntaxeWith(new_symbol) {
  previous = calcExpression.slice(-1);
  if (specSymbolFirst(new_symbol)) return true
  if (new_symbol == '.' && isDecNumber.test(previous)) return true
  if (specSymbolRepeated(new_symbol)) return true
  return false
}

function doConcatenate(new_symbol) {
  previous = calcExpression.slice(-1);
  if (new_symbol == '.' && isInt(previous)) return true
  if (isInt(new_symbol) && !isInt(previous)) return false
  if (!isInt(new_symbol) && isInt(previous)) return false
  return true
}

function addSymbol(character) {
  if (wrongSyntaxeWith(character)) return true
  if (doConcatenate(character))
    calcExpression[calcExpression.length - 1] += character
  else calcExpression.push(character)

  showComputation()
}

function removeASymbol() {
  let lkeyCalcExpr = calcExpression.length - 1;

  if (lkeyCalcExpr == -1) return false;
  if (lkeyCalcExpr == 0 && calcExpression[lkeyCalcExpr].length == 1) {
    resetCalculator()
    showComputation(true)
  } else if (calcExpression[lkeyCalcExpr].length == 1) {
    calcExpression.length = lkeyCalcExpr;
  } else {
    lenLastExpr = calcExpression[lkeyCalcExpr].length;
    calcExpression[lkeyCalcExpr] = calcExpression[lkeyCalcExpr].substring(0, lenLastExpr - 1);
  }
  showComputation();
}

function altSign() {
  lastkeyCalcExpression = calcExpression.length - 1;
  if (
    isIntOrDec.test(calcExpression[lastkeyCalcExpression]) &&
    altExpr.includes(calcExpression[lastkeyCalcExpression - 1])
  ) {
    let CurrentSign = calcExpression[lastkeyCalcExpression - 1];
    KeyCurrentSign = Object.keys(altExpr).filter(function (key) {
      return altExpr[key] === CurrentSign
    })[0];
    KeyCurrentSign = (parseInt(KeyCurrentSign) + 1) % 2;
    calcExpression[lastkeyCalcExpression - 1] = altExpr[KeyCurrentSign];
    showComputation()
  }
}

function MakeResultDisplay() {
  lastkeyCalcExpression = calcExpression.length - 1
  if (isInt(calcExpression[lastkeyCalcExpression])) return calcExpression[lastkeyCalcExpression]
  if (displayedResult != emptyNumber) return displayedResult
  if (calcExpression.length == 0) return '0';
  return calcExpression.join(' ')
}

function showComputation(delete_f_epr = false) {
  document.getElementById('calc-operation').innerHTML = (calcExpression.length > 0) ? calcExpression.join(' ') : '0';
  displayedResult = MakeResultDisplay();
  document.getElementById('calc-typed').innerHTML = displayedResult
  console.log(calcExpression)
}
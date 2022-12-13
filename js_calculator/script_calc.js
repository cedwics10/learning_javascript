const specialSymbols = ['.', '-', '*', '+', '%', '/']
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
  console.log(new_symbol)
  for (key = 1; key < specialSymbols.length; key++) {
    if (currentSign.includes(specialSymbols[key])) {
      return true
    }
  }
  return false
}

function wrongSyntaxeWith(new_symbol) {
  if (specSymbolFirst(new_symbol)) return true
  if (specSymbolRepeated(new_symbol)) return true // OK
  return false
}

function doNotConcatenate(new_symbol) {
  if (isNumber(new_symbol) && !isNumber(calcExpression.slice(-1))) return false
  if (!isNumber(new_symbol) && isNumber(calcExpression.slice(-1))) return false
  return true
}

function addSymbol(character) {
  if (wrongSyntaxeWith(character)) return true
  if (doNotConcatenate(character))
    calcExpression[calcExpression.length - 1] += character
  else calcExpression.push(character)

  showComputation()
}

function removeASymbol() {
  if (calcExpression.length == 0) return false
  let lkeyCalcExpr = calcExpression.length - 1;
  if (calcExpression[lkeyCalcExpr].length <= 1)
    calcExpression.length = lkeyCalcExpr;
  else
    calcExpression[lkeyCalcExpr].substring(0, calcExpression[lkeyCalcExpr] - 1)
  if (calcExpression.length == 0) {
    resetCalculator();
  }

  showComputation();
}

function MakeResultDisplay() {
  lastkeyCalcExpression = calcExpression.length - 1
  if (
    lastkeyCalcExpression > 0 &&
    isNumber(calcExpression[lastkeyCalcExpression])
  )
    return calcExpression[lastkeyCalcExpression]
  if (displayedResult !== '0') return displayedResult
  if (calcExpression.length == 0) return '0';
  return calcExpression.join(' ')
}

function showComputation() {
  document.getElementById('calc-operation').innerHTML = (calcExpression.length > 0) ? calcExpression.join(' ') : '0';

  displayedResult = MakeResultDisplay()
  document.getElementById('calc-typed').innerHTML = displayedResult
}
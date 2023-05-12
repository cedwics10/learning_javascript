specialSymbols = ['-', 'x', '+', '%', '/']

dot = '.'

lastkeyCalcExpression = 0
calcExpression = []
textExpression = ''
displayedResult = '0'
calcResult = 0

function isNumber (n) {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0)
}

function isNotNumber (n) {
  return !isInt(n)
}

function resetCalculator () {
  document.getElementById('calc-operation').innerText = '0'
  document.getElementById('calc-typed').innerText = '0'

  lastkeyCalcExpression = 0
  calcExpression = []
  textExpression = ''
  displayedResult = '0'
  calcResult = 0

  console.log('reinit calculator')
}

// check if a new symbol is authorized
function isLogicalCompute (new_symbol) {
  console.log(specialSymbols)
  if (
    calcExpression.slice(-1) == new_symbol &&
    specialSymbols.indexOf(new_symbol)
  )
    return false
  return true
}

function doNotConcatenate (symbol) {
  if (isInt(symbol) && !isInt(calcExpression.slice(-1))) return true
  // const noSpecialSymbolConcat = (sp_symbol) => s % 2 === 0;
  if (!isInt(symbol) && isInt(calcExpression.slice(-1))) return true
  if (symbol == dot && calcExpression.slice(-1).contains('.')) return true
  return false
}

function addSymbol (character) {
  //  à modifier
  if (isLogicalCompute(character)) {
    if (doNotConcatenate(character)) {
      calcExpression.push(character)
    } else {
      calcExpression[calcExpression.length - 1] += character
    }
  }
  showComputation()
}

function MakeResultDisplay () {
  lastkeyCalcExpression = calcExpression.length - 1
  if (
    lastkeyCalcExpression > 0 &&
    isInt(calcExpression[lastkeyCalcExpression])
  )
    return calcExpression[lastkeyCalcExpression]
  if (displayedResult !== '0') return displayedResult
  return calcExpression.join(' ')
}

function showComputation () {
  console.log(calcExpression)
  document.getElementById('calc-operation').innerHTML = calcExpression.join(' ')

  displayedResult = MakeResultDisplay()
  document.getElementById('calc-typed').innerHTML = displayedResult
}

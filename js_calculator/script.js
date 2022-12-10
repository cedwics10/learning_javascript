specialSymbols = ['-', 'x', '+', '%', ''];

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
  return !isNumber(n)
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
  let forbidden_double = ['+', '-', '/']
  if (
    calcExpression.slice(-1) == new_symbol &&
    forbidden_double.indexOf(new_symbol)
  )
    return false
  if (
    calcExpression.slice(-1) == new_symbol &&
    forbidden_double.indexOf(new_symbol)
  )
    return false
  return true
}

function doNotConcatenate (symbol) {
  if (isNumber(symbol) && !isNumber(calcExpression.slice(-1))) return true
  if (!isNumber(symbol) && isNumber(calcExpression.slice(-1))) return true
  if (symbol == dot && calcExpression.slice(-1).contains('.')) return true
  return false
}

function doNotAddSymbol (symbol) {
  if (symbol == dot && calcExpression.slice(-1).contains('.')) return true
  
}

function addSymbol (character) {
  //  à modifier
  if (isLogicalCompute(character)) {
    if (doNotAddSymbol(character)) {
    } else if (doNotConcatenate(character)) {
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
    isNumber(calcExpression[lastkeyCalcExpression])
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

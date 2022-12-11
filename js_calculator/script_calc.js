specialSymbols = ['.', '-', '*', '+', '%', '/']
resetGlobals()

function resetCalculator () {
  resetGlobals()
  document.getElementById('calc-operation').innerText = '0'
  document.getElementById('calc-typed').innerText = '0'
  console.log('Reset calculator')
}

function sCharAlreadyExists (new_symbol) {
  
  lastExpression = calcExpression.slice(-1);
  numberSpecialChars = specialSymbols.length
  console.log(new_symbol);
  
  if(lastExpression == []) return false;

  if(!specialSymbols.indexOf(new_symbol)) return false;


  let key = 0;
  while(key < numberSpecialChars) {
    if (lastExpression.includes(specialSymbols[key]))
      return true
    key++;
  }
  return false
}

function specSymbolFirst (new_symbol) {
  console.log(calcExpression.length)
  if (calcExpression.length > 0) return false
  console.log(new_symbol)
  if (!specialSymbols.indexOf(new_symbol)) return false
  return true
}

function specSymbolRepeated (new_symbol) {
  console.log(new_symbol)
  if (!specialSymbols.indexOf(new_symbol)) return false
  currentSign = calcExpression.slice(-1)
  console.log(currentSign)
  for (key = 1; key < specialSymbols.length; key++) {
    if (currentSign.includes(specialSymbols[key])) {
      return true
    }
  }
  return false
}

function wrongSyntaxeWith (new_symbol) {
  // if (specSymbolFirst(new_symbol)) return true
  // if (specSymbolRepeated(new_symbol)) return true
  if (sCharAlreadyExists(new_symbol)) return true
  return false
}

function doNotConcatenate (new_symbol) {
  if (isNumber(new_symbol) && !isNumber(calcExpression.slice(-1))) return false
  if (!isNumber(new_symbol) && isNumber(calcExpression.slice(-1))) return false
  return true
}

function addSymbol (character) {
  if (wrongSyntaxeWith(character)) return true
  if (doNotConcatenate(character))
    calcExpression[calcExpression.length - 1] += character
  else calcExpression.push(character)
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
  document.getElementById('calc-operation').innerHTML = calcExpression.join(' ')

  displayedResult = MakeResultDisplay()
  document.getElementById('calc-typed').innerHTML = displayedResult
}

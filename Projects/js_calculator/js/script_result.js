function computeResult() {
	let strCalcExpression = calcExpression.join('');
	let result = Function(`'use strict'; return (${strCalcExpression})`)()
	console.log(result);
	if (isInt(result) || isFloat(result))
		result = parseFloat(parseFloat(result).toFixed(8)).toString();
	document.getElementById('calc-typed').innerHTML = result;
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
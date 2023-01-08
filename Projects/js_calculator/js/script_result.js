const regexBracTimes = /\(([^()]+)\)/;

function simpleCompute(exp) {
	try {
		result = Function(`'use strict'; return (${exp})`)()
	}
	catch (error) {
		console.error(error);
		result = false;
	}
	return result;
}

function prepareResult(expression) {
	if (!regexBracTimes.test(expression)) {
		return expression;
	}
	console.log('Entre parenthèses : ', regexBracTimes.test(expression));

	expression = expression.replace(regexBracTimes, function (match, p1) {
		return simpleCompute(p1);
	});
	console.log(expression);
	return prepareResult(expression);

}


function computeResult() {
	let result;
	let strCalcExpression = calcExpression.join('');
	strCalcExpression = prepareResult(strCalcExpression);

	result = simpleCompute(strCalcExpression);

	console.log(result);

	textResult = 'Syntax error';
	if (isInt(result) || isFloat(result)) {
		textResult = parseFloat(parseFloat(result).toFixed(8)).toString();
	}
	document.getElementById('calc-typed').innerHTML = textResult;
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
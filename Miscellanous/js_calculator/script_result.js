lienApiMath = 'http://api.mathjs.org/v4/?expr=';

async function computeResult(url = '', callback = '') {
	let mathUrl = lienApiMath + calcExpression.join('');
	let res = await fetch(mathUrl),
		ret = await res.text();
	document.getElementById('calc-typed').innerHTML = callback ? callback(ret) : ret;
}
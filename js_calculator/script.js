calcExpressions = [];
calcResult = 0;

function resetCalculator()
{
    document.getElementById('calc-operation').innerText = '0';
    document.getElementById('calc-typed').innerText = '0';
    
    calcExpressions = [];

    console.log('reinit calculator');
}


function addSymbol(character)
{
    calcExpressions.push(character);
    makeResult();
}

function removeSymbol()
{
    if(calcExpressions.length != 0)
        calcExpressions.length = calcExpressions.length - 1;
}

function makeResult()
{
    console.log(calcExpressions);
}
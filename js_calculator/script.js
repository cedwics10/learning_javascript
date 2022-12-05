calcExpressions = [];
calcResult = 0;

function resetCalculator()
{
    document.getElementById('calc-operation').innerText = '0';
    document.getElementById('calc-typed').innerText = '0';
    
    calcExpressions = [];

    console.log('reinit calculator');
}

// check if a new symbol is authorized
function isLogicalCompute(new_symbol)
{
    let forbidden_double = ['+', '-', '/'];
    if(calcExpressions.slice(-1) == new_symbol 
    && forbidden_double.indexOf(new_symbol))
        return false;
    return true;
}


function addSymbol(character)
{
    if(isLogicalCompute(character))
    {
        calcExpressions.push(character);
    }
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
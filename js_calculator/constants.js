const isIntOrDec=/([0-9]+\.)?([0-9]+)/;
const altExpr = ['+', '-'];
const specialSymbols = ['.', '-', '*', '+', '%', '/']


function resetGlobals() {
    globalThis.lastkeyCalcExpression = 0
    globalThis.calcExpression = []
    globalThis.textExpression = ''
    globalThis.displayedResult = '0'
    globalThis.calcResult = 0
    globalThis.emptyNumber = '0';
    globalThis.isDecNumber=/([0-9]+)\.([0-9]+)/;
    console.log('reinit calculator');
}
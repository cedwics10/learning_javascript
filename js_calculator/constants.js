function resetGlobals() {
    globalThis.lastkeyCalcExpression = 0
    globalThis.calcExpression = []
    globalThis.textExpression = ''
    globalThis.displayedResult = '0'
    globalThis.calcResult = 0

    console.log('reinit calculator');
}
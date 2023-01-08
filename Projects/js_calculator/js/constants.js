const isIntOrDec = /([0-9]+\.)?([0-9]+)/;
const altExpr = ['+', '-'];
const specialSymbols = ['.', '-', '*', '+', '%', '/']
const brackets = ['(', ')'];

let lastkeyCalcExpression = 0
let calcExpression = []
let textExpression = ''
let displayedResult = '0'
let calcResult = 0
let emptyNumber = '0';
let isDecNumber = /([0-9]+)\.([0-9]+)/;

const regexBracTimes = /\(([^()]+)\)/;
const regexMathForm = /[a-z]+\(([0-9\.]+)\)/;
const MathFormJS = {
    // 'exp': '',
    'sqrt': 'Math.sqrt',
    'log': 'Math.log'
};

function resetGlobals() {
    lastkeyCalcExpression = 0
    calcExpression = []
    textExpression = ''
    displayedResult = '0'
    calcResult = 0
    emptyNumber = '0';
    console.log('reinit calculator');
}

function resetCalculator() {
    resetGlobals()
    document.getElementById('calc-operation').innerText = '0'
    document.getElementById('calc-typed').innerText = '0'
    console.log('Reset calculator')
}
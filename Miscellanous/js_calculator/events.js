let resetBu = document.getElementById('resetButton');
resetBu.addEventListener('click', resetCalculator);

// (!!!) - find a better manner to do that maybe ?
let numbers = ['0', '1','2', '3', '4', '5', '6', '7', '8','9']
numbers.forEach(function(number) {
    document.getElementById('Button' + number)
    .addEventListener('click', (event) => {
        addSymbol(number);
    });
  });

const percentBu = document.getElementById('percentButton');
percentBu.addEventListener('click', (event) => addSymbol('%'));

const slashBu = document.getElementById('slashButton');
slashBu.addEventListener('click', (event) => addSymbol('/'));

const altSignBu = document.getElementById('altSignButton');
altSignBu.addEventListener('click', altSign);

const PlusBu = document.getElementById('ButtonPlus');
PlusBu.addEventListener('click', (event) => addSymbol('+'));

const MinusBu = document.getElementById('ButtonMinus');
MinusBu.addEventListener('click', (event) => addSymbol('-'));

const TimesBu = document.getElementById('ButtonTimes');
TimesBu.addEventListener('click', (event) => addSymbol('*'));

const DotBu = document.getElementById('ButtonDot');
DotBu.addEventListener('click', (event) => addSymbol('.'));

const RemoveBu = document.getElementById('ButtonRemove');
RemoveBu.addEventListener('click',removeASymbol);

const ReesultBu = document.getElementById('ButtonResult');
ReesultBu.addEventListener('click',computeResult);
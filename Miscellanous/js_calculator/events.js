let resetBu = document.getElementById('resetButton');
resetBu.addEventListener('click', resetCalculator);

// let numberBu = [];
// let numberBo = [];

// for (number = 0; number < 10; number++) {
//     numberBu.push(document.getElementById('Button' + number.toString()));
//     numberBu[number].addEventListener('click',
//         (event) => {
//             addSymbol(number.toString());
//         }
//     );
//     console.log(number.toString());
// }


for (number = 0; number <= 9; number++) {
    let numberBu = null;
    numberBu = document.getElementById('Button' + number.toString());
    console.log('Button' + number.toString());
    numberBu.addEventListener('click', () => {
        addSymbol(number.toString());
    });
    delete(numberBu);
}

console.log(number);

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

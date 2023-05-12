responseElement = document.querySelector('#response');
answerOne = document.querySelector('#btn-1');
answerTwo = document.querySelector('#btn-2');

answerOne.addEventListener('click',
    () => responseElement.classList.add('good_answer'));

answerTwo.addEventListener('click',
    () => responseElement.classList.add('bad_answer'));


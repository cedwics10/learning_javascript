const div = document.getElementById('bonjour');
div.addEventListener('mouseup', (e) => div.style.backgroundColor = 'blue');
div.addEventListener('mousedown', (e) => div.style.backgroundColor = 'red');
div.addEventListener('mouseenter', (e) => div.style.backgroundColor = 'green');
document.addEventListener('keypress', (e) => console.log(e.key)
);
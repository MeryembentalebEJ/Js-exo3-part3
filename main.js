let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let red = document.querySelector('#red');
let content = document.querySelector('p');

green.addEventListener('click', () => content.style.color = 'green');
blue.addEventListener('click', () => content.style.color = 'blue');
red.addEventListener('click', () => content.style.color = 'red');

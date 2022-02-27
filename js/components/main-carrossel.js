// Caixa de alerta Troll
const buttonRight = document.querySelector('.button-arrow.-right');
const buttonLeft = document.querySelector('.button-arrow.-left');
const elements = document.querySelector('.main-carrossel .elements');

let pixels = 0

buttonRight.addEventListener('click', () => {
    pixels -= 250
    elements.style = `transform: translateX(${pixels}px)`;
})

buttonLeft.addEventListener('click', () => {
    pixels += 250
    elements.style = `transform: translateX(${pixels}px)`;
})
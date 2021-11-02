const buttonPlus = document.querySelector('.button-plus');
const buttonMinus = document.querySelector('.button-minus');
const counter = document.querySelector('.counter__value');

buttonPlus.addEventListener('click', increaseCounter);
buttonMinus.addEventListener('click', decreaseCounter);

function increaseCounter() {
  counter.innerHTML++;
}
function decreaseCounter() {
  if(counter.innerHTML > 0) {
    counter.innerHTML--;
  }
}

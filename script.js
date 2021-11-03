const buttonPlus = document.querySelector('.button-plus');
const buttonMinus = document.querySelector('.button-minus');
const counter = document.querySelector('.counter__value');

const increaseCounter = () => counter.innerText = +counter.innerText + 1;

const decreaseCounter = () => {
  if (+counter.innerText > 0) {
    counter.innerText = +counter.innerText - 1;
  }
}

buttonPlus.addEventListener('click', increaseCounter);

buttonMinus.addEventListener('click', decreaseCounter);

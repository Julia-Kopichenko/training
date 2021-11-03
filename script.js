const buttonPlus = document.querySelector('.button-plus');
const buttonMinus = document.querySelector('.button-minus');
const counter = document.querySelector('.counter__value');

const increaseCounter = () => counter.innerHTML = +counter.innerHTML + 1;

const decreaseCounter = () => {
  if (+counter.innerHTML > 0) {
    counter.innerHTML = +counter.innerHTML - 1;
  }
}

buttonPlus.addEventListener('click', increaseCounter);

buttonMinus.addEventListener('click', decreaseCounter);

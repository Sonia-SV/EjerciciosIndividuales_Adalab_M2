'use strict';

//PARA CAMBIAR EL COLOR

const background = document.querySelector('.js-background');

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function oddEven(a) {
  return a % 2 === 0;
}

//PARA COGER LA ELECCIÓN

const selection = document.getElementById('mood');
const face = document.querySelector('.js-face');

function getSelectedOption() {
  let opt;
  for (let i = 0, len = selection.options.length; i < len; i++) {
    opt = selection.options[i];
    if (opt.selected === true) {
      break;
    }
  }
  return (face.innerHTML = opt.value);
}

//PARA ESCUCHAR EL BOTÓN

function getChangesDone() {
  console.log('Vale');
  getSelectedOption(selection);
  let randomNumber = getRandomNumber(0, 101);
  const numOddEven = oddEven(randomNumber);

  if (numOddEven === false) {
    background.classList.add('js-background-orange');
    background.classList.remove('js-background-yellow');
  } else {
    background.classList.add('js-background-yellow');
    background.classList.remove('js-background-orange');
  }
}
const button = document.querySelector('.update');

button.addEventListener('click', getChangesDone);

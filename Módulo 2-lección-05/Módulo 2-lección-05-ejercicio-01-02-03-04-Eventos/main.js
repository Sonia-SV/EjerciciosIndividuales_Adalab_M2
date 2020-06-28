'use strict';

//EJERCICO 1

//elemento HTML
const button = document.querySelector('.button');

//handler
function addText() {
  const paragraph = document.querySelector('.paragraph');
  paragraph.innerHTML = 'Me cambio porque hago cosas';
  button.innerHTML = 'Grasias Panamá';
}

// listener sobre el elemento
button.addEventListener('click', addText);

//EJERCICIO 2
const btn = document.querySelector('.btn');

function printName() {
  const userName = document.querySelector('.name');
  let name = userName.value;
  console.log(`Hola ${name}, bienvenida`);
}

btn.addEventListener('click', printName);

//EJERCICIO 3
const text = document.querySelector('.text1');
let count = 0;

function newParagraph() {
  if (count < 1) {
    count++;
    const pLabel = document.createElement('P');
    const newText = document.createTextNode(
      "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."
    );
    pLabel.appendChild(newText);

    document.querySelector('.container').appendChild(pLabel);
  }
}

text.addEventListener('mouseover', newParagraph);

//EJERCICIO 4
let background = document.querySelector('.scroll');
function scrollMove() {
  if (window.scrollY < 250) {
    background.classList.add('color1');
    background.classList.remove('color2');
  } else {
    background.classList.add('color2');
    background.classList.remove('color1');
  }
}

window.addEventListener('scroll', scrollMove);

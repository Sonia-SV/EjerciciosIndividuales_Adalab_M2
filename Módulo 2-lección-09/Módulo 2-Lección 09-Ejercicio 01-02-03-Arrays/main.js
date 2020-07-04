'use strict';

//EJERCICIO 1

let arr = [];

function get100Numbers(array) {
  for (let i = 0; i < 100; i++) {
    array.push([i + 1]);
  }
}
get100Numbers(arr);
//console.dir(arr);

//EJERCICIO2

function getReversed100Numbers(array) {
  array.reverse();
}

getReversed100Numbers(arr);
console.dir(arr);

//EJERCICIO 3

const lostNumbers = [4, 8, 15, 16, 23, 42];
let lostEvenNumbers = [];
let lost3Numbers = [];

function getEvenNumbers() {
  let index = 0;

  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 2 === 0) {
      lostEvenNumbers[index] = lostNumbers[i];
      index++;
    }
  }
}

function get3Numbers() {
  for (let i = 0; i < lostNumbers.length; i++) {
    if (lostNumbers[i] % 3 === 0) {
      lost3Numbers.push(lostNumbers[i]);
    }
  }
}

function bestLostNumber() {
  getEvenNumbers();
  get3Numbers();
  const result = lostEvenNumbers.concat(lost3Numbers);
  return result;
}

console.log(bestLostNumber());

//EJERCICIO 4
const tasks = [
  { name: 'Recoger setas en el campo', completed: true },
  { name: 'Comprar pilas', completed: true },
  { name: 'Poner una lavadora de blancos', completed: true },
  {
    name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
    completed: false,
  },
];

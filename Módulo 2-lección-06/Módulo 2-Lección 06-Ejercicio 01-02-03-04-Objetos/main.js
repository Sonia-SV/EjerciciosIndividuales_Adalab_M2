'use strict';

//EJERCICIO 1

const adalaber = {};
adalaber.name = 'Susana';
adalaber.age = 34;
adalaber.job = 'periodista';

const adalaber2 = {
  name: 'Rocío',
  age: 25,
  job: 'actriz',
};

const frase = document.querySelector('.p');

frase.innerHTML = `Mi nombre es ${adalaber.name}, tengo ${adalaber.age} años y soy ${adalaber.job}.</br> Yo soy ${adalaber2.name}, tengo ${adalaber2.age} años y soy ${adalaber2.job}.`;

//EJERCICIO 2

adalaber.run = 'estoy corriendo';
adalaber.runAMarathon = (distance) =>
  `${adalaber.run} una maratón de ${distance} kilometros`;

console.log(adalaber.runAMarathon(50));

//EJERCICIO 3
adalaber.sayHello = function () {
  return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}`;
};
console.log(adalaber.sayHello());

adalaber2.sayHello = function () {
  return `Mi nombre es ${this.name}, tengo ${this.age} y soy ${this.job}`;
};

console.log(adalaber2.sayHello());

// EJERCICIO 4

const button = document.querySelector('.btn');

function handleLog(ev) {
  console.log(ev);
}

button.addEventListener('click', handleLog);

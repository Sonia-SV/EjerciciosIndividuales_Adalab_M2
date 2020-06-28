'use strict';

//EJERCICIO 2

for (let i = 1; i <= 10; i++) {
  console.log('Voy por la vuelta' + i);
}

//EJERCICIO 3

let acc2 = 0;

for (let i = 0; i < 20; i++) {
  acc2 = acc2 + 2;
}

console.log('El resultado es ' + acc2);

//EJERCICIO 4

let hunterMoon = 2017;

for (let i = 1; i <= 15; i++) {
  hunterMoon = hunterMoon + 3;
  console.log('En el año ' + hunterMoon + ' habrá luna del cazador');
}

//EJERCICIO 5

const numbers = [23, 890, 98, 10, 5, 76];

let acc = 0;

for (let i = 0; i < numbers.length; i++) {
  acc += numbers[i];
  console.log(acc);
}

const numbersAverage = acc / numbers.length;

console.log(numbersAverage);

//EJERCICIO 6

//EJERCICIO 7

const adalabers = [
  {
    name: 'María',
    age: 29,
    job: 'diseñadora',
  },
  {
    name: 'Lucía',
    age: 31,
    job: 'ingeniera química',
  },
  {
    name: 'Susana',
    age: 34,
    job: 'periodista',
  },
  {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
  },
  {
    name: 'Inmaculada',
    age: 21,
    job: 'diseñadora',
  },
];

function countPeople(array) {
  return console.log('El número total de Adalabers es de ' + array.length);
}

function averageAge(array) {
  let acc = 0;
  for (let i = 0; i < array.length; i++) {
    acc += array[i].age;
  }
  const ageAverage = acc / array.length;

  return console.log(
    'La media de edad de las Adalabers es ' + ageAverage + ' años'
  );
}

function theYoungest(array) {
  let ages = [];
  for (let i = 0; i < array.length; i++) {
    if (i < array.length) {
      ages[i] = array[i].age;
    }
  }
  let youngest = Math.min(...ages);

  return console.log('La adalaber más joven tiene ' + youngest + ' años');
}

function countDesigners(array) {
  let design = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i].job === 'diseñadora') {
      design++;
    }
  }
  return console.log('El número de Adalabers diseñadoras es de ' + design);
}

countPeople(adalabers);
averageAge(adalabers);
theYoungest(adalabers);
countDesigners(adalabers);

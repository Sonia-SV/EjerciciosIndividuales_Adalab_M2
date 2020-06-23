"use strict";

//EJERCICO 1

function multiply(a, b) {
  return a * b;
}

const multiplyTry1 = multiply(3, 5);
console.log("multiplyTry1", multiplyTry1);

const multiplyTry2 = multiply(9, 15);
console.log("multiplyTry2", multiplyTry2);

const multiplyTry3 = multiply(900, 2);
console.log("multiplyTry3", multiplyTry3);

//EJERCICO 2

function average(a, b, c, d) {
  return (a + b + c + d) / 4;
}

const averageTry1 = average(1, 4, 6, 7);
console.log("averageTry1", averageTry1);

const averageTry2 = average(17, 64, 90, 42);
console.log("averageTry2", averageTry2);

const averageTry3 = average(77, 640, 9, 98);
console.log("averageTry3", averageTry3);

//EJERCICIO 3

function tax(a) {
  const taxAmount = a * 0.21;
  return `Precio sin IVA: ${a}, IVA ${taxAmount} y Total: ${a + taxAmount}`;
}

let taxTry = tax(34);
console.log(taxTry);

//EJERCICIO 4

function oddEven(a) {
  return a % 2 === 0;
}

const parimpar = oddEven(5);
console.log("Is this number even? " + parimpar);

//EJERCICIO 5

function getEl(className) {
  return document.querySelector(className);
}
const btnEl = getEl(".btn");
btnEl.innerHTML = "botón h3";
btnEl.classList.add("button");

const btnEl1 = getEl(".btn1");
btnEl1.innerHTML = "botón div";
btnEl1.classList.add("button");

const btnEl2 = getEl(".btn2");
btnEl2.innerHTML = "botón p";
btnEl2.classList.add("button");

//EJERCICIO 6

function getEl(selector) {
  const sel = document.querySelector(selector);
  if (sel) {
    console.log(`El selector ${selector} sí existe, continúa`);
    return sel;
  } else {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
}

const prueba = getEl("Clase Fantasma");
const prueba2 = getEl("btn");
const prueba3 = getEl(".btn");

//EJERCICIO 7

const string = getEl(".number");
const num = parseInt(string.innerHTML);
const numOddEven = oddEven(num);
if (numOddEven === false) {
  console.log(`${num} es un número Impar`);
} else {
  console.log(`${num} es un número Par`);
}

//EJERCICIO 8

// modificamos una variable de ámbito global
let secretLetter = "y";
function mySecretLetter() {
  secretLetter = "x";
  return secretLetter;
}

console.log(secretLetter); // devuelve "y" porque está leyendo antes de la función
console.log(mySecretLetter()); // devuelve "x"

//EJERCICIO 9 (3 AGAIN)

const taxFreeAmount = (noTaxPrice) =>
  `Precio sin IVA: ${noTaxPrice}, IVA: ${noTaxPrice * 0.21} y Total: ${
    noTaxPrice + noTaxPrice * 0.21
  }`;

console.log(taxFreeAmount(25));

//EJERCICIO 10

function boxCalculator(borderBox, width, padding, borderSize) {
  if (borderBox === true) {
    return console.log(
      `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${width}px`
    );
  } else {
    return console.log(
      `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${
        width + padding + borderSize
      }px`
    );
  }
}

let boxSize = boxCalculator(false, 300, 120, 5);

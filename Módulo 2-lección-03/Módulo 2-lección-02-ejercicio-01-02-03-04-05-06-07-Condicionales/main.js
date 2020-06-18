"use strict";

//EJERCICO 2

const superWave = document.querySelector(".super-wave");

superWave.classList.add("highlight");

//EJERCICIO 3
const kiwis = 5;
const peras = 2;
const uvas = 4;

console.log(kiwis * 2 + peras * 3 + uvas * 0.5);

//EJERCICIO 4

const precio = 128;
const comensales = 9;
const shake = 2;
const todas = "Todas menos Ana ";
const Ana = "Ana ";
const moneda = "€";

const cuenta = [precio - shake] / comensales;

console.log(todas + cuenta + moneda);
console.log(Ana + (shake + cuenta) + moneda);

//EJERCICIO 5

const edad = 60;
const añoNormal = 365;
const añoBisiesto = 366;
const horas = 24;
const mediaDías = (añoNormal * 3 + añoBisiesto) / 4;
console.log(mediaDías * horas * edad);

//EJERCICIO 6

const adalaber = "Lola";
console.log("Hola " + adalaber + ", encantada de conocerte.");

//EJERCICIO 7

console.log(
  `Hola ${adalaber}, encantada de conocerte. Esto lo he interpolado.`
);

//EJERCICIO 8
const firstDogImage =
  "https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg";
const firstDogName = "Dina";

const secondDogImage =
  "https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg";
const secondDogName = "Luna";

const thirdDogImage =
  "https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg";
const thirdDogName = "Lana";

const perretes = document.querySelector(".perris");

perretes.innerHTML = `<ul class="lista"><li>${firstDogName} <img src="${firstDogImage}"></li><li>${secondDogName} <img src="${secondDogImage}"></li><li>${thirdDogName} <img src="${thirdDogImage}"></li></ul>`;

//EJERCICIO 9

const name = "Ricarda ";
const surname = "Aramburuzabala Pazcuato";
const allName = `${name} ${surname}`;

const parrafo = document.querySelector(".ejercicio9");

parrafo.innerHTML = `El nombre de mi compañera es ${allName}, y está compuesto por ${allName.length} caracteres.`;

//EJERCICIO 10

const userAge = document.querySelector(".age");
console.log(userAge.innerHTML);

const horasVividas = mediaDías * horas * parseInt(userAge.innerHTML);
console.log(`Has vivido ${horasVividas} horas`);

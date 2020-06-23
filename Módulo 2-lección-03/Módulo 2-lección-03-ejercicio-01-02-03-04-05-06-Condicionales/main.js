"use strict";

//EJERCICO 1

// avatar por defecto
const DEFAULT_AVATAR = "http://placehold.it/300x300";
// avatar que eligió el usuario al registrarse
let userAvatar = "http://www.fillmurray.com/300/300";

//solución

let img = document.querySelector(".user__avatar");

img.src = `${userAvatar || DEFAULT_AVATAR}`;

//EJERCICIO 2

let name = "Ana";
const message = document.querySelector(".ejercicio2");

if (name === "Sonia" || name === "Ana") {
  message.innerHTML = `Bienvenida, ${name}`;
} else {
  message.innerHTML = `Lo siento ${name} pero el usuario que has introducido no está registrado.`;
}

//EJERCICIO 3

let number = -1;

if (number === 0) {
  console.log("El número es 0");
} else if (number < 0) {
  console.log("El número es negativo");
} else if (number > 12 && number <= 18) {
  console.log("El número más 2 es mayor que 13 pero menor o igual que 20");
} else if (number > 20 && number < 50) {
  console.log("El número es mayor que 20 pero menor que 50");
} else {
  console.log("el número no es 123123125");
}

//EJERCICIO 4

let dog = 10;

if (dog <= 1) {
  console.log(`Tu perro tiene ${dog * 15} años de humano`);
} else if (dog <= 2) {
  console.log(`Tu perro tiene ${dog * 9} años de humano`);
} else {
  console.log(`Tu perro tiene ${dog * 5} años de humano`);
}

//EJERCICIO 5
const success = document.querySelector(".success");

const error = document.querySelector(".error");

const warning = document.querySelector(".warning");

let box = document.querySelector(".notificacion");

let title = document.querySelector(".notificacion__titulo");

let text = document.querySelector(".notificacion__texto");

let info = "warning";

if (info === "warning") {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
  box.classList.add("warning");
  box.classList.remove("error");
  box.classList.remove("success");
} else if (info === "error") {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
  box.classList.add("error");
  box.classList.remove("warning");
  box.classList.remove("success");
} else if (info === "success") {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
  box.classList.add("success");
  box.classList.remove("warning");
  box.classList.remove("error");
} else {
  box.classList.remove("warning");
  box.classList.remove("error");
  box.classList.remove("success");
}

//EJERCICIO 6
let avocados;
const avocadoPrice = 1.5;
const money = 0.5;

money >= avocadoPrice
  ? console.log(
      `Puedes comprar, ${(avocados = money / avocadoPrice)}kg de aguacate`
    )
  : console.log(
      `Eres muy pobre y no puedes comprar ${(avocados = 0)} aguacates`
    );

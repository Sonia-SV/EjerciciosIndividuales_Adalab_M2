"use strict";

//EJERCICO 1

document.querySelector("h1").innerHTML =
  "Esta página no es compatible con la versión actual de tu navegador. Por favor actualízalo a la versión más reciente";

//EJERCICIO 2
const adress1 = "Calle Mayor 4";
const adress2 = "Plaza de España 3";

//EJERCICIO 3
const paragraphElement = document.querySelector(".paragraph");
paragraphElement.innerHTML = paragraphElement.innerHTML + " mundo";

//EJERCICIO 4
const name1 = document.querySelector(".name1");
const name2 = document.querySelector(".name2");
const nameSelector = document.querySelector(".name");

nameSelector.innerHTML = nameSelector.innerHTML + " " + name2.innerHTML;

//EJERCICIO 5
const password = document.querySelector(".password");
password.innerHTML = "**";

//--

const listElement = document.querySelector(".list");

const content = '<li><a href="#">Home</a></li><li><a href="#">Contact</a></li>';

listElement.innerHTML = content;

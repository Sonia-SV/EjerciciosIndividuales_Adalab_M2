"use strict";

//EJERCICO 5

const body = document.querySelector(".body-js");
let key = event.key;

function changeBackgroundColor() {
  if (key === "r") {
    console.log("red");
    body.classList.add("red");
    body.classList.remove("purple");
  } else if (key === "m") {
    console.log("purple");
    body.classList.add("purple");
    body.classList.remove("red");
  } else {
    body.classList.remove("red");
    body.classList.remove("purple");
  }
}

document.addEventListener("keydown", changeBackgroundColor);

//EJERCICIO 6
const input = document.querySelector(".input-js");
const paragraph = document.querySelector(".p-js");
let count = 0;
function writteParagraph(event) {
  paragraph.innerHTML = event.currentTarget.value;
}

input.addEventListener("keydown", writteParagraph);

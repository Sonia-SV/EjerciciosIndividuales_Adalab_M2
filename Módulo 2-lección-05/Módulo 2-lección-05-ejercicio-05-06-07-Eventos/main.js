"use strict";

//EJERCICO 5

const body = document.querySelector(".body-js");

function changeBackgroundColor() {
  if (event.key === "r") {
    console.log("red");
    body.classList.add("red");
    body.classList.remove("purple");
  } else if (event.key === "m") {
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

function writteParagraph(event) {
  paragraph.innerHTML = event.currentTarget.value;
}

input.addEventListener("keydown", writteParagraph);

//EJERCICIO 7

// const button = document.querySelector(".button");

// function changeButtonColor() {
//   button.classList.toggle("button-js");
// }

// button.addEventListener("mousedown", changeButtonColor);
// button.addEventListener("mouseup", changeButtonColor);

//EJERCICIO 8
const newButton = document.querySelector(".newButton");
const button = document.querySelector(".button");

function changeButtonColor(event) {
  const selectedButton = event.currentTarget;

  selectedButton.classList.toggle("button-js");
}

button.addEventListener("mousedown", changeButtonColor);
newButton.addEventListener("mousedown", changeButtonColor);
button.addEventListener("mouseup", changeButtonColor);
newButton.addEventListener("mouseup", changeButtonColor);

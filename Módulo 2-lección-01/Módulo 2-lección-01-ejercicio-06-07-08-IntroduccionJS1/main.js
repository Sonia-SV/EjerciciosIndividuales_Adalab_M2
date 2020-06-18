"use strict";

//EJERCICO 6

const container = document.querySelector(".container");

const content =
  "<h1>Are you ready for the truth?</h1>" +
  "<img src='https://www.placecage.com/c/350/150'>" +
  "<p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>";

container.innerHTML = content;

//EJERCICO 7

const listElement = document.querySelector(".list");

const listParts = "<li>1</li><li>2</li><li>3</li>";

listElement.innerHTML = listParts;

//EJERCICIO 8

const button = document.querySelector(".buttonB");
button.classList.add("not");

'use strict';

const button1 = document.querySelector('.btn');
const button2 = document.querySelector('.btn2');

function pushButton(event) {
  const selectedButton = event.currentTarget;
  selectedButton.classList.toggle('button-active');
}

button1.addEventListener('click', pushButton);
button2.addEventListener('click', pushButton);

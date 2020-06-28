'use strict';

//SELECTORS...
const button = document.querySelector('.js-login-button');
const warning = document.querySelector('.error-wrapper');
const remaining = document.querySelector('.countdown');
const userInputName = document.querySelector('.js-user-name');
const userInputPassword = document.querySelector('.js-user-password');

//Number of user attemps
let attemps = 0;
//Object saved in BBDD with user information to compare with my form
const userInfo = {
  name: 'front23',
  password: 'bicicleta',
};

//FUNCTIONS
function login() {
  if (
    userInfo.name === userInputName.value &&
    userInfo.password === userInputPassword.value
  ) {
    warning.classList.add('hidden');
    remaining.classList.add('hidden');
    return alert('Estás dentro');
  } else if (userInputName.value === '' || userInputPassword.value === '') {
    return alert('Introduce tu usuario y contraseña');
  } else if (attemps < 3) {
    attemps++;
    console.log(`llevas ${attemps} intentos`);
    remaining.innerHTML = `Te quedan ${4 - attemps} intentos.`;
    return (
      warning.classList.remove('hidden') + remaining.classList.remove('hidden')
    );
  } else {
    warning.classList.add('hidden');
    remaining.innerHTML = `No te quedan intentos.`;
    return alert('Estás bloqueado');
  }
}

//LISTENERS

button.addEventListener('click', login);

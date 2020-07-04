'use strict';

//EJERCICIO 6

const resultados = document.querySelector('.js-result');
const img = document.querySelector('img');
const p = document.querySelector('p');
const button = document.querySelector('.js-search-button');

let objLength;

function getRandomDog() {
  fetch(`https://dog.ceo/api/breeds/list/all`)
    .then((breedsResponse) => breedsResponse.json())
    .then((breedsData) => {
      const breeds = Object.keys(breedsData.message);
      objLength = breeds.length - 1;
      console.log(objLength);
      return fetch(`https://api.rand.fun/number/integer?max=${objLength}`)
        .then((randomResoponse) => randomResoponse.json())
        .then((randomData) => {
          const randomNum = randomData.result;
          console.log(randomNum);
          const randomDog = breeds[randomNum];
          console.log(randomDog);
          return fetch(`https://dog.ceo/api/breed/${randomDog}/images/random`)
            .then((dogResponse) => dogResponse.json())
            .then((dogData) => {
              img.src = dogData.message;
              p.innerHTML = randomDog;
            });
        });
    });
}

button.addEventListener('click', getRandomDog);

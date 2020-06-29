'use strict';
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let random = getRandomNumber(10);

function writeThis(word, random) {
  for (let i = 0; i < random; i++) {
    console.log(word);
  }
}

writeThis('patata', random);
writeThis('aguacate', random);
writeThis('pizza', random);

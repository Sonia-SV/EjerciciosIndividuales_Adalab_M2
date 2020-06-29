'use strict';
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let randomNum = getRandomNumber(10);

function writeThis(word, randomNum) {
  for (let i = 0; i < randomNum; i++) {
    console.log(word);
  }
}

writeThis('patata', randomNum);
writeThis('aguacate', randomNum);
writeThis('pizza', randomNum);

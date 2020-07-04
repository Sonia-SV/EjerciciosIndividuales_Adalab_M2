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

const myWordList = [
  {
    text: 'Pencil',
    total: 6,
  },
  {
    text: 'Thermo',
    total: 2,
  },
  {
    text: 'TV',
    total: 8,
  },
  {
    text: 'Phone',
    total: 4,
  },
];

for (const values of myWordList) {
  let i = 0;
  console.log(values.text);
  console.log(values.total);
  console.log(myWordList.length);
  if (i < myWordList.length) {
    i++;
    writeThis(values.text[i], values.total[i]);
  }
}

// writeThis('patata', random);
// writeThis('aguacate', random);
// writeThis('pizza', random);

writeThis('patata', randomNum);
writeThis('aguacate', randomNum);
writeThis('pizza', randomNum);

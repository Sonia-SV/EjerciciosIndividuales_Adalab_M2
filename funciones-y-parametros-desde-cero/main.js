'use strict';

function writeThis(word, num) {
  for (let i = 0; i < num; i++) {
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

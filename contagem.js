// Escreva um algoritmo que mostre na tela a seguinte contagem: 1 2 3 4 5 6 7 8 Acabou!

const prompt = require('prompt-sync')();

let i = 1;

while (i <= 8) {
  console.log(i);
  i += 1;
}

console.log('Acabou!');

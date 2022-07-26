// Crie um algoritmo que receba 8 números e, ao final, mostre o maior.

const prompt = require('prompt-sync')();

let i = 1;
let maiorNum = 0;

while (i < 9) {
  const num = parseInt(prompt('Digite um número: '));
  if (num > maiorNum){
    maiorNum = num;
  }
  i++;
}

console.log(`O maior número é ${maiorNum}.`);

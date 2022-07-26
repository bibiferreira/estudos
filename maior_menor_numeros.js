// Modifique o algoritmo anterior para mostrar, ao final, o maior e o menor.

const prompt = require('prompt-sync')();

let i = 1;
let maiorNum = 0;
let menorNum = Number.MAX_SAFE_INTEGER;

while (i < 9) {
  const num = parseInt(prompt('Digite um número: '));
  if (num > maiorNum){
    maiorNum = num;
  }
  if (num < menorNum) {
    menorNum = num;
  }
  i++;
}

console.log(`O maior número é ${maiorNum} e o menor é ${menorNum}.`);

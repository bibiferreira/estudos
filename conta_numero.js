// Crie um algoritmo que receba dois números e conte de um até o outro. Esse algoritmo deve, obrigatoriamente, começar a contar do primeiro número que foi inserido e ir até o segundo.

const prompt = require('prompt-sync')();

let num1 = Number.parseInt(prompt('Digite um número inteiro: '));
let num2 = Number.parseInt(prompt('Digite um segundo número inteiro: '));

while (num1 != num2) {
  console.log(num1);
  if (num1 > num2) {
    num1 --;
  } else {
    num1 ++;
  }
}

console.log(num1);

// Escreva um algoritmo que mostre a tabuada de um número dado pelo usuário.

const prompt = require('prompt-sync')();

const number = parseInt(prompt('Digite um número inteiro: '));
let i = 1;

while (i <= 10) {
  const result = number * i;
  console.log(`${number} * ${i} = ${result}`);
  i++;
}

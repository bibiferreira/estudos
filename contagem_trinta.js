// Escreva um algoritmo que peça um número ao usuário e conte desse número até 30.Esse algoritmo deve funcionar independente do número ser maior ou menor que 30.

const prompt = require('prompt-sync')();

let num = Number.parseInt(prompt('Digite um número inteiro: '));

while (num != 30) {
  console.log(num);
  if (num < 30) {
    num = num + 1;
  } else {
    num = num - 1;
  }
}

console.log(num);

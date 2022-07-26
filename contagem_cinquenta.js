// Escreva um algoritmo que peça um número ao usuário e conte desse número até 50 (vamos supor que o número do usuário sempre será menor que 50).

const prompt = require('prompt-sync')();

const numero = Number.parseInt(prompt('Digite um número inteiro entre 1 e 49: '));

let i = numero;

while (i <= 50) {
  console.log(i);
  i = i + 1;
}

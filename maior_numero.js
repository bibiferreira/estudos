// Desenvolva um algoritmo que receba dois números reais e imprima na tela o maiordeles.

const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

if (num1 > num2) {
  return console.log(`O número ${num1} é o maior.`);
} else {
  return console.log(`O número ${num2} é o maior.`);
}

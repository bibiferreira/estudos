// Crie um algoritmo que receba dois números e informe a metade do maior e o dobro do menor.

const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

if (num1 > num2) {
  console.log(`A metade do maior é ${num1 / 2}.`);
  console.log(`O dobro do menor é ${num2 * 2}.`);
} else {
  console.log(`A metade do maior é ${num2 / 2}.`);
  console.log(`O dobro do menor é ${num1 * 2}.`);
}

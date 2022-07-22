//  Construa um algoritmo que leia dois valores numéricos inteiros e efetue a adição; caso o resultado seja maior que 10, imprima-o na tela.

const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

const soma = num1 + num2;

if (soma > 10) {
  console.log('A soma dos dois números é maior que 10');
}

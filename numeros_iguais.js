// Escreva um algoritmo que receba dois números. Em seguida, deverá aparecer escrita na tela uma das seguintes mensagens: “o primeiro é maior”, “o segundo é
// maior”, “os números são iguais”.

const prompt = require('prompt-sync')();

const num1 = Number(prompt('Digite o primeiro número: '));
const num2 = Number(prompt('Digite o segundo número: '));

if (num1 > num2) {
  console.log(`O número ${num1} é maior que o número ${num2}.`);
} else if (num2 > num1) {
  console.log(`O número ${num2} é maior que o número ${num1}.`);
} else {
  console.log('Os números são iguais!');
}

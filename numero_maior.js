// Escreva um algoritmo que leia um número e o imprima na tela caso seja maior que 20.

const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));

if(numero > 20) {
  console.log(`O número ${numero} é maior que 20.`);
}

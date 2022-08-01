// Faça um programa que peça um número inteiro e determine se ele é ou não um número primo.
const prompt = require('prompt-sync')();

const numPrimo = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return `${num} não é um número primo`
    }
  }
  return `${num} é um número primo`
}

num = parseInt(prompt('Digite um número: '));
console.log(numPrimo(num));

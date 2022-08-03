// Faça um algoritmo que leia vários números inteiros e calcule o somatório dos números negativos. O fim da leitura será indicado pelo número 0.

const prompt = require('prompt-sync')();

let somatorio = 0;

while (true) {
  let num = parseInt(prompt('Digite um número inteiro: '));
  if (num === 0) {
    break;
  }
  if (num < 0) {
    somatorio += num;
  }
}

console.log(`O valor total dos números negativos é ${somatorio}.`);

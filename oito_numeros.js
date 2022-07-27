// Faça um algoritmo que receba 8 números inteiros e apresente o somatório deles. Use uma repetição para solicitar os números.

const prompt = require('prompt-sync')();

let numero = 0;
let soma = 0;

for (let i = 0; i < 8 ; ) {
   numero = Number.parseInt(prompt("Digite um número: "));
   while (numero > 0) {
    soma = soma + numero;
    numero = 0;
 }
 i++;
}

// Opção apenas usando while.

// let num = 0;
// let soma = 0;
// let i = 0;

// while (i < 8) {
//   num = parseInt(prompt('Digite um número inteiro: '));
//   soma = soma + num;
//   i++;
// }

console.log(`A soma dos números é ${soma}`);

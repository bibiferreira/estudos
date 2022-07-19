// Crie um algoritmo que receba um número e apresente esse número ao quadrado e ao cubo.

const prompt = require('prompt-sync')();

const x = Number(prompt('Digite o valor de x: '));

const quadrado = x ** 2;
const cubo = x ** 3;

console.log(`O valor de x ao quadrado é ${quadrado} e ao cubo é ${cubo}`);

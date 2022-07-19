// Elabore um algoritmo que leia dois números inteiros e grave-os nas variáveis x e y. Em seguida, encontre uma forma de passar o valor da variável x para a y e vice-
// versa. Depois, imprima os valores na tela.

const prompt = require('prompt-sync')();

let x = Number.parseInt(prompt('Digite o valor de x: '));
let y = Number.parseInt(prompt('Digite o valor de y: '));

const a = x;
x = y;
y = a;

console.log(`Agora x é ${x} e y é ${y}`);

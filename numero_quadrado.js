//  Faça um programa que entre com cinco números e imprima o quadrado de cada número.

const prompt = require('prompt-sync')();

let i = 1;
let numeros = [];

while (i < 6) {
  let num = parseInt(prompt('Digite um número: '));
  const quadrado = num ** 2;
  numeros.push([num, quadrado]);
  i++
}

console.log('Número | Quadrado');
numeros.forEach((item) => {
  console.log(`${item[0]}      | ${item[1]}`);
})

// Faça um algoritmo que leia dois números e depois apresente uma saída da seguinteforma:Primeiro número:Segundo número:Soma:Subtração:Multiplicação:Divisão:

const prompt = require('prompt-sync')();

const x = Number(prompt('Digite o valor de x: '));
const y = Number(prompt('Digite o valor de y: '));

const sum = x + y;
const sub = x - y;
const mult = x * y;
const div = x / y;

console.log(`A soma dos valores ${x} e ${y} é ${sum}`);
console.log(`A subtração dos valores ${x} e ${y} é ${sub}`);
console.log(`A multiplicação dos valores ${x} e ${y} é ${mult}`);
console.log(`A divisão dos valores ${x} e ${y} é ${div}`);

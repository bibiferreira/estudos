// Faça um algoritmo que calcule o fatorial de um número. Fatorial de 5, por exemplo, é o resultado de 5 x 4 x 3 x 2 x 1 = 120.

const prompt = require('prompt-sync')();
const num = parseInt(prompt('Digite um número inteiro: '));

// Opção de while a partir de 1 ao número informado.

// let atual = 1;
// let fatorial = 1;

// while (atual <= num) {
//   fatorial = fatorial * atual;
//   atual += 1;
// }

// Opção de while a partir do número informado até 1.

let atual = num;
let fatorial = 1;

while (atual > 0) {
  fatorial = fatorial * atual;
  atual -= 1;
}

console.log(`O fatorial de ${num} é ${fatorial}`);

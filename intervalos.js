// Escrever um algoritmo que leia uma quantidade desconhecida de números e conte quantos deles estão nos seguintes intervalos: [0.25], [26,50], [51,75] e [76,100].
// A entrada de dados deve terminar quando for lido um número negativo.

const prompt = require('prompt-sync')();

let intervalo1 = 0;
let intervalo2 = 0;
let intervalo3 = 0;
let intervalo4 = 0;

while (true) {
  let num = parseInt(prompt('Digite um número: '));
  if(num < 0) {
    break;
  }

  if(num < 26) {
    intervalo1++;
  } else if (num < 51) {
    intervalo2++;
  } else if (num < 76) {
    intervalo3++
  } else if (num < 101) {
    intervalo4++;
  }
}
console.log(`${intervalo1} número(s) entre 0 e 25.`);
console.log(`${intervalo2} número(s) entre 26 e 50.`);
console.log(`${intervalo3} número(s) entre 51 e 75.`);
console.log(`${intervalo4} número(s) entre 76 e 100.`);

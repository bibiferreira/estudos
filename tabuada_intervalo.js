// Crie um algoritmo que monte a tabuada de um número em um intervalo específico. O usuário deverá digitar o número que deseja ver a tabuada. Em seguida, vai digitar o
// número de onde deve começar e, por fim, o número de onde deve terminar.

const prompt = require('prompt-sync')();

const numTabuada = parseInt(prompt('Digite o número da tabuada: '));
const inicio = parseInt(prompt('Digite em qual número começar: '));
const final = parseInt(prompt('Digite em qual número terminar: '));

let i = inicio;

while (i <= final) {
  const result = numTabuada * i;
  console.log(`${numTabuada} x ${i} = ${result}`);
  i++;
}

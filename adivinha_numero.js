// Algoritmo que adivinha o número que o computador está pensando.

const prompt = require('prompt-sync')();

const computerNumero = Math.floor(Math.random() * 99) + 1;

let guessedRight = false;
let guessedNumber = Number(prompt('Tente adivinhar o número que o computador está pensando de 1 a 100: '));

while (guessedRight === false) {

  if (guessedNumber === computerNumero) {
    console.log('Você acertou o número!');
    break;
  }
  if (guessedNumber > computerNumero) {
    console.log('Meu número é MENOR!');
  } else {
    console.log('Meu número é MAIOR!');
  }
  guessedNumber = Number(prompt('Tente de novo: '));
}

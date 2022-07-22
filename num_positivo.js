// Escreva um algoritmo para determinar se um dado número N (digitado pelousuário) é positivo, negativo ou neutro (zero). Imprima o resultado na tela.

const prompt = require('prompt-sync')();

const numero = Number(prompt('Digite um número: '));

if (numero > 0) {
  console.log(`O número ${numero} é positivo`);
} else if (numero < 0) {
  console.log(`O número ${numero} é negativo`);
} else {
  console.log(`${numero} é neutro`);
}

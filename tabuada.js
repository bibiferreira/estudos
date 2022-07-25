// Algoritmo que peça um número e retorne a tabuada do número que foi solicitado.

const prompt = require('prompt-sync')();

const numero = Number.parseInt(prompt('Digite um número inteiro: '));
let resultado = "";

for (let i = 1; i <= 10; i++) {
  resultado = resultado+numero+"x"+i+"="+numero*i+ "\n";
}

console.log(resultado);

// Faça um algoritmo que receba números de forma infinita. O programa só irá parar de receber números quando for digitado um número negativo. Ao final, deve
// aparecer a média de todos os números que foram inseridos (desconsiderando o número negativo).

const prompt = require('prompt-sync')();

let i = 0;
let soma = 0;

while (true) {
  const num = parseInt(prompt('Digite qualquer número inteiro: '));

  if (num < 0) {
    break;
  }

  soma += num;
  i++;
}

console.log(`A média de todos os números inseridos é ${soma / i}.`);

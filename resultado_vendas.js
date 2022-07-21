// Um comerciante precisa verificar se obteve um bom resultado em suas vendas.Crie um algoritmo que receba um valor e mostre uma frase de acordo com o
// resultado: Maior que 500: Excelente / Entre 500 e 301: Bom /Entre 300 e 101: Razoável /100 ou menos: Ruim

const prompt = require('prompt-sync')();

const valor = Number(prompt('Digite o resultado total de suas vendas: '));

if (valor > 500) {
  console.log('Excelente!');
} else if (valor >= 301 && valor <= 500) {
  console.log('Bom!');
} else if (valor >= 101 && valor <= 300) {
  console.log('Razoável!');
} else {
  console.log('Ruim!');
}

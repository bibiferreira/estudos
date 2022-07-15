const prompt = require('prompt-sync')();

const calculaArea = (altura, largura) => {
  return altura * largura;
};

const altura = Number(prompt("Digite o valor da altura: "));
const largura = Number(prompt("Digite o valor da largura: "));

const area = calculaArea(altura, largura);

console.log(`A area do retangulo é: ${area}`);

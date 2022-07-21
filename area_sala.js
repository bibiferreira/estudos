// Faça um algoritmo que leia a largura e o comprimento de uma sala comercial, calculando e mostrando a sua área em m2
// O programa também deve mostrar a classificação dessa sala, de acordo com esta lista:
// Abaixo de 30 m2/Sala Simples/Entre 30 m2 e 50 m2/Sala Premium/Acima de 50 m2/Sala Master.

const prompt = require('prompt-sync')();

const calculaArea = (largura, comprimento) => {
  return largura * comprimento;
}

const largura = Number(prompt('Digite a largura da sala: '));
const comprimento = Number(prompt('Digite o comprimento da sala: '));
const area = calculaArea(largura, comprimento);

if (area < 30) {
  console.log(`É uma sala comercial simples pois tem apenas ${area} metros quadrados.`);
} else if (area >= 30 && area <= 50) {
  console.log(`É uma sala comercial premium pois possui ${area} metros quadrados.`);
} else if (area > 50) {
  console.log(`É uma sala comercial master pois possui ${area} metros quadrados.`);
}


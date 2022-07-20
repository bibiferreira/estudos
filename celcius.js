// Faça um algoritmo que peça ao usuário a temperatura em graus Celcius(C°) em apresente o resultado em graus
// Fahrenheit (F°). A fórmula é (celcius × 9/5) + 32.

const prompt = require('prompt-sync')();

const calculaFahrenheit = (celcius) => {
  return (celcius * (9/5)) + 32;
}

const celcius = Number(prompt('Digite a temperatura em celcius: '));

const fahrenheit = calculaFahrenheit(celcius);

console.log(`A temperatura em Fahrenheit é ${fahrenheit}.`);

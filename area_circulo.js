// Desenvolva um algoritmo que calcule a área de dois círculos. O programa deve solicitar que se digite o raio do primeiro círculo e, em seguida, o raio do segundo
// círculo. Ao final, o programa deve informar as áreas desses dois círculos. O valor de PI deve ser definido por meio de uma constante.
// pi = 3.14 Cálculo da área: A = pi x r2

const prompt = require('prompt-sync')();

const calculaArea = (r) => {
  return Math.PI * (r ** 2);
};


const raio = Number(prompt('Digite o raio do primeiro circulo: '));
const raio2 = Number(prompt('Digite o raio do segundo circulo: '));

const area = calculaArea(raio).toFixed(2);
const area2 = calculaArea(raio2).toFixed(2);

console.log(`A area do primeiro circulo é ${area}`);
console.log(`A area do segundo circulo é ${area2}`);

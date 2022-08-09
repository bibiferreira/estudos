// Crie um algoritmo que calcule a média harmônica de 3 notas inseridas pelo usuário.

const prompt = require('prompt-sync')();

// mediaHarmonica = quantidadeNumeros / (1 / notaA + 1 / notaB + ...)


const notaA = parseFloat(prompt('Digite a primeira nota: '));
const notaB = parseFloat(prompt('Digite a segunda nota: '));
const notaC = parseFloat(prompt('Digite a terceira nota: '));

const media = 3 / (1 / notaA + 1 / notaB + 1 / notaC);

console.log(`A média harmônica das notas é ${media.toFixed(2)}`);

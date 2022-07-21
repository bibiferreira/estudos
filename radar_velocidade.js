// Escreva um algoritmo para um radar de velocidade. O programa deve solicitar a velocidade do automóvel e, caso seja superior a 80, deve indicar que o motorista
// foi multado. Caso contrário, deve informar que não houve multa.

const prompt = require('prompt-sync')();

const velocidade = Number(prompt('Digite a velocidade do automóvel: '));

if (velocidade > 80) {
  console.log('Você foi multado por estar acima de 80km/h');
} else {
  console.log('Não há multa!');
}

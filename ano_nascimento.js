// Faça um algoritmo que peça o ano de nascimento de uma pessoa. Depois, peça a ela se já fez aniversário esse ano. As possíveis respostas são “S” e “N”. Por fim,
// escreva na tela quantos anos a pessoa tem.

const prompt = require('prompt-sync')();

const anoNascimento = Number(prompt('Digite o ano do seu nascimento: '));
const aniver = prompt('Você já fez aniversário esse ano? [S/N]: ');

const calculaIdade = (anoNascimento) => {
  return 2022 - anoNascimento;
}

let idade = calculaIdade(anoNascimento);

if (aniver === 'n' || aniver === 'N') {
  idade -= 1;
}

console.log(`Sua idade é ${idade}.`);

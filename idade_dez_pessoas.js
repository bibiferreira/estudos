// Crie um algoritmo que leia a idade de 10 pessoas, mostrando no final: Qual é a média de idade do grupo / Quantas pessoas tem mais de 18 anos
// Quantas pessoas tem menos de 5 anos / Qual foi a maior idade lida

const prompt = require('prompt-sync')();

let i = 0;
let totalIdade = 0;
let maiorDezoito = 0;
let menorCinco = 0;
let maiorIdade = 0;


while (i < 10) {
  const idade = parseInt(prompt('Informe a idade: '));
  if (idade > maiorIdade) {
    maiorIdade = idade;
  }
  if (idade > 18) {
    maiorDezoito += 1;
  }
  if (idade < 5) {
    menorCinco +=1;
  }

  totalIdade += idade;
  i++;
}

const mediaIdade = totalIdade / i;

console.log(`A maior idade é ${maiorIdade}.`);
console.log(`Tem ${maiorDezoito} pessoas acima de 18 anos.`);
console.log(`Tem ${menorCinco} pessoas abaixo de 5 anos.`);
console.log(`A média de idade de todas as pessoas é ${mediaIdade}.`)

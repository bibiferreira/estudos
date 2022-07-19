// Escreva um algoritmo que peça a idade do usuário e mostre quantos anos faltam para ela completar 100 anos de idade.

const prompt = require('prompt-sync')();

const calculaIdadeAteCem = (idade) => {
  return 100 - idade;
};

const idade = Number(prompt('Digite a sua idade: '));
const idadeAteCem = calculaIdadeAteCem(idade);

console.log(`Faltam ${idadeAteCem} anos pra você chegar aos 100.`);

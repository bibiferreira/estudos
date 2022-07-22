// Escreva um algoritmo que receba a idade de uma pessoa e indique se ela é: menor de idade, maior de idade, idosa (60 anos ou mais).

const prompt = require('prompt-sync')();

const idade = Number(prompt('Digite a sua idade: '));

if (idade >= 18 && idade < 60) {
  console.log('Você é maior de idade!');
} else if (idade < 18) {
  console.log('Você é menor de idade!');
} else {
  console.log('Você é idoso(a)!');
}

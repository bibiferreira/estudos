// Faça um algoritmo que receba três notas de um aluno e apresente a média dessas notas.

const prompt = require('prompt-sync')();

const calculaMedia = (nota1, nota2, nota3) => {
  return (nota1 + nota2 + nota3) / 3;
}

const nota1 = Number(prompt('Digite a primeira nota do aluno: '));
const nota2 = Number(prompt('Digite a segunda nota do aluno: '));
const nota3 = Number(prompt('Digite a terceira nota do aluno: '));

const media = calculaMedia(nota1, nota2, nota3);

console.log(`A média do aluno é ${media}`);

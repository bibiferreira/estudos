// Crie um algoritmo que receba duas notas de um aluno. Em seguida, calcule a média e imprima na tela se ele está aprovado ou reprovado.

const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a primeira nota do aluno: '));
const nota2 = Number(prompt('Digite a segunda nota do aluno: '));

const calculaMedia = (nota1, nota2) => {
  return (nota1 + nota2) / 2;
}

const media = calculaMedia(nota1, nota2);

if (media >= 7) {
  console.log(`A média do aluno é ${media}, portanto ele está APROVADO!`);
} else {
  console.log(`A média do aluno é ${media}, portanto ele está REPROVADO!`);
}

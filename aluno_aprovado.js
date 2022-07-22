// Crie um algoritmo que receba três notas de um aluno e calcule a média. Sabendo que a nota mínima para a aprovação é 7, imprima uma mensagem na tela caso o aluno tenha sido aprovado.

const prompt = require('prompt-sync')();

const nota1 = Number(prompt('Digite a primeira nota do aluno: '));
const nota2 = Number(prompt('Digite a segunda nota do aluno: '));
const nota3 = Number(prompt('Digite a terceira nota do aluno: '));

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7) {
  console.log(`A média final é ${media}, portanto o aluno foi aprovado.`);
} else {
  console.log(`A média final é ${media}, portanto o aluno foi reprovado.`);
}

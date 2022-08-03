// Em uma eleição presidencial existem quatro candidatos. Os votos são informados através de códigos. Os dados utilizados para a contagem dos votos obedecem à
// seguinte codificação: 1, 2, 3, 4 = voto para os respectivos candidatos; 5 = voto nulo; 6 = voto em branco;
// Elabore um algoritmo que leia o código do candidato em um voto. Calcule e escreva: total de votos para cada candidato; total de votos nulos; total de votos em branco; Como finalizador do conjunto de votos, tem-se o valor 0.

const prompt = require('prompt-sync')();

let candidato1 = 0;
let candidato2 = 0;
let candidato3 = 0;
let candidato4 = 0;
let nulo = 0;
let branco = 0;
let num = 1;

while (true) {
  const num = parseInt(prompt('Digite 1 para votar no candidato1, 2 para o candidato2, 3 para o candidato3, 4 para o candidato4, 5 pra votar nulo e 6 em branco: '));

  if (num === 0) {
    break;
  } else if (num === 1) {
    candidato1++;
  } else if (num === 2) {
    candidato2++;
  } else if (num === 3) {
    candidato3++;
  } else if (num === 4) {
    candidato4++;
  } else if (num === 5) {
    nulo++;
  } else if (num === 6) {
    branco++;
  } else {
    console.log('Votação não autorizada!');
  }
}

console.log(`RESULTADO DA VOTAÇÃO: Candidato1: ${candidato1} voto(s) / Candidato2: ${candidato2} voto(s) / Candidato3: ${candidato3} voto(s) / Candidato4: ${candidato4} voto(s) / Nulo: ${nulo} voto(s) e Branco: ${branco} voto(s).`);

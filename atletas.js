// Haverá uma competição de Taekwondo e será preciso dividir os atletas em diferentes categorias. Escreva um algoritmo que receba a idade de um(a)
// competidor(a) e, em seguida, imprima em qual categoria será alocado(a).

const prompt = require('prompt-sync')();

const idadeAtleta = Number(prompt('Digite a idade do atleta: '));

let categoria = "";

if(idadeAtleta >= 5 && idadeAtleta <= 7) {
  categoria = "Infantil A";
} else if (idadeAtleta >= 8 && idadeAtleta <= 10) {
  categoria = "Infantil B";
} else if (idadeAtleta >= 11 && idadeAtleta <= 13) {
  categoria = "Juvenil A";
} else if (idadeAtleta >= 14 && idadeAtleta <= 17) {
  categoria = "Juvenil B";
} else {
  categoria = "Sênior";
}

console.log(`A idade do atleta é ${idadeAtleta}, portanto está na categoria ${categoria}.`);

// Crie um algoritmo em que o usuário digite a hora (somente a hora, sem os minutos) e informe se é: Madrugada/Manhã/Tarde/Noite/Hora não existe.

const prompt = require('prompt-sync')();

const hora = Number.parseInt(prompt('Digite apenas a hora do dia (sem os minutos): '));

if (hora >= 1 && hora <= 5) {
  console.log('Madrugada!');
} else if (hora >= 6 && hora <= 12) {
  console.log('Manhã!');
} else if (hora >= 13 && hora <= 18) {
  console.log('Tarde!');
} else if (hora >= 19 && hora <= 24 || hora === 0) {
  console.log('Noite!');
} else if (hora < 0 || hora > 24) {
  console.log('Hora não existe!');
} else {
  console.log('Hora não existe');
}

// Faça um jogo de Jokenpo (pedra, papel e tesoura).

const prompt = require('prompt-sync')();

const userChoice = prompt('Digite pedra, papel ou tesoura: ');
let computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = "pedra";
} else if (computerChoice <= 0.67) {
  computerChoice = "papel";
} else {
  computerChoice = "tesoura";
}

console.log("Computer: " + computerChoice);

if (userChoice === computerChoice) {
  console.log('Empate!');
} else if (userChoice === "pedra" && computerChoice === "tesoura") {
  console.log('Você venceu!');
} else if (userChoice === "papel" && computerChoice === "pedra") {
  console.log('Você venceu!');
} else if (userChoice === "tesoura" && computerChoice === "papel") {
  console.log('Você venceu!');
} else {
  console.log('Computador venceu!');
}

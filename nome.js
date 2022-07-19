// Escreva um algoritmo que peça o nome do usuário e mostre a mensagem “Olá,<nome_do_usuário_aqui>!”.
const prompt = require('prompt-sync')();

const nome = prompt('Digite o seu nome: ');

console.log(`Olá, ${nome}!`);

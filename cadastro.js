// nome, endereço, telefone e profissão.
const prompt = require('prompt-sync')();

const nome = prompt('Digite o seu nome: ');
const endereco = prompt('Digite o seu endereço: ');
const telefone = prompt('Digite o seu telefone: ');
const profissao = prompt('Digite a sua profissão: ');

console.log(`Nome: ${nome}.`);
console.log(`Endereço: ${endereco}.`);
console.log(`Telefone: ${telefone}.`);
console.log(`Profissão: ${profissao}.`);

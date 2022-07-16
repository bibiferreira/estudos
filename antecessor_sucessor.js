const prompt = require('prompt-sync')();

const num = Number.parseInt(prompt("Digite um numero: "), 10);

const antecessor = num - 1;
const sucessor = num + 1;

console.log(`O antecessor do ${num} é ${antecessor} e o sucessor é ${sucessor}.`);

const prompt = require('prompt-sync')();

let total = 0;

for (let produto = 1; produto <= 5; produto++) {
  total += Number(prompt(`Digite o preço do produto ${produto}: `));
}

console.log(`O valor total é R$ ${total}`);

// Versão menos otimizada

// const produto1 = Number(prompt("Digite o valor do produto1: "));
// const produto2 = Number(prompt("Digite o valor do produto2: "));
// const produto3 = Number(prompt("Digite o valor do produto3: "));
// const produto4 = Number(prompt("Digite o valor do produto4: "));
// const produto5 = Number(prompt("Digite o valor do produto5: "));

// const total = produto1 + produto2 + produto3 + produto4 + produto5;
// console.log(`O valor total dos produtos é: R$ ${total}.`);

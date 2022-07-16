const prompt = require('prompt-sync')();

const calculaDesconto = (valorProduto) => {
  const desconto = valorProduto * (7 / 100);
  return valorProduto - desconto;
};

// Segunda maneira de calcular
// const calculaDesconto = (valorProduto, desconto) => {
//   return valorProduto * ((100 - desconto) / 100);
// };

const valorProduto = Number(prompt("Digite o valor do produto: R$ "));
const valorComDesconto = calculaDesconto(valorProduto);

// Segunda opção de chamada
// const valorComDesconto = calculaDesconto(valorProduto, 7);

console.log(`O valor do produto com desconto é de: R$ ${valorComDesconto}`);

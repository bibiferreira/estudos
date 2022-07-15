const prompt = require('prompt-sync')();

const calculaTroco = (montante, valorCompra) => {
  return montante - valorCompra;
};

const valorCompra = prompt('Digite o valor da compra: ');

const montante = prompt('Digite o valor pago: ');

const troco = calculaTroco(montante, valorCompra);

console.log(`Seu troco é R$ ${troco}.`);

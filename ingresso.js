//Você precisa desenvolver um algoritmo para cálculo de venda de ingressos paraum jantar. O preço para adultos é R$ 30, enquanto para crianças é R$ 18. Solicite
// ao usuário o número de adultos e de crianças. Ao final, informe os valores destaforma: “O cliente deve pagar R$ X pelos ingressos de adultos e R$ Y para os de
// criança. O total é R$ Z.” O valor dos ingressos deve estar em constantes. adultos = 30 criancas = 18

const prompt = require('prompt-sync')();

var ingressoAdulto = 30;
var ingressoCrianca = 18;

const quantosAdultos = Number.parseInt(prompt('Digite a quantidade de adultos: '));
const quantasCriancas = Number.parseInt(prompt('Digite a quantidade de crianças: '));

const totalAdulto = quantosAdultos * ingressoAdulto;
const totalCrianca = quantasCriancas * ingressoCrianca;
const total = totalAdulto + totalCrianca;

console.log(`O cliente deve pagar R$ ${totalAdulto} pelos ingressos de adultos, R$ ${totalCrianca} pelos ingressos das crianças. O total é R$ ${total}`);

// EXERCICIO 1
// const prompt = require('prompt-sync')();

// const calculaTroco = (montante, valorCompra) => {
//   return montante - valorCompra;
// };

// const valorCompra = Number(prompt('Qual o valor da compra? R$ '));
// const montante = Number(prompt('Qual o valor do montante? R$ '));

// const troco = calculaTroco(montante, valorCompra);

// console.log(`O troco recebido é de: R$ ${troco}`);

// EXERCICIO 2
// Crie um algoritmo que peça ao usuário para informar os seguintes dados e, emseguida, imprima-os na tela: nome, endereço, telefone e profissão.
// const prompt = require('prompt-sync')();

// const nome = prompt('Digite o seu nome: ');
// const endereco = prompt('Digite o seu endereço: ');
// const telefone = Number.parseInt(prompt('Digite seu número móvel: '));
// const profissao = prompt('Digite sua profissão: ');

// console.log(`Seu nome é: ${nome}`);
// console.log(`Seu endereço é: ${endereco}`);
// console.log(`Seu número móvel é: ${telefone}`);
// console.log(`Sua profissão é: ${profissao}`);

// EXERCICIO 3
// Crie um algoritmo que solicite o preço de 5 produtos e, em seguida, apresenteo total da compra.
//const prompt = require('prompt-sync')();

// let total = 0;

// for (let i = 0; i < 5; i++) {
//   const produto = Number.parseInt(prompt('Digite o valor do produto: '));
//   total += produto;
// }

//  console.log(`O valor total dos produtos é de: R$ ${total}`)

// EXERCICIO 4
//Faça um algoritmo que receba a altura e a largura de um retângulo e, emseguida, escreva a área.
// const prompt = require('prompt-sync')();

// const calculaArea = (altura, largura) => {
//   return altura * largura;
// };

// const altura = Number(prompt('Digite o valor da altura: '));
// const largura = Number(prompt('Digite o valor da largura: '));

// const area = calculaArea(altura, largura);

// console.log(`O valor da area é de: ${area}`);

// EXERCICIO 5
// Construir um programa que leia um valor numérico inteiro e apresente como resultado os seus valores sucessor e antecessor.
// const prompt = require('prompt-sync')();

// const calculaAntecessor = (numero) => {
//   return numero - 1;
// }

// const calculaSucessor = (numero) => {
//   return numero + 1;
// }

// const numero = Number.parseInt(prompt('Digite um número inteiro: '));
// const antecessor = calculaAntecessor(numero);
// const sucessor = calculaSucessor(numero);

// console.log(`O antecessor do número ${numero} é ${antecessor}, e o sucessor dele é ${sucessor}`);

// EXERCICIO 6
// Um comerciante precisa colocar alguns produtos à venda com desconto. Por conta disso, precisa de um algoritmo que realize esse cálculo com base no
//valor do produto. Faça um algoritmo que receba o preço do produto e escreva o valor dando um desconto de 7%. (Pelo menos duas formas de fazer).
// const prompt = require('prompt-sync')();

// const calculaDesconto = (valorProduto) => {
//   const desconto = valorProduto * (7 / 100);
//   return valorProduto - desconto;
// }

// const valorProduto = Number(prompt(`Qual o valor do produto? R$ `));

// const valorComDesconto = calculaDesconto(valorProduto);

// console.log(`O valor do produto com desconto é: R$ ${valorComDesconto}`);

// EXERCICIO 7
// Em um hotel o valor da hospedagem é definido de acordo com o número de hóspedes que ficará no quarto. Desenvolva um algoritmo que receba dois
//valores (o número de hóspedes e o valor por hóspede) e apresente o valor total da diária.
// const prompt = require('prompt-sync')();

// const calculaDiaria = (numeroHospedes, valorHospede) => {
//   return numeroHospedes * valorHospede;
// }

// const numeroHospedes = Number(prompt('Qual o número de hospedes? '));
// const valorHospede = Number(prompt(`Qual o valor por hospede? `));

// const diaria = calculaDiaria(numeroHospedes, valorHospede);

// console.log(`O valor total da diaria é: R$ ${diaria}`);

// EXERCICIO 8
// Desenvolva uma versão melhorada do algoritmo anterior. Além de solicitar o número de hóspedes e o valor por hóspede, o programa também deve saber
//quantos dias as pessoas ficarão hospedadas. Após capturar essas informações,mostre na tela o valor total da hospedagem. Em seguida, mostre o valor com um imposto de 3%.
const prompt = require('prompt-sync')();

const calculaDiarias = (numeroHospedes, valorHospede, totalDias) => {
 return (numeroHospedes * valorHospede ) * totalDias;
}

const calculaImposto = (totalDias, imposto) => {
  const valorImposto = totalDias * (3 / 100);
  return totalDias + valorImposto;
};

const numeroHospedes = Number(prompt('Qual o número de hospedes? '));
const valorHospede = Number(prompt(`Qual o valor por hospede? `));
const totalDias = Number(prompt(`Quantos dias de hospedagem? `));

const diarias = calculaDiarias(numeroHospedes, valorHospede, totalDias);
const totalImposto = calculaImposto(diarias, 3);

console.log(`O valor total das diaria é de: R$ ${diarias}, com imposto ficaria ${totalImposto}`);

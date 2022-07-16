const prompt = require('prompt-sync')();

const calculaDiarias = (numeroHospedes, valorPorHospede, quantidadeDias) => {
  return (numeroHospedes * valorPorHospede) * quantidadeDias;
};

const calculaValorComImposto = (total, imposto) => {
  const valorImposto = total * (3 / 100);
  return total + valorImposto;
};

const quantidadeHospede = Number(prompt("Digite a quantidade de hospedes: "));
const valorHospede = Number(prompt("Digite o valor por hospede: "));
const quantidadeDias = Number(prompt("Digite a quantidade de dias: "));
const diarias = calculaDiarias(quantidadeHospede, valorHospede, quantidadeDias);
const diariasComImposto = calculaValorComImposto(diarias, 3);

console.log(`O valor total das diárias  é: R$ ${diarias}`);
console.log(`O valor total das diárias com imposto é de: R$ ${diariasComImposto}`);

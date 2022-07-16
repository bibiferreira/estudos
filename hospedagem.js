const prompt = require('prompt-sync')();

const calculaDiaria = (numeroHospedes, valorPorHospede) => {
  const diaria = numeroHospedes * valorPorHospede;
  return diaria;
};


const quantidadeHospede = Number(prompt("Digite a quantidade de hospedes: "));
const valorHospede = Number(prompt("Digite o valor por hospede: "));
const diaria = calculaDiaria(quantidadeHospede, valorHospede);

console.log(`O valor da diária é de: R$ ${diaria}`);

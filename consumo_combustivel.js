// Um determinado automóvel gasta 1L decombustível para percorrer 12km. Crie um algoritmoque receba o tempo da viagem e a velocidade média
// do carro. Em seguida, apresente a distância percorrida e também o consumo de combustível. Afórmula da distância é (tempo × velocidade) e doconsumo é (distância / 12).

const prompt = require('prompt-sync')();

const tempo = Number(prompt('Digite o tempo de viagem: '));
const velocidade = Number(prompt('Digite a velocidade média do carro: '));

const calculaDistancia = (tempo, velocidade) => {
  return tempo * velocidade;
}

const distancia = calculaDistancia(tempo, velocidade);

const calculaConsumo = (distancia) => {
  return distancia / 12;
}

const consumo = calculaConsumo(distancia);

console.log(`A distância percorrida é de ${distancia} km e o consumo de combustivel pra percorrer essa distância foi de ${consumo.toFixed(2)}L.`)

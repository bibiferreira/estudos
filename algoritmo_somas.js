// Desenvolva um algoritmo para realizar somas. O algoritmo funcionará infinitamente até que o usuário decida encerrar. O programa irá solicitar ao usuário 2 números e irá
// somá-los e mostrá-los na tela. Em seguida, deverá perguntar se o usuário quer realizar mais algum cálculo (as respostas poderão ser s ou n).

const prompt = require('prompt-sync')();

while (true) {
  let num1 = parseInt(prompt('Digite um número: '));
  let num2 = parseInt(prompt('Digite o segundo número: '));
  console.log(`A soma é ${num1 + num2}`);
  let question = prompt('Quer fazer outro cálculo? [S/N]: ');
  if (question === 's' || question === 'S') {
    continue;
  } else {
    break;
  }
}

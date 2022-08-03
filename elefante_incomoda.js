// Faça um algoritmo, usando repetições e contadores, para imprimir na tela a música do elefante (até o 10).

const prompt = require('prompt-sync')();

let i = 1;

let song = '';

while (i < 11) {
  if (i % 2 != 0) {
    if (i === 1) {
      song = '1 elefante incomoda muita gente...'
    } else {
      song = `${i} elefantes incomodam muita gente`
    }
  } else {
    let incomodam = '';
    let j = 0;
    while (j < i) {
      incomodam += 'incomodam ';
      j++;
    }
    song = `${i} elefantes ${incomodam}muito mais...`
  }
  console.log(song);
  i++;
}

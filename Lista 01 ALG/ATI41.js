const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const fabrica = parseInt(prompt('Informe o preço de fabrica do Carro:'));

carro = (fabrica*0.28)+(fabrica*0.45)+fabrica;
cares = carro.toFixed(2);

console.log('Resultado|Preço do carro' ,cares);
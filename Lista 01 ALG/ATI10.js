const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Numero01 = parseInt(prompt('Numero 01:')) 
const Numero02 = parseInt(prompt('Numero 02:')) 

const Cal01 = (Numero01 / Numero02)
const Cal02 = (Numero01 % Numero02)

const ResDiv = Cal01 .toFixed(2);
const ResRes = Cal02 .toFixed(2);

console.log('Resultado|Divisão:',ResDiv,"|Resto:",ResRes)
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Val01 = parseInt(prompt('Valor 01:'))  
const Val02 = parseInt(prompt('Valor 02:'))  
const Val03 = parseInt(prompt('Valor 03:'))  

const Semanas = (Val01+Val02+Val03)/3
const SemanasRes = Semanas .toFixed(2);

console.log('Resultado|Media:',SemanasRes)
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Dias = parseInt(prompt('Dias:'))  
const Semanas = Dias/7
const r1 = Semanas .toFixed(1);
const D = Dias .toFixed(0);
console.log('Resultado|Semanas:', r1,'|Dias:',D,)

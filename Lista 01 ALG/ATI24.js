const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const m= Number(prompt('valor em Metros:'))
const cm = m*100
const r1 = cm .toFixed(0);
console.log('Resultado|Equivalente em Centimetros:', r1,'cm')
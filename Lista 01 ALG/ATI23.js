const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const k= Number(prompt('valor em Kilo:'))
const g = k*1000
const r1 = g .toFixed(0);
console.log('Resultado|Equivalente em Gramas:', r1,'g')
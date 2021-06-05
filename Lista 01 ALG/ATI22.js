const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Km = Number(prompt('valor em km:'))
const m = Km*1000
const r1 = m .toFixed(0);
console.log('Resultado|Equivalente em Metros:', r1,'M')
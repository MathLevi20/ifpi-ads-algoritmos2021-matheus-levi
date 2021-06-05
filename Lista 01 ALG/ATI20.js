const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const C = Number(prompt('Escreva uma temperatura em °C:'))
const F = (9*C+160)/5
const r1 = F.toFixed(2);
console.log('Resultado|Temperatura em °F:', r1,)


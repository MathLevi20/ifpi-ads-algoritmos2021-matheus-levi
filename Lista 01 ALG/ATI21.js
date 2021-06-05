const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const F = Number(prompt('Escreva uma temperatura em °F:'))
const C = (5 * F - 160) / 9
const r1 = C .toFixed(2);
console.log('Resultado|Temperatura em °C:', r1,)
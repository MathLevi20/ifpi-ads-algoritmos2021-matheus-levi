const prompt = require('prompt-sync')()

console.log("Bem vindo!!");
const m1 = 0.19
const h1 = Number(prompt('Valor:'))

const re = (h1 * m1) 
const r1 = re.toFixed(2);
console.log('Resultado: US$', r1)
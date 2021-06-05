const prompt = require('prompt-sync')()

console.log("Bem vindo!!");
const m1 = 3.6
const h1 = Number(prompt('Insira a velocidade por Km/h:'))

const re = (h1 / m1) 
const r1 = re.toFixed(2);
console.log('Resultado:',r1, 'm/s')
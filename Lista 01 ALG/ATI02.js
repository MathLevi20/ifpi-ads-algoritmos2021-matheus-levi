const prompt = require('prompt-sync')()

console.log("Bem vindo!!");
const m1 = 60
const h1 = Number(prompt('insira as horas:'))
const h2 = Number(prompt('insira os minutos:'))

const re = ((h1 * m1 )+h2 )

console.log('Resultado:',re, 'minutos')
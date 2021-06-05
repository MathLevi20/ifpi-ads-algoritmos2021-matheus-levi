const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Base = Number(prompt('Base:'))
const Altura = Number(prompt('Altura:'))
const Area01 = Base * Altura

console.log('Resultado:Area do retangulo', Area01,'²')
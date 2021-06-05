const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Base = Number(prompt('Base:'))
const Altura = Number(prompt('Altura:'))
const Area01 = Base * Altura
const Area02 = Area01 / 2

console.log('Resultado:Area do triangulo', Area02,"²")
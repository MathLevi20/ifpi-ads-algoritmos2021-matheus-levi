const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Lado = Number(prompt('Lado:'))
const Area01 = Lado ** 2

console.log('Resultado:Area do quadrado', Area01,'²')
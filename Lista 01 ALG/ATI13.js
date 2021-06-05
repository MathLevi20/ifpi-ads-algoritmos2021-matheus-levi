const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Inp = Number(prompt('Valor em reais:'))
const Calculo = Inp*70/100

console.log("70% do valor", Calculo,"$")
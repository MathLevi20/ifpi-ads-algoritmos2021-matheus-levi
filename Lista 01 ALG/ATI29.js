const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Mes = parseInt(prompt('Escreva quantos Meses:'))


anos = Math.trunc(Mes / 12)
Meses = Mes % 12

 console.log('Resultado|Anos:',anos,'|Meses:',Meses)
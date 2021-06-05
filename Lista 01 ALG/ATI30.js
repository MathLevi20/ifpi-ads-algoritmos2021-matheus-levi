const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const minutos = parseInt(prompt('Escreva quantos Minutos:'))

dias = Math.trunc(minutos / (24 * 60))
horas = Math.trunc(minutos/ 60) % 24
min = minutos % 60

console.log('Resultado|Dias:',dias,'|Horas:',horas,'|Minutos:',min)

  
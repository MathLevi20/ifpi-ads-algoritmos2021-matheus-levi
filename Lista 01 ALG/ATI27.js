const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Seg = parseInt(prompt('Escreva quantos Segundos:'))  

horas = Math.trunc(Seg / 60 ** 2),
minutos = Math.trunc(Seg / 60) % 60,
segundos = Seg % 60;


console.log('Resultado|Horas:',horas,'|Minutos:',minutos,'|Segundos:',segundos)

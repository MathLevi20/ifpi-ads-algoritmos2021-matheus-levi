const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Seg = parseInt(prompt('Escreva quantos Segundos:'))  

semanas = Math.trunc(Seg / (7 * 24)),
dias = Math.trunc(Seg / 24) % 7,
horas = Seg % 24;


console.log('Resultado|Semanas:',semanas,'|Dias:',dias ,'|Horas:',horas )
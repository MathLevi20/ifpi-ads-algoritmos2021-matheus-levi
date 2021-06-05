const prompt = require('prompt-sync')()

console.log("Bem vindo!!");
const ms = 3.6
const km = Number(prompt('Insira os metros por segundo:'))

const re = (ms * km) 

console.log('Resultado:',re, 'Km/h')
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const m= parseInt(prompt('Valor em Metros:'))  
const cm = m/1000
const r1 = cm 
console.log('Resultado|Valor em Kilometros:', r1,'km |Valor em Metros',m,'m')

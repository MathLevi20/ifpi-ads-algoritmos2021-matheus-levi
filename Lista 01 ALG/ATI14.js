const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Nota01 = parseInt(prompt('Nota 01:'))  
const Nota02 = parseInt(prompt('Nota 02:'))  
const Nota03 = parseInt(prompt('Nota 03:'))  
const Peso = (Nota01*2+Nota02*3+Nota03*1)/(2+3+1)
const NotaPon = Peso .toFixed(2);
console.log('Resultado|Media:',NotaPon)
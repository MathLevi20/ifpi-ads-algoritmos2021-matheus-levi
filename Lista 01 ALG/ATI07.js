const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Numero01 = parseInt(prompt('Numero 01:')) 
const Numero02 = parseInt(prompt('Numero 02:'))  
const Numero03 = parseInt(prompt('Numero 03:'))  

const Cal01 = (Numero01 + Numero02)
const Cal02 = (Numero02 - Numero03)

const ResAdi = Cal01 .toFixed(2);
const ResSub = Cal02 .toFixed(2);
console.log('Resultado|Soma:',ResAdi,"|Subtração:",ResSub)
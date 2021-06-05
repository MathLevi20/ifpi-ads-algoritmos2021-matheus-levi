const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

let Binario = Number(prompt('Digite um numero Binario de 4 digitos:'))
let numero02 = (Binario).toString().split("")

A = (parseInt(numero02[0]) * 2 ** 3) 
B = (parseInt(numero02[1]) * 2 ** 2) 
C = (parseInt(numero02[2]) * 2 ** 1) 
D = (parseInt(numero02[3]) * 2 ** 0)

console.log('Resultado|', A+B+C+D, typeof (A))
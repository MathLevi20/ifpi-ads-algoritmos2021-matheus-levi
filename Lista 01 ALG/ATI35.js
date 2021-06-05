const prompt = require('prompt-sync')()

console.log("Bem vindo!!")
//esse deu trabalho
let numero = Number(prompt('Digite um Numero com 4 digitos:')) 
let numero02 = (numero).toString().split("")
let realDigits = numero02.map(Number)

a = realDigits[0]
b = realDigits[1]
c = realDigits[2]
d = realDigits[3]

    console.log('Resultado|Soma do elemetos:',a+b+c+d)
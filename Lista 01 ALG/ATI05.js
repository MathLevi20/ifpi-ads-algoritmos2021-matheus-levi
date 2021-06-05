const prompt = require('prompt-sync')()

console.log("Bem vindo!!")
//esse deu trabalho
let numero = (prompt('Digite um Numero com 3 digitos:')) 
let numero02 = (numero).toString().split("")
let realDigits = numero02.map(Number)
a = realDigits[0]
b = realDigits[1]
c = realDigits[2]

    console.log('Resultado|Soma do elemetos:',a+b+c)
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const num = Number(prompt('Digite o Primeiro Numero:')) 

const reverse = (num) => (String(num)
.split("")
.reverse()
.join(""))
console.log( 'Numero Rerveso:' ,reverse(num))
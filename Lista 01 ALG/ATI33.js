const prompt = require('prompt-sync')()

console.log("Bem vindo!!")
//esse deu trabalho

const num = Number(prompt('Digite o Primeiro Numero:'))

const reverse = (num) => (String(num)
    .split("")
    .reverse()
    .join(""))
a = reverse(num)
const b = parseInt(a);
console.log('Numero Rerveso:',b+num)

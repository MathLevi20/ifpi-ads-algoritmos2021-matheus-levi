const prompt = require('prompt-sync')()

console.log("Bem vindo!!")
const Inp = Number(prompt('insira o salario do empregado:'))
//const InpAu = Number(prompt('Aumento de quantos por cento:'))
//const Calculo = ((InpAu/100)*Inp)+Inp
const Calculo = Inp*25/100
const NewSal = Calculo+Inp
console.log("Aumento de 25 % | Salario atual de", NewSal ,"$")
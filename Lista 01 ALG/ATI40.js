const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const anos = parseInt(prompt('Quantos anos voce fuma:'))  
const dias = parseInt(prompt('Quantos cigarros por dia :'))  
const carteira = parseInt(prompt('Preço de uma carteira:'))

resultado = ((anos*365)*dias/20)*carteira

console.log('Resultado|Quantidade de dinheiro que um fumante gasta é' ,resultado)
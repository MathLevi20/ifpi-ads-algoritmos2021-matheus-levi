const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const N01 = parseInt(prompt('Primeiro Numero:'))  
const N02 = parseInt(prompt('Segundo Numero:'))  
const N03 = parseInt(prompt('Terceiro Numero:'))

Resposta = ( ( N01  +  N02 ) ** 2 )  +  ( ( N02  +  N03 ) ** 2 )  /  2 

console.log('Resultado|' ,Resposta)

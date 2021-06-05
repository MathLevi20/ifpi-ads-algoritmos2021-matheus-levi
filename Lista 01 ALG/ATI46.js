const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const produto = parseInt(prompt('Valor do produto:'));

entrada  =  produto/3 + (produto%3) 
parcela  =  produto/3 

console.log('Resultado|Valor da entrada:',entrada,'|Valor da parcela:',parcela)
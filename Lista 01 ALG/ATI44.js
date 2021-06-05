const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const Kg = Number(prompt('Quantos quilos de latão voce deseja:'));

cobre = Kg*0.70
zinco = Kg*0.30

console.log('Resultado|Quantidade de cobre:' ,cobre,"|Quantidade de zinco:",zinco)
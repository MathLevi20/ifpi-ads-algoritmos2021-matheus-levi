const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Centena = Number(prompt('Digite uma centena:'))

if (Centena % 2 == 0){
    
    console.log(`Numero Primo ${Centena}`)
}
    else {
    console.log(`Não é um numero primo ${Centena}`)
    }
}

resultado()

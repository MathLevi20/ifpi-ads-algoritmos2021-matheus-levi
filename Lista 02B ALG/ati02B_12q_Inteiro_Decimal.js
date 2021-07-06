const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Numero =Number(prompt('Digite um Numero:')) 
if (Number.isInteger(Numero)){
    console.log(`${Numero} é Inteiro`)
} else{
    console.log(`${Numero} é um Decimal`)
}
}

main()


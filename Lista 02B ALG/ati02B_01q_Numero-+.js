const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Numero = Number(prompt('Digite um Numero:'))

if ( 0<Numero ){
    console.log(`Numero Positivo`)}
else if ( 0>Numero ){
    console.log(`Numero Negativo`)}
}

main()
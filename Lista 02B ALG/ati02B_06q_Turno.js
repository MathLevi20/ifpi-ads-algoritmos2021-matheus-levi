const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Turno =(prompt('Digite seu Turno:'))

if ( Turno=='M' ){
    console.log(`Bom Dia!`)}
else if ( Turno=='V' ) {
    console.log(`Boa Tarde!`)}
else if ( Turno=='N' ) {
    console.log(`Boa Noite!`)}
else {
    console.log(`Valor Inválido!`)
}}

main()
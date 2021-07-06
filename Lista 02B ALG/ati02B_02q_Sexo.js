const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Sexo =(prompt('Digite seu Sexo(M/F):'))

if ( Sexo=='M' ){
    console.log(`M - Masculino`)}
else if ( Sexo=='F' ) {
    console.log(`F - Feminino`)}
else {
    console.log(`Sexo Inválido`)
}}

main()
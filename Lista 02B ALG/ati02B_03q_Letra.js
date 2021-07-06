const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Letra =(prompt('Digite uma Vogal ou Consoante:'))
const letra02 = Letra.toLowerCase()
if (letra02=='a' || letra02=='e' || letra02=='i' || letra02=='o' || letra02=='u'){
    console.log(`Vogal`)}
else {
    console.log(`Consoante`)
}}

main()
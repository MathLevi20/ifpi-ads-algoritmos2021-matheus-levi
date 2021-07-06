const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Numero01 = Number(prompt('Primeiro numero:'))
const Numero02 = Number(prompt('Segundo numero:'))
const Numero03 = Number(prompt('Terceiro numero:'))
const Numero04 = Number(prompt('Quarto numero:'))
const Numero05 = Number(prompt('Quinto numero:'))

const Media = calculoM(Numero01,Numero02,Numero03,Numero04,Numero05)

console.log(" ")
console.log("Media",Math.trunc(Media))
console.log(" ")

if ( Media<Numero01 ){
    console.log(`Primeiro numero é o maior que a Media`)}
    if (Media<Numero02 ){
    console.log(`Segundo numero é o maior que a Media`)}
    if  (Media<Numero03 ){
    console.log(`Terceiro numero é o maior que a Media`)}
    if  (Media<Numero04 ){
    console.log(`Quarto numero é o maior que a Media`)}
    if  (Media<Numero05 ){
    console.log(`Quinto numero é o maior que a Media`)}
    else{
    }

}

function calculoM(Num01,Num02,Num03,Num04,Num05){
    const Med = (Num01+Num02+Num03+Num04+Num05)/5
    return Med
}



resultado()


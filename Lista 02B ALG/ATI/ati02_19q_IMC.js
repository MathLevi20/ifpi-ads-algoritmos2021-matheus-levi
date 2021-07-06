const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){

const Altura = Number(prompt('Qual sua altura?'))
const Peso = Number(prompt('Qual é o seu peso?'))

const ResultadoImc = Imc(Altura,Peso)
console.log("Seu Imc é",Math.trunc(ResultadoImc))
console.log()

if ( ResultadoImc<25 ){
    console.log(`Normal`)}
else if ( ResultadoImc> 25 && ResultadoImc < 30 ){
    console.log(`Obeso`)}
else{
    console.log('Obesidade mórbida')
}


function Imc(Altura,Peso){
    const total = Peso/(Altura**2)
    return total
}}

resultado()


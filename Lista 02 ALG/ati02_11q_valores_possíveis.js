const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const num01 = Number(prompt('Opção 01|Informe o 1° número:'))
const num02 = Number(prompt('Opção 02|Informe o 2° número:'))
const num03 = Number(prompt('Opção 03|Informe o 3° número:'))
const op = Number(prompt('Escolha a opção (1,2,3):'))

if ( op==1 ){
    console.log(`Primeira opção ${num01}`)}
else if ( op==2 ){
    console.log(`Segunda opção ${num02}`)}
else if ( op==3 ){
    console.log(`Terceira opção ${num03}`)}
else{
    console.log("Opção invalida")
}
}

resultado()
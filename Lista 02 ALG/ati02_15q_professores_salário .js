const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Prof01 = Number(prompt('Quantidade de Horas aulas do primeiro professor:'))
const Prof02 = Number(prompt('Quantidade de horas aulas do segundo professor:'))
const Valor01 = Number(prompt('Valor da aula do primeiro professor:'))
const Valor02 = Number(prompt('Valor da aula do primeiro professor:'))

const MediaProf1 = calculoProf01(Prof01,Valor01)
const MediaProf2 = calculoProf02(Prof02,Valor02)

if ( MediaProf1>MediaProf2 ){
    console.log(`O Primeiro Professor ganha mais que o Segundo`)}
else if ( MediaProf1<MediaProf2 ){
    console.log(`O Segundo Professor ganha mais que o Primeiro`)}
else{
}



function calculoProf01(Professor1,Valor01){
    const total01 = Professor1*Valor01
    return total01
}

function calculoProf02(Professor2,Valor02){
    const total02 = Professor2*Valor02
    return total02
}}

resultado()

const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
let input = (prompt('Insira o numero:')),NumeroSeparado = input.split(".");
const Numero01 = Number(NumeroSeparado[0])
const NumeroSrt02 = (NumeroSeparado[1])
const NumeroNumber03 = Number(NumeroSrt02[0])

if (5 <= NumeroNumber03){
    let A = Numero01+1
    console.log(`Arredondado pra cima |Resposta:${A}`)}
else if  (5 > NumeroNumber03 ) {
    let B = Numero01
    console.log(`Arredondado pra baixo |Resposta:${B}`)}
else{
}}

resultado()

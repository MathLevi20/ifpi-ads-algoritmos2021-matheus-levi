const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){

const Angulo = parseFloat(prompt('Qual o angulo?'))


if ( Angulo > 0 && Angulo <90){
    console.log(`Primeiro Quadrante`)}

else if (Angulo==90){    
    console.log(`Primeiro Quadrante`)}

else if ( Angulo> 90 && Angulo<180){
    console.log(`Segundo Quadrante`)}

else if (Angulo==180){
    console.log(`Segundo Quadrante`)}

else if ( Angulo>180 && Angulo<270){
    console.log(`Terceiro Quadrante`)}

else if (Angulo==270){
    console.log(`Terceiro Quadrante`)}

else if ( Angulo>270 && Angulo<360){
    console.log(`Quarto Quadrante`)}

else if (Angulo==360){
    console.log(`Quarto Quadrante`)}

else{
}
}



resultado()


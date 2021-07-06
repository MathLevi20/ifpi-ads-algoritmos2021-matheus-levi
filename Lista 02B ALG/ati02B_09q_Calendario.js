const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const op = Number(prompt('Escolha a opção (1,2,3,4,5,6,7):'))

if ( op==1 ){
    console.log(`Domingo`)}
else if ( op==2 ){
    console.log(`Segunda-Feira`)}
else if ( op==3 ){
    console.log(`Terça-Feira`)}
else if ( op==4 ){
    console.log(`Quarta-Feira`)}
else if ( op==5 ){
    console.log(`Quinta-Feira`)}
else if ( op==6 ){
    console.log(`Sexta-Feira`)}
else if ( op==7 ){
    console.log(`Sábado`)}
else{
    console.log("Opção invalida")
}
}

main()
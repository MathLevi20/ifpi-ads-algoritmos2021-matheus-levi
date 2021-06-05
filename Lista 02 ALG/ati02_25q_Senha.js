const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Senha = Number(prompt('Digite sua senha:'))

if ( Senha===1234 ){
    console.log(`Senha correta.`)}
else {
    console.log(`Senha incorreta.`)}
}

main()
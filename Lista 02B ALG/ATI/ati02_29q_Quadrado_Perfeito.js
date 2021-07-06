const input = require('prompt-sync')();
console.log("Bem vindo!!")

function main() {
  
let Num = input('Digite um numero com 4 digitos: ')
let Raiz = Math.sqrt(Num)

let Resultado = Number(Num[0] + Num[1]) + Number(Num[2] + Num[3])

    if (Raiz == Resultado) {
    console.log(`Quadrado perfeito!`)} 
    else {
    console.log(`Não é Quadrado perfeito`)}
}


main()
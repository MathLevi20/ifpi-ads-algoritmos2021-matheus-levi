const prompt = require('prompt-sync')()

function main (){

let numero = Number(prompt('Digite um número (0 a 255): '))
let numero_bin = numero
let binario = ''
    while(numero_bin >= 1){
        binario = binario + String(numero_bin%2)
        numero_bin = Math.floor(numero_bin/2)
    }
    console.log(`binario: ${binario.split('').reverse().join('')}`)
}
main()
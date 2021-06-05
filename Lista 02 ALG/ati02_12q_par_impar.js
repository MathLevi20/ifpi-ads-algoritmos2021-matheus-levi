const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado(){
const Numero = Number(prompt('Digite um numero até 100:'))
const Resultado = Numero % 2


if ( Resultado == 0 && Numero <= 100){
    console.log(`É um numero Par${Numero}`)
}
else if (Resultado > 0 && Numero <= 100){
    console.log(`É um numero Impar ${Numero}`)
}
else{
    console.log('Erro:Numero Maior que 100 ')
}

}

resultado()

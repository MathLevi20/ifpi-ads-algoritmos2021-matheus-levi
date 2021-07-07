const prompt = require('prompt-sync')()

function main(){

    const frase = prompt('Digite uma frase: ')
    palavras = frase.split(' ')
    
    console.log(`Numero de Palavras:${palavras.length}`)
}
main()


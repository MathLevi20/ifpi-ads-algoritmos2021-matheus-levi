const input = require('prompt-sync')()

function main(){

    const frase = input('Digite uma frase: ')

    let frase_vetor = frase.split(' ')
    frase_vetor= frase_vetor.join('')

    console.log(frase_vetor)
}
main()
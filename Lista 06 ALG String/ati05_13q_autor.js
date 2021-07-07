const prompt = require('prompt-sync')()
function main() {

    let nome_completo = prompt('Nome Completo: ')
    
    let nome_separado = nome_completo.split(' ')
    let Nome = nome_separado[0]
        Nome = Nome.split('')
    let PrimeiroSobrenome = nome_separado[1]
        PrimeiroSobrenome = PrimeiroSobrenome.split('')

    console.log(`Numero de Palavras:${nome_separado[nome_separado.length - 1]},${Nome[0]}.${PrimeiroSobrenome[0]}`)
}
main()


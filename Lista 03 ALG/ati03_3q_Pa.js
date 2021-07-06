const prompt = require('prompt-sync')()

function main() {
    //entrada
    let razão  = Number(prompt('Qual a razão:'))
    let primeira = Number(prompt('Digite o Primeiro termo:'))
    let n = Number(prompt('Quantos termos voce quer gerar:'))
    //processamento
   
    
    for (let i = 1; n > i ;i++){  
        proximo = primeira + razão
        primeira = proximo
        console.log(`Resultado:${proximo}`)
    }
    //Saida
}
// Initialize the quotient

main()

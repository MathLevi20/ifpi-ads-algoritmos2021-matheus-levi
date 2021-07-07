const prompt = require('prompt-sync')()

function main() {

        const nome_completo = prompt('Nome Completo: ')
        let nome_separado = nome_completo.split(' ')
        
        console.log(`Numero de Palavras:${nome_separado[nome_separado.length - 1]}/${nome_separado[0]}`)
    }
    main()
  


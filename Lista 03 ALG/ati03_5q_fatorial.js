const prompt = require('prompt-sync')()

function main() {
    //entrada
    let fatorial = Number (prompt('Digite o um numero:'))
    let resultado = fatorial

    //processamento
    for (let i = 1; fatorial > i ;i++){  
        resultado *= i
        console.log(`Resultado:${resultado}`)
    }
    }
   // saida
 

    
main()

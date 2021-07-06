const prompt = require('prompt-sync')()

function main() {
    //entrada
    let num = Number (prompt('Digite o um numero:'))
    var tabuada='';
  
    //processamento
    for (let i = 1; i <= 10 ;i++){  
        tabuada = num * i 

        console.log(`Resultado: ${num} X ${i} = ${tabuada}`)
    }
    }
   // saida
 

    
main()

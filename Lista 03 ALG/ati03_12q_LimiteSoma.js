const prompt = require('prompt-sync')()

function main() {
    //entrada
    let num = Number (prompt('Digite o um numero:'))
    let aux = 0
    //processamento
    for (let i = 1; aux < num ;i++){  
        
    aux += i 
    console.log(`Resultado Soma: ${aux}`)
    let Media = aux/2 
    console.log(`Resultado Media: ${Media}`)
    }
    }
   // saida
  

    
main()


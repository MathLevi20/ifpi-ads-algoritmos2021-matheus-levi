const prompt = require('prompt-sync')()

function main() {
    //entrada
    //processamento
    
    var arr = []
    for (let cont = 0; cont < 10 ;cont++){  
        arr = (Number(prompt('Digite o numero:')))
        
        var min = Math.min(arr);
        var max = Math.max(arr);

    }
    console.log(`Resultado Soma: ${min}`)
    console.log(`Resultado Soma: ${max}`)
    }
   // saidaget
  

    
main()


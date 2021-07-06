const prompt = require('prompt-sync')()

    function main() {
        //entrada
        let LimiteInferior = Number(prompt('Digite o Limite Inferior:'))
        let LimiteSuperior = Number(prompt('Digite o Limite Superior:'))
        //processamento
       
        
        for (let i = 1; LimiteInferior <= LimiteSuperior ;i++){  

                if (LimiteInferior % 2 != 0){
            console.log(`Numeros Pares:${LimiteInferior}`)
            }
            LimiteInferior = LimiteInferior +1 
        }
    }   //Saida
    
    // Initialize the quotient

main()


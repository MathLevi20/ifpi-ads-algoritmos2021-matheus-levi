const prompt = require('prompt-sync')()

    function main() {
        //entrada
        let N  = Number(prompt('Qual o N(Multiplos):'))
        let LimiteInferior = Number(prompt('Digite o Limite Inferior:'))
        let LimiteSuperior = Number(prompt('Digite o Limite Superior:'))
        //processamento
       
        
        for (let i = 1; LimiteInferior <= LimiteSuperior ;i++){  

                if (LimiteInferior % N == 0){
            console.log(`Resultado:${LimiteInferior}`)
            }
            LimiteInferior = LimiteInferior +1 
        }
    }   //Saida
    
    // Initialize the quotient

main()

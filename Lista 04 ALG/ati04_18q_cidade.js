const prompt = require('prompt-sync')()

function main() {

    //processamento
let Cidade_A = 200000, Cidade_B = 800000, crescimento_A = 0.035 , crescimento_B = 0.015,anos=0 ;

      while (Cidade_A < Cidade_B ) {
        Cidade_A= (Cidade_A*crescimento_A)+Cidade_A 
        Cidade_B = (Cidade_B*crescimento_B)+Cidade_B
        anos++
        console.log(`Taxa de cresimento das cidades||A: ${Cidade_A.toFixed(0)} ||B:${Cidade_B .toFixed(0)}|| Anos ${anos}`)
        
        // saida
       
    }
    console.log(`A cidade A supero a Cidade B em Anos ${anos}`)
}

   
main()
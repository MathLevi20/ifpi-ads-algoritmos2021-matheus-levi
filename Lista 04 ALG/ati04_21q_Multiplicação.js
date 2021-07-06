const prompt = require('prompt-sync')()

function main() {
 
    let Numero1 = Number(prompt('Escolha um numero:'))
    let Numero2 = Number(prompt('Escolha um outro numero:'))
    //processamento
    let soma = 0 
    let Resultado = 0
      while (Resultado < Numero1) {
        
        soma = soma+Numero2
        Resultado++
        console.log(`${Numero1}*${Numero2} = ${soma}`)
      
        // saida
       
    }
    
}

   
main()

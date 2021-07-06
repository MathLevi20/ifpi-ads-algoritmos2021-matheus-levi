const prompt = require('prompt-sync')()

function main() {
    //entrada
    num_a = Number (prompt('Escolha um numero:'))
    //processamento
    
    let i = 1 ;

    while(num_a > 1 ){
    num_a =num_a / 2  
        i ++
        // saida
        console.log(`${i}: ${num_a}`)  
    }
   
}

    
main()

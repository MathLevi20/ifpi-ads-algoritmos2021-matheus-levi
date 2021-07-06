const prompt = require('prompt-sync')()

function main() {
    //entrada
    num_a = Number (prompt('Numero A:'))
    num_b = Number (prompt('Numero B:'))
    //processamento
    let numero = num_a>num_b ? num_a : num_b
    
    /*let numero = 1// codigo otimizado
    if(num_a > num_b){
        numero = num_a}
    else{
        numero = num_b
    }*/
    

    while(!(numero % num_a == 0 && numero % num_b == 0)){
        console.log(".")
        numero++

    }
   // saida
    console.log('MMC:',numero)
}

    
main()

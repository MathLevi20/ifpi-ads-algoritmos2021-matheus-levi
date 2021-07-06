const prompt = require('prompt-sync')()

function main() {
    //entrada
    let X = Number (prompt('Digite o valor de X:'))
    let N = Number (prompt('Digite o valor de N:'))
    //processamento
    while(N > 2){
        X=X/N
        if (N>2){
        N--
        }
        else{    
        }
        console.log(`${N.toFixed(2)}||${X.toFixed(2)}`)
    }
   // saida
   console.log(`Valor de N: ${N} ||Resultado ${X.toFixed(2)}`)  
}

    
main()

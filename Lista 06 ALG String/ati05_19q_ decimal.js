/*19. Converta um numero do sistema binário, dado como uma cadeia de zeros e uns, para o sistema decimal
de numeração.*/
const input = require('prompt-sync')()
function main(){
    const binario = input('Digite o número binário: ')
    let decimal = 0
    for (i=0;i < binario.length - 1;i++){
       decimal_obtido = parseInt(binario[i]) * Math.pow(2, binario.length - 1 - i)
       decimal = decimal + decimal_obtido
    }

    console.log(decimal)
    
}
main()
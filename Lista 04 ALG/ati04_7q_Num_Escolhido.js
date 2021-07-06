const prompt = require('prompt-sync')()

function main() {
    //entrada
    num_a = Number(prompt('Escolha um numero:'))
    //processamento
    let i = 0

    while (num_a >= i) {
        num_a = num_a
        if(num_a > i){
            i++}
        else{
            break}
        // saida
        console.log(`${i}: ${num_a}`)
    }

}


main()

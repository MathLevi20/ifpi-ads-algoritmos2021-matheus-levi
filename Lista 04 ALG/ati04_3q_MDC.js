const prompt = require('prompt-sync')()

function main() {
    //entrada
    num1 = Number(prompt('Numero A:'))
    num2 = Number(prompt('Numero B:'))
    //processamento


    var resto;

    while (resto != 0) {
        resto = num1 % num2

        num1 = num2
        num2 = resto
    }
    //Saida
    console.log('MDC:', num1)
}


main()

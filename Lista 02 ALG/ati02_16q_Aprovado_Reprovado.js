const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {

    const Nota1 = Number(prompt('Primeira nota?'))
    const Nota2 = Number(prompt('Segunda nota?'))
     
    const resultado = media(Nota1, Nota2)

    if (resultado >= 7) {
        console.log(`Aprovado`)
    }
    else if (resultado >= 5 && resultado <= 7) {
        console.log(`Media ${resultado},Aprovado`)
    }
    else {
        console.log(`Reprovado`)
    }
}

function media(Nota1, Nota2) {
    const result01 = (Nota1 + Nota2) / 2
    return result01
}

main()


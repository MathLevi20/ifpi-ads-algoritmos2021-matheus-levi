const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {

    const Numero01 = Number(prompt('Escolha um numero:'))
    const Numero02 = Number(prompt('Escolha outro numero:'))

    const Ad= Adição(Numero01, Numero02)
    const Sub = Subtração(Numero01, Numero02)
    const Mul = Multiplicação(Numero01, Numero02)
    const Div = Divisão(Numero01, Numero02)
    console.log('')
      console.log(`Adição Resultado: ${Ad}`)
      console.log(`Subtração Resultado: ${Sub}`)
      console.log(`Multiplicação Resultado: ${Mul}`)
      console.log(`Divisão Resultado: ${Div}`)
}

function Adição(A,B) {
    const res01 = (A + B)
    return res01}
function Subtração(A,B) {
    const res02 = (A - B)
    return res02}
function Multiplicação(A,B) {
    const res03 = (A * B)
    return res03}
function Divisão(A,B) {
    const res04 = (A / B)
    return res04}


main()
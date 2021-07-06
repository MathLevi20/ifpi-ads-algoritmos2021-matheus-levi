const input = require('prompt-sync')();

function main() {

  let A1 = Number(input('Qual é o Primeiro do valor X:'))
  let B1 = Number(input('Qual é o Primeiro do valor Y:'))

  let A2 = Number(input('Qual é o Segundo ponto do valor X:'))
  let B2 = Number(input('Qual é o Segundo ponto do valor Y:'))

  let Area = Calculo(A1,B1,A2,B2)

  console.log(`Área: ${Area}`)
}

main();

function Calculo(A1,B1,A2,B2) {
    let Resultado = Math.abs(A1 - A2) * Math.abs(B1 - B2);
    return Resultado
}
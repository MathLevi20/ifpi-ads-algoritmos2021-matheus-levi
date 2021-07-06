const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {

    let Numero01 = Number(prompt('Escolha um numero:'))
    let Numero02 = Number(prompt('Escolha outro numero:'))
  
  let Result = Numero01 % Numero02,Result01 = Numero01 % 2 ,Result02 = Numero02 % 2;

  const C1= Calculo01(Numero01, Numero02,Result)
  const C2 = Calculo02(Result01)
  const C2B = Calculo02(Result02)
  const C3 = Calculo03(Numero01, Numero02)
  const C4 = Calculo04(Numero01, Numero02)
  const C5 = Calculo05(Numero01)
  const C6 = Calculo05(Numero02)
 

  console.log('')
  console.log(`Somas: ${C1}`)
  console.log(`Numero 1°:${C2} | Numero 2°:${C2B}`)
  console.log(`Multiplicaçãp: ${C3}`)
  console.log(`Divisão: ${C4}`)
  console.log(`Quadrado do 1°: ${C5} | Quadrado do 2°: ${C6}`)
}

main()

function Calculo01(A,B,C) {
    const res01 = (A + B)+C
    return res01}
function Calculo02(A) {
  if ( A ==  0 ) {
      var B = 'PAR'} 
else  {
      var B = `IMPAR`}
return B}


function Calculo03(A,B) {
    const res03 = (A + B)*A
    return res03
}
function Calculo04(A,B) {
    const res04 = (A + B)/ A
    return res04
}
function Calculo05(A) {
    const res05 = A ** 2
    return res05
}
function Calculo05(A){
const res06 = A ** 2
return res06
}
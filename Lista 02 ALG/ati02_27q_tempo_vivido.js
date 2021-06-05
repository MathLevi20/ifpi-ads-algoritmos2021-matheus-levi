const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
let AtualDia = (prompt('Digite o dia atual:'))
let AtualMes= (prompt('Digite o Mes atual:'))
let AtualAno = (prompt('Digite o Ano atual:'))
let NascimentoDia = (prompt('Digite o dia voce nasceu:'))
let NascimentoMes = (prompt('Digite o Mes voce nasceu:'))
let NascimentoAno = (prompt('Digite o Ano voce nasceu:'))

const A = calculo(AtualDia,+NascimentoDia),
      B = calculo(AtualMes,+NascimentoMes),
      C = calculo(AtualAno,+NascimentoAno);


if (AtualMes<NascimentoMes){
  console.log(`Voce esta vivo á : ${A} Dias|${B} Meses|${C-1} Anos`)
}
else {
  console.log(`Voce esta vivo á : ${A} Dias|${B} Meses|${C} Ano`)
}

}

function calculo(A,B){
  let res = A-B
  let res02 = Math.abs(res)
  return res02 
}


main()

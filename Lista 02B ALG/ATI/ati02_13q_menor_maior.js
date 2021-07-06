const input = require('prompt-sync')();

function main() {

  let Num01 = Number(input('Informe o 1° número: '))
  let Num02 = Number(input('Informe o 2° número: '))
  let Num03 = Number(input('Informe o 3° número: '))
  let Num04 = Number(input('Informe o 4° número: '))
  let Num05 = Number(input('Informe o 5° número: '))

  const ResultadoMaior = Maior(Num01, Num02, Num03, Num04, Num05)
  const ResultadoMenor = Menor(Num01, Num02, Num03, Num04, Num05)

  console.log(`Maior: ${ResultadoMaior}`);
  console.log(`Menor: ${ResultadoMenor}`);
}

main();

function Maior(Num01,Num02, Num03, Num04, Num05) {
  let Maior = Num01;

  if (Num02 > Maior) 
  Maior = Num02
  if (Num03 > Maior)
  Maior = Num03
  if (Num04 > Maior)
  Maior = Num04
  if (Num05 > Maior)
  Maior = Num05

  return Maior;
}


function Menor(Num01, Num02, Num03, Num04, Num05) {
  let Menor = Num01;

  if (Num02 < Menor) 
  Menor = Num02
  if (Num03 < Menor) 
  Menor = Num03;
  if (Num04 < Menor) 
  Menor = Num04
  if (Num05 < Menor) 
  Menor = Num05
  return Menor
}
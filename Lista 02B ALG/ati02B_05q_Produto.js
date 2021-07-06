const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {

    const Produto1 = Number(prompt('Primeiro produto:'))
    const Produto2 = Number(prompt('Segundo produto:'))
    const Produto3 = Number(prompt('Terceiro produto?:'))
     
    const resultado = Menor(Produto1,Produto2,Produto3)
    console.log(`Menor: ${resultado}`);
}

function Menor(Num01, Num02, Num03) {
    let Menor = Num01;
  
    if (Num02 < Menor) 
    Menor = Num02
    if (Num03 < Menor) 
    Menor = Num03;
    return Menor
  }

main()


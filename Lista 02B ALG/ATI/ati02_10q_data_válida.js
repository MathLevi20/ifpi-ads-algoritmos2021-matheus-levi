const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Dia = (prompt('Digite o dia atual:'))
const Mes= (prompt('Digite o Mes atual:'))
const Ano = (prompt('Digite o Ano atual:'))


if (Ano >= 1900 && Ano <= 9999) {   
}
else {
  console.log(`Ano invalido|Data invalida'`)
  return;
}
    if (Mes >= 1 && Mes <= 12){
    }
    else {
    console.log(`Mes invalido|Data invalida'`) 
    return;
    }
        if (Dia >= 1 && Dia <= 31){
        console.log('Data Valida')
        }
        else{
        console.log('Data invalida')
        }



}



main()
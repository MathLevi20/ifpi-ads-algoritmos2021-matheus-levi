const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
    const Dia1= (prompt('Digite a primeiroo Dia:'))
    const Mes1= (prompt('Digite a primeiroo Mes:'))
    const Ano1= (prompt('Digite a primeiro Ano:'))
    const Dia2= (prompt('Digite o Segundo Dia:'))
    const Mes2= (prompt('Digite o Segundo Mes:'))
    const Ano2= (prompt('Digite o Segundo Ano:'))
    
    if (Dia1 >= Dia2 && Mes1 >= Mes2 && Ano1 >= Ano2) {   
        console.log(`Primeiro Data`) 
    }
    else if (Dia1 <= Dia2 && Mes1 <= Mes2 && Ano1 <= Ano2) {
        console.log(`Segunda Data`)
    }
    else{
    }

}
main()
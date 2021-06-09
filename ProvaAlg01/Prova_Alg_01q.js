const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {
/*A entradas são dois números inteiros: Média de Casos há 14 dias e Média de
Casos hoje. Saída variação em % e classificação da variação.*/

/*Entrada*/   
const MediaDeCasos14 = Number(prompt('Media de casos há 14 dias:'))
const MediaDeCasosHoje = Number(prompt('Media de casos hoje:'))
/*Processamento*/   
let MediaAlta = (MediaDeCasos14*0.15)+MediaDeCasos14,MediaBaixa = (MediaDeCasos14*-0.15)+MediaDeCasos14

let Porcentagem = (100* MediaDeCasosHoje)/MediaDeCasos14
    Porcentagem = Porcentagem - 100

if (MediaAlta <= MediaDeCasosHoje && MediaDeCasosHoje!=0) {
        Classificação = `Em Alta`
    }
    else if (MediaBaixa >= MediaDeCasosHoje && MediaDeCasosHoje!=0) {
        Classificação = `Em Queda`
    }
    else if (MediaBaixa <= MediaDeCasosHoje  && MediaAlta >= MediaDeCasosHoje ) {
        Classificação = `Em Estabilidade`
    }
    else {
    }
/*Saida*/
console.log(`Variação em ${Porcentagem} %||Casos ${Classificação}`)   
}

main()
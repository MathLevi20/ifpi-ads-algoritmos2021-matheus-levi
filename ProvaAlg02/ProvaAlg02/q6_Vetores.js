/*6. (q6_vetor.js) Receba N valores números positivos e negativos em vetor. Crie
funções específicas em arquivo separado (modules) para as seguintes
funcionalidades e as use na função main:
a. Média dos Valores
b. Maior Valor
c. Menor Valor
d. Quantidade Positivos
e. Quantidade Negativos
f. Se há valores repetidos.*/

const prompt = require('prompt-sync')()
function main(){

//entrada
const n = Number(prompt('Quantidade de Valores: '))

//Vetor
const vetor = new Array(n)
for (let i = 0; i < vetor.length; i++) {
    vetor[i] = Number(prompt('Digite o Valor de N: '))}

//Saida
    console.log(`Média dos Valores: ${Media(vetor)}`)
    console.log(`Maior Valor de N: ${Maior(vetor)} || Menor Valor de N: ${Menor(vetor)}`)
    console.log(`Quantidade de valores Positivos(+): ${Positivos_Quantidade(vetor)} || Quantidade valores Negativos(-): ${Quantidade_Negativos(vetor)}`)
    console.log(`Tem valores repetidos: ${Valores_Repetidos(vetor)}`)
}

//função Media dos Valores

function Media(Vetor_N){
    let Soma_de_Valores = 0
    for (let i = 0; i < Vetor_N.length; i++) {
        Soma_de_Valores = Soma_de_Valores + Vetor_N[i]}
    Media = Soma_de_Valores/Vetor_N.length
    return Media}

//função Maior Valor

function Maior(Vetor_N){
    let Maior_Valor = Vetor_N[0]
    for(i = 0; i < Vetor_N.length; i++){
        Maior_Valor = Math.max(Maior_Valor, Vetor_N[i]);
    }
    return Maior_Valor}

//função Menor Valor

function Menor(Vetor_N){
    let Menor_Valor = Vetor_N[0]
    for(i = 0; i < Vetor_N.length; i++){
       Menor_Valor = Math.min(Menor_Valor, Vetor_N[i]);
    }
    return Menor_Valor}

//função Valores Positivos

function Positivos_Quantidade(Vetor_N){
    let Quantidade_Positivos = 0
    for(i = 0; i < Vetor_N.length; i++){
       if (Vetor_N[i] > 0) {
           Quantidade_Positivos = Quantidade_Positivos + 1}
    }
    return Quantidade_Positivos}

//função Valores Negativos

function Quantidade_Negativos(Vetor_N){
    let Quantidade_Negativo = 0
    
    for(i = 0; i < Vetor_N.length; i++){//maior valor
       if (Vetor_N[i] < 0) {
           Quantidade_Negativo = Quantidade_Negativo + 1}
    }
    return Quantidade_Negativo}

//função Valores Repetidos

function Valores_Repetidos(vetor){
    let Resposta = 'Não'
    for(Primeiro_Contador = 0; Primeiro_Contador < vetor.length; Primeiro_Contador++){//maior valor
       for (let Segundo_Contador = 0; Segundo_Contador < vetor.length; Segundo_Contador++) {
           if((Primeiro_Contador !=  Segundo_Contador) && (vetor[Primeiro_Contador] == vetor[Segundo_Contador])){ 
            Resposta = 'Sim'

            } 
        }
    }
    return Resposta
}
main()
//
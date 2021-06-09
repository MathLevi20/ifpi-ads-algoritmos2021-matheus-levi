const input = require('prompt-sync')()
console.log("Bem vindo!!")
function main(){
// Entrada
console.log('Coloque Valores de 0 a 100:')
const Positivado = Number(input('Serasa||Positivos : '))
const Divida = Number(input('Serasa||dívida : '))
const Cons_Nova = Number(input('Serasa||Dados anteriores: '))

//Processamento
let Score_0_1
let Score_0_2
const SerasaDados01 = (Positivado * 2.6) + (Divida * 5.7) + (Cons_Nova * 1.7)
const SerasaDados02 = (Positivado * 6.2) + (Divida * 1.9) + (Cons_Nova * 1.9)

if (SerasaDados01 > 800 && SerasaDados01 <= 1000) {
    Score_0_1 = 'Muito bom'
}else if (SerasaDados01 >= 600 && SerasaDados01 <= 800) {
    Score_0_1 = 'Bom'
}else if (SerasaDados01 >= 600 && SerasaDados01 <= 800) {
    Score_0_1 = 'Regular'
}else{
    Score_0_1 = 'Baixo'
}

if (SerasaDados02 > 700 && SerasaDados02 <= 1000) {
    Score_0_2 = 'Muito bom'
}else if (SerasaDados02 >= 500 && SerasaDados02 <= 700) {
    Score_0_2 = 'Bom'
}else if (SerasaDados02 >= 300 && SerasaDados02 <= 500) {
    Score_0_2 = 'Regular'
}else{
    Score_0_2 = 'Baixo'
}
//Saída
console.log(`Serasa 1.0: ${SerasaDados01}||Categoria: ${Score_0_2}`)
console.log(`Serasa 2.0: ${SerasaDados02}||Categoria: ${Score_0_1}`)
}
main()
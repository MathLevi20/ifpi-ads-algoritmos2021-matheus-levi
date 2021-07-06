const prompt = require('prompt-sync')()

function main() {
    let i = 0;
    quantidade_de_numeros = Number(prompt("Quantos Numeros deseja conferir?"))
    let numeros = new Array (quantidade_de_numeros)

    while (i < quantidade_de_numeros){  
        numeros[i]= Number(prompt('Digite o numero:'))
        i++}
        i= 0
    while( i< quantidade_de_numeros){
        divisor(numeros[i])
        i++} 
}
function divisor(divisor){
    let cont = 0
    console.log("---------------------------")
    while(cont <= divisor){
    if (divisor%cont == 0){
        console.log(divisor," Divisivel por ",cont)
    }
    cont++
    }
}
main()

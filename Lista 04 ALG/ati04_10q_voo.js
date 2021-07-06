const prompt = require('prompt-sync')()

function main() {
    //entrada
    const numero_x = Number(prompt('Escolha um numero:'))
    //processamento
let i = 0
let anterior = numero_x
let atual = Number(prompt("Numero:"))
let soma = anterior + atual
    
    while (soma != numero_x) {
        const numero = Number(prompt("Numero:"))
        anterior = atual
        atual= numero
        soma = atual + anterior
        
        // saida
       
    }
    console.log(`Soma:${soma}||Numero Original:${numero_x}`)
}

   
main()

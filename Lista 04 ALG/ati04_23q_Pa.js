const prompt = require('prompt-sync')()

function main() {


   let razão  = Number(prompt('Qual a razão:'))
   let primeira = Number(prompt('Digite o Primeiro termo:'))
   let n = Number(prompt('Quantos termos voce quer gerar:'))

 
// Initialize the quotient
let i = 1;

while ( n > i) {
    proximo = primeira + razão
    primeira = proximo
    i++;
    console.log(`Resultado:${primeira}||Razão:${i}`)
}
}
main()
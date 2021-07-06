const prompt = require('prompt-sync')()

function main() {


   let Dividendo  = Number(prompt('Digite o Dividendo:'))
   let Divisor = Number(prompt('Digite o Divisor:'))

 
// Initialize the quotient
let quotient = 0;
while (Dividendo >= Divisor) {
    Dividendo -= Divisor;
    quotient++;
    console.log(`Resto:${Dividendo}||Divisor:${Divisor}||Resultado:${quotient}`)
}
}
main()
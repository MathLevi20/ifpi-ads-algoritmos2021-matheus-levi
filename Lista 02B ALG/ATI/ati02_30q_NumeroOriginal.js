const input = require('prompt-sync')();

function main() {

let Numero = input('Informe um número (4 dígitos): ');
let NumeroOriginal = Number(Numero)

let CAL01 = Numero[0] + Numero[1],CAL02 = Numero[2] + Numero[3];
let ResultadoT01 = Number(CAL01),ResultadoT02 = Number(CAL02)

let ResultadoParcial = ResultadoT01+ResultadoT02
let ResultadoFinal = Math.pow(ResultadoParcial,2)

if ( ResultadoFinal === NumeroOriginal){
    console.log('Exatamente igual ao número original ')} 
else {
    console.log('Não é igual')}
}

main();
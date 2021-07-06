const prompt = require('prompt-sync')()
console.log("Bem vindo!!")


function main() {
    
let HoraInicio = Number(prompt("Digite a hora do inicio da Partida: "))
let HoraTermino = Number(prompt("Digite a hora do termino da partida: "))

if (HoraInicio >= HoraTermino){
duracao01 = ( 24 - HoraTermino) + HoraInicio
console.log(`Horas: ${duracao01}`)
}
else{
duracao02 = HoraTermino - HoraInicio
console.log(`Horas: ${duracao02}`)
}
}

main()
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")
const anoA = parseInt(prompt('ano atual:'))
const mesA = parseInt(prompt('mes atual:'))
const diaA = parseInt(prompt('dia atual:'))

const Ano = parseInt(prompt('Ano que voce nasceu:'))
const mes = parseInt(prompt('Mes que voce nasceu:'))
const dia = parseInt(prompt('Dia que voce nasceu:'))


Calculo = ((anoA-Ano-1)*365)+30*(mes-mesA)+(dia-diaA)
console.log ("Você já viveu: " , Calculo)


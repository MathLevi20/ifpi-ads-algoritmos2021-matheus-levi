const prompt = require('prompt-sync')()

console.log("Bem vindo!!")
const dias = parseInt(prompt('Quantos dias voce tem de vida:'))

Ano = Math.trunc (dias/(12*30))
Mes = Math.trunc (dias/30%12)
diaR = dias % 30

console.log ("Você já viveu: |" , Ano,"Anos|", Mes ,"Mes|", diaR,"Dias|")


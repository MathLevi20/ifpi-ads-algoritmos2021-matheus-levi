const prompt = require('prompt-sync')()

console.log("Bem vindo!!");
const Min = 60
const Inp = Number(prompt('insira os minutos:'))
const Horas = Math.trunc (Inp / Min) ;
const Minutos = Inp % Min
//const r1 = re.toFixed(0);
console.log('Resultado: Horas',Horas,': Minutos' , Minutos)
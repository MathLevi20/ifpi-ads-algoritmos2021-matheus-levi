const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const raio = Number(prompt('Raio da circuferencia:'))
const comp = 2* 3.14*raio
const r1 = comp.toFixed(2);
console.log('Resultado|Comprimento da Circunferência:', r1,)
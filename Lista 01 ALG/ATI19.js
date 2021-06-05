const prompt = require('prompt-sync')()
//Leia o valor do raio de uma esfera, calcule e escreva seu volume. (v = (4 * p * r3) / 3) (p = 3,14)
console.log("Bem vindo!!")

const raio = Number(prompt('valor do raio de uma esfera:'))
const volume = ((4* 3.14*(raio**3))/3)
const r1 = volume.toFixed(2);
console.log('Resultado|Volume da esfera:', r1,)
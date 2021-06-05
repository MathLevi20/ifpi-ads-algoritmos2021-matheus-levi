const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const [a, b, c, d, e, f] = prompt('Informe os valores dos coeficientes (A, B, C, D, E, F): ').split(',').map(value => Number(value));

resultadoX = (c * e - b * f) / (a * e - b * d)
resultadoY = (a * f - c * d) / (a * e - b * d)

XR= resultadoX.toFixed(2);
YR= resultadoY.toFixed(2); 

console.log('Resultado|X:',XR,'|Y:',YR)
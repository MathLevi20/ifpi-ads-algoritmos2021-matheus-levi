const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const [x1, y1] = prompt('Quais são as coordenadas do primeiro ponto (x1, y1): ').split(',').map(value => Number(value))
const [x2, y2] = prompt('Quais são as coordenadas do segundo ponto (x2, y2): ').split(',').map(value => Number(value))
  
D = Math.sqrt ((x2-x1)**2)+ ((y2-y1)**2)

console.log('Resultado|' ,D)
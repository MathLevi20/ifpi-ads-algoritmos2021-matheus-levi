/*Leia 2 (duas) frações (numerador e denominador), calcule e escreva a soma destas frações, escrevendo o
resultado em forma de fração*/
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")


const Num01 = Number(prompt('Digite Numerador 01:'))
const de01 = Number(prompt('Digite Denominado 01:'))
const Num02 = Number(prompt('Digite Numerador 02:'))
const de02 = Number(prompt('Digite Denominado 02:'))


const rnum = ((Num01 * de02) + (Num02 * de01));
const rde = (de01 * de02);

console.log('Resultado|' ,rnum,"/",rde)
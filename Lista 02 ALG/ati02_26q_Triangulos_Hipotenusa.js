const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main(){
const Tri01 = Number(prompt('Tamanho do primeiro lado do triangulo:'))
const Tri02 = Number(prompt('Tamanho do segundo lado do triangulo:'))
const Tri03 = Number(prompt('Tamanho do terceiro lado do triangulo:'))

const lado1 = Calculo(Tri01)
const lado2 = Calculo(Tri02)
const lado3 = Calculo(Tri03)

if ( lado1 > lado2 && lado1>lado3 ){
    console.log(`O lado 1 é Hipotenusa e os Lados Triangulos 2 e 3 são catetos`)}
else if (lado2>lado1 && lado2>lado3 ){
    console.log(`O lado 2 é Hipotenusa e os Lados Triangulos 1 e 3 são catetos`)}
else if  (lado3>lado1 && lado3>lado1 ){
    console.log(`O lado 3 é Hipotenusa e os Lados Triangulos 1 e 2 são catetos`)}
{
    console.log('')}
}

function Calculo(Triangulo){
    const Res = Triangulo*2
    return Res}

main()
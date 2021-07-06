const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function resultado() {
    const Triangulo01 = Number(prompt('Angulo do primeiro lado do triangulo:'))
    const Triangulo02 = Number(prompt('Angulo do segundo lado do triangulo:'))
    const Triangulo03 = Number(prompt('Angulo do terceiro lado do triangulo:'))


    if (Triangulo01 < 90 && Triangulo02 < 90 && Triangulo03 < 90) {
        console.log(`Triângulo acutângulo`)
    }
    else if (Triangulo01 == 90 || Triangulo02 == 90 || Triangulo03 == 90) {
        console.log(`Triangulo retângulo `)
    }
    else if (Triangulo01 > 90 || Triangulo02 > 90 || Triangulo03 > 90) {
        console.log(`Triangulo obtusângulo `)
    }
    else {
    }
}

resultado()
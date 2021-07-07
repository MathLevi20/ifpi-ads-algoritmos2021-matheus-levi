const prompt = require('prompt-sync')()

function main(){
    const nome = prompt('Escreva alguma coisa (no maximo 20 caracteres): ')

    vertical(nome)
}

main()

function vertical(Nome){
    Nome.length
    let i = 0
    for (i=0;i <= Nome.length - 1;i++){
        console.log(Nome[i])
    }
}
const prompt = require('prompt-sync')()

function main(){
    const nome = prompt('Escreva seu nome completo: ')
    gerar_login(nome)
}
function gerar_login(nome){
    nome_separado = nome.split(' ')
    let i = 0
    let login = ''
    while(i < nome_separado.length - 1){
        login = login + (nome_separado[i])
        i++
    }
    console.log('login: ', login)
}
main()

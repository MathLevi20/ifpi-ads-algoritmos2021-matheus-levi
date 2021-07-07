const prompt = require('prompt-sync')()
function substr(nome, inicio, final){
    inicio = inicio - 1
    console.log(nome.substr(inicio,final))
    
}
function main(){
    const nome = prompt('Escreva algo: ')
    const inicio = prompt('Início do corte: ')
    const final  = prompt('Final do corte: ')

    substr(nome, inicio, final)
}
main()

const input = require('prompt-sync')()
function main(){
const palavra = input('Digite uma palavra: ')

let palavra_contrario = ''


for(i=palavra.length - 1 ; 0 <= i; i--){
    palavra_contrario = palavra_contrario + palavra[i]
}
if(palavra == palavra_contrario){
    console.log(`${palavra} é palíndroma`)
}else{
    console.log(`${palavra} não é palíndroma`)
}
}
main()


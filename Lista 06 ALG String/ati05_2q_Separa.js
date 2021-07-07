const input = require('prompt-sync')()
function main(){

    let frase = input('Digite uma frase: ')
    let separa_frase = frase.split(' ')

for(i=0 ; i < separa_frase.length; i++){
   
    console.log(separa_frase[i])

}
}
main()

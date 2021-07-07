const prompt = require('prompt-sync')()

function main(){

    const frase = prompt('Digite uma frase: ')
   
    let duplicar = ''
    for (i=0;i < frase.length;i++){
         duplicar = duplicar + (frase[i] + frase[i])
    
     }

    console.log(duplicar)
}
main()

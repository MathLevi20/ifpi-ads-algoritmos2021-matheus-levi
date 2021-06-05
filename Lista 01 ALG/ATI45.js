const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

const  saque =  Number ( prompt ( 'Valor de saque:' ) ) ;


nota50 = Math.trunc (saque / 50 )
nota10 = Math.trunc (( saque % 50 ) / 10 ) 
nota5 = Math.trunc ((( saque % 50 ) % 10 ) / 5 ) 
nota1 = ((saque % 50 ) % 10 ) % 5 


console.log('************* Notas *************')
console.log (nota50,'notas de 50')
console.log ( nota10, 'notas de 10')
console.log ( nota5, 'notas de 5')
console.log ( nota1,'notas de 1') 
const prompt = require('prompt-sync')()

function main() {

    //processamento
let Emprestimo = 3000,  Dias = 0 , Juros = 0.0085 , pagamento = 200;

      while (Emprestimo >= 0 ) {
        Emprestimo = (Emprestimo - pagamento) 
        Emprestimo = (Emprestimo*Juros)+Emprestimo
        Dias++
        console.log(`Saldo a pagar: ${Emprestimo.toFixed(1)} || Emprestimo pago em ${Dias} Dias uteis`)
        
        // saida
       
    }
    
}

   
main()

/*3. (q3_gateway.js) Uma gateway de pagamento (empresa que permite você
processar pagamentos em cartão de crédito) oferece a as seguintes condições:

Implemente um software para que o usuário (suposto lojista) possa simular vendas,
informando o valor da compra e em quantos dias gostaria de receber a grana: pode
informar qualquer quantidade de dias entre 2 e 31 dias.

Apresente: Valor da Compra, Forma de pagamento (se parcelado quantas parcelas),
Valor Taxa cobrado pelo Gateway, Valor Líquido a receber pelo logista e em quantos
dias: 2, 14 ou 31.*/
const prompt = require('prompt-sync')()
console.log("")
function main(){
    
    //Entrada
    
    let Pagamento = Number(prompt('Valor do Pagamento:'));
    let Parcelas = Number(prompt('Quantidade de Parcelas:'));
    let Dias_Para_o_Recebimento = Number(prompt('Voce deseja receber em quantos Dias||Opçoes(2 Dias,14 Dias,31 Dias):'));
    
    //Dados
    const Juros_02Dias_a_vista = 4.39/100,Juros_02Dias_a_prazo = 4.99/100;
    const Juros_14Dias_a_vista = 3.49/100,Juros_14Dias_a_prazo = 3.99/100;
    const Juros_31Dias_a_vista = 2.99/100,Juros_31Dias_a_prazo = 3.49/100;

    //Processamento
    let Forma_de_Pagamento = Forma_Para_Pagamento(Parcelas)
    // Recebimentos em 2 dias
    if (Dias_Para_o_Recebimento==2 && Parcelas == 0){
    Valor_Liquido = Recebimento_Processamento(Juros_02Dias_a_vista,Pagamento,Parcelas)
    }
    else if (Dias_Para_o_Recebimento==2 && Parcelas > 0){         
    Valor_Liquido = Recebimento_Processamento(Juros_02Dias_a_prazo,Pagamento,Parcelas)  
    }
    // Recebimentos em 14 dias    
    if (Dias_Para_o_Recebimento==14&& Parcelas == 0){
    Valor_Liquido = Recebimento_Processamento(Juros_14Dias_a_vista,Pagamento,Parcelas)
    }
    else if (Dias_Para_o_Recebimento==14 && Parcelas > 0 ){
    Valor_Liquido = Recebimento_Processamento(Juros_14Dias_a_prazo,Pagamento,Parcelas)
    }
    // Recebimentos em 31 dias    
    if  (Dias_Para_o_Recebimento==31 && Dias_Para_o_Recebimento ==0){
    Valor_Liquido = Recebimento_Processamento(Juros_31Dias_a_vista,Pagamento,Parcelas)  
    } 
    else if  (Dias_Para_o_Recebimento==31 && Dias_Para_o_Recebimento > 0){
    Valor_Liquido = Recebimento_Processamento(Juros_31Dias_a_prazo,Pagamento,Parcelas)  
    }

    //Saida
    console.log("")
    console.log(`Valor da Compra:${Pagamento} R$ || Forma de pagamento:${Forma_de_Pagamento}`)
    console.log(`Valor cobrado pelo Gateway:${(Pagamento-Valor_Liquido).toFixed(2)} R$`)
    console.log(`Valor liquido:${Valor_Liquido.toFixed(2)} R$ || Recebimento em ${Dias_Para_o_Recebimento} dias`)
}
//Modulo Principal
main()

//Modulo do Valor Liquido
function Recebimento_Processamento(Juros,Pagamento,Parcelas){
    Taxa_de_0_40=0.40
    Parcelas_Por_centagem = Parcelas/100
    Valor_final = Pagamento-Taxa_de_0_40- ( (Juros*Pagamento) + (Parcelas_Por_centagem*Pagamento) )
    return Valor_final
}
//Modulo de Parcelamndo 
function Forma_Para_Pagamento(Parcelas){
    if (Parcelas > 0)
        Parcelas = Parcelas +"x a Prazo"
        else 
        Parcelas = "á vista" 
        return Parcelas
}

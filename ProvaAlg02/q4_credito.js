/*4. (q4_credito.js) A Blue Tech Bank disponibilizou opções de crédito de R$ 40 mil,
60 mil, e 81 mil reais para empreendedores locais. Mensalmente adiciona juros
de 1% sobre o saldo devedor de um empréstimo. As opções de parcelas mensais
são fixas no valor de R$ 1.000, R$ 1.200 ou R$ 1.500. Escreva um algoritmo que
calcule quantos meses são necessários para se concluir o pagamento do
empréstimo e qual o valor da parcela final. A Cada mês no saldo devedor entram
os Juros sobre o saldo atual e Sai a Parcela fixa.

Faça um programa que receba o valor do empréstimo escolhido, o valor de
parcela ( entre as opções acima). e apresente o extrato mês a mês da atualização
do saldo devedor (Juros do Mês, Parcela do Mês fixa, Saldo Anterior, Novo
Saldo(após Juros e Pag. parcela) da primeira até a última parcela. Apresente cada
mês até o saldo chegar a valor 0. A última parcela pode ser inferior à parcela
contratada (Ou seja, saldo devedor negativo ficará subtraído o valor da parcela).
Apresente quanto meses serão necessários para quitar o saldo devedor.*/
const prompt = require('prompt-sync')()

function main() {

     //Entrada
    
     let Pagamento_Mensal = Number(prompt('Opções de parcelas mensais fixas no valor de R$ 1.000, R$ 1.200 ou R$ 1.500.:'));
     let Credito = Number(prompt('Voce deseja receber em quantos Dias||Opções de crédito: R$ 40 mil,60 mil, e 81 mil:'));
    

    //Dados
    let Juros = 0.01 
    
     //processamento
 
      for (Mes=1;Credito >=0;Mes++) {
        Credito_Anteiro = Credito
        Credito = Credito - Pagamento_Mensal 
        Juros_Credito = Credito
        Juros_Resposta = Juros_Credito*Juros
        Credito= (Credito*Juros)+Credito 
    
     //Saldo a Pagar   
        if (Credito>0){
            Saldo_atual = Credito.toFixed(1)}
        else {
            
            Saldo_atual = 0}
    //Juros_do_Mes
        if (Juros_Resposta>0){
            Juros_do_Mes = Juros_Resposta.toFixed(1)}
        else {
            Pagamento_Mensal = (Credito_Anteiro-Pagamento_Mensal)+Pagamento_Mensal
            Pagamento_Mensal = Pagamento_Mensal.toFixed(1)
            Juros_do_Mes = 0}

    // saida
    console.log("")
    console.log (`Parcela do Mes Fixa: ${Pagamento_Mensal} R$ || Juros do Mes ${Juros_do_Mes} R$`)
    console.log (`Saldo Atual: ${Saldo_atual} R$ || Saldo Anterior : R$ ${Credito_Anteiro.toFixed(1)} || Emprestimo pago em ${Mes} Meses`)
    
    
}
}

main()

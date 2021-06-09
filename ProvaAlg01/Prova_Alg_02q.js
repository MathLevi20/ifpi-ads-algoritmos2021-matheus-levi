const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {
/*construa um software que receba o nome do vendedor e valor
total de vendas dele no mês e calcule o valor do seu salário com comissão. Salário fixo R$
1100,00. */
/*construa um software que receba o nome do vendedor e valor
total de vendas dele no mês e calcule o valor do seu salário com comissão. Salário fixo R$
1100,00.
Apresente os valores de comissão que ele ganhou em cada um das faixas de
comissionamento e o valor total da comissão e o seu salário final (fixo + comissão)
*/

/*Entrada*/   
const Nome = (prompt('Nome do Vendador:')),
      VendaMes = Number(prompt('Valor total de vendas no mes:'));

/*Processamento*/   
const Venda_5Mil = 5000, Venda_10Mil = 10000,Venda_30Mil = 30000,Salario=1100;
const PrimeiroParametro = 0.05,SegundoParametro = 0.05,TerceiroParametro = 0.30;


if (Venda_5Mil < VendaMes && VendaMes <= Venda_10Mil) {
    P1 = vendas(VendaMes,Venda_5Mil,PrimeiroParametro)  
    }
   
    else if (Venda_10Mil < VendaMes && VendaMes <= Venda_30Mil) {
    P1 = vendas(VendaMes,Venda_5Mil,PrimeiroParametro)+vendas(VendaMes,Venda_10Mil,SegundoParametro) 
    }
    
    else if (Venda_30Mil <= VendaMes) {
    P1 = vendas(VendaMes,0,TerceiroParametro)}

    else {
    P1 = "(Sem Comisão)"
    }

/*Saida*/
console.log(`Funcionario:${Nome}||Salario Final(Salario+Comisão):${P1+Salario} R$`)   
}

main()
function vendas(VendaMes,Venda_XMil,Parametro){
    let Total = VendaMes-Venda_XMil 
    Total = Total*Parametro
    return Total
}
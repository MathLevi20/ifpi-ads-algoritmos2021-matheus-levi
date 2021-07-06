const prompt = require('prompt-sync')()
console.log("Bem vindo!!")
/*Considerando os dados acima construa um software que receba dois dados: Leitura Atual
e Leitura Anterior e faça todo o cálculo do "Talão de Energia" conforme detalhado acima.
Como saída apresente todo os dados que compõem assim como o valor total a ser pago.*/
function main() {
/*Entrada*/   
const LeituraAtual= Number(prompt('Leitura Atual:')),
      LeituraAnterior = Number(prompt('Leitura Anterior:'));

/*Processamento*/   
const Consumo30 = 0.59,Consumo100 = 0.75,Pis=0.15,Icms=0.25,Iluminação=0.06


let Consumo01 = Consumo(LeituraAtual,LeituraAnterior)
let Valor01 = Leitura(Consumo30,Consumo100,Consumo01)
let IMCS01 = IMCS(Icms,Valor01)
let PIS_CONFIS01 = PIS_CONFIS(Valor01,Pis)
let TaxaIluminação = TaxaI(Valor01,Consumo01,Iluminação)
let BandeiraQuantidade1 = BandeiraQuantidade(LeituraAtual,LeituraAnterior,Consumo01)
let ValorTotal = Total(Valor01,IMCS01,PIS_CONFIS01,TaxaIluminação,BandeiraQuantidade1)

/*Saida*/
console.log(`Consumo ${Consumo01.toFixed(2)} KWh`)
console.log(`Valor Faturado ${Valor01.toFixed(2)} R$||Valor Com Tarifas ${ValorTotal.toFixed(2)}R$`)
console.log(`Bandeira  R$ ${BandeiraQuantidade1*8}  ||Bandeira ${BandeiraQuantidade1.toFixed(2)}`)
console.log(`ICMS R$ ${IMCS01.toFixed(2)}`)
console.log(`PIS/CONFIS R$ ${PIS_CONFIS01.toFixed(2)} `)
console.log(`Taxa Iluminação R$ ${TaxaIluminação.toFixed(2)}`)
}

main()
//Modulos

function Consumo(LeituraAtual,LeituraAnterior){
    total=LeituraAtual-LeituraAnterior
    return total
}

function Leitura(Consumo30,Consumo100,Consumo01){ 
    
if (Consumo01 <= 30 && Consumo01<= 0) {
    var Valor01=(Consumo01*0) 
    
} 

    else if (30 < Consumo01 && Consumo01 <= 100) {
    
    var Valor01 =((Consumo01*Consumo30)+Consumo01)
    
    }
    
    else if (Consumo01 > 100) {
    var Valor01=((Consumo01*Consumo100)+Consumo01)    
}   
    else { 
    }
    return Valor01
}

function IMCS(Icms,Leitura){
    let Consumo = Leitura*Icms
    
    return Consumo

}

function PIS_CONFIS(Leitura,Pis){
    let Consumo = Leitura*Pis
    
    return Consumo
}

function TaxaI(Leitura,Consumo01,Iluminação){
    
    if (Consumo01>80){
    TaxaIluminação = Leitura*Iluminação} 
    
    else if (Consumo01<=80)
    TaxaIluminação = 0
    
    return TaxaIluminação
}
function BandeiraQuantidade(LeituraAtual,LeituraAnterior,Consumo){
    if (Consumo>=100){
    
    var Bandeira01 = (LeituraAtual-LeituraAnterior)/100}
    
    else {
    
    var Bandeira01 = 0}
    
    return Bandeira01
}
function Total (Valor01,IMCS01,PIS_CONFIS01,TaxaIluminação,BandeiraQuantidade1){
    var total = Valor01+IMCS01+PIS_CONFIS01+TaxaIluminação+(BandeiraQuantidade1*8)
    return total

}
const prompt = require('prompt-sync')()

console.log("Bem vindo!!")

function main(){
const Data = prompt('Informe uma data(DD/MM/AAAA): ')
const data_extenso= Mes(Data)
console.log(`${Data[0]+Data[1]} de ${data_extenso} de ${Data[6]+Data[7]+Data[8]+Data[9]} `)

}
main() 


function Mes(Data){
    if ( Data[3]+[4]=="01" ){
        Mes_Extenso = `Janeiro`}
    else if ( Data[3]+[4]=='02' ){
        Mes_Extenso = `Fevereiro`}
    else if ( Data[3]+[4]=='03' ){
        Mes_Extenso = `Março`}
    else if ( Data[3]+[4]=='04' ){
        Mes_Extenso = `Abril`}
    else if ( Data[3]+[4]=='05' ){
        Mes_Extenso = `Maio`}
    else if ( Data[3]+[4]=='06' ){
        Mes_Extenso = `Junho`}
    else if ( Data[3]+[4]=='07' ){
        Mes_Extenso = `Julho`}
    else if ( Data[3]+[4]=='08' ){
        Mes_Extenso = `Agosto`}
    else if ( Data[3]+[4]=='09' ){
        Mes_Extenso = `Setembro`}
    else if ( Data[3]+[4]=='10' ){
        Mes_Extenso = `Outubro`}
    else if ( Data[3]+[4]=='11' ){
        Mes_Extenso = `Novembro`}
    else if ( Data[3]+[4]=='12' ){
        Mes_Extenso = `Dezembro`}
    else{
    }       
    return Mes_Extenso
    }



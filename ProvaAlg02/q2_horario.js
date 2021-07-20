/*2. (q2_horario.js) Leia um horário no formato hh:mm:ss e escreva o resultado na
seguinte forma: “hh hora(s), mm minuto(s) e ss segundo(s)*/
const prompt = require('prompt-sync')()

function main(){
    
    //Entrada
    
    let Horario = prompt('Informe aqui o horário marcada (HH/MM/SS):');
    
    //Processamento
    
    let Horas = (Horario[0] + Horario[1]) //HH
    let Minutos = (Horario[3] + Horario[4]) //MM
    let Segundos = + (Horario[6] + Horario[7]) //SS
    
    //Saida
    
    console.log(`${Horas} Hora(s),${Minutos} Minutos(s) e ${Segundos} Segundo(s)`)

}


main()
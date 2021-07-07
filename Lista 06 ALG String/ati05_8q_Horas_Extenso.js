const prompt = require('prompt-sync')()

function main(){
    let hora = prompt('Informe aqui a hora marcada (HH/MM/SS): ');
    let Horas_Extenso = (hora[0] + hora[1]) + ' hora(s)||' + (hora[3] + hora[4]) + ' minuto(s)||' + (hora[6] + hora[7]) + ' segundo(s) ';
    console.log(Horas_Extenso)

}


main()

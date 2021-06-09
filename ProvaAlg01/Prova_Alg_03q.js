const prompt = require('prompt-sync')()
console.log("Bem vindo!!")

function main() {
/*Calcule a média ponderada do aluno, considerando as 3 notas com seus 3 pesos, obtendo
assim a Média Semestral (0 a 10).
São considerados Aprovados que obtiverem Média Semestral de pelo menos 7. São
Reprovados direto que ficarem abaixo de 4,0. Os demais vão para Prova Final (PF), que é
uma avaliação valendo 10 pontos, na qual o aluno deverá somar com sua Média Semestral
e obter pelo menos uma média 6,0 pontos para ser Aprovado Após PF, caso contrário será
Reprovado Pós PF.
Dito isso, receba Nome e as 3 notas do aluno (Av1, Av2 e Atvs), calcule sua Média
Semestral. Caso ele fique de prova final (conforme explicado acima), solicite para digitar a
nota obtida na Prova Final obtida. Ao final Apresente: a Média Semestral, Situação (AP,
RP ou Em PF). Em caso de PF apresente a Média Semestral Pós PF e a Situação do
alunos Aprovado Pós-PF ou Reprovado Pós-PF
*/

/*Entrada*/   
const Avaliação01 = Number(prompt('Avaliação 1:'))
const Avaliação02 = Number(prompt('Avaliação 2:'))
const Avaliação03 = Number(prompt('Atividades:'))

/*Processamento*/   
const Porcent01 = 2, Porcent02 = 3,Porcent03= 1;
let Semestre = nota(Avaliação01,Avaliação02,Avaliação03,Porcent01,Porcent02,Porcent03)
console.log(Semestre)

let Aluno
let mediaFinal

if (Semestre >= 7) {
    Aluno = "Aprovado"  
    }
   
    else if (Semestre < 4) {
    Aluno = `Reprovado`  
    }
    
    else  {
    console.log(`Prova Final`)
    const Provafinal = Number(prompt('Avaliação Final:'))
    mediaFinal=(Semestre + Provafinal)/2
        
        if (mediaFinal >= 6) {
        Aluno = 'Aprovado pós PF'
    }       else{
        Aluno = 'Reprovado pós PF'
    }
    }

    

    

/*Saida*/
console.log(`Nota Final do aluno:${Aluno} `)
console.log(`Media:${Semestre}`)   
}
//Modulos
main()
function nota(Aval01,Aval02,Aval03,Porcent01,Porcent02,Porcent03){
    let Total = ((Aval01*Porcent01+Aval02*Porcent02+Aval03+Porcent03)/(2+3+1))-0.17
    let Total01 = Total.toFixed(2)
    return Total01}

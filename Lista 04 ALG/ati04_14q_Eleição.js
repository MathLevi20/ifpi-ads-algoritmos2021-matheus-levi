
const prompt = require('prompt-sync')()
function main(){
let opiniao = true;
let serra = 0, dilma = 0, ciro = 0, indeciso = 0, outro = 0, nulo_ou_branco = 0
let serra_porcent = 0, dilma_porcent = 0, ciro_porcent = 0, indeciso_porcent = 0, outro_porcent = 0, nulo_porcent = 0

    while(opiniao){
        console.log('************Pesquisar Eleitoral************')
        console.log('Escolha Um Numero do Seu candidato')
        console.log('Serra = 45 | Dilma = 13 | Ciro Gomes = 23')
        console.log('Indeciso = 99 | Outros = 98 | nulo/branco = 0')
        escolha = Number(prompt('escolha um candidato: '))
        if(escolha == 45){
            serra = serra + 1
        }else if(escolha == 13){
            dilma = dilma + 1
        }else  if(escolha == 23){
            ciro = ciro + 1
        }else if(escolha == 99){
            indeciso = indeciso + 1
        }else if(escolha == 98){
            outro = outro + 1
        }else if(escolha == 0){
            nulo_ou_branco = nulo_ou_branco + 1
        }
        
        console.log('continue? (s/n) ')
        status_loop = prompt()

        if(status_loop != 's'){
            opiniao = false
        }
    }
    
    total_entrevistados = nulo_ou_branco + outro + indeciso + ciro + dilma + serra  
    
    serra_porcent = porcentagem (serra,total_entrevistados)  
    dilma_porcent = porcentagem (dilma,total_entrevistados)
    ciro_porcent = porcentagem (ciro,total_entrevistados)
    indeciso_porcent = porcentagem (indeciso,total_entrevistados)
    outro_porcent = porcentagem (outro ,total_entrevistados)
    nulo_porcent =  porcentagem (nulo_ou_branco,total_entrevistados)

    console.log(`Serra: ${serra_porcent} `)
    console.log(`Dilma: ${dilma_porcent} `)
    console.log(`Ciro : ${ciro_porcent} `)
    console.log(`Indecisos: ${indeciso_porcent} `)
    console.log(`Outros: ${outro_porcent} `)
    console.log(`Nulo: ${nulo_porcent} `)
}
main()
function porcentagem (candidato,total_entrevistados){
    let porcentagem = (candidato * 100)/total_entrevistados
    return porcentagem
}

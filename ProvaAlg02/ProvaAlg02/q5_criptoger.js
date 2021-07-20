/*5. (q5_criptoger.js) Criptografia de Roger: Receba uma frase(letra números e
espaços apenas) e criptografia-a usando o algoritmo de roger:
a. A frase deverá ser quebrada ao meio (truncada)
b. Cada uma das partes deve ser invertida (como se fossem duas portas
abrindo em 180 graus). (exemplo: "Guanabara" → "nauGaraba"
c. Vogais viram números (a-1, ..., u-5)
d. Números viram * (1-*, 2-**, ....9-*********, 0-#),
e. Consoantes avançam 10 casas no Alfabeto de acordo com a tabela
ASCII (no alfabeto Z vira A, z vira a, se fosse só um deslocamento)*/

const prompt = require('prompt-sync')()

function main() {
     //Entrada
    const frase =(prompt('Insira uma frase:'))
    
    //Função Processamento
    Saida_Criptografia=criptografia(frase)

    //Saida
    console.log(Saida_Criptografia)
}
    function criptografia(frase){
    let frase_letras = ""
    for (i=0;i < frase.lenght;i++) 
       frase_letras = frase[i]
        
    const Frase_Divida= frase.lenght/2
    if(i < Frase_Divida){
        let Nova_frase=""
            for(let i = frase.lenght-1;i>=0;i--){
                Nova_frase=Nova_frase+frase[i]}
            return Nova_frase
    } 
}

main()

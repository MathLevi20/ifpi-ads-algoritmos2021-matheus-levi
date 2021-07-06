const prompt = require('prompt-sync')()

function main(){
    console.log("Digite 1 para o Jogador 1")
    console.log("Digite 2 para o Jogador 2")

    let ponto = 0, Player1 = 0, Player2 = 0 ,i = 0;    
        while(true){
                ponto = Number(prompt('Quem marcou ponto:'))
                i++
                if(ponto == 1){
                    Player1 = Player1 + 1
                }if(ponto == 2){
                    Player2 = Player2 + 1
                }
                if(Player1 >= 2){
                    if(Player1 - Player2 >= 2 && i==21){
                        console.log(`jogador 1 ganhou`)
                        break
                    }
                }
                if(Player2 >= 2){
                    if(Player2 - Player1 >= 2 && i == 21 ){

                        console.log(`jogador 2 ganhou`)
                        break
                    }
                }
            }
        }

main()
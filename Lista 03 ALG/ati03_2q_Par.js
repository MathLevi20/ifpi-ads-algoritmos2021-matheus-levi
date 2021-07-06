const prompt = require('prompt-sync')()

function main() {
    let N = Number(prompt("Digite um limite para N?"))
    

   for (let i = 0; i <= N ;i++ ){  
        console.log(`N=${N},${i}`)
        i++}
        
   
}
main()

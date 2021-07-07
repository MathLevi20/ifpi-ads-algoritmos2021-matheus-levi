const prompt = require('prompt-sync')()
function main(){
const verbo = prompt('Digite um verbo terminado em ER: ')

let radical = verbo.substr(0, verbo.length-2)

console.log(radical)

console.log(`1* pessoa Singular|| Eu ${radical + 'o'}`)
console.log(`2* pessoa Singular|| Você ${radical + 'es'}`)
console.log(`3* pessoa Singular|| Ele/Ela ${radical + 'e'}`)

console.log(`1* pessoa do Plural || Nós ${radical + 'emos'}`)
console.log(`2* pessoa do Plural || Vocês ${radical + 'eis'}`)
console.log(`3* pessoa do Plural || Eles/Elas ${radical + 'em'}`)
}

main()

const prompt = require('prompt-sync')()
function main() {
    let salario = 0, reajuste = 0, loop = true, status_loop = 's'
    let salario_anterior = 0
    let salario_reajustado = 0
    while (loop) {
        let salario = Number(prompt('Digite seu salário: '))
        if (salario <= 2999.99) {
            reajuste = salario * 25 / 100
        } else if (salario <= 5999.99) {
            reajuste = salario * 20 / 100
        } else if (salario <= 9999.99) {
            reajuste = salario * 15 / 100
        } else {
            reajuste = salario * 10 / 100
        }
        salario_anterior = salario_anterior + salario
        salario_reajustado = salario_reajustado + (reajuste + salario)

        console.log('continue? (s/n) ')
        status_loop = prompt()

        if (status_loop != 's') {
            loop = false
        }
    }
    console.log(`Salários antes do reajuste : ${salario_anterior} R$||salários depois do reajuste: ${salario_reajustado}R$||Valor do reasustes:${salario_reajustado - salario_anterior}R$`)
}
main()
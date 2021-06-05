input = require('prompt-sync')()

function main() {

    let a = Number(input('coeficiente A: '))
    let b = Number(input('coeficiente B: '))
    let c = Number(input('coeficiente C: '))

  let resultado = Calculo(a, b, c)

  switch (resultado.length) {
    case 1:
      console.log('Raiz:')
      console.log(`x = ${resultado[0]}`);
      break;
    case 2:
      console.log('Raízes:')
      console.log(`x1 = ${resultado[0]}`);
      console.log(`x2 = ${resultado[1]}`);
      break;
    default:
      console.log('Não tem raízes!')
  }
}

main()

function Calculo(A, B, C) {
  let D = (B ** 2) - 4 * A * C

  if (A !== 0 && D >= 0) {
    if (D > 0) {
     
    let x1 = (-B + D) / (2 * A)
    let x2 = (-B - D) / (2 * A)

      return [x1, x2]} 
      else {
      let x = -B / (2 * A)
      return [x]
    }
  } else {
    return []
  }
}
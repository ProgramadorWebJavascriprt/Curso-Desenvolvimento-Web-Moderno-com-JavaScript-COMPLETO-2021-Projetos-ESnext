// Sexta-feira, 14/01/2022 as 14:53:00 h+|-
// Tagged Template #02
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` // tofixed {TypeError: valor.tofixed is not a function}
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.99
const precoParcela = 11
console.log(real `1x ${preco} ou 3x de ${precoParcela},`)
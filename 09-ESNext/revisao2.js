// Quinta-feira, 13/01/2022 as 22:08:20 h+|-
// Funções
// Arrow Function 
const soma = (a, b) => a + b
console.log(soma(3, 2))
    // Arrow Function (this)
const texto1 = () => console.log(this === exports)
const texto2 = texto1.bind({})
texto1()
texto2()
    // Parametro default
function log(texto = 'Node') {
    console.log(texto)
}
log()
log(null)
log('um dia irei compra uma Toyota Bandeirante...se Deus quiser...')
    // Operador rest
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3, 5, 7, 9))
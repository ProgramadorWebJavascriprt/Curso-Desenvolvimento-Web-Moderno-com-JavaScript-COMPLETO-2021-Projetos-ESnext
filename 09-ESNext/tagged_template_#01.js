// Sexta-feira, 14/01/2022 as 14:40:00 h+|-
// Tagged Template #01
// * Processa temlate dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}
const aluno = 'Gui'
const situacao = 'aprovado'
console.log(tag `${aluno} está ${situacao};`)
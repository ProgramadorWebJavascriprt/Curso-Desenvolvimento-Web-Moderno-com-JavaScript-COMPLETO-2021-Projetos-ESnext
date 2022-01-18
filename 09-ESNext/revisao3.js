// Quinta-feira, 13/01/2022 as 22:27:37 h+|-
// ES8: object.values/object.entries
const obj = { a: 3, b: 5, c: 7 }
console.log(Object.values(obj))
console.log(Object.entries(obj))
    // Melhorias na Notação Literal
const nome = 'André Luis'
const pessoa = {
    nome,
    profissiao() {
        return 'Técnico em Informática  '
    }
}
console.log(pessoa.nome, pessoa.profissiao())
    // Class 
class Programa {}
class Programadorweb extends Programa {
    Programar() {
        return 'Faço Curso de desenvolvimento de Web Moderno com JavaScript pela Udemy...'
    }
}
console.log(new Programadorweb().Programar())
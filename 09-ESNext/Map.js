// Sexta-feira, 14/01/2022 as 15:09:00 h+|-
// Map 
const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('angular', { framework: true })
    /* console.log(tecnologias.react) undefined */
console.log(tecnologias.get('react').framework)
const chavesVariadas = new Map([
    [function() {}, 'função'],
    [{}, 'Objeto'],
    [123, 'número'],
])
chavesVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
chavesVariadas.set(357, 'b')
console.log(chavesVariadas)
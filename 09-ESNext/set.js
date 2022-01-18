// Sexta-feira, 14/01/2022 as 15:29:00 h+|-
// set:
/* Não aceita repetição e não indexada */
const times = new Set()
times.add('Francisco Beltrão')
times.add('Coronel Vivida').add('Clevelândia').add('Pato Branco')
times.add('Francisco Beltrão')
console.log(times)
console.log(times.size)
console.log(times.has('pato branco'))
console.log(times.has('Pato Branco'))
times.delete('Francisco Beltrão')
console.log(times.has('Francisco Beltrão'))
const nomes = ['Raquel', 'Lucas', 'Júlia', 'Lucas']
const nomesSet = new Set(nomes)
console.log(nomesSet)
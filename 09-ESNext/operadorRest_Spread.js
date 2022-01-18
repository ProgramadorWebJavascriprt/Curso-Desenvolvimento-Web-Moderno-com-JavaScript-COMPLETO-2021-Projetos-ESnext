// Quinta-feira, 13/01/2022 as 22:50:00 h+|-
// Operador rest
/* operador... rest(juntar)/spread(espalhar) 
    Cita como exemplo: 
  function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(3, 5, 7, 9)) 
 */
// usar spread com objeto 
const funcionarios = { nome: 'André Luis', salario: 4500.00 }
const clone = { ativo: true, ...funcionarios }
console.log(clone)
    // usar spread com array 
const grupoA = ['Lucas Camargo', 'Jean Cardoso', 'Luis Carlos']
const grupoFinal = ['André Luis', 'Ezequias Buss', ...grupoA]
console.log(grupoFinal)
/* terça-feira,18/01/2022 as 10:38:00 h+|-
    Async await #01 
*/
function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(() => resolve(), tempo)
    })
}
/* esperarPor(2000)
    /*   .then(esperarPor)
      .then(() => console.log('Executa....1'))
      .then(esperarPor)
      .then(() => console.log('Executa....2'))
      .then(esperarPor)
      .then(() => console.log('Executa....3'))
      .then(() => console.log('GAMBOMMMM')) */


function retornaValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 500)
    })
}
async function retornarValorRapido() {
    return 20
}

async function excutar() {
    /*     console.log(' Subindoooooooooooooo......... ')
     */
    let valor = await retornarValorRapido()
    await esperarPor(1500)
    console.log(`Preparar.${valor}...`)
    await esperarPor(1500)
    console.log(`Apontar.${valor +1}..`)
    await esperarPor(1500)
    console.log(`Fogo.${valor +2}...`)
    return valor + 3
}
async function executarDeVerdade() {
    const valor = await excutar()
    console.log(valor)
}
executarDeVerdade()
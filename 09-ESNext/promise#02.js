/* Segunda-feira,17/01/2022 as 15:03:00 h+|- */
// Promise 02
/* setTimeout(function() {
    console.log('Em breve RotaFacil.web')
    setTimeout(function() {
        console.log(' aplicativo hibrido de busca de lotação da Empresa TUPA')
    }, 2000)
    setTimeout(function() {
        console.log('Chega de tentar pdf sem logico ou sentido')

    }, 2000)
    setTimeout(function() {
        console.log('basta informar aonde se encontra e seu destino, e o aplicativo lhe informar...')

    }, 2000)
}, 2000) */

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve) {
        setTimeout(function() {
            console.log('RotaFácil...')
            resolve( /* 'Seja Bem Vindo ao Front Page "RotaFácil"' */ )
        }, tempo)
    })
}
esperarPor()
    .then(() => esperarPor())
    .then(esperarPor())
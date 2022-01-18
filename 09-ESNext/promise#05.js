/* Segunda-feira,17/01/2022 as 22:25:00 h+|- */
// Promise 05
function funcionarOUnao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try {
            /* con.log('temp') Erro Esp.: ReferenceError: con is not defined */
            if (Math.random() < chanceErro) {
                reject('Perigo...fuga louco')
            } else {
                resolve(valor)
            }

        } catch (e) {
            reject(e)
        }

    })
}
funcionarOUnao('Ufa tudo tranquilo', 0.9)
    .then(v => console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log('Fim!!!'))
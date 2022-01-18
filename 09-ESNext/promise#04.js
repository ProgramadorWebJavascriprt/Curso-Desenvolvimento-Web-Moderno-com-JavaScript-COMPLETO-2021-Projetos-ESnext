/* Segunda-feira,17/01/2022 as  22:07:00 h+|- */
// Promise 04
function gerarNumerosEntre(min, max, tempo) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(function() {
            const fator = max - min + 1
            const aleatorio = parseInt(Math.random() * fator) + min
            resolve(aleatorio)
        }, tempo)

    })
}

function geraVariosNumeros() {
    return Promise.all([
        gerarNumerosEntre(1, 40, 1000),
        gerarNumerosEntre(1, 40, 500),
        gerarNumerosEntre(1, 40, 250),
        gerarNumerosEntre(1, 40, 100),
        gerarNumerosEntre(1, 40, 50),
        gerarNumerosEntre(1, 40, 25)
    ])
}
console.time('promise')
geraVariosNumeros()
    .then(console.log)
    .then(() => {
        console.timeEnd('promise')
    })
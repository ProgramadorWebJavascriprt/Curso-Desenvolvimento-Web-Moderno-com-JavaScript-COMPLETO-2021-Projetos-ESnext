/* terça-feira,18/01/2022 as 15:12:00 h+|-
    Async await #02 
*/
function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [max, min] = [min, max]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Numero repetido!')
        }
        resolve(aleatorio)
    })
}


async function gerarMegoSena(qtdeNumeros, tentativas = 1) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 40, numeros))
        }
        return numeros
    } catch (e) {
        /* throw "Que Chato" */
        if (tentativas > 100) {
            throw "Não deu certo"
        } else {
            return gerarMegoSena(qtdeNumeros, tentativas + 1)
        }
    }

}


/* gerarNumerosEntre(1, 5, [1, 2, 4])
    .then(console.log)

    .catch(console.log) */
gerarMegoSena(25)
    .then(console.log)
    .catch(console.log)
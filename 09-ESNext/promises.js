// Sexta-feira, 14/01/2022 as 21:40:00 h+|-
/* Promises  */
function falarDepoisDe(segundos, frases) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            /*    reject(frases) */

            resolve(frases)


        }, segundos * 1000)
    })
}
falarDepoisDe(3, 'em breve Alura Filmes apresenta "Imersão React 2022"!!!!')
    .then(frase /* , abc) */ => frase.concat('Vem Participar...'))
    .then(outrafrase => console.log(outrafrase))
    /* .catch(e => console.log(e)) */
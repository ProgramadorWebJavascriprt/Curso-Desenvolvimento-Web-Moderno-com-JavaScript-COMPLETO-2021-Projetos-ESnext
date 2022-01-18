/* Segunda-feira,17/01/2022 as 15:57:00 h+|- */
// Desafio Promise Resposta
const fs = require('fs')
const path = require('path')

function lerArquivo(caminho) {
    return new Promise(resolve => {
        fs.readFile(caminho, function(__, conteudo) {
            resolve(conteudo.toString())

        })
        console.log('Depois de ler')
    })
}
const caminho = path.join(__dirname, 'dados.txt')
    /* lerArquivo(caminho)
    .then(conteudo => console.log(conteudo)) */
lerArquivo(caminho)
    .then(conteudo => conteudo.split('\n'))
    /*     .then(linhas => console.log(linhas.length)) */
    .then(linhas => linhas.join(','))
    .then(conteudo => `O valor final é :${conteudo}`)
    .then(console.log)
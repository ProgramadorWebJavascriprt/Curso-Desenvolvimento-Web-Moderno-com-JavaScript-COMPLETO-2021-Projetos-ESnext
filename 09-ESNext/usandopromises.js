// Domingo, 16/01/2022 as 09:08:00 h+|- pela Manhã
/* Usando Promises {Refatornado Callbacks p/Promise} */
const { rejects } = require('assert')
const http = require('http')
    /* const { resolve } = require('path/posix') */
const getTurma = letra => {
        const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
        return new Promise((resolve, reject) => {
            http.get(url, res => {
                let resultado = ''

                res.on('data', dados => {
                    resultado += dados
                })
                res.on('end', () => {
                    try {
                        resolve(JSON.parse(resultado))
                    } catch (e) {
                        reject(e)
                    }
                })
            })
        })
    }
    // Segunda-feira,17 de janeiro de 2022 as 08:55:00 h+|-
    /* let nomes = []
    getTurma('A').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
        getTurma('B').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        })
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    }) */
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(nomes => console.log(nomes))
    /* .then(x => console.log(x)) */
getTurma('D').catch(e => console.log(e.message)) // Unexpected token < in JSON at position 0
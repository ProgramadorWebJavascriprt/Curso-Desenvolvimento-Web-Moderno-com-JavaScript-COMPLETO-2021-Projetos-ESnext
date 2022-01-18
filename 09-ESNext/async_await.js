    // Segunda-feira,17 de janeiro de 2022 as 09:39:00 h+|-
    // Async_Await
    const { rejects } = require('assert')
    const http = require('http')
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
        /*    Recurso do ES8
          Objetivo de simplificar o uso de promise  */
    let obterAlunos = async() => {
            const ta = await getTurma('A')
            const tb = await getTurma('B')
            const tc = await getTurma('C')
            return [].concat((ta, tb, tc))
        } // retorna um objeto AnyncFunction
    obterAlunos()
        .then(alunos => alunos.map(a => a.nome))
        .then(nomes => console.log(nomes))
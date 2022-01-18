/* Segunda-feira,17/01/2022 as 13:57:00 h+|- */
// Promise 01
/* let a = 1
console.log(a) */


const primeiroElemento = arrayOUstring => arrayOUstring[0]
const letraMinuscula = letra => letra.toLowerCase()
new Promise(function(resolve) {
        resolve(['Ana', 'Julia', 'Luis', 'Lucas'])
    })
    .then(primeiroElemento)
    .then(primeiroElemento)
    .then(letraMinuscula)
    /*     .then(v => console.log(v))
     */
    .then(console.log)
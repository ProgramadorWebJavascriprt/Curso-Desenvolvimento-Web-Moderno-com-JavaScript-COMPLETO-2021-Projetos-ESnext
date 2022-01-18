// Quinta-feira, 13/01/2022 as 21:42:00 h+|-
// let e const 
{
    var a = 3
    let b = 5
    console.log(b)
}
console.log(a)
    /* console.log(b)
    /home/programador/arquivos/alktecnologia.net/curso_de_javascript_web_moderno/exercicios-js/09-ESNext/revisao1.js:8
    console.log(b)
                ^

    ReferenceError: b is not defined
        at Object.<anonymous> (/home/programador/arquivos/alktecnologia.net/curso_de_javascript_web_moderno/exercicios-js/09-ESNext/revisao1.js:8:13)
        at Module._compile (internal/modules/cjs/loader.js:778:30)
        at Object.Module._extensions..js (internal/modules/cjs/loader.js:789:10)
        at Module.load (internal/modules/cjs/loader.js:653:32)
        at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
        at Function.Module._load (internal/modules/cjs/loader.js:585:3)
        at Function.Module.runMain (internal/modules/cjs/loader.js:831:12)
        at startup (internal/bootstrap/node.js:283:19)
        at bootstrapNodeJSCore (internal/bootstrap/node.js:623:3)
     */
    // Template String:
const produto = 'ToyotaBandeirante'
console.log(`${produto} é caro mais um dia irei ter uma....`)
    // Destructuring:
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
    // Destrutura um Array:
const [x, , y] = [1, 2, 3]
console.log(x, y)
    // Destrutura um objeto;
const { idade: i, nome } = { nome: 'André Luis', idade: 39 }
console.log(i, nome)
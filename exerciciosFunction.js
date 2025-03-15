const validador = require('./validadorFunction')

// -----------------------------------------------------------------------------------
// Exercicios referente ao tipo função (function)
// Todas as perguntas vão pedir uma função, então envie a função de forma direta na
// resposta ou envie uma variavel com a função
// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------
// 1 - Crie uma função em que ela recebe 2 números (number) e retorna a soma entre
// eles.
// -----------------------------------------------------------------------------------
function somar(number1, number2) {
    return number1 + number2
}

// console.log(somar(10, 20))
// console.log(somar(20, 20))
// console.log(somar(50, 50))

validador.resposta1(somar)

// -----------------------------------------------------------------------------------
// 2 - Crie uma função em que ela recebe 4 números (number) e retorna a multiplicação
// entre eles.
// -----------------------------------------------------------------------------------
function multiplicar(b1, b2, b3, b4) {
    return b1 * b2 * b3 * b4
}

validador.resposta2(multiplicar)

// -----------------------------------------------------------------------------------
// 3 - Crie uma função que recebe 1 valor (number) e retorna true (bool) caso esse 
// número seja maior ou igual a 30 e false caso contrario.
// -----------------------------------------------------------------------------------
function maiorOuIgual(a30) {
    return a30 >= 30
}


// console.log(maiorOuIgual(10))
// console.log(maiorOuIgual(30))
// console.log(maiorOuIgual(60))

validador.resposta3(maiorOuIgual)

// -----------------------------------------------------------------------------------
// 4 - Crie uma função que recebe 1 valor (number) e retorna true (bool) caso esse 
// número seja par e false caso seja impar
// -----------------------------------------------------------------------------------
function parOuImpar(parImpar) {
    return parImpar % 2 === 0 && 1
}

validador.resposta4(parOuImpar)

// -----------------------------------------------------------------------------------
// 5 - Crie uma função que recebe 1 objeto e retorna o valor que está no atributo nome
// desse objeto
// -----------------------------------------------------------------------------------
function mostrarNome(pessoa) {
    return pessoa.nome
}
validador.resposta5(mostrarNome)

// -----------------------------------------------------------------------------------
// 6 - Crie uma função que recebe 1 array e retorna o último item desse array
// -----------------------------------------------------------------------------------
function ultimoItem(lista) {
    return lista[lista.length - 1]
}

validador.resposta6(ultimoItem)

// -----------------------------------------------------------------------------------
// 7 - Cria uma função que recebe 2 números e retorna um valor aleatório entre esses
// numeros (Dica: função Math.Random gera número aleatório)
// -----------------------------------------------------------------------------------
function valorAleatorioEntre(numero1, numero2) {
    return Math.random() * (numero2 - numero1) + numero1
}
validador.resposta7(valorAleatorioEntre)

// -----------------------------------------------------------------------------------
// 8 - Crie uma função que recebe 1 valor de qualquer tipo e retorna o tipo desse
// valor em string (Dica: typeof (variavel) retorna o tipo da variavel)
// -----------------------------------------------------------------------------------
function valorDeQualquerTipo(S10) {
    return typeof S10
}
validador.resposta8(valorDeQualquerTipo)

// -----------------------------------------------------------------------------------
// 9 - Crie uma função que recebe 1 array e retorna 1 item aleatório desse array
// -----------------------------------------------------------------------------------
function itemAleatorio(array) {
    var posicaoAleatoria = Math.round(valorAleatorioEntre(0, array.length - 1))
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[posicaoAleatoria]
}
validador.resposta9(itemAleatorio)

// -----------------------------------------------------------------------------------
// 10 - Crie uma função que recebe (nome, idade, valor) e retorna um objeto com os
// atributos nome, idade e valor com os respectivos valores passado na função. 
// -----------------------------------------------------------------------------------

function rg(nome, idade, valor) {
    const objeto = {
        nome: nome,
        idade: idade,
        valor: valor,
    }
    return objeto
}
validador.resposta10(rg)














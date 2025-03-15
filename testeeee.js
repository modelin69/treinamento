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

somar = (number1, number2) => number1 + number2


// console.log(somar(10, 20))
// console.log(somar(20, 20))
// console.log(somar(50, 50))

validador.resposta1(somar)

// -----------------------------------------------------------------------------------
// 2 - Crie uma função em que ela recebe 4 números (number) e retorna a multiplicação
// entre eles.
// -----------------------------------------------------------------------------------
multiplicar = (a1, a2, a3, a4) => a1 * a2 * a3 * a4


validador.resposta2(multiplicar)

// -----------------------------------------------------------------------------------
// 3 - Crie uma função que recebe 1 valor (number) e retorna true (bool) caso esse 
// número seja maior ou igual a 30 e false caso contrario.
// -----------------------------------------------------------------------------------
maiorOuIgual = (a1,) => a1 >= 30


// console.log(maiorOuIgual(10))
// console.log(maiorOuIgual(30))
// console.log(maiorOuIgual(60))

validador.resposta3(maiorOuIgual)

// -----------------------------------------------------------------------------------
// 4 - Crie uma função que recebe 1 valor (number) e retorna true (bool) caso esse 
// número seja par e false caso seja impar
// -----------------------------------------------------------------------------------
parOuImpar = (a1) => a1 % 2 === 0 && 1

validador.resposta4(parOuImpar)

// -----------------------------------------------------------------------------------
// 5 - Crie uma função que recebe 1 objeto e retorna o valor que está no atributo nome
// desse objeto
// -----------------------------------------------------------------------------------

function mostrarNome(carro) {
    return carro.nome
}
validador.resposta5(mostrarNome)

// -----------------------------------------------------------------------------------
// 6 - Crie uma função que recebe 1 array e retorna o último item desse array
// -----------------------------------------------------------------------------------
const ultimoItem = (lista) => lista[lista.length - 1]

validador.resposta6(ultimoItem)

// -----------------------------------------------------------------------------------
// 7 - Cria uma função que recebe 2 números e retorna um valor aleatório entre esses
// numeros (Dica: função Math.Random gera número aleatório)
// -----------------------------------------------------------------------------------
valorAleatorio = (valorMinimo, valorMaximo) => (Math.random() * (valorMaximo - valorMinimo)) + valorMinimo

// console.log("RESULTADO DE 0 a 100", valorAleatorio(0, 100))
// console.log("RESULTADO DE 200 a 300", valorAleatorio(200, 300))
// console.log("RESULTADO DE 500 a 510", valorAleatorio(500, 510))

validador.resposta7(valorAleatorio)

// -----------------------------------------------------------------------------------
// 8 - Crie uma função que recebe 1 valor de qualquer tipo e retorna o tipo desse
// valor em string (Dica: typeof (variavel) retorna o tipo da variavel)
// -----------------------------------------------------------------------------------
qualquerTipo = (a1) => typeof a1
validador.resposta8(qualquerTipo)

// -----------------------------------------------------------------------------------
// 9 - Crie uma função que recebe 1 array e retorna 1 item aleatório desse array
// -----------------------------------------------------------------------------------
function itemAleatorio(array) {
    var posicaoAleatoria = Math.round(valorAleatorio(0, array.length - 1))
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[posicaoAleatoria]
}
validador.resposta9(itemAleatorio)

// -----------------------------------------------------------------------------------
// 10 - Crie uma função que recebe (nome, idade, valor) e retorna um objeto com os
// atributos nome, idade e valor com os respectivos valores passado na função. 
// -----------------------------------------------------------------------------------
function criarObj (nome, idade, valor){
    return {
        nome, idade, valor
    }
}




validador.resposta10(criarObj)


///PARABENS RODRIGO, VOCE CONSEGUIU!!!///
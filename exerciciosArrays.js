const validador = require('./validadorArray')

// -----------------------------------------------------------------------------------
// Exercicios referente ao tipo função (array)
// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------
// 1 - Crie um array que tenha 4 strings dentro dele
// -----------------------------------------------------------------------------------
var comida = ["banana", "pera", "uva", "goiaba"];
validador.resposta1(comida)

// -----------------------------------------------------------------------------------
// 2 - Na variavel lista2 você possui um array, insira na resposta o valor do primeiro
// item desse array
// -----------------------------------------------------------------------------------
var lista2 = validador.exemplo1()
lista2[0]

validador.resposta2(lista2[0])

// -----------------------------------------------------------------------------------
// 3 - Na variavel lista3 você possui um array, insira na resposta o tamanho
// desse array
// -----------------------------------------------------------------------------------
const lista3 = validador.exemplo1()
var tamanho = (lista3.length)

validador.resposta3(tamanho)

// -----------------------------------------------------------------------------------
// 4 - Na variavel lista4 você possui um array, insira na resposta o valor do ultimo
// item desse array
// -----------------------------------------------------------------------------------
const lista4 = validador.exemplo1()

var ultimaPosicao = lista4.length - 1
var ultimoItem = lista4[ultimaPosicao]

validador.resposta4(ultimoItem)

// -----------------------------------------------------------------------------------
// 5 - Na variavel lista5 você possui um array de strings, troque o valor do segundo item para
// "Fernando"
// -----------------------------------------------------------------------------------

const lista5 = validador.exemplo1()
lista5[1] = `Fernando`
validador.resposta5(lista5)

// -----------------------------------------------------------------------------------
// 6 - Na variavel lista6 você possui um array, insira no final desse array a string
// "Camelo"
// -----------------------------------------------------------------------------------

const lista6 = validador.exemplo1()
lista6.push(`Camelo`)

validador.resposta6(lista6)

// -----------------------------------------------------------------------------------
// 7 - Na variavel lista7 você possui um array, remova o segundo item
// desse array
// -----------------------------------------------------------------------------------

const lista7 = validador.exemplo1()

lista7.splice(1,1)

validador.resposta7(lista7)

// -----------------------------------------------------------------------------------
// 8 - Na variavel lista8 você possui um array, remova o item da ultima casa
// desse array
// -----------------------------------------------------------------------------------
const lista8 = validador.exemplo1()
lista8.splice(lista8.length -1,1)

validador.resposta8(lista8)

// -----------------------------------------------------------------------------------
// 9 - Na variavel lista9 você possui um array, faça um clone (cópia) desse array, mas
// essa cópia não pode ter o mesmo endereço de memória que o original.
// -----------------------------------------------------------------------------------
const lista9 = validador.exemplo2

lista9(...lista8)

validador.resposta9(lista9)

// -----------------------------------------------------------------------------------
// 10 - Na variavel lista10 você possui um array numeros (number), utilizando a função
// filter (array) envie na resposta um novo array que só contenha números iguais ou 
// acima de 30 dos números recebidos na lista10.
// -----------------------------------------------------------------------------------

const lista10 = validador.exemplo3()

const filtrados = lista10.filter(num => num >= 30)
validador.resposta10(filtrados)


// -----------------------------------------------------------------------------------
// 11 - Na variavel lista11 você possui um array de objetos com atributo nome e idade,
// crie um novo array ultilizando a função map (array) que seja a mesma coisa que o
// array de objetos, mas só possua strings com o nome do objeto correspondente.
// Exemplo:
// [{nome: 'A', idade: 5}, {nome: 'B', idade: 8}, {nome: 'C', idade: 9}]
// Transformar em:
// ['A', 'B', 'C']
// -----------------------------------------------------------------------------------

const lista11 = validador.exemplo4()

validador.resposta11()
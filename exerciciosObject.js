const validador = require('./validadorObject')

// -----------------------------------------------------------------------------------
// Exercicios referente ao tipo objeto (object)
// -----------------------------------------------------------------------------------

// -----------------------------------------------------------------------------------
// 1 - Crie um objeto com o seguinte modelo:
//
// nome: Luiza,
// idade: 25
// 
// -----------------------------------------
var pessoa = { nome: `luiza`, idade: 25 }
validador.resposta1(pessoa)

// -----------------------------------------------------------------------------------
// 2 - Crie um objeto com o seguinte modelo:
//
// nome: Marcos
// idade: 45
// carro: {
//    cor: Vermelho
//    modelo: Palio
//    ano: 2010
//    portas: 4
// }
//
// -----------------------------------------------------------------------------------
const dados = {
    nome: 'Marcos',
    idade: 45,
    carro: {
        cor: 'Vermelho',
        modelo: 'Palio',
        ano: 2010,
        portas: 4
    }
};

validador.resposta2(dados);

// -----------------------------------------------------------------------------------
// 3 - Na variavel pessoa3 você tem um objeto com o atributo nome (string).
// Altere o valor desse atributo para Carlos
// -----------------------------------------------------------------------------------

const pessoa3 = validador.objeto1()

pessoa3.nome = `Carlos`
validador.resposta3(pessoa3)

// -----------------------------------------------------------------------------------
// 4 - Na variavel pessoa4 você tem um objeto com o atributo carro (object).
// E nesse atributo carro você tem o atributo cor (string), altere a cor do carro da
// pessoa4 para Azul
// -----------------------------------------------------------------------------------

const pessoa4 = validador.objeto1()
pessoa4.carro.cor = `Azul`

validador.resposta4(pessoa4)

// -----------------------------------------------------------------------------------
// 5 - Na variavel pessoa5 você tem um objeto com o atributo dinheiro (numeric) e contaBancaria (numeric).
// Extraia (diminua) 15 do dinheiro da pessoa5.
// Acrescente (aumente) 15 da contaBancaria da pessoa5.
// -----------------------------------------------------------------------------------


const pessoa5 = validador.objeto1()
pessoa5.dinheiro = pessoa5.dinheiro - 15
pessoa5.contaBancaria = pessoa5.contaBancaria + 15

validador.resposta5(pessoa5)

// -----------------------------------------------------------------------------------
// 6 - Na variavel pessoa6 você tem um objeto que não possui o atributo civil.
// Adicione o atributo civil com valor Casado a esse objeto.
// -----------------------------------------------------------------------------------
const pessoa6 = validador.objeto1()
pessoa6.civil = `casado`
validador.resposta6(pessoa6)

// -----------------------------------------------------------------------------------
// 7 - Na variavel pessoa7 você tem um objeto, faça o clone desse objeto sem que ambos
// tenham o mesmo endereço de memória e passe ambos os objetos para a resposta
// -----------------------------------------------------------------------------------

const pessoa7 = validador.objeto1()
clonePessoa7 = { ...pessoa7 }
validador.resposta7( clonepessoa7 (...pessoa7) ) 

///duvidas na linha 92, nao consgui usr o clone como da ultima vez///

// -----------------------------------------------------------------------------------
// 8 - Na variavel pessoa8 você tem um objeto e na variavel complemento8 também.
// Mescle o objeto do complemento8 com o objeto da pessoa8 (Coloque as propriedades
// de ambas em um unico objeto)
// -----------------------------------------------------------------------------------

const pessoa8 = validador.objeto1()
const complemento8 = validador.complemento1
const mesclado= { ...pessoa8, ...complemento8 }
validador.resposta8(mesclado)

///duvidas, perguntar porque eu tive que criar outra const na linha 102///

// -----------------------------------------------------------------------------------
// 9 - Na variavel pessoa9 você tem um objeto com o atributo nome.
// Delete o atributo nome desse objeto e envie na resposta
// -----------------------------------------------------------------------------------

const pessoa9 = validador.objeto1()
delete pessoa9.nome

validador.resposta9(pessoa9)

// -----------------------------------------------------------------------------------
// 10 - Na variavel pessoa10 você tem um objeto. Liste todos os atributos desse objeto
// em um array de string e envie esse array na resposta
// -----------------------------------------------------------------------------------
const pessoa10 = validador.objeto1()
pessoa10.array
validador.resposta10(pessoa10)

 ///a 10 voce orientou que nao precisa fazer///













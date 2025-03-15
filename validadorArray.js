const resultado = require('./resultado')

const exemplo1 = ['Monica', 'Rogério', 'Aline', 'Marcelo', 'Valéria', 'Marcos', 'Julio']
const exemplo2 = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024]
const exemplo3 = [30, 31, 1, 2, 35, 100, 5, 29, 50]
const exemplo4 = [{ nome: 'Gabriel', idade: 36 }, { nome: 'Ana', idade: 41 }, { nome: 'João', idade: 21 }, { nome: 'Pamela', idade: 13 }]

const respostas = {
    exemplo1: () => [...exemplo1],
    exemplo2: exemplo2,
    exemplo3: () => [...exemplo3],
    exemplo4: () => [...exemplo4],
    complemento1: { valido: true, conectado: true },
    resposta1: (resposta) => resultado(
        1,
        resposta && Array.isArray(resposta) && resposta.length === 4 && resposta.every(item => typeof (item) === "string")
    ),
    resposta2: (resposta) => resultado(
        2,
        resposta && typeof (resposta) === "string" && resposta === exemplo1[0]
    ),
    resposta3: (resposta) => resultado(
        3,
        resposta && typeof (resposta) === "number" && resposta === exemplo1.length
    ),
    resposta4: (resposta) => resultado(
        4,
        resposta && typeof (resposta) === "string" && resposta === exemplo1[exemplo1.length - 1]
    ),
    resposta5: (resposta) => resultado(
        5,
        resposta && Array.isArray(resposta) && resposta[1] === 'Fernando'
    ),
    resposta6: (resposta) => resultado(
        6,
        resposta && Array.isArray(resposta) && resposta[resposta.length - 1] === "Camelo"
    ),
    resposta7: (resposta) => resultado(
        7,
        resposta && Array.isArray(resposta) && resposta.length === exemplo1.length - 1 && resposta[1] === exemplo1[2]
    ),
    resposta8: (resposta) => resultado(
        8,
        resposta && Array.isArray(resposta) && resposta.length === exemplo1.length - 1 && resposta[resposta.length - 1] === exemplo1[exemplo1.length - 2]
    ),
    resposta9: (resposta) => resultado(
        9,
        resposta && Array.isArray(resposta) && resposta.length === exemplo2.length && resposta.every(item => exemplo2.some(item2 => item2 === item)) && exemplo2 !== resposta
    ),
    resposta10: (resposta) => resultado(
        10,
        resposta && Array.isArray(resposta) && resposta.length === 5 && resposta.every(item => item >= 30)
    ),
    resposta11: (resposta) => resultado(
        11,
        resposta && Array.isArray(resposta) && resposta.length === exemplo4.length && resposta.every(item => typeof item === 'string' && exemplo4.some(item2 => item2.nome === item))
    )
}

module.exports = respostas
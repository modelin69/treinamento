const resultado = require('./resultado')

const objeto1 = {
    id: 225,
    nome: "Claudio",
    dinheiro: Math.random() * 450,
    contaBancaria: Math.random() * 3000,
    carro: {
        modelo: "Honda Civic",
        cor: "Verde",
        ano: 2020,
        portas: 4
    }
}

const respostas = {
    objeto1: () => ({ ...objeto1 }),
    complemento1: { valido: true, conectado: true },
    resposta1: (resposta) => resultado(
        1,
        resposta && resposta.nome.toLowerCase() === "luiza" && resposta.idade === 25
    ),
    resposta2: (resposta) => resultado(
        2,
        resposta && resposta.nome.toLowerCase() === "marcos" && resposta.idade === 45 &&
        resposta.carro && resposta.carro.cor.toLowerCase() === "vermelho" && resposta.carro.ano === 2010 &&
        resposta.carro.modelo.toLowerCase() === "palio" && resposta.carro.portas === 4
    ),
    resposta3: (resposta) => resultado(
        3,
        resposta && resposta.id === 225 && resposta.nome.toLowerCase() === "carlos"
    ),
    resposta4: (resposta) => resultado(
        4,
        resposta && resposta.id === 225 && resposta.carro.cor.toLowerCase() === "azul",
    ),
    resposta5: (resposta) => resultado(
        5,
        resposta && resposta.id === 225 && resposta.dinheiro === objeto1.dinheiro - 15 && resposta.contaBancaria === objeto1.contaBancaria + 15
    ),
    resposta6: (resposta) => resultado(
        6,
        resposta && resposta.id === 225 && resposta.civil && resposta.civil.toLowerCase() === "casado"
    ),
    resposta7: (resposta1, resposta2) => resultado(
        7,
        resposta1 && resposta2 && typeof (resposta1) === "object" && typeof (resposta2) === "object" &&
        resposta1.id === 225 && resposta2.id === 225 && resposta1 !== resposta2
    ),
    resposta8: (resposta) => resultado(
        8,
        resposta && resposta.id === 225 && resposta.conectado && resposta.valido
    ),
    resposta9: (resposta) => resultado(
        9,
        resposta && resposta.id === 225 && !resposta.nome && !Object.keys(resposta).find(k => k === "nome")
    ),
    resposta10: (resposta) => resultado(
        10,
        resposta && Array.isArray(resposta) && resposta[0] === "id" && resposta[1] === "nome" && resposta[2] === "dinheiro" && resposta[3] === "contaBancaria" && resposta[4] === "carro"
    ),


}

module.exports = respostas
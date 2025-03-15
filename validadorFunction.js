const resultado = require('./resultado')

const pergunta7 = (resposta) => {
    var target = resposta(198, 200)
    return target >= 198 && target <= 200
}

const pergunta9 = (resposta) => {
    var test1 = resposta(['Natalia', 'Carlos', 'Bruno', 'Fernando', 'Morgana'])
    var test2 = resposta(['Natalia', 'Carlos', 'Bruno', 'Fernando', 'Morgana'])
    var test3 = resposta(['Natalia', 'Carlos', 'Bruno', 'Fernando', 'Morgana'])

    return typeof (test1) === 'string' && ['Natalia', 'Carlos', 'Bruno', 'Fernando', 'Morgana'].some(item => item === test1) && (test1 !== test3 || test2 !== test1 || test2 !== test3)

}

const pergunta10 = (resposta) => {
    var answer = resposta('Valeria', 26, 15.00)
    return answer.nome === 'Valeria' &&  answer.idade === 26 && answer.valor === 15.00
}



const objeto1 = {
    id: 225,
    nome: "Monica",
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
        resposta && typeof (resposta) === "function" && resposta(10, 10) === 20
    ),
    resposta2: (resposta) => resultado(
        2,
        resposta && typeof (resposta) === "function" && resposta(5, 10, 15, 20) === 5 * 10 * 15 * 20
    ),
    resposta3: (resposta) => resultado(
        3,
        resposta && typeof (resposta) === "function" && resposta(30) && resposta(50) && !resposta(15)
    ),
    resposta4: (resposta) => resultado(
        4,
        resposta && typeof (resposta) === "function" && resposta(1666) && resposta(0) && !resposta(1665)
    ),
    resposta5: (resposta) => resultado(
        5,
        resposta && typeof (resposta) === "function" && resposta({ nome: "Laércio" }) === "Laércio"
    ),
    resposta6: (resposta) => resultado(
        6,
        resposta && typeof (resposta) === "function" && resposta([10, 40, 50, 65]) === 65 && resposta(["Carol", "Otavio"]) === "Otavio"
    ),
    resposta7: (resposta) => resultado(
        7,
        resposta && typeof (resposta) === "function" && pergunta7(resposta)
    ),
    resposta8: (resposta) => resultado(
        8,
        resposta && typeof (resposta) === "function" && resposta(15) === 'number' && resposta({ nome: "Carlos" }) === 'object'
    ),
    resposta9: (resposta) => resultado(
        9,
        resposta && typeof (resposta) === "function" && pergunta9(resposta)
    ),
    resposta10: (resposta) => resultado(
        10,
        resposta && typeof (resposta) === "function" && pergunta10(resposta)
    ),


}

module.exports = respostas
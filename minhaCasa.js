// Crie um objeto representando uma casa
// Cada atributo da casa deve ter o nome de um comodo da casa e o valor desse atributo deve ser um array
// de objetos, os atributos desses objetos do comodo não importam, mas deve fazer sentido conforme o item
// e deve obrigatóriamente conter um atributo chamado nome indicando o nome do item

var casa = {
    sala: [
        { nome: `sofa`, cor: `cinza`, lugares: 3 },
        { nome: `TV`, cor: `preta`, tamanho: 50 },
        { nome: `xbox`, modelo: `x`, controle: 2 }

    ],
    cozinha: [
        { nome: `mesa`, cor: `transparente`, cadeiras: 3 },
        { nome: `armario`, cor: `cinza`, gavetas: 3 },
        { nome: `fogao`, bocas: 4, forno: true }

    ],
    quarto: [
        { nome: `cama`, tipo: `casal`, box: true },
        { nome: `guardaRoupa`, cor: `branco`, gavetas: 6 },
        { nome: `ventilador`, tamanho: `pequeno`, cor: `preto`}

    ],
    lavandeiria: [
        { nome: `pia`, cor: `cinza`, torneira: true },
        { nome: `maquina`, cor: `branca`, modelo: `lavaESeca` },
        { nome: `armario`, prateleiras: 7, cor: `branco` }

    ],

}





// Não mexa daqui pra baixo

if (!casa) {
    console.log("Sem casa, sem vida :(")
    return
}

if (typeof casa !== "object") {
    console.log("Casa deve ser um objeto")
}

for (var [atributo, comodo] of Object.entries(casa)) {

    console.log(`Minha casa tem um(a) ${atributo} que tem:\n`)

    if (!Array.isArray(comodo)) {
        console.log(`Comodo deve ser um array`)
        return
    }

    for (var item of comodo) {

        if (typeof item !== "object") {
            console.log("O item deve ser um bojeto")
            return
        }

        if (!(item.nome)) {
            console.error("O item não possui nome")
            return
        }

        console.log(`-- ${item.nome}:`, item)

    }
}
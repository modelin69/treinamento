const katarina = {
    nome: "Katarina",
    vida: 100,
    ataque: 7
}

const ahri = {
    nome: "Ahri",
    vida: 500,
    ataque: 9
}

// Criar função chamada batalhar recebendo 2 parametros de objeto,
// onde o primeiro é o atacante e o segundo é o alvo
// A função deve extrair da vida do alvo o valor de ataque do atacante
// Apresentar mensagem no console informando o resultado da batalha
// e depois extrair da vida do atacante o ataque do alvo
// Apresentar mensagem no console informando o resultado da batalha

function batalhar(katarina, garen) {

    garen.vida -= katarina.ataque
    console.log(`${katarina.nome} atacou ${garen.nome} e causou ${katarina.ataque} de dano.`)

    katarina.vida -= garen.ataque
    console.log(`${garen.nome} atacou ${katarina.nome} e causou ${garen.ataque} de dano.`)

    

}

batalhar(katarina, ahri)

if (katarina.vida === 91 && ahri.vida === 493) {
    
} else {
    console.log("Sua função ta errada :(")
}


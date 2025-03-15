// Inicialização de variaveis

var rodrigo = {
    nome: `rodrigo`,
    bolso: null
}

var carteira = {
    dinheiro: 0,
    rg: true,
    cnh: {
        vencimento: new Date(2025, 1, 1),
        valido: false
    }
}

var banco = {
    contaBancaria: {
        saldo: 1000
    }
}

console.log(`Eu sou o rodrigo e acabei de acordar`, rodrigo);

// Pegue a carteira e coloque no seu bolso
rodrigo.bolso = carteira

if (rodrigo.bolso) {
    console.log("Coloquei a carteira no bolso")
} else {
    console.log("Estou sem carteira ainda", rodrigo)
}
// Saia e vai no banco sacar 60 reais (Diminua 60 do saldo do banco) 
banco.contaBancaria.saldo = banco.contaBancaria.saldo - 60


if (banco.contaBancaria.saldo == 940) {
    console.log("Saquei 60 reais da minha conta")
} else {
    console.log("Não fiz o saque ainda", banco)
}

// Aumente 60 do seu dinheiro na carteira)
carteira.dinheiro = carteira.dinheiro + 60
if (rodrigo?.bolso?.dinheiro == 60) {
    console.log("Coloquei 60 reais na minha carteira")
} else {
    console.log("Não coloquei o dinheiro na minha carteira", rodrigo?.bolso)
}

// Quando pegou seu dinheiro viu que a cnh estava vencida, nisso você foi até o DETRAN e renovou ela

// Troque o vencimento da cnh para 01/01/2030
carteira.cnh.vencimento = new Date(2030, 0, 1)

if (rodrigo?.bolso?.cnh?.vencimento.getTime() === new Date(2030, 0, 1).getTime()) {
    console.log("Renovei minha CNH até 01/01/2030")
} else {
    console.log("Não renovei minha CNH", rodrigo?.bolso)
}

// Torne sua CNH válida
carteira.cnh.valido = true
if (rodrigo?.bolso?.cnh?.valido) {
    console.log("Agora minha CNH é valida")
} else {
    console.log("Minha cnh é inválida", rodrigo?.bolso)
}


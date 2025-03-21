var tamanhoMenu = 90

// Função para criar a parte superior do menu

function parteSuperior() {

    // var linha = "╔" + '═'.repeat(tamanhoMenu - 2) + "╗"
    var linha = `╔${'═'.repeat(tamanhoMenu - 2)}╗`
    console.log(linha)

}


// Função para criar parte inferior do menu
function parteInferior() {

    // var linha = "" + '═'.repeat(tamanhoMenu - 2) + "╗"
    var linha = `╚${'═'.repeat(tamanhoMenu - 2)}╝`
    console.log(linha)

}


// Função para criar linha preenchida (divisória) do menu

function divisoria() {

    // var linha = "" + '═'.repeat(tamanhoMenu - 2) + "╗"
    var linha = `╠${'═'.repeat(tamanhoMenu - 2)}╣`
    console.log(linha)

}


// Função para criar linha vazia do menu

function linhaVazia() {

    // var linha = "" + '═'.repeat(tamanhoMenu - 2) + "╗"
    var linha = `║${' '.repeat(tamanhoMenu - 2)}║`
    console.log(linha)

}


// ==============================================================

// Função para criar linha de menu com texto justificado a esquerda

function textoEsquerda(texto) {

    var tamanhoTexto = texto.length
    var linha = `║  ${texto}${' '.repeat(tamanhoMenu - tamanhoTexto - 4)}║`

    console.log(linha)

}

// Função para criar linha de menu com texto justificado ao centro

function textoCentralizado(texto) {

    var tamanhoTexto = texto.length
    var ehImpar = tamanhoTexto % 2 !== 0
    var espacamento = ' '.repeat((tamanhoMenu - tamanhoTexto - 2) / 2)

    var linha = `║${espacamento}${texto}${ehImpar ? " " : ""}${espacamento}║`
    
    console.log(linha)

}

// Função para criar linha de menu com texto justificado a direita

function textoDireita(texto) {

    var tamanhoTexto = texto.length
    var linha = `║${' '.repeat(tamanhoMenu - tamanhoTexto - 4)}${texto}  ║`

    console.log(linha)

}

//  Crie uma função para criar a parte do titulo do menu (receber como parametro 1 string para ser o texto do titulo)
// Exemplo de titulo:
//╔════════════════════════════════════════════════════════════════════════════════════════╗
//║                                   JOGO DO FANTASTICO                                   ║
//╠════════════════════════════════════════════════════════════════════════════════════════╣

function titulo (titulo) {
    parteSuperior()
    textoCentralizado(titulo)
    divisoria()
}

// Crie uma função para criar um menu de opções (receber como parametro 1 array de strings) e desenhar
// na tela o menu com textos justificados a esquerda conforme array passado
// Exemplo:
//║                                                                                        ║
//║  1 - NOVO JOGO                                                                         ║
//║  2 - CARREGAR JOGO                                                                     ║
//║  3 - ALTERAR PERFIL                                                                    ║
//║  4 - CAGAR                                                                             ║
//║   


function opcoes (listaOpcoes) { 
    
    linhaVazia()

    for (var opcao of listaOpcoes) {
        textoEsquerda(opcao)
    }

    linhaVazia()

}

titulo("JOGO DA MEMORIA")
opcoes([
    "1 - NOVO JOGO",
    "2 - CARREGAR JOGO",
    "3 - ALTERAR PERFIL",
    "4 - CAGAR",
])


// divisoria()
// textoDireita("0 - SAIR")
// parteInferior()
// titulo("JOGO DO FANTASTICO")
// linhaVazia()
// textoEsquerda("1 - NOVO JOGO")
// textoEsquerda("2 - CARREGAR JOGO")
// textoEsquerda("3 - ALTERAR PERFIL")
// textoEsquerda("4 - CAGAR")
// linhaVazia()

module.exports = {
    superior: parteSuperior,
    inferior: parteInferior,
    divisoria,
    linhaVazia,
    textoEsquerda,
    textoCentralizado,
    textoDireita,
    titulo,
    opcoes
}




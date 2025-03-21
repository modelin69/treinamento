const { getChoice, textQuestion, wait } = require('../question')
const menu = require('../menu/menu')

/**
 * JOGO DE PAR OU IMPAR
 * 
 * ENTRE CADA TELA, SEMPRE LIMPE O CONSOLE com console.clear()
 *
 * TELA INICIAL:
 * - Opção 1: Novo Jogo (vai para a tela de criação de usuário)
 * - Opção 2: Sair (encerra a aplicação)
 *
 * TELA DE CRIAÇÃO DE USUÁRIO:
 * - Pergunta o nome do jogador
 * - Prossegue para a tela de menu
 *
 * TELA DE MENU:
 * - Mostra a quantidade de vitórias e derrotas do jogador
 * - Opção 1: Iniciar Partida (vai para a tela de escolha de número)
 * - Opção 2: Alterar Nome (permite alterar o nome do jogador)
 * - Opção 0: Voltar para o Menu Principal (retorna à tela inicial)
 *
 * TELA DE ESCOLHA:
 * - Pergunta se o jogador escolhe 1 (Par) ou 2 (Ímpar)
 * - Se a escolha for inválida, pede para escolher novamente
 * - Pergunta o número do jogador (deve ser entre 0 e 9)
 * - Se o número for inválido, pede para escolher novamente
 * - A máquina escolhe um número aleatório de 0 a 9 e a opção oposta (Par ou Ímpar)
 *
 * TELA DE RESULTADO:
 * - Mostra a escolha do jogador (Par ou Ímpar) e o número jogado
 * - Mostra a escolha da máquina (Par ou Ímpar) e o número jogado
 * - Informa quem venceu a aposta
 * - Usa o comando "wait" para continuar após apertar qualquer tecla
 * - Atualiza o número de vitórias ou derrotas do jogador

 * - Retorna o jogador para a tela de menu com o número de vitórias/derrotas atualizado
 */

let jogador

const resultados = {

    vitorias: 0,
    derrotas: 0


};

const telaInicial = () => {

    console.clear()

    menu.titulo("PAR OU IMPAR")
    menu.opcoes([
        "1 - NOVO JOGO",
        "2 - SAIR"
    ])
    menu.inferior()

    let escolha = getChoice("Escolha a opcao: ", 1, 2)

    if (escolha === 1) {
        telaCriacaoUsuario()
    } else if (escolha === 2) {
        return
    } else {
        telaInicial()
    }
}

const telaCriacaoUsuario = () => {

    console.clear()

    menu.titulo(`BEM VINDO (A)`)
    menu.linhaVazia()
    menu.textoCentralizado(`Escolha seu nome de invocador(a)`)
    menu.linhaVazia()
    menu.inferior()

    jogador = textQuestion(`Qual seu nome? `)
    telaMenuPrincipal()

}

const telaMenuPrincipal = () => {

    console.clear()

    menu.titulo(`MENU PRINCIPAL`)
    menu.opcoes([`VITÓRIAS     ${resultados.derrotas}`,
    `DERROTAS     ${resultados.vitorias}`
    ])
    menu.divisoria()
    menu.opcoes([
        "1 - INICIAR PARTIDA",
        "2 - ALTERAR NOME",
        "0 - VOLTAR AO MENU PRINCIPAL"
    ])
    menu.inferior()

    let escolha = getChoice("Escolha a opcao: ", 0, 2)

    if (escolha === 1) {

        telaEscolha()

    } else if (escolha === 2) {

        telaCriacaoUsuario()

    } else if (escolha === 0) {

        resultados.derrotas = 0
        resultados.vitorias = 0
        telaInicial()

    }

}

const telaEscolha = () => {

    console.clear()

    menu.titulo(`FAÇA SUA JOGADA`)
    menu.opcoes([
        "1 - IMPAR",
        "2 - PAR"
    ])
    menu.inferior()

    let escolha = getChoice("Escolha a opcao: ", 1, 2)

    if (escolha === 1) {

        telaEscolherNumero({
            par: false,
            valor: 0
        })

    } else if (escolha === 2) {

        telaEscolherNumero({
            par: true,
            valor: 0
        })

    } else {

        telaEscolha()

    }

}

const telaEscolherNumero = (escolhaJogador) => {

    console.clear()

    menu.titulo('FAÇA SUA JOGADA')
    menu.opcoes([`Você escolheu ${escolhaJogador.par ? "par" : "impar"}. Agora escolha sua mão.`])
    menu.inferior()

    let escolhaNumero = getChoice("Escolha um numero entre: 0 e 9 ", 0, 9)

    if (escolhaNumero >= 0 || escolhaNumero <= 9) {

        escolhaJogador.valor = escolhaNumero

        let escolhaMaquina = {
            par: !escolhaJogador.par,
            valor: Math.floor(Math.random() * 10)
        }

        telaResultado(escolhaJogador, escolhaMaquina)

    } else {
        telaEscolherNumero(escolhaJogador);

    }

}

const telaResultado = (escolhaJogador, escolhaMaquina) => {

    console.clear()

    let jogadorPar = escolhaJogador.par ? "PAR" : "IMPAR"
    let maquinaPar = escolhaMaquina.par ? "PAR" : "IMPAR"

    let soma = escolhaJogador.valor + escolhaMaquina.valor
    let resultadoEhPar = soma % 2 === 0
    let jogadorVenceu = resultadoEhPar === escolhaJogador.par


    menu.titulo(`RESULTADO`)
    menu, menu.linhaVazia
    menu.opcoes([
        `${jogador} (${jogadorPar}) - Mão: ${escolhaJogador.valor}`,
        `Maquina (${maquinaPar}) - Mão: ${escolhaMaquina.valor}`, 
    ])
    menu.divisoria()
    menu.textoDireita(`VENCEDOR: ${jogadorVenceu ? jogador : "Maquina"}`)
    menu.inferior()

    if (jogadorVenceu) {
        resultados.vitorias = resultados.vitorias + 1
    } else {
        resultados.derrotas = resultados.derrotas + 1
    }

    wait()

    telaMenuPrincipal()

}

telaInicial()




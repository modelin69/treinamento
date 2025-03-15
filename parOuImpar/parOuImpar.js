const { getChoice, textQuestion, wait } = require('../question')

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

const resultados = {

    vitorias: 0,
    derrotas: 0
};

let jogador

const telaInicial = () => {

    console.clear()

    console.log('===========================================')
    console.log('==          Par - Ou - Impar             ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log('==  1 - NOVO JOGO                        ==')
    console.log('==  2 - SAIR                             ==')
    console.log('==                                       ==')
    console.log('===========================================')



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

    console.log('===========================================')
    console.log('==          Bem - vindo           ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log('==  QUAL SEU NOME INVOCADOR?             ==')
    console.log('==                                       ==')
    console.log('==                                       ==')
    console.log('===========================================')

    jogador = textQuestion(`Qual seu nome?`)
    console.log('==  Seja BEM - VINDO (a) (A Melhor Professora do Mundo!)   ==')
    console.log(`==    ${jogador}       ==`)



    telaMenuPrincipal()

}

const telaMenuPrincipal = () => {

    console.clear()


    console.log(`Vitórias: ${resultados.vitorias}, Derrotas: ${resultados.derrotas}`);


    console.log('===========================================')
    console.log('==          Bem - vindo           ==')
    console.log('===========================================')
    console.log(resultados)
    console.log('==          1 - INICIAR PARTIDA                ==')
    console.log('==          2 - ALTERAR NOME           ==')
    console.log('==          0 - VOLTAR AO MENU PRINCIPAL ==')
    console.log('===========================================')

    let escolha = getChoice("Escolha a opcao: ", 0, 2)


    if (escolha === 1) {
        telaEscolha()
    } else if (escolha === 2) {
        telaCriacaoUsuario()

    } else if (escolha === 0) {
        telaInicial()
    }

}


const telaResultado = (escolhaJogador, escolhaMaquina) => {

    console.clear()

    let jogadorPar = escolhaJogador.par ? "PAR" : "IMPAR"
    let maquinaPar = escolhaMaquina.par ? "PAR" : "IMPAR"

    let soma = escolhaJogador.valor + escolhaMaquina.valor
    let resultadoEhPar = soma % 2 === 0
    let jogadorVenceu = resultadoEhPar === escolhaJogador.par

    console.log('===========================================')
    console.log('==          RESULTADO                    ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log(`==  ${jogador} (${jogadorPar}) - Mão: ${escolhaJogador.valor}              ==`)
    console.log(`==  Maquina (${maquinaPar}) - Mão: ${escolhaMaquina.valor}              ==`)
    console.log('==                                       ==')
    console.log(`==  VENCEDOR: ${jogadorVenceu ? jogador : "Maquina"}                    ==`)
    console.log('===========================================')

    if (jogadorVenceu) {
        resultados.vitorias = resultados.vitorias + 1
    } else {
        resultados.derrotas = resultados.derrotas + 1
    }

    wait()

    telaMenuPrincipal()

}

const telaEscolha = () => {

    console.clear()

    console.log('===========================================')
    console.log('==          Par - Ou - Impar             ==')
    console.log('===========================================')
    console.log('==               ESCOLHAR                ==')
    console.log('==         1 PAR                         ==')
    console.log('==         2 IMPAR                       ==')
    console.log('==                                       ==')
    console.log('===========================================')

    let escolha = getChoice("Escolha a opcao: ", 1, 2)

    if (escolha === 1) {

        telaEscolherNumero({
            par: true,
            valor: 0
        })

    } else if (escolha === 2) {

        telaEscolherNumero({
            par: false,
            valor: 0
        })

    } else {
        telaEscolha()
    }
}

const telaEscolherNumero = (escolhaJogador) => {

    console.clear()

    console.log('===========================================')
    console.log('==          Par - Ou - Impar             ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log(`==  Você escolheu ${escolhaJogador.par ? "PAR" : "IMPAR"}  ==`)
    console.log('==                                       ==')
    console.log('===========================================')

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


telaInicial()




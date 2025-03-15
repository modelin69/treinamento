const { getChoice, textQuestion, wait } = require('../question')

const menuPrincipal = () => {

    console.clear()

    console.log('===========================================')
    console.log('==               JO-KEN-PO!              ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log('==  1 - NOVO JOGO                        ==')
    console.log('==  2 - SAIR                             ==')
    console.log('==                                       ==')
    console.log('===========================================')
    
    let escolha = getChoice("Escolha a opcao: ", 1, 2)

    if (escolha === 1) {
        jogar()
    } else if (escolha === 2) {
        return
    } else {
        menuPrincipal()
    }

}

const numeroInteiroAleatorio = (min, max) => {

    var numeroAleatorio = (Math.random() * (max - min)) + min 
    var numeroInteiro = Math.round(numeroAleatorio)
    return numeroInteiro

}

const jogar = () => {

    console.clear()

    console.log('===========================================')
    console.log('==               JO-KEN-PO!              ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log('==  1 - PEDRA                            ==')
    console.log('==  2 - PAPEL                            ==')
    console.log('==  3 - TESOURA                          ==')
    console.log('==                                       ==')
    console.log('===========================================')

    let escolhaJogador = getChoice("Escolha a opcao: ", 1, 3)
    let escolhaMaquina = numeroInteiroAleatorio(1, 3)

    let resultado = calcularVitoria(escolhaJogador, escolhaMaquina)
    resultadoBatalha(escolhaJogador, escolhaMaquina)

    if (resultado === "EMPATE") {
        jogar()
    } else {
        resultadoFinal(resultado)
    }

}

const converterValorEmFigura = (numero) => {
    
    if (numero === 1) return "PEDRA"
    else if (numero === 2) return "PAPEL"
    else return "TESOURA"
}

const resultadoBatalha = (escolhaJogador, escolhaMaquina) => {

    console.clear()

    console.log(`Você escolheu ${converterValorEmFigura(escolhaJogador)} `)
    console.log(`A máquina escolheu ${converterValorEmFigura(escolhaMaquina)}`)
    wait()

}

const calcularVitoria = (escolhaJogador, escolhaMaquina) => {

    if (escolhaJogador === escolhaMaquina) {
        return "EMPATE"
    } else if (escolhaJogador === 1 && escolhaMaquina === 3) {
        return "VITORIA"
    } else if (escolhaJogador === 2 && escolhaMaquina === 1) {
        return "VITORIA"
    } else if (escolhaJogador === 3 && escolhaMaquina === 2) {
        return "VITORIA"
    } else {
        return "DERROTA"
    }

}

const resultadoFinal = (resultado) => {

    console.clear()

    var mensagem = ""

    if (resultado === "VITORIA") {
        mensagem = "==  Você ganhou!                         =="
    } else {
        mensagem = "==  Você perdeu!                         =="
    }

    console.log('===========================================')
    console.log('==               JO-KEN-PO!              ==')
    console.log('===========================================')
    console.log('==                                       ==')
    console.log(mensagem)
    console.log('==                                       ==')
    console.log('===========================================')

    wait()

    menuPrincipal()

}

menuPrincipal()
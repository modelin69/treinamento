// Importa a função do arquivo question, contendo a função de escolher uma opção
const { getChoice, wait } = require('./question')

// Variavel para definir que o jogo está ativo
var active = true

const finalResult = (win) => {

    // Limpa o console
    console.clear()

    console.log('==========================================================')
    console.log('==                       Adivinhe!                      ==')
    console.log('==========================================================')
    console.log('==                                                      ==')
    console.log('==========================================================')
    console.log('==                                                      ==')

    // Verifica se o parametro é de vitória ou derrota e apresenta a respectiva mensagem.

    if (win) {

        console.log('==               PARABÉNS. VOCÊ VENCEU!                 ==')

    } else {

        console.log('==                OH NÃO! VOCÊ PERDEU...                ==')

    }

    console.log('==                                                      ==')
    console.log('==========================================================')

    // Aguarda o usuário pressionar qualquer tecla para continuar
    wait()

    // Retorna para o menu principal
    mainMenu()

}

const game = (lifes, max, target, tries) => {

    // Limpa o console
    console.clear()

    console.log('==========================================================')
    console.log('==                       Adivinhe!                      ==')
    console.log('==========================================================')
    console.log(`==  Vidas: ${lifes}                                            ==`)
    console.log('==========================================================')

    // Verifica e mostra as tentativas do usuário

    if (tries) {

        console.log('==                                                      ==')
        console.log('==  Tentativas                                          ==')
        console.log('==                                                      ==')

        for (var i = 0; i < tries.length; i++) {
            const message = `${tries[i]} - ${tries[i] > target ? 'MENOR!' : 'MAIOR!'}`
            console.log(`==  ${message}${Array(58 - message.length - 8).fill(' ').join('')}  ==`)
        }

        console.log('==                                                      ==')
        console.log('==========================================================')

    }

    // Pega a resposta do usuário

    answer = getChoice(`Escolha um numero entre 1 e ${max}: `, 1, max)

    if (answer) {

        // Diminui 1 vida

        lifes--

        // Verifica se a resposta ta certa

        if (answer === target) {

            // Se a resposta estiver correta, chama a tela de vitória
            finalResult(true)
        } else if (lifes === 0) {

            // Se as vidas estiverem zeradas, chama a tela de derrota
            finalResult(false)

        } else {

            // Se ainda houver vidas e a resposta estiver errada, ele vai adicionar a resposta ás tentativas e vai chamar essa função novamente
            tries = tries ? [...tries, answer] : [answer]
            game(lifes, max, target, tries)
        }

    } else {

        // Se não houver resposta ou a resposta for inválida, ele reinicia esse método com os mesmos parametros que foi iniciado
        game(lifes, max, target, tries)

    }

}

const selectDifficult = () => {

    // Limpa o console
    console.clear()

    console.log('==========================================================')
    console.log('==                       Adivinhe!                      ==')
    console.log('==========================================================')
    console.log('==  Selecione a dificuldade                             ==')
    console.log('==========================================================')
    console.log('==                                                      ==')
    console.log('==  1 - Fácil                                           ==')
    console.log('==  2 - Normal                                          ==')
    console.log('==  3 - Dificil                                         ==')
    console.log('==                                                      ==')
    console.log('==  0 - Voltar                                          ==')
    console.log('==                                                      ==')
    console.log('==========================================================')

    // Pega a resposta do usuário
    let answer = getChoice("Escolha uma opcao: ", 0, 3)

    // Switch para lidar com a resposta do usuário
    switch (answer) {
        case 0:
            // Caso seja 0 - Vai para o menu principal
            mainMenu()
            break
        case 1:
            // Caso seja 1 - Inicia o jogo com 5 vidas, número maximo até 10, gera o número que o usuário deve adivinhar entre 1 e 10
            game(5, 10, Math.floor(Math.random() * 10) + 1)
            break
        case 2:
            // Caso seja 2 - Inicia o jogo com 3 vidas, número maximo até 10, gera o número que o usuário deve adivinhar entre 1 e 10
            game(3, 10, Math.floor(Math.random() * 10) + 1)
            break
        case 3:
            // Caso seja 3 - Inicia o jogo com 5 vidas, número maximo até 100, gera o número que o usuário deve adivinhar entre 1 e 100
            game(5, 100, Math.floor(Math.random() * 100) + 1)
            break
        default:
            // Caso a opção seja qualquer outra, ele reinicia essa tela.
            selectDifficult()
            break
    }

}

const mainMenu = () => {

    // Limpa o console
    console.clear()

    console.log('==========================================================')
    console.log('==                       Adivinhe!                      ==')
    console.log('==========================================================')
    console.log('==                                                      ==')
    console.log('==  1 - Novo jogo                                       ==')
    console.log('==  2 - Sair                                            ==')
    console.log('==                                                      ==')
    console.log('==========================================================')

    // Pega a resposta do usuário
    let answer = getChoice("Escolha uma opcao: ", 1, 2)

    switch (answer) {
        case 1:
            // Caso seja 1 - Vai para a função (tela) de selecionar a dificuldade
            selectDifficult()
            break
        case 2:
            // Caso seja 2 - Muda a variavel active para false, fazendo a aplicação termina, pois saira do laço do while.
            active = false
            break
        default:
            // Qualquer outra opção escolhida vai reiniciar essa função (tela)
            mainMenu()
            break
    }
}

// Enquanto o jogo estiver ativo, ele ficara rodando em um loop infinito para que o mesmo não acabe
while (active) {

    // Vai para a tela principal
    mainMenu()

}
var reader = require('readline-sync');

const getChoice = (question, min, max) => {

    try {

        let input = reader.question(question)
        let answer = parseInt(input)

        if (typeof (min) === 'number' && typeof (max) === 'number') {
            if (typeof (answer) === 'number' && answer <= max && answer >= min) {
                return parseInt(answer)
            }
        } else {
            return
        }

    } catch (ex) {
        return
    }
    
}

const question = (question, min, max) => {
    let answer = reader.question(question);
    if (typeof (min) === 'number' && typeof (max) === 'number') {
        if (typeof (answer) === 'number' && answer <= max && answer >= min) {
            return answer
        }
    } else {
        return 0
    }
    return answer
}

const textQuestion = (question) => {
    let answer = reader.question(question);
    return answer
}

const wait = () => {

    console.log('Aperte qualquer tecla para continuar...')
    reader.prompt()

}

module.exports = { getChoice, question, textQuestion, wait }
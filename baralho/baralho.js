// Criar uma função chamada criarBaralho que não recebe parâmetros e deve retornar um Array de objetos
// contendo os atributos simbolo e naipe (♣, ♥, ♠, ♦) com todas as 54 cartas

function criarBaralho () {

    var baralho = []
    var simbolos = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    var naipes = ["♣", "♥", "♠", "♦"]

    for (var naipe of naipes) {
        for (var simbolo of simbolos) {
        
            var carta = { simbolo: simbolo, naipe: naipe}
            baralho.push(carta)

        }  
    }

    return baralho
    
}
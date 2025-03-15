// WHILE (CONDICAO)
// ENQUANTO A CONDICAO FOR VERDADEIRA ELE VAI EXECUTAR O CODIGO

var x = 0
while (x < 5) {
    x = x + 1
    x += 1
    x++

    console.log("LOOP INFINITO")
}

// FOR (VARIAVEL INICIAL; CONDICAO PARA PARAR; ACRESCIMO)

for (let i = 0; i <= 5; i++) {
    console.log("LAÇO:", i)
}

// FOR EACH - ITERAÇÃO ENTRE ITENS DE UM ARRAY

var frutas = ["Maracuja", "Maça", "Banana", "Pera"]

frutas.forEach((fruta, posicao) => {
    console.log("A FRUTA É", fruta, "POSIÇÃO", posicao)
})

// FOR .. OF (ARRAY)

var pessoas = ["Maria", "João", "Aline", "Pablo"]

for (var pessoa of pessoas) {
    console.log("A PESSOA É", pessoa)
}

// FOR .. IN (OBJETO)

var rodrigo = { nome: "Rodrigo", idade: 31, funcionario: true }

for (var atributo in rodrigo) {
    console.log("O atributo", atributo, "contém o valor", rodrigo[atributo])
}



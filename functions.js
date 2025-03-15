// Toda função pode ou não receber parametros
// Toda função retorna um valor (Se você não retornar um valor, ela vai retornar undefined)
// Função pode ser atribuida a uma variavel
// função é considerado um tipo (function)

var rodrigo
var x = 50

const somar = (x, y) => {
    return x + y
}

function dividir(x, y) {
    return x / y
}

function multiplicar(numero1, numero2) {

    var multiplicacao = numero1 * numero2
    console.log(multiplicacao)
    return multiplicacao

}

const subtrair = (a, b) => {
    return a - b
}
var resultadosubtrair = subtrair(100, 50)
console.log(resultadosubtrair)


console.log(resultadosubtrair)

const bomDia = () => {
    console.log("BOM DIAAAAAAAAAAAAAAAA")
    console.log("BOM DIAAAAAAAAAAAAAAAA")
    console.log("BOM DIAAAAAAAAAAAAAAAA")
    console.log("BOM DIAAAAAAAAAAAAAAAA")
    console.log("BOM DIAAAAAAAAAAAAAAAA")
}

// "Paz e amor"

// var resultado = somar(15, 20)
// var resultado2 = dividir(10, 2)
// var resultado3 = bomDia()

// dividir
// somar

multiplicar(10, 20)

// console.log(resultado)
// console.log(resultado2)
// console.log(resultado3)
// console.log(rodrigo)

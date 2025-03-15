var a = 10;
var b = 20;

if (a > b) {
    console.log("a é maior que b");
} else if (a < b) {
    console.log("a é menor que b");
} else {
    console.log("a é igual a b");
}

// Exemplo com &&
var c = true;
var d = false;

if (c && d) {
    console.log("c e d são ambos verdadeiros");
} else {
    console.log("c e d não são ambos verdadeiros");
}

// Exemplo com ||
var e = false;
var f = false;

if (e || f) {
    console.log("Pelo menos um entre e ou f é verdadeiro");
} else {
    console.log("Nenhum entre e ou f é verdadeiro");
}

// Exemplo com combinações de && e ||
var g = true;
var h = false;
var i = true;

if ((g && h) || i) {
    console.log("g e h são ambos verdadeiros ou i é verdadeiro");
} else {
    console.log("g e h não são ambos verdadeiros e i não é verdadeiro");
}

var x = 50
var joao = {
    temPao: true,
    bolso: null
}

var maria = {
    temPao: false,
    bolso: ['doce', 'chave']
}

// && É PRIORIZADO NO CALCULO DE BOOLEANO
// JAVASCRIPt - FALSE, NULL, NAN E UNDEFINED SÃO CONSIDERADOS FALSE
// if - se
// else if - ou se
// else - excecao

if ((maria.bolso || joao.temPao) && maria.temPao) {
    console.log("FINAL MUITO FELIZ")
} else if (joao.temPao || maria.temPao) {
    console.log("FINAL MEIO FELIZ")
} else {
    console.log("FINAL RUIM")
}


// Montando Tabuleiro//
const katarina = {
    nome: "Katarina",
    simbolo: "X"
};

const teemo = {
    nome: "Ahri",
    simbolo: "O"
};

let tabuleiro = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];
console.log(tabuleiro)

function exibirTabuleiro() {
    console.log(tabuleiro.map(row => row.join(" | ")).join("\n---------\n"));
}

function fazerJogada(jogador, linha, coluna) {
    if (tabuleiro[linha][coluna] === "") {
        tabuleiro[linha][coluna] = jogador.simbolo;
        return true;
    } else {
        console.log("Posição já ocupada! Tente novamente.");
        return false;
    }
}

function verificarVencedor() {
    // Verificar linhas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] !== "" && tabuleiro[i][0] === tabuleiro[i][1] && tabuleiro[i][1] === tabuleiro[i][2]) {
            return tabuleiro[i][0];
        }
    }

    // Verificar colunas
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[0][i] !== "" && tabuleiro[0][i] === tabuleiro[1][i] && tabuleiro[1][i] === tabuleiro[2][i]) {
            return tabuleiro[0][i];
        }
    }

    // Verificar diagonais
    if (tabuleiro[0][0] !== "" && tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2]) {
        return tabuleiro[0][0];
    }
    if (tabuleiro[0][2] !== "" && tabuleiro[0][2] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][0]) {
        return tabuleiro[0][2];
    }

    return null;
}

console.log("Tabuleiro inicial:");
exibirTabuleiro();

console.log("\nKatarina faz uma jogada na posição (1, 2):");
fazerJogada(katarina, 1, 2);
exibirTabuleiro();

vencedor = verificarVencedor();
if (vencedor) {
    console.log(`O vencedor é: ${vencedor.nome}`);
    return;
}

console.log("\nteemo faz uma jogada na posição (0, 1):");
fazerJogada(teemo, 0, 1);
exibirTabuleiro();

console.log("\nkataria faz uma jogada na posição (0, 2):");
fazerJogada(katarina, 0, 2);
exibirTabuleiro();

console.log("\nteemo faz uma jogada na posição (0, 0):");
fazerJogada(teemo, 0, 0);
exibirTabuleiro();

console.log("\nteemo faz uma jogada na posição (0, 0):");
fazerJogada(teemo, 0, 0);
exibirTabuleiro();

console.log("\nkataria faz uma jogada na posição (2, 2):");
fazerJogada(katarina, 2, 2);
exibirTabuleiro();

vencedor = verificarVencedor();
if (vencedor) {
    console.log(`O vencedor é: ${vencedor}`);
    return;
}


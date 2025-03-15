Client Side = A aplicação esta do lado do cliente/usuário
Server Side = A aplicação esta do lado do servidor

Como inicializar variaveis vARIAVEIS SÃO DADOS QUE ESTAO OCORRENDO AGORA NO SISTEMA (variavel e valor e mesma coisa)

### O que são variáveis?

Variáveis são usadas para armazenar dados que podem ser alterados durante a execução do programa. Elas são como "caixas" onde você guarda valores que podem ser usados e modificados ao longo do código.

### Como inicializar variáveis

Para criar (ou inicializar) uma variável em JavaScript, você pode usar as palavras-chave `var`, `let` ou `const`. 

- `var`: Declara uma variável, opcionalmente inicializando-a com um valor.
- `let`: Declara uma variável local de bloco, opcionalmente inicializando-a com um valor.
- `const`: Declara uma constante de bloco, ou seja, uma variável cujo valor não pode ser alterado.

Exemplos:

```javascript
var nomeDaVariavel = valor;
let nomeDaVariavel = valor;
const nomeDaVariavel = valor; // Constantes não podem ser alteradas
```

### Diferença entre `var`, `let` e `const`

- `var` tem escopo de função e pode ser redeclarada.
- `let` tem escopo de bloco e não pode ser redeclarada no mesmo escopo.
- `const` tem escopo de bloco e não pode ser redeclarada ou reatribuída.

### Exemplo de uso

```javascript
var idade = 30; // Pode ser redeclarada e reatribuída
let nome = "Rodrigo"; // Pode ser reatribuída, mas não redeclarada no mesmo escopo
const pi = 3.14; // Não pode ser reatribuída nem redeclarada
```
### TIPOS DE VALORES

Number (Número) - 150156156.50
String (Texto) - "Rodrigo"
Boolean (Booleano) - true ou false
Object (Objeto) - { nome: "Rodrigo", idade: 31 }
Arrays (Lista) - ["Banana", "Maça", "Cebola"]

### Manipulando Objetos

Objetos em JavaScript são coleções de pares chave-valor. Você pode alterar os valores das propriedades, adicionar novas propriedades e mesclar objetos.

#### Alterando Propriedades

Para alterar o valor de uma propriedade de um objeto, você pode usar a notação de ponto ou a notação de colchetes.

```javascript
let pessoa = {
    nome: "Rodrigo",
    idade: 31
};

// Usando notação de ponto
pessoa.nome = "Carlos";

// Usando notação de colchetes
pessoa["idade"] = 32;
```

#### Inserindo Novas Propriedades

Para adicionar uma nova propriedade a um objeto, você pode usar a notação de ponto ou a notação de colchetes.

```javascript
pessoa.altura = 1.75; // Usando notação de ponto
pessoa["peso"] = 70; // Usando notação de colchetes
```

#### Mesclando Objetos

Para mesclar dois ou mais objetos, você pode usar o método `Object.assign()` ou o operador spread (`...`).

```javascript
let endereco = {
    rua: "Rua A",
    numero: 123
};

let contato = {
    telefone: "1234-5678",
    email: "rodrigo@example.com"
};

// Usando Object.assign()
let pessoaCompleta = Object.assign({}, pessoa, endereco, contato);

// Usando operador spread
let pessoaCompletaSpread = { ...pessoa, ...endereco, ...contato };
```

### COMO AUMENTAR OU DIMINUIR VALOR DE UMA VARIAVEL

x = 50
x = x - 25 // Resposta: 25
x -= 25 // Resposta: 25

x = x + 75 // Resposta: 100
x += 75 // Resposta: 100

pessoa5.dinheiro = pessoa5.dinheiro - 15
pessoa5.dinheiro -= 15


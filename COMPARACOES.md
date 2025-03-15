# Exemplos de Comparação em JavaScript

## Operadores de Igualdade

=== IGUAL
!== DIFERENTE
> MAIOR
>= MAIOR OU IGUAL
< MENOR
<= MENOR OU IGUAL

### Estritamente Igual (===)

```javascript
const a = 5;
const b = '5';

console.log(a === b); // false, porque os tipos são diferentes
console.log(a === 5); // true, porque os valores e os tipos são iguais
```

### Estritamente Diferente (!==)

```javascript
const a = 5;
const b = '5';

console.log(a !== b); // true, porque os tipos são diferentes
console.log(a !== 5); // false, porque os valores e os tipos são iguais
```

## Operadores de Comparação

### Maior ou Igual (>=)
```javascript
const a = 10;
const b = 5;

console.log(a >= b); // true, porque 10 é maior que 5
console.log(a >= 10); // true, porque 10 é igual a 10
console.log(b >= a); // false, porque 5 não é maior nem igual a 10
```

### Menor ou Igual (<=)
```javascript
const a = 10;
const b = 5;

console.log(a <= b); // false, porque 10 não é menor nem igual a 5
console.log(a <= 10); // true, porque 10 é igual a 10
console.log(b <= a); // true, porque 5 é menor que 10
```

## Outros Operadores de Comparação

### Maior que (>)
```javascript
const a = 10;
const b = 5;

console.log(a > b); // true, porque 10 é maior que 5
console.log(a > 10); // false, porque 10 não é maior que 10
console.log(b > a); // false, porque 5 não é maior que 10
```

### Menor que (<)
```javascript
const a = 10;
const b = 5;

console.log(a < b); // false, porque 10 não é menor que 5
console.log(a < 10); // false, porque 10 não é menor que 10
console.log(b < a); // true, porque 5 é menor que 10
```
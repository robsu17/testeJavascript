# testeJavascript
Teste de backend iniciante

## Sobre o programa:
Este código em javascript é uma função que ao receber como parâmetro um número inteiro positivo, retorna o somatórios
de todos os números que são divisíveis por 3 e 5.

Exemplo:
```javascript
function somatorio(num) {
  soma = 0
    for (let i = 1; i < num; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            soma = soma + i
        }
    }
    return soma
}
```
ao receber 10 como parâmetro essa função irá retornar 23 pois é a soma de 3, 5, 6 e
9 que são menores que 10.

e ao receber 11 como parâmetro irá retornar 33 pois é a soma de 3, 5, 6, 9
e 10 que são menores que 11.

function recebeNumero(numero) {
    soma = 0
    for (let i = 1; i < numero; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            soma = soma + i
        }
    }
    return soma
}

console.log(recebeNumero(10))
console.log(recebeNumero(11))
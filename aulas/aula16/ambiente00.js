function par_impar(num) {
    if (num % 2 == 0) {
        return `O número ${num} é PAR!`
    } else {
        return `O número ${num} é ÍMPAR!`
    }
}

console.log(par_impar(8))

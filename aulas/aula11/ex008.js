var idade = 16
var nome = 'Gabriel'
var altura = 1.75
console.log(`${nome} tem ${idade} anos de idade e ${altura}cm de altura.`)
if (idade >= 18) {
    console.log('Você é MAIOR de idade!')
} else {
    console.log('Você é MENOR de idade!')
}

if (altura <= 1.60) {
    console.log('Você é BAIXO!')
} else {
    console.log('Você é ALTO!')
}

if (idade < 16) {
    console.log('Você não pode VOTAR!')
} else if (idade >= 16 || idade < 18) {
    console.log('O voto é OPCIONAL!')
} else {
    console.log('O voto é OBRIGATÓRIO!')
}
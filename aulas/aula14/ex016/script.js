function Contar() {
    var inicio = document.querySelector('input#inicio').value
    var fim = document.querySelector('input#fim').value
    var passo = document.querySelector('input#passo').value
    var msg = document.querySelector('div#msg')

    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if (passo <= 0) {
        alert('Impossível contar com Passo 0. Considerando Passo 1')
        passo = 1
    }

    msg.innerHTML = 'Contando: <br>'

    if (inicio < fim) {
        for (i = inicio; i <= fim; i += passo) {
        msg.innerHTML += `${i} \u{1F449}`
        }
    } else {
        for (i = inicio; i >= fim; i -= passo) {
        msg.innerHTML += `${i} \u{1F449}`
        }
    }
    msg.innerHTML += `\u{1F3C1}`
}

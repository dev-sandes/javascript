function verificar(){
    let msg = window.document.querySelector('div#msg')
    let ano = Number(window.prompt('Qual o ano que você quer verificar?'))
    msg.innerHTML = ''
    msg.innerHTML = `<h1>Analisando o ano de ${ano}...</h1>`
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        msg.innerHTML = `<p>O ano de ${ano} <mark style="background-color: green">É BISSEXTO</mark> &#x2705;</p>`
    } else {
        msg.innerHTML = `<p>O ano de ${ano} <mark style="background-color: red">NÃO É BISSEXTO</mark> &#x274C;</p>`
    }
}

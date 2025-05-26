let cotação = window.prompt('Antes de mais nada. Quanto está a cotação do dólar agora?')
function converter(){
    let msg = document.querySelector('div#msg')
    let reais = window.prompt('Quantos R$ você tem na carteira?')
    reais = Number(reais)
    cotação = Number(cotação)
    let dólar = cotação
    let conversão = reais / dólar
    msg.innerHTML = ''
    msg.innerHTML = `<br>Com <strong>R$ ${reais}</strong> na carteira, você tem <strong>U$S ${conversão.toFixed(2)}</strong> dólares.`
}

function comprar(){
    let produto = window.prompt('Qual produto você está comprando?')

    let compra = window.prompt(`Quanto custa ${produto} que você está comprando?`)

    let valor = window.prompt(`Qual foi o valor que você deu para pagar ${produto}?`)

    compra = parseFloat(compra)
    valor = parseFloat(valor)

    window.alert(`Você comprou ${produto} que custou R$ ${compra.toFixed(2)}.
    Deu R$ ${valor.toFixed(2)} em dinheiro e vai receber R$ ${valor-compra.toFixed(2)} de troco.
    Volte Sempre!`)   
}

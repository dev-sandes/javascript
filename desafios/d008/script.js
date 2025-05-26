function desconto() {
    let msg = window.document.querySelector('div#msg');
    let produto = window.prompt('Qual é o produto que você está comprando?');
    let preço = window.prompt(`Qual é o preço de ${produto}?`);
    preço = Number(preço);
    
    let desconto_preço = preço * 0.10;
    let valor_final = preço - desconto_preço;
    
    msg.innerHTML = `
        <br><strong>Calculando desconto de 10% para ${produto}</strong><br>
        O preço original era R$ ${preço.toFixed(2)}.
        <p>Você acaba de ganhar R$ ${desconto_preço.toFixed(2)} de desconto (-10%).</p>
        <p>No fim, você vai pagar R$ ${valor_final.toFixed(2)} no produto ${produto}.</p>
    `;
}

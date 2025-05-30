function verificar() {
    var msg = window.document.querySelector('div#msg');
    
    var precoAntigo = Number(prompt('Qual era o preço anterior do produto?'));
    var precoAtual = Number(prompt('Qual é o preço atual do produto?'));
    
    var resultado = '';
    resultado += `<h2>Analisando os valores informados</h2>`;
    resultado += `<p>O produto custava R$ ${precoAntigo.toFixed(2)} e agora custa R$ ${precoAtual.toFixed(2)}.</p>`;
    
    if (precoAtual > precoAntigo) {
        var diferenca = precoAtual - precoAntigo;
        var variacao = (diferenca / precoAntigo) * 100;
        resultado += `<p>Hoje o produto está mais caro.</p>`;
        resultado += `<p>O preço subiu R$ ${diferenca.toFixed(2)} em relação ao preço anterior.</p>`;
        resultado += `<p>Uma variação de ${variacao.toFixed(1)}% pra cima.</p>`;
    } else if (precoAtual < precoAntigo) {
        var diferenca = precoAntigo - precoAtual;
        var variacao = (diferenca / precoAntigo) * 100;
        resultado += `<p>Hoje o produto está mais barato.</p>`;
        resultado += `<p>O preço caiu R$ ${diferenca.toFixed(2)} em relação ao preço anterior.</p>`;
        resultado += `<p>Uma variação de ${variacao.toFixed(1)}% pra baixo.</p>`;
    } else {
        resultado += `<p>Não houve alteração no preço.</p>`;
    }
    
    msg.innerHTML = resultado;
}

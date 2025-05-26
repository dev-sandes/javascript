function Verificar() {
    let msg = window.document.querySelector('div.msg')
    let nome = window.prompt('Qual é o nome do Funcionário?')
    let salário = Number(window.prompt(`Qual é o salário de ${nome}?`))
    let reajuste = Number(window.prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))
    
    let aumento = salário * (reajuste / 100)
    let valor_final = aumento + salário

    msg.innerHTML = ''
    msg.innerHTML = `<p><strong>${nome} recebeu um aumento salarial!</strong></p>
    O salário atual era R$ ${salário.toFixed(2).replace('.', ',')}<br>
    Com um aumento de ${reajuste}%, o salário vai aumentar R$ ${aumento.toFixed(2).replace('.', ',')} no próximo mês.<br>
    E a partir daí, ${nome} vai passar a ganhar R$ ${valor_final.toFixed(2).replace('.', ',')}.`
}

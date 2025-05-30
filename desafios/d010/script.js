function calcular(){
    msg = window.document.querySelector('div.msg');
    
    a = Number(window.prompt('Qual o valor de a?'));
    b = Number(window.prompt('Qual o valor de b?'));
    c = Number(window.prompt('Qual o valor de c?'));

    delta = (b ** 2) - (4 * a * c)

    msg.innerHTML = '';
    msg.innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    msg.innerHTML += `<p>A equação atual é <strong><em>${a}x<sup>2</sup> + <strong>${b}</strong>x + <strong>${c}</strong> = 0</em></strong></p>`
    msg.innerHTML += `<p>O cálculo realizado será <strong>&Delta; = ${b}<sup>2</sup> - 4 . ${a} . ${c}</p></strong>`;
    msg.innerHTML += `<p>O valor calculado foi <strong><mark>&Delta; = ${delta}</mark></strong></p>`;
}

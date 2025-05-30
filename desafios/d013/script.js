function verificar(){
    let msg = window.document.querySelector('div#msg');
    let nomeDoAluno = window.prompt('Qual é o nome do aluno?');
    let primeiraNota = Number(window.prompt(`Primeira nota de ${nomeDoAluno}?`));
    let segundaNota = Number(window.prompt(`Segunda nota de ${nomeDoAluno}?`));
    let media = (primeiraNota + segundaNota) / 2;

    msg.innerHTML = `<h2>Analisando a situação de ${nomeDoAluno}...</h2>`;
    msg.innerHTML += `Com as notas ${primeiraNota} e ${segundaNota}, a <strong>média é ${media.toFixed(2)}</strong>.<br>`;

    if(media >= 6) {
        msg.innerHTML += `Com média acima de 6,0, o aluno está <mark style="background-color: green; color: white;">APROVADO</mark>.`;
    } else if(media >= 3) {
        msg.innerHTML += `Com média entre 3,0 e 6,0, o aluno está <mark style="background-color: orange; color: white;">RECUPERAÇÃO</mark>.`;
    } else {
        msg.innerHTML += `Com média abaixo de 3,0, o aluno está <mark style="background-color: red; color: white;">REPROVADO</mark>.`;
    }
}

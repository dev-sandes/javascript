function multiplicar() {
    let msg = document.querySelector('div.msg');
    msg.innerHTML = '';
    let n1 = prompt('Digite o primeiro número:');
    let n2 = prompt('Digite o segundo número:');

    if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
        alert('[ERRO] Ambos os números são obrigatórios e devem ser válidos!');
    } else {
        let resultado = Number(n1) * Number(n2);
        msg.innerHTML = `${n1} × ${n2} = ${resultado}.`;
    }
}

function somar() {
    let msg = document.querySelector('div.msg');
    msg.innerHTML = '';
    let n1 = prompt('Digite o primeiro número:');
    let n2 = prompt('Digite o segundo número:');

    if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
        alert('[ERRO] Ambos os números são obrigatórios e devem ser válidos!');
    } else {
        let resultado = Number(n1) + Number(n2);
        msg.innerHTML = `${n1} + ${n2} = ${resultado}.`;
    }
}

function subtrair() {
    let msg = document.querySelector('div.msg');
    msg.innerHTML = '';
    let n1 = prompt('Digite o primeiro número:');
    let n2 = prompt('Digite o segundo número:');

    if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
        alert('[ERRO] Ambos os números são obrigatórios e devem ser válidos!');
    } else {
        let resultado = Number(n1) - Number(n2);
        msg.innerHTML = `${n1} - ${n2} = ${resultado}.`;
    }
}

function dividir() {
    let msg = document.querySelector('div.msg');
    msg.innerHTML = '';
    let n1 = prompt('Digite o primeiro número:');
    let n2 = prompt('Digite o segundo número:');

    if (!n1 || !n2 || isNaN(n1) || isNaN(n2)) {
        alert('[ERRO] Ambos os números são obrigatórios e devem ser válidos!');
    } else if (Number(n2) === 0) {
        alert('[ERRO] Não é possível dividir por zero!');
    } else {
        let resultado = Number(n1) / Number(n2);
        msg.innerHTML = `${n1} &#247; ${n2} = ${resultado}.`;
    }
}

function potencia() {
    let msg = document.querySelector('div.msg');
    msg.innerHTML = '';
    let base = prompt('Digite a base:');
    let expoente = prompt('Digite o expoente:');

    if (!base || !expoente || isNaN(base) || isNaN(expoente)) {
        alert('[ERRO] A base e o expoente são obrigatórios e devem ser válidos!');
    } else {
        let resultado = Math.pow(Number(base), Number(expoente));
        msg.innerHTML = `${base}<sup>${expoente}</sup> = ${resultado}`;
    }
}

function recarregar() {
    location.reload();
}

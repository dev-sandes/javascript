function tabuada() {
    var num = document.querySelector('input#num')
    var tab = document.querySelector('select#tabuada')
    if (num.value.length == 0) {
        alert('Por favor, digite um número!')
    } else {
        var num = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}

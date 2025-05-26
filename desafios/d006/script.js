function converter() {
    let msg = window.document.querySelector('div#msg')
    let celsius = window.prompt('Digite uma temperatura em °C (Celsius)')
    
    celsius = celsius.replace(',', '.')
    celsius = Number(celsius)

    let kelvin = celsius + 273.15
    let fahrenheit = (celsius * 9 / 5) + 32

    msg.innerHTML = ''
    msg.innerHTML += `<strong>A temperatura de ${celsius.toFixed(2).replace('.', ',')} °C, corresponde a...</strong>`
    msg.innerHTML += `
    <br>${kelvin.toFixed(2).replace('.', ',')} K (Kelvin)
    <br>${fahrenheit.toFixed(2).replace('.', ',')} °F (Fahrenheit)`
    }


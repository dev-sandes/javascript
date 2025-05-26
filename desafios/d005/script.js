function converter(){
    let msg = window.document.querySelector('div#msg')
    let distância = window.prompt('Digite um distância em metros (m)')
    msg.innerHTML = ''
    distância = distância.replace(',','.')
    distância = Number(distância)
    msg.innerHTML = `<strong>A distância de ${distância} metros, corresponde a...</strong>`
    msg.innerHTML += `
    <br>
    <br>${(distância / 1000).toFixed(3)} quilômetros (km)
    <br>
    <br>${(distância / 100).toFixed(3)} hectômetros (hm)
    <br>
    <br>${(distância / 10).toFixed(3)} decâmetros (dam)
    <br>
    <br>${(distância * 10).toFixed(1)} decímetros (dm)
    <br>
    <br>${(distância * 100).toFixed(0)} centímetros (cm)
    <br>
    <br>${(distância * 1000).toFixed(0)} milímetros (mm)
    `
}

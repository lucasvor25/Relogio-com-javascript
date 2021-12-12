setInterval( setClock, 1000)

const horaPonteiro = document.querySelector('[data-hour-hand]')
const minutoPonteiro = document.querySelector('[data-minute-hand]')
const segundoPonteiro = document.querySelector('[data-second-hand]')

function setClock() {
    const dataAtual =  new Date()
    const segundoAtual = dataAtual.getSeconds() / 60
    const minutoAtual = (segundoAtual + dataAtual.getMinutes()) / 60
    const horaAtual = (minutoAtual + dataAtual.getHours()) / 12
    rodarRelogio(segundoPonteiro, segundoAtual)
    rodarRelogio(minutoPonteiro, minutoAtual)
    rodarRelogio(horaPonteiro, horaAtual)
}

function rodarRelogio(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock()
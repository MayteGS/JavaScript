let btnTotal = document.getElementById('btnTotal');
let imprimirResultado = document.getElementById('resultado');
let traje = document.getElementById('traje');

EventListener();

function EventListener() {
    btnTotal.addEventListener('click', totalTrajes);
}

function totalTrajes() {

    let resultado = 0;
    if (Number(traje.value) >= 3600) {
        resultado = Number(traje.value) - (Number(traje.value) * .16);
        imprimirResultado.innerHTML = `<h4>El traje tiene un 16% de descuento. Total a pagar $${resultado}.00</h4>`
    } else {
        resultado = Number(traje.value) - (Number(traje.value) * .07);
        imprimirResultado.innerHTML = `<h4>El traje tiene un 7% de descuento. Total a pagar $${resultado}.00</h4>`
    }
}
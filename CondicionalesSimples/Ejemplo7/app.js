let btnCalcular = document.getElementById('btnCalcular');
let total = document.getElementById('total');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {
    let descuento = document.getElementById('descuento');
    let total = document.getElementById('total');
    let resultado = document.getElementById('resultado');

    let descuento2 = 0;

    if (Number(total.value) > 1000) {
        descuento.innerText = 'Aprobado';
        total = (Number(total.value) - (Number(total.value) * .2));
        resultado.innerText = total;
        return;
    } else {
        descuento.innerText = 'Denegado';
        total = Number(total.value);
        resultado.innerText = total;
    }

}
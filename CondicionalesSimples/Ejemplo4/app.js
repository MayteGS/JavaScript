let btnCalcular = document.getElementById('btnCalcular');
let produccion = document.getElementById('produccion');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcular);
    produccion.addEventListener('blur', validarDatos);
}

function validarDatos(event) {
    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function calcular() {

    let imprimirResultado = document.getElementById('resultado');

    if (Number(produccion.value) >= 100) {
        imprimirResultado.innerText = 'Aprobado';
    } else {
        imprimirResultado.innerText = 'Denegado';
    }


}
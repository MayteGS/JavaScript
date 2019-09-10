let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', compararDatos);
}

function compararDatos() {
    let tipoUva = document.getElementById('tipoUva').value;
    let tamañoUva = Number(document.getElementById('tamañoUva').value);
    let precioUva = Number(document.getElementById('precioUva').value);
    let imprimirResultado = document.getElementById('resultado');

    let precioTotal = 0;

    if (tipoUva == 'A' && tamañoUva == 1) {
        precioTotal = precioUva + .20;
        imprimirResultado.innerHTML = `El precio de la uva es de:   ${precioTotal}`;
    } else if (tipoUva == 'A' && tamañoUva == 2) {
        precioTotal = precioUva + .30;
        imprimirResultado.innerHTML = `El precio de la uva es de:   ${precioTotal}`;

    } else if (tipoUva == 'B' && tamañoUva == 1) {
        precioTotal = precioUva + .30;
        imprimirResultado.innerHTML = `El precio de la uva es de:   ${precioTotal}`;
    } else if (tipoUva == 'B' && tamañoUva == 2) {
        precioTotal = precioUva + .50;
        imprimirResultado.innerHTML = `El precio de la uva es de:   ${precioTotal}`;
    }


}
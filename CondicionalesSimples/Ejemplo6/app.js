let btnCalcular = document.getElementById('btnCalcular');
let nomArticulo = document.getElementById('nomArticulo');
let clave = document.getElementById('clave');
let precioArt = document.getElementById('precioArticulo');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', calcular);
}

function calcular() {

    let ImprimirNomArticulo = document.getElementById('resultadoNombre');
    let ImprimirClave = document.getElementById('resultadoClave');
    let ImprimirPrecioArticulo = document.getElementById('resultadoPrecio');
    let imprimirResultado = document.getElementById('resulPrecioDescuento');

    let resultado = 0;

    ImprimirNomArticulo.innerText = nomArticulo.value;
    ImprimirClave.innerText = clave.value;
    ImprimirPrecioArticulo.innerText = precioArticulo.value;

    if (clave.value == '01') {
        resultado = (Number(precioArticulo.value) - (Number(precioArticulo.value) * .1));
        imprimirResultado.innerText = resultado;
        return;
    }
    if (clave.value == '02') {
        resultado = (Number(precioArticulo.value) - (Number(precioArticulo.value) * .2));
        imprimirResultado.innerText = resultado;
        return;
    }


}
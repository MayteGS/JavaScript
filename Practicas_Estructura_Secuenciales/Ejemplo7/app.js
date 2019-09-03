let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerCalificacion);
}

function obtenerCalificacion() {
    let resCorrectas = Number(document.getElementById('resCorrectas').value);
    let resIncorrectas = Number(document.getElementById('resIncorrectas').value);
    let resEnBlanco = Number(document.getElementById('resEnBlanco').value);

    let resultadoCalificacion = 0;

    resultadoCalificacion = (resCorrectas + 4) + (resIncorrectas - 1);

    console.log(resultadoCalificacion);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultadoCalificacion;
}
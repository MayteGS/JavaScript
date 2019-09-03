let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerCalificacion);
}

function obtenerCalificacion() {
    let resCorrectas = Number(document.getElementById('resCorrectas').value);
    let resIncorrectas = Number(document.getElementById('resIncorrectas').value);
    let resEnBlanco = Number(document.getElementById('resEnBlanco').value);

    // const resCorrectas = 4;
    // const resIncorrectas = -1;
    // const resEnBlanco = 0;

    let resultadoCalificacion = 0;

    resultadoCalificacion = ((resCorrectas + resIncorrectas) + resEnBlanco);

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultadoCalificacion;
}
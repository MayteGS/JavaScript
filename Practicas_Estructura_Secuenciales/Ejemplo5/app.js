let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', obtenerArea);
}

function obtenerArea() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);

    let resultadoAreaRectangulo = 0,
        resultadoAreaTriangulo = 0,
        resultadoSumaAreas = 0;

    resultadoAreaRectangulo = ladoB * ladoC;
    resultadoAreaRectangulo = ((ladoA - ladoC) * ladoB) / 2;

    resultadoSumaAreas = resultadoAreaRectangulo + resultadoAreaTriangulo;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultadoSumaAreas;
}
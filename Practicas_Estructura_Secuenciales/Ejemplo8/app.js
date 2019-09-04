let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', areaTriangulos);
}

function areaTriangulos() {
    let ladoA = Number(document.getElementById('ladoA').value);
    let ladoB = Number(document.getElementById('ladoB').value);
    let ladoC = Number(document.getElementById('ladoC').value);

    let semiperimetro = 0;
    semiperimetro = ladoA + ladoB + ladoC
    semiperimetro /= 2;

    let area = 0;
    semiperimetro = semiperimetro * (semiperimetro - ladoA) * (semiperimetro - ladoB) * (semiperimetro - ladoC);
    area = Math.sqrt(semiperimetro);

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = area;
}
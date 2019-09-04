let btnCalcular = document.getElementById('btnCalcular');

addEventListener();

function addEventListener() {

    btnCalcular.addEventListener('click', hipotenusa);
}

function hipotenusa() {
    let a = Number(document.getElementById('ladoA').value);
    let b = Number(document.getElementById('ladoB').value);

    let calculo = 0;
    calculo = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = calculo;
}
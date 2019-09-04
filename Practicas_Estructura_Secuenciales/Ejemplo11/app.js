let btnCalcular = document.getElementById('btnCalcular');

addEventListener();

function addEventListener() {

    btnCalcular.addEventListener('click', convertidor);
}

function convertidor() {
    let metros = Number(document.getElementById('metros').value);

    let calculo = 0;
    calculo = metros * 39.3701;

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = calculo;
}
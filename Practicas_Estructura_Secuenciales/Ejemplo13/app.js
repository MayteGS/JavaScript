let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', viaticos);
}

function viaticos() {
    let dias = Number(document.getElementById('dias').value);
    let hotel = Number(document.getElementById('hotel').value);
    let comida = Number(document.getElementById('comida').value);

    let calculo = 0;
    calculo = (hotel * dias) + (comida * dias) + (dias * 100);

    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = calculo;
}
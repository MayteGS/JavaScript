let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', obtenerDistancia);

}

function obtenerDistancia() {
    let velocidad = Number(document.getElementById('velocidad').value);
    let tiempo = Number(document.getElementById('tiempo').value);

    let resultadoDistancia = 0;

    resultadoDistancia = velocidad * tiempo;

    console.log(resultadoDistancia);


    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultadoDistancia;
}
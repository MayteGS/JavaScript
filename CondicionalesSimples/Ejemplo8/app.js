let btnPersonaMayor = document.getElementById('btnPersonaMayor');
let nom1 = document.getElementById('nom1');
let edad1 = document.getElementById('edad1');
let nom2 = document.getElementById('nom2');
let edad2 = document.getElementById('edad2');

EventListener();

function EventListener() {

    btnPersonaMayor.addEventListener('click', compararEdades);
}

function compararEdades() {

    let resultadoImprimir = document.getElementById('resultado');

    if (Number(edad1.value) == Number(edad2.value)) {
        resultadoImprimir.innerText = 'Tienen la misma edad';
        return;
    }

    if (Number(edad1.value) > Number(edad2.value)) {
        resultadoImprimir.innerText = nom1.value;
    } else {
        resultadoImprimir.innerText = nom2.value;
    }
}
let btnHerMayor = document.getElementById('btnHerMayor');
let edad1 = document.getElementById('edad1');
let edad2 = document.getElementById('edad2');

EventListener();

function EventListener() {
    edad1.addEventListener('blur', HermanaMayor);
    edad2.addEventListener('blur', HermanaMayor);
    btnHerMayor.addEventListener('click', compararEdades);
}

function HermanaMayor(event) {

    if (isNaN(event.target.value)) {
        event.target.focus();
    }

}

function compararEdades() {

    let imprimir = document.getElementById('HermanaMayor');
    let diferencia = 0;

    if (Number(edad1.value) == Number(edad2.value)) {

        imprimir.innerText = 'La Hermana A  y B tienen la misma edad'
        return;
    }

    if (Number(edad1.value) > Number(edad2.value)) {

        diferencia = edad1.value - edad2.value;
        imprimir.innerText = 'La hermana A es mayor por ' + diferencia + ' años';



    } else {
        diferencia = edad2.value - edad1.value;
        imprimir.innerText = 'La hermana B es mayor por ' + diferencia + ' años';
    }
}
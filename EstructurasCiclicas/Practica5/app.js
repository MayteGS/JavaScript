let btnAgregarAhorro = document.getElementById('btnAgregarAhorro');

let contador = 0;

EventListener();

function EventListener() {
    btnAgregarAhorro.addEventListener('click', agregarAhorro);
}

function agregarAhorro() {

    if (contador < 12) {
        contador++;

        let ahorro = Number(document.getElementById('ahorroMensual').value);

        let spanAhorro = document.createElement('span');
        spanAhorro.setAttribute('id', `AhorroMensual${contador}`);

        let textSpan = document.createTextNode(`${ahorro}`);
        spanAhorro.appendChild(textSpan);


        let imprimirSpan = document.getElementById(`Mes${contador}`);
        imprimirSpan.appendChild(spanAhorro);

        calcularAhorro();

    }

}

function calcularAhorro() {

    let imprimirAhorroTotal = document.getElementById('total');
    let suma = 0;

    for (let i = 1; i <= contador; i++) {
        let valorObtenido = document.getElementById(`AhorroMensual${i}`).textContent;
        suma += Number(valorObtenido);

    }

    imprimirAhorroTotal.innerHTML = `<span> Total$ ${suma} </span>`;

}
let btnIngresarDatos = document.getElementById('btnIngresarDatos');

let elementos = [];

let contador = 0;

EventListener();

function EventListener() {
    btnIngresarDatos.addEventListener('click', IngresarDatos);
}

function IngresarDatos() {

    let valor = document.getElementById('IngreseNumero');
    let datosImprimir = "";
    let i = 0;

    for (i = 0; i < elementos.length; i++) {

        if (Number(valor.value) === elementos[i]) return;
    }

    elementos[i] = Number(valor.value);

    for (let x = 0; x < elementos.length; x++) {

        datosImprimir += `<li class="list-group-item">${elementos[x]}</li>`
    }

    document.getElementById('ListaImprimir').innerHTML = datosImprimir;
}
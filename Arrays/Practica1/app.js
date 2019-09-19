let btnAgregarElementos = document.getElementById('btnAgregarElementos');
let btnMostrarElementos = document.getElementById('btnMostrarElementos');

//Declaracion global de array
let elementos = [];

//Declarar contador global
let contador = 0;

EventListener();

function EventListener() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', MostrarElementos);

}

function AgregarElementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        elementos[contador] = valorInput.value;

        valorInput.value = "";

        contador++;
    }
}

function MostrarElementos() {

    let informacionImprimir = "";

    for (let i = 0; i < elementos.length; i++) {

        informacionImprimir += `<li class="list-group-item">${elementos[i]}</li>`

    }
    contador = 0;

    document.getElementById('listaImprimir').innerHTML = informacionImprimir;
}
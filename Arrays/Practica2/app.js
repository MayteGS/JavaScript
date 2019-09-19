let btnAgregarElementos = document.getElementById('btnAgregarElementos');
let btnMostrarElementos = document.getElementById('btnMostrarElementos');

//Declaracion global de a
let elementos = [];

//Declarar contador global
let contador = 0;

EventListener();

function EventListener() {
    btnAgregarElementos.addEventListener('click', AgregarElementos);
    btnMostrarElementos.addEventListener('click', CalcularMedia);

}

function AgregarElementos() {

    if (contador < 10) {

        let valorInput = document.getElementById('AgregarElemento');

        console.log(elementos);

        elementos[contador] = Number(valorInput.value);

        valorInput.value = "";

        contador++;
    }
}

function CalcularMedia() {

    let promedio = 0;

    for (let i = 0; i < elementos.length; i++) {

        promedio += elementos[i];
    }

    promedio /= elementos.length;

    contador = 0;
    elementos = [];

    let imprimir = `<li class="list-group-item">El promedio de los numeros otorgados es: ${promedio}</li>`

    document.getElementById('listaImprimir').innerHTML = imprimir;
}
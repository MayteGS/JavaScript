let btnArticulo = document.getElementById('btnArticulo');
let btnCalcular = document.getElementById('btnCalcular');
let contador = 0;
let contadorPrecioArticulo = 0;

EventListener();

function EventListener() {
    btnArticulo.addEventListener('click', AgregarInputArticulo);
    btnCalcular.addEventListener('click', calcularTotal);
}

function AgregarInputArticulo() {

    contador++;


    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'input-group mb-3');

    let inputArticulo = document.createElement('input');
    inputArticulo.setAttribute('type', 'text');
    inputArticulo.setAttribute('class', 'form-control');
    inputArticulo.setAttribute('placeholder', 'Ingresa el nombre del articulo');

    let inputGroupAppend = document.createElement('div');
    inputGroupAppend.setAttribute('class', 'input-group-append');

    let buttonAgregarPrecio = document.createElement('button');
    buttonAgregarPrecio.setAttribute('id', `btnAgregarPracio${contador}`);
    buttonAgregarPrecio.setAttribute('class', 'btn btn-outline-secondary');

    buttonAgregarPrecio.appendChild(document.createTextNode('Agregar Precio'));

    let listaArticulos = document.getElementById('listaArticulos');

    listaArticulos.appendChild(DivRow);
    DivRow.appendChild(DivCol);
    DivCol.appendChild(inputGroup);
    inputGroup.appendChild(inputArticulo);
    inputGroup.appendChild(inputGroupAppend);
    inputGroupAppend.appendChild(buttonAgregarPrecio);

    EventListenerAgregarPrecio();

}

function EventListenerAgregarPrecio() {
    let buttonAgregarPrecio = document.getElementById(`btnAgregarPracio${contador}`);
    buttonAgregarPrecio.addEventListener('click', crearInputPrecio);
}

function crearInputPrecio(event) {
    // alert('Works!!!');
    contadorPrecioArticulo++;
    event.target.setAttribute('disabled', 'true');

    // let DivRow = document.createElement('div');
    // DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12');

    let inputGroup = document.createElement('div');
    inputGroup.setAttribute('class', 'form-group mb-3');

    let inputPrecioArticulo = document.createElement('input');
    inputPrecioArticulo.setAttribute('type', 'number');
    inputPrecioArticulo.setAttribute('class', 'form-control');
    inputPrecioArticulo.setAttribute('placeholder', 'Ingresa el precio del articulo');
    inputPrecioArticulo.setAttribute('id', `valorArticulo${contadorPrecioArticulo}`);

    let listaArticulos = event.target.parentElement.parentElement.parentElement.parentElement;

    listaArticulos.appendChild(DivCol);
    // DivRow.appendChild(DivCol);
    DivCol.appendChild(inputGroup);
    inputGroup.appendChild(inputPrecioArticulo);

}

function calcularTotal() {

    let imprimirTotal = document.getElementById('total');

    let suma = 0;
    for (let i = 1; i <= contadorPrecioArticulo; i++) {
        let valorInput = Number(document.getElementById(`valorArticulo${i}`).value);

        if (valorInput >= 200) {
            suma += valorInput * 0.85;
        } else if (valorInput < 200 && valorInput <= 100) {
            suma += valorInput * 0.88;
        } else {
            suma += valorInput * .90;
        }

    }

    imprimirTotal.innerHTML = `Total $${suma}`;
}
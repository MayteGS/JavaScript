let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', FillArray);
}

function FillArray() {

    let inputAddElement = document.getElementById('tamañoArreglo');
    let dataArray = [];
    let suma = 0;

    for (let i = 0; i < Number(inputAddElement.value); i++) {

        dataArray[i] = (Math.floor(Math.random() * 10));

        // console.log(dataArray);

    }

    suma = x(dataArray);

}

function x(dataArray) {

    let imprimir = "";
    let suma = 0;

    for (let i = 0; i < dataArray.length; i++) {

        imprimir += `<li class="list-group-item"> ${dataArray[i]}</li>`

        suma += dataArray[i];

    }

    document.getElementById('imprimirLista').innerHTML = imprimir;

    // console.log(suma);

}
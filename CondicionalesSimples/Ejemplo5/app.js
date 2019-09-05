let btnDiferenciar = document.getElementById('btnDiferenciar');
let ladoA = document.getElementById('ladoA');
let ladoB = document.getElementById('ladoB');
let ladoC = document.getElementById('ladoC');

EventListener();

function EventListener() {
    ladoA.addEventListener('blur', validarDatos);
    ladoB.addEventListener('blur', validarDatos);
    ladoC.addEventListener('blur', validarDatos);
    btnDiferenciar.addEventListener('click', Diferenciar);
}

function validarDatos(event) {

    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function Diferenciar() {


    let imprimirResultado = document.getElementById('resultado');

    if (Number(ladoA.value) == Number(ladoB.value) && Number(ladoB.value) == Number(ladoC.value)) {
        imprimirResultado.innerText = 'Equilatero';
        return;
    }


    if (Number(ladoA.value) == Number(ladoB.value) && Number(ladoB.value) != Number(ladoC.value) ||
        Number(ladoA.value) == Number(ladoC.value) && Number(ladoC.value) != Number(ladoB.value) ||
        Number(ladoB.value) == Number(ladoC.value) && Number(ladoC.value) != Number(ladoA.value)) {

        imprimirResultado.innerText = 'Isoceles';
        return;
    }

    if (Number(ladoA.value) != Number(ladoB.value) && Number(ladoB) != Number(ladoC.value)) {
        imprimirResultado.innerText = 'Escaleno';
        return;
    }

}
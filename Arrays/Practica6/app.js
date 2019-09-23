let btnAgregarElementos = document.getElementById('btnAgregarElementos');
let btnCalcular = document.getElementById('btnCalcular');

let CounterClicksAddElements = 0;

EventListener();

function EventListener() {
    btnAgregarElementos.addEventListener('click', AddElements);
    btnCalcular.addEventListener('click', CalcularArray);
}

function AddElements() {
    let li = document.createElement('li');
    li.setAttribute('class', 'list-group-item mb-2');

    let input = document.createElement('input');
    input.setAttribute('class', 'form-control');
    input.setAttribute('id', `listArrayR${CounterClicksAddElements}`);
    input.setAttribute('placeholder', 'Ingrese un digito');

    document.getElementById('ArrayList1').appendChild(li);
    li.appendChild(input);



    let li2 = document.createElement('li');
    li2.setAttribute('class', 'list-group-item mb-2');

    let input2 = document.createElement('input');
    input2.setAttribute('class', 'form-control');
    input2.setAttribute('id', `listArrayL${CounterClicksAddElements}`);
    input2.setAttribute('placeholder', 'Ingrese un digito');

    document.getElementById('ArrayList2').appendChild(li2);
    li2.appendChild(input2);

    CounterClicksAddElements++;

}

function CalcularArray() {
    let Array1 = [];
    let Array2 = [];
    let Array3 = [];

    for (let i = 0; i < CounterClicksAddElements; i++) {

        Array1[i] = Number(document.getElementById(`listArrayR${i}`).value);
        Array2[i] = Number(document.getElementById(`listArrayL${i}`).value);

        if (isNaN(Array1[i]) || isNaN(Array2[i])) {

            Swal.fire({
                type: 'error',
                title: 'Caracter INVALIDO',
                text: 'Se ha ingresado un digito incorrecto',
            })

            Array1 = [];
            Array2 = [];
            document.getElementById(`listArrayR${i}`).focus();

            return;
        }
    }

    for (let x = 0; x < Array1.length; x++) {

        Array3[x] = Array1[x] + Array2[x];

    }

    let ConcatenarResultado = "";
    for (let y = 0; y < Array1.length; y++) {

        ConcatenarResultado += `<li class="list-group-item">${Array3[y]}</li>`

    }

    document.getElementById('ArrayList3').innerHTML = ConcatenarResultado;

}
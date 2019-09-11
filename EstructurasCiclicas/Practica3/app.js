let btnAgregarFG = document.getElementById('btnAgregarFG');
let btnCalcularEstatura = document.getElementById('btnCalcularEstatura');
let numeroInput = 0;

EventListener();

function EventListener() {
    btnAgregarFG.addEventListener('click', agregarPersonas)
    btnCalcularEstatura.addEventListener('click', calcularPromedio)
}

function calcularPromedio() {

    let suma = 0;
    let promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let estatura = Number(document.getElementById(`estaturaPersona${x}`).value);
        suma += estatura;
    }

    promedio = suma / numeroInput;
    let imprimir = document.getElementById('imprimir');
    imprimir.innerText = promedio;
}

function agregarPersonas() {

    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'Col-12');

    let DivFormGroup = document.createElement('div');
    DivRow.setAttribute('class', 'form-group');

    let labelFG = document.createElement('label');
    let textLabel = document.createTextNode(`Ingresa la estatura de la persona:${numeroInput}`);
    labelFG.appendChild(textLabel);

    let InputFC = document.createElement('input');

    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('placeholder', 'Ingresa la estatura de la persona');
    InputFC.setAttribute('id', `estaturaPersona${numeroInput}`);

    let cajaPersonas = document.getElementById('cajaPersonas');

    cajaPersonas.appendChild(DivRow);


    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG);
    DivFormGroup.appendChild(InputFC);

}
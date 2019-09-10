let btnAgregarFG = document.getElementById('btnAgregarFG');
let btnCalcularPromedio = document.getElementById('btnCalcularPromedio');
let numeroInput = 0;

EventListener();

function EventListener() {
    btnAgregarFG.addEventListener('click', AgregarFG);
    btnCalcularPromedio.addEventListener('click', calcularPromedio);
}

function calcularPromedio() {

    let sum = 0;
    let promedio = 0;

    for (let x = 1; x <= numeroInput; x++) {
        let edad = Number(document.getElementById(`edadAlumno${x}`).value);
        sum += edad;
    }

    promedio = sum / numeroInput;
    let imprimir = document.getElementById('imprimir');
    imprimir.innerText = promedio;
}




function AgregarFG() {
    numeroInput++;

    let DivRow = document.createElement('div');
    DivRow.setAttribute('class', 'row');

    let DivCol = document.createElement('div');
    DivCol.setAttribute('class', 'col-12')

    let DivFormGroup = document.createElement('div');
    DivFormGroup.setAttribute('class', 'form-group');

    let labelFG = document.createElement('labdel');
    let textLabel = document.createTextNode(`Ingresa la edad del alumno${numeroInput}`);
    labelFG.appendChild(textLabel);

    let InputFC = document.createElement('input');

    InputFC.setAttribute('type', 'number');
    InputFC.setAttribute('class', 'form-control');
    InputFC.setAttribute('placeholder', 'Ingresa la edad del alumno');
    InputFC.setAttribute('id', `edadAlumno${numeroInput}`);

    let cajaAlumnos = document.getElementById('cajaAlumnos');

    cajaAlumnos.appendChild(DivRow);


    DivRow.appendChild(DivCol);
    DivCol.appendChild(DivFormGroup);
    DivFormGroup.appendChild(labelFG);
    DivFormGroup.appendChild(InputFC);



}
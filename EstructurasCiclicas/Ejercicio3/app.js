let btnCalcular = document.getElementById('btnCalcular');
let dia = 1;

EventListener();
diasSemana();


function EventListener() {
    btnCalcular.addEventListener('click', calcularSueldo);
}


function calcularSueldo() {


    let horasTotales = 0,
        sueldo = 0;


    for (let x = 1; x <= 6; x++) {
        let hora = Number(document.getElementById(`horasDia${x}`).value);
        horasTotales += hora;
    }
    sueldo = horasTotales * SueldoPorHora;




    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `Total de horas: ${horasTotales} horas <br>
	    Sueldo: $${sueldo}`


}


function diasSemana() {

    SueldoPorHora = (Math.floor(Math.random() * 100) + 1);
    let imprimirSueldoPorHora = document.getElementById('SueldoPorHora');
    imprimirSueldoPorHora.innerHTML = `<h2>La paga por hora es: $${SueldoPorHora}.00</h2>`


    for (dia = 1; dia <= 6; dia++) {
        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');


        let divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');


        let divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');


        let labelFG = document.createElement('label');
        let labelTxt = document.createTextNode(`Ingrese las horas trabajadas del día ${dia}`);
        labelFG.appendChild(labelTxt);


        let inputFG = document.createElement('input');
        inputFG.setAttribute('type', 'number');
        inputFG.setAttribute('class', 'form-control');
        inputFG.setAttribute('placeholder', `Ingresa las horas trabajadas del día`);
        inputFG.setAttribute('id', `horasDia${dia}`);


        let cajaDiasSemanas = document.getElementById('cajaDiasSemana');
        cajaDiasSemanas.appendChild(divRow);


        divRow.appendChild(divCol);
        divCol.appendChild(divFG);
        divFG.appendChild(labelFG);
        divFG.appendChild(inputFG);
    }
}
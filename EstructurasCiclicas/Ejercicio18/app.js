let btnCalcular = document.getElementById('btnCalcular');

EventListener();
TreintaNumeros();


function EventListener() {
    btnCalcular.addEventListener('click', calcular);
}


function calcular() {
    let impar = 0,
        sumaImpares = 0,
        promedioImpares = 0,
        par = 0,
        sumaPar = 0,
        promedioPar = 0;


    let imprimirResultado = document.getElementById('resultado');


    for (let x = 1; x <= 30; x++) {
        let valorInput = Number(document.getElementById(`numero${x}`).value);
        let imprimirResultado = document.getElementById('resultado');


        if (valorInput % 2 == 0) {
            par++;
            sumaPar += valorInput;
        }
        if (valorInput % 2 != 0) {
            impar++;
            sumaImpares += valorInput;
        }
    }
    promedioImpares = sumaImpares;
    promedioPar = sumaPar / par;


    imprimirResultado.innerHTML = `La SUMA de los numeros IMPARES es = ${promedioImpares}<hr>
	    El PROMEDIO de los numeros PAR es = ${promedioPar}`;




}




function TreintaNumeros() {


    for (let x = 1; x <= 30; x++) {


        let divRow = document.createElement('div');
        divRow.setAttribute('class', 'row');


        let divCol = document.createElement('div');
        divCol.setAttribute('class', 'col-12');


        let divFG = document.createElement('div');
        divFG.setAttribute('class', 'form-group');


        let labelFG = document.createElement('div');
        let labelTxt = document.createTextNode(`Ingresa cualquier numero`);
        labelFG.appendChild(labelTxt);


        let inputFG = document.createElement('input');
        inputFG.setAttribute('type', 'number');
        inputFG.setAttribute('class', 'form-control');
        inputFG.setAttribute('placeholder', 'Ingresa cualquier numero');
        inputFG.setAttribute('id', `numero${x}`);


        if (x <= 10) {
            let cajacajaNumeros1 = document.getElementById('cajaNumeros1');
            cajacajaNumeros1.appendChild(divRow);
            divRow.appendChild(divCol);
            divCol.appendChild(divFG);
            divFG.appendChild(labelFG);
            divFG.appendChild(inputFG);
        }
        if (x > 10 && x <= 20) {
            let cajacajaNumeros2 = document.getElementById('cajaNumeros2');
            cajacajaNumeros2.appendChild(divRow);
            divRow.appendChild(divCol);
            divCol.appendChild(divFG);
            divFG.appendChild(labelFG);
            divFG.appendChild(inputFG);
        }
        if (x > 20 && x <= 30) {
            let cajacajaNumeros3 = document.getElementById('cajaNumeros3');
            cajacajaNumeros3.appendChild(divRow);
            divRow.appendChild(divCol);
            divCol.appendChild(divFG);
            divFG.appendChild(labelFG);
            divFG.appendChild(inputFG);
        }


    }


}
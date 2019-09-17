let btnAgregarArticulo = document.getElementById('btnAgregarArticulo');
let btnCerrarCaja = document.getElementById('btnCerrarCaja');

let contador = 0;

EventListener();

function EventListener() {
    btnAgregarArticulo.addEventListener('click', agregarArticulo);
    btnCerrarCaja.addEventListener('click', cerrarCaja);
}


function cerrarCaja() {

    let total = 0,
        comprasMayores = 0,
        totalMayores = 0,
        comprasMedias = 0,
        totalMedias = 0,
        comprasBajas = 0,
        totalBajas = 0;


    for (let x = 1; x <= contador; x++) {
        let precioInput = Number(document.getElementById(`articulo${x}`).value);
        total += precioInput;


        if (precioInput > 1000) {
            comprasMayores++;
            totalMayores += precioInput;
        } else if (precioInput > 500 && precioInput <= 1000) {
            comprasMedias++;
            totalMedias += precioInput;
        } else if (precioInput <= 500) {
            comprasBajas++;
            totalBajas += precioInput;
        }
    }


    let imprimirResultado = document.getElementById('resultado');
    imprimirResultado.innerHTML = `
	    Compras mayores a 1000 son:         <span class="badge badge-sucess">  <b>${comprasMayores}</b></span> <br>
	    Total de compras mayores a 1000:    <span class="badge badge-sucess">  <b>$${totalMayores}</b></span><hr>
	
	    Compras entre 500 y 1000:           <span class="badge badge-sucess">  <b>${comprasMedias}</b> </span><br>
	    Total de compras entre 500 y 1000:  <span class="badge badge-sucess">  <b>$${totalMedias}</b> </span> <hr>
	    
	    Compras menores a 500:              <span class="badge badge-sucess">  <b>${comprasBajas}</b> </span><br>
	    Total de las compras menores a 500: <span class="badge badge-sucess">  <b>$${totalBajas}</b> </span> <hr>
	    Total Acomulado:                    <span class="badge badge-sucess">  <b>$${total}</b> </span>`;


}


function agregarArticulo() {

    contador++;

    let divRow = document.createElement('div');
    divRow.setAttribute('class', 'row');


    let divCol = document.createElement('div');
    divCol.setAttribute('class', 'col-12');


    let divFG = document.createElement('div');
    divFG.setAttribute('class', 'form-group');


    let labelFG = document.createElement('label');
    let labelTxt = document.createTextNode(`Ingresa el costo del articulo`);
    labelFG.appendChild(labelTxt);


    let inputFG = document.createElement('input');
    inputFG.setAttribute('type', 'text');
    inputFG.setAttribute('class', 'form-control');
    inputFG.setAttribute('placeholder', `Ingresa el precio del articulo ${contador}`);
    inputFG.setAttribute('id', `articulo${contador}`);


    let cajaVentas = document.getElementById('cajaVentas');


    cajaVentas.appendChild(divRow);
    divRow.appendChild(divCol);
    divCol.appendChild(divFG);
    divFG.appendChild(labelFG);
    divFG.appendChild(inputFG);


}
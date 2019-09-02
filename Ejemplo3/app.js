let btnCalcular = document.getElementById('btnCalcular');

//Se invoca funcion "EventListener" 
eventListener();


//Se crea la fincion eventListener para encapsular los objetos que llevaran el metodo de "eventListener" 
function eventListener() {
    btnCalcular.addEventListener('click', ObtenerArea);

}

function ObtenerArea() {

    //Se obtiene el valor de los input's y se convierte su tipo de dato a number y se le asigna el valor a la variable correspondiente
    let Base = Number(document.getElementById('Base').value);
    let Altura = Number(document.getElementById('Altura').value);

    let resultado = 0;

    resultado = (Base * Altura) / 2;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;


}
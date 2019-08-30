//Esta linea crea una variable la cual se encarga de obtener por medio del Objeto document el elemento button con el id "btnCalcular"
let btnCalcular = document.getElementById('btnCalcular');

//Por medio del método "addEventListener" se le asigno el elemento clic al elemento button y al momento de ejecutar dicho evento se ejecutara la funcion suma
btnCalcular.addEventListener('click', suma);

//Fincion: bloque de codigo que se ejecuta hasta cuando se manda a llamar o se invoca, mientras no sea invocada no realizara ninguna acción en el codigo 
function suma() {

    //Se obtendra los valores de los input por medio del metodo "Value"
    let numero1 = document.getElementById('Numero1').value;
    let numero2 = document.getElementById('Numero2').value;

    //Se reasigno el valor de la variable numero2 concirtiendolo de string a Numero
    numero1 = Number(numero1);
    numero2 = Number(numero2);

    //Se declara variable "resultado" y se inicializa con valor '0'
    let resultado = 0;

    //Despues de obtener los datos de los elementos input se realiza el proceso de suma y se le asigna dicho valor a la variable "resultado"
    resultado = numero1 + numero2;

    //Se asigno a la variable "imprimirResultado" el elemento con el ID "resultado" 
    let imprimirResultado = document.getElementById('resultado');

    //Por medio del metodo "innerHTML" se asigna el valor de la variable resultado para que se pueda imprimir en el elemento
    imprimirResultado.innerHTML = resultado;
}
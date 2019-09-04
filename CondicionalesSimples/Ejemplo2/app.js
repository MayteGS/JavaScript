let btnNumMayor = document.getElementById('btnNumMayor');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');


EventListener();

function EventListener() {
    //Se esta asignando el evento change al input que pertenece el id "num1"
    num1.addEventListener('blur', numeroMayor);
    num2.addEventListener('blur', numeroMayor);
    btnNumMayor.addEventListener('click', compararValores)
}

//Estamos recibiendo el parametro event debido a que el metodo "addEventListener" esta invocando la funcion numeroMayor
function numeroMayor(event) {

    //Se utilizo la fincion isNaN para comprobar si el valor obtenido es un numero, en caso de que no sea un numero, se utilizo el metodo focus para no permitirle al usuario cambiar el input

    if (isNaN(event.target.value)) {
        event.target.focus();
    }
}

function compararValores() {

    let imprimir = document.getElementById('NumeroMayor');

    if (Number(num1.value) == Number(num2.value)) {
        imprimir.innerText = 'El Numero A  y B tienen el mismo valor'
        return;

    }

    if (Number(num1.value) > Number(num2.value)) {

        imprimir.innerText = 'El Numero A es el valor mas grande'


    } else {
        imprimir.innerText = 'El Numero B es el valor mas grande'
    }
}
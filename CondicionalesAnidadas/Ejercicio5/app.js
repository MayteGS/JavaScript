let btnComparar = document.getElementById('btnComparar');

EventListener();

function EventListener() {

    btnComparar.addEventListener('click', compararDatos);
}

function compararDatos() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);
    let imprimirResultado = document.getElementById('resultado');


    if (num1 > num2) {
        if (num1 > num3) {
            if (num2 > num3) {
                imprimirResultado.innerHTML = (' ' + num1 + ' ' + num2 + ' ' + num3);
            } else {
                imprimirResultado.innerHTML = (' ' + num1 + ' ' + num3 + ' ' + num2);

            }
        } else {
            imprimirResultado.innerHTML = (' ' + num3 + ' ' + num1 + ' ' + num2);

        }


    } else if (num2 > num3) {
        if (num1 > num3) {
            imprimirResultado.innerHTML = (' ' + num2 + ' ' + num1 + ' ' + num3);
        } else {
            imprimirResultado.innerHTML = (' ' + num2 + ' ' + num3 + ' ' + num1);

        }
    } else {
        imprimirResultado.innerHTML = (' ' + num3 + ' ' + num2 + ' ' + num1);

    }

}
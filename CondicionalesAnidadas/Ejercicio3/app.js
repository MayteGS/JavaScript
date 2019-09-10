let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {

    btnCalcular.addEventListener('click', costo);

}


function costo() {

    let tiempo = Number(document.getElementById('tiempo').value);
    let imprimirResultado = document.getElementById('resultado');
    let cobro = 0;
    if (tiempo >= 0 && tiempo <= 2) {
        cobro = tiempo * 5;
        imprimirResultado.innerHTML = ('Debe pagar: $' + cobro);
    } else if (tiempo >= 3 && tiempo <= 5) {
        cobro = 2 * 5 + (tiempo - 2) * 4;
        imprimirResultado.innerHTML = ('Debe pagar: $' + cobro);
    } else if (tiempo >= 6 && tiempo <= 10) {
        cobro = 2 * 5 + 5 * 4 + (tiempo - 5) * 3;
        imprimirResultado.innerHTML = ('Debe pagar: $' + cobro);
    } else if (tiempo > 10) {
        cobro = 2 * 5 + 3 * 4 + 3 * 5 + (tiempo - 10) * 2
        imprimirResultado.innerHTML = ('Debe pagar: $' + cobro);
    }

}
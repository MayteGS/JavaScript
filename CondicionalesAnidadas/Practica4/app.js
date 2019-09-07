let btnPresupuesto = document.getElementById('btnPresupuesto');
let imprimirResultado = document.getElementById('resultado');

let personas = document.getElementById('personas');

EventListener();

function EventListener() {
    btnPresupuesto.addEventListener('click', calcularPresupuesto);
}

function calcularPresupuesto() {
    console.log(personas.value);


    let resultado;
    resultado = 0;

    if (personas.value < 200) {
        imprimirResultado.innerHTML = `<h4>El costo por persona es de $95.00 </h4>`
        return;

    } else if (personas.value > 200 && personas.value <= 300) {
        imprimirResultado.innerHTML = `<h4>El costo por persona es de $85.00 </h4>`

    } else {
        imprimirResultado.innerHTML = `<h4>El costo por persona es de $75.00 </h4>`
    }


}
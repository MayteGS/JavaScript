btnCalcular.addEventListener('click', multiplicacion);

function multiplicacion() {
    let superficie = document.getElementById('superficie').value;
    let precio = document.getElementById('precio').value;

    superficie = Number(superficie);
    precio = Number(precio);

    let resultado = 0;

    resultado = superficie * precio;

    let imprimirResultado = document.getElementById('resultado');

    imprimirResultado.innerHTML = resultado;

}
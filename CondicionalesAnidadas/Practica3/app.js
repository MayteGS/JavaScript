let btnObtener = document.getElementById('btnObtener');
let imprimirResultado = document.getElementById('resultado');

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let num3 = document.getElementById('num3');

EventListener();

function EventListener() {
    btnObtener.addEventListener('click', obtenerPromedio);
}

function obtenerPromedio() {

    let resultado = Number(num1.value) + Number(num2.value) + Number(num3.value);

    //Esta opreracion es igual a escribir "resultado = resultado / 3"
    resultado /= 3;


    if (resultado >= 9) {
        imprimirResultado.innerHTML = `<h4>Aprobado tu calificacion es  ${resultado}</h4>`
    } else if (resultado < 9 && resultado >= 6) {
        imprimirResultado.innerHTML = `<h4>Regular tu calificacion es ${resultado}</h4>`

    } else {
        imprimirResultado.innerHTML = `<h4>Reprobado tu calificacion es ${resultado}</h4>`
    }

}
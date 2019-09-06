let inputNumber = document.getElementById('numero');

EventListener();

function EventListener() {
    inputNumber.addEventListener('keypress', calcularCifras);
    inputNumber.addEventListener('blur', calcularCifrasBlur);
}

function calcularCifrasBlur() {
    if (Number(inputNumber.value) <= 9) {
        imprimir.innerHTNL = `<h4> El numero tiene un digito</h4>`
        return
    }
    if (Number(inputNumber.value) <= 99) {
        imprimir.innerHTNL = `<h4> El numero tiene dos digitos</h4>`
        return
    }
    if (Number(inputNumber.value) <= 999) {
        imprimir.innerHTNL = `<h4> El numero tiene tres digitos</h4>`
        return
    }
    if (Number(inputNumber.value) < 10000) {
        imprimir.innerHTNL = `<h4> Error</h4>`
        return
    }

}




function calcularCifras(event) {

    if (event.key == 'Enter') {

        let imprimir = document.getElementById('resultado');

        if (Number(inputNumber.value) > 999) {
            //error text-danger
            imprimir.innerHTML = `<h4>Error</h4>`

        }
        if (Number(inputNumber.value) <= 999) {
            //3 cifras
            imprimir.innerHTML = `<h4> El numero tiene tres digitos</h4>`

        }
        if (Number(inputNumber.value) <= 99) {
            //2 cifras
            imprimir.innerHTML = `<h4> El numero tiene dos digitos</h4>`

        }
        if (Number(inputNumber.value) <= 9) {
            //1 cifra
            imprimir.innerHTML = `<h4> El numero tiene un digito</h4>`

        }
    }
}
let InputNumbers = document.getElementById('InputNumbers');

let PrintString = "";
let ArrayLetras = [];
FillArray();

EventListener();

function EventListener() {
    InputNumbers.addEventListener('change', GetLetter);
}

function GetLetter(event) {

    let value = Number(InputNumbers.value);

    if (value >= 0 && value < 26) {

        PrintString += ` <li class=list-group-item>${ArrayLetras[value]}</li>`

        document.getElementById('Print').innerHTML = PrintString;

    } else {
        swal.fire({
            type: 'error',
            title: 'Limite de rango',
            text: 'Favor de ingresar numeros entre 0 y 25'
        })
    }

    InputNumbers.value = "";

}

function FillArray() {
    for (let i = 0; i <= 25; i++) {
        ArrayLetras[i] = String.fromCharCode(i + 65);
    }
}
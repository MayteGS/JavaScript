let btnCalcular = document.getElementById('btnCalcular');
let btnInvertir = document.getElementById('btnInvertir');
let limite = document.getElementById('limite');
let nombre = document.getElementById('nombre');
let imprimir = document.getElementById('imprimir');
let imprimir2 = document.getElementById('imprimir2');
let arrayNom = [];
let arrayAux = [];
let aux = "";
let tam = true;
let contLetras = 0;
let resultado = "";
let resultado2 = "";
let lim = 0;
let lim2 = 0;
let x = 0;


EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', agregar);
    btnInvertir.addEventListener('click', invertir);
}

function agregar() {
    let nom = nombre.value;
    let lim = Number(limite.value);

    if (x != lim) {
        for (x; x < lim; x++) {
            arrayNom[x] = nom;
            resultado += `${arrayNom[x]} <br>`;
            imprimir.innerHTML = resultado;
            x++;
            return;
        }
    } else {
        Swal.fire({
            type: 'error',
            title: 'Exedio el numero de palabras...',
            text: 'favor de aumentar el numero de palabras a evaluar',
        })
    }
}

function invertir() {
    let lim = Number(limite.value);
    console.log(lim);

    lim2 = lim;
    let cont = 0;

    for (let i = 0; i < lim; i++) {

        arrayAux[i] = arrayNom[i];

    }

    for (let y = lim2 - 1; y >= 0; y--) {

        aux = arrayAux[y];
        arrayNom[cont] = aux;
        resultado2 += `${arrayNom[cont]} <br>`;
        imprimir2.innerHTML = resultado2;
        cont++;
        console.log(arrayAux);


    }

}
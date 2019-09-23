let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', FillArray);
}

/* =================================
    Inicia parte de aplicacion resuelta por medio de fuerza bruta  
================================= */

function FillArray() {

    let inputValue = document.getElementById('AgregarElemento');
    let ArrayPrimeNumbers = [];

    console.time('InicioFuerzaBruta');

    for (let x = 0; x < Number(inputValue.value); x++) {

        let NumberPrimeRandom = isPrime();

        if (NumberPrimeRandom === null) {
            x--
        } else {
            ArrayPrimeNumbers[x] = NumberPrimeRandom;
        }

    }
    console.timeEnd('InicioFuerzaBruta');

    console.log(ArrayPrimeNumbers);


    let maximo = 0;

    for (let x = 0; x < ArrayPrimeNumbers.length; x++) {

        if (maximo < ArrayPrimeNumbers[x]) {

            maximo = ArrayPrimeNumbers[x]

        }
    }

    console.log(maximo);





}

function isPrime() {

    let NumberRandom = Math.floor(Math.random() * 1000) + 1;

    for (let i = 2; i < NumberRandom; i++) {

        if (NumberRandom % i == 0) {
            return null;
        }
    }

    return NumberRandom;


}

/* =================================
    Termina Aplicacion Fuerza Bruta
================================= */

/* =================================
    Inicia aplicacion resuelta por paradigma dinamico
================================= */

// let ArrayNumberPrimeDinamyc = [];

// FillArrayDinamyc();

// function FillArrayDinamyc() {

//     let PrimeNumber = 0;

//     for (let i = o; i <= PrimeNumber; i++) {
//         PrimeNumber++;

//         if (PrimeNumber % i == 0) {
//             ArrayNumberPrimeDinamyc.push(PrimeNumber);
//         }


//     }

// }
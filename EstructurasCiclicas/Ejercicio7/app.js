let btnCalcula = document.getElementById('calcular');
let imprime = document.getElementById('resultado');

EventListener();

function EventListener() {
    btnCalcula.addEventListener('click', calcular);
}

function calcular() {
    let numero = Number(document.getElementById('numero').value);
    let texto = `${numero} `

    do {
        if ((numero % 2) == 0) {
            numero /= 2;
            texto += `${numero} `;


        } else {
            numero *= 3;
            numero++;
            texto += `${numero} `;

        }
    } while (numero != 1);

    imprime.innerHTML = texto;
}
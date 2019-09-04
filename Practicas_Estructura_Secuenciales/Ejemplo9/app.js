let btnCalcular = document.getElementById('btnCalcular');

addEventListener();

function addEventListener() {

    btnCalcular.addEventListener('click', distancia);
}

function distancia() {
    let x1 = Number(document.getElementById('punto1').value);
    let y1 = Number(document.getElementById('punto2').value);
    let x2 = Number(document.getElementById('punto3').value);
    let y2 = Number(document.getElementById('punto4').value);

    let distancia = 0;
    distancia = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));

    let imprimirResultago = document.getElementById('resultado');
    imprimirResultago.innerHTML = distancia;
}
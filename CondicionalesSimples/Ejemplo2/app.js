let btnNumMayor = document.getElementById('btnNumMayor');

EventListener();

function EventListener() {
    btnNumMayor.addEventListener('click');
}

function numeroMayor() {
    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let imprimirResultado = document.getElementById('NumeroMayor');
}
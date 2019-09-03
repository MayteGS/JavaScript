let btnVerificarStatus = document.getElementById('btnVerificarStatus');

EventListener();


function EventListener() {
    btnVerificarStatus.addEventListener('click', verificarEstatus);
}

function verificarEstatus() {
    let calificacion = Number(document.getElementById('calificacion').value);
    let imprimirResultado = document.getElementById('imprimirCalificacion');


    if (calificacion > 8) {
        imprimirResultado.innerHTML = 'Aprobado';
    } else {
        let audio = document.getElementById('audioRamon');

        audio.play();


        imprimirResultado.innerHTML = 'Reprobado';
    }
}
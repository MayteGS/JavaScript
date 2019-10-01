let btnAFavor = document.getElementById('btnAFavor');
let btnEnContra = document.getElementById('btnEnContra');
let btnAbstencion = document.getElementById('btnAbstencion');

let voto = new Voto();

EventListener();

function EventListener() {
    btnAFavor.addEventListener('click', VotosAFavor);
    btnEnContra.addEventListener('click', VotosEnContra);
    btnAbstencion.addEventListener('click', VotosAbstencion);
}

function VotosAFavor() {
    voto.ContarVotosAFavor();

}

function VotosEnContra() {
    voto.ContarVotosEnContra();

}

function VotosAbstencion() {
    voto.ContarVotosAbstencion();

}
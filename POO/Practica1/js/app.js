let BtnCalcular = document.getElementById('BtnCalcular');

EventListener();


function EventListener() {
    BtnCalcular.addEventListener('click', EjecutarClick)
}

async function EjecutarClick() {

    let Velocidadinicial = Number(document.getElementById('VelocidadinicialProyectil').value);
    let GradosProyectil = Number(document.getElementById('GradosProyectil').value);

    let proyectil = new Proyectil(Velocidadinicial, GradosProyectil);
    // console.log(proyectil.velocidadInicial)
    // console.log(proyectil.angulo)

    for (let tiempo = 0; tiempo <= 9; tiempo += 0.1) {

        let posicionX = proyectil.CalcularVelocidadX(tiempo);
        let posicionY = proyectil.CalcularVelocidadY(tiempo);

        if (posicionX >= 0 && posicionY >= 0 && posicionX <= 100 && posicionY <= 100) {

            // proyectil.CrearSpan(proyectil.CalcularVelocidadX(tiempo), proyectil.CalcularVelocidadY(tiempo))
            // proyectil.CrearSpan(posicionX, posicionY);
            await stop(proyectil, posicionX, posicionY)
        }

    }
}

function stop(proyectil, posicionX, posicionY) {
    return new Promise((res, rej) => {
        setTimeout(() => res(proyectil.CrearSpan(posicionX, posicionY)), 200)
    })
}
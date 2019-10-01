class Proyectil {

    /* =================================
        Propiedades de objetos
    ================================= */

    velocidadInicial = 0;
    Angulo = 0;

    constructor(velocidadInicial, Angulo) {
        // console.log('Ya se instancio la clase');
        this.velocidadInicial = velocidadInicial;
        this.Angulo = Angulo;

    }

    /* =================================
        Metodos de objetos
    ================================= */

    CalcularVelocidadX(t) {
        let VelocidadX = 0;

        VelocidadX = (this.velocidadInicial * Math.cos(this.Angulo * (Math.PI / 180))) * t;
        return VelocidadX;
    }

    CalcularVelocidadY(t) {

        let VelocidadY = (this.velocidadInicial * Math.sin(this.Angulo * (Math.PI / 180)));

        VelocidadY = VelocidadY * t - 0.5 * 9.8 * Math.pow(t, 2);


        return VelocidadY;
    }

    CrearSpan(PosicionX, PosicionY) {
        let spanCreado = document.createElement('span');
        spanCreado.style.left = `${PosicionX}%`;
        spanCreado.style.bottom = `${PosicionY}%`;

        document.getElementById('contenedor').appendChild(spanCreado);
    }
}
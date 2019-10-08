class Prize {

    /*------------------
       Propiedades de Objetos
     ------------------*/
    positionX = 0;
    positionY = 0;

    constructor() {
        this.calculateSizeMargin()
    }

    /*------------------
      Metodos de objetos
    ------------------*/

    PositionX(positionX) {
        this.positionX = positionX;
    }

    PositionY(positionY) {
        this.positionY = positionY;
    }

    calculateSizeMargin() {
        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));
        let marginleft = marginContainer.getPropertyValue('margin-left');
        this.sizeMargin = marginleft.substring(0, marginleft.length - 2);

    }

    createElementImg() {

        let marginContainer = window.getComputedStyle(document.getElementById('contenedor'));
        let marginleft = marginContainer.getPropertyValue('margin-left');
        marginContainer = marginleft.substring(0, marginleft.length - 2);

        let ImageCreate = document.createElement('img');

        ImageCreate.setAttribute('src', './Img/Premio.png');

        ImageCreate.style.width = "50px";

        console.log(this.sizeMargin);

        let posX = (this.posicionX - this.sizeMargin) - 25;
        let posY = this.posicionY - 25;

        ImageCreate.style.left = `${posX}px`;
        ImageCreate.style.top = `${posY}px`;

        document.getElementById('contenedor').appendChild(ImageCreate);

        return { posX, posY }

    }
}
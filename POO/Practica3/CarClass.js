class Car {
    posicionX = 0;
    posicionY = 0;


    constructor(posicionX, posicionY) {
        this.posicionX = posicionX;
        this.posicionY = posicionY;

    }

    moveRight(img) {
        // console.log(img)
        img.src = "./Img/Carro1.png";

        if (this.posicionX <= 90 && this.posicionX >= 0) {
            console.log("Entre");
            img.style.left = (this.posicionX++) + "%";
        }

    }

    moveLeft(img) {

        img.src = "./Img/Carro3.png";
        if (this.posicionX <= 90 && this.posicionX >= 0) {
            img.style.left = `${this.posicionX--}%`;
        }
    }

    moveTop(img) {
        img.src = "./Img/Carro4.png";
        img.style.height = "10%";
        if (this.posicionY <= 90 && this.posicionY >= 0) {
            img.style.top = `${this.posicionY--}%`;
        }
    }

    moveBottom(img) {
        img.src = "./Img/Carro2.png";
        img.style.height = "10%";
        if (this.posicionY <= 90 && this.posicionY >= 0) {
            img.style.top = `${this.posicionY++}%`;
        }
    }

    currentPosition(arrayPositionPrize) {

        let PositionCarX = Image.x;
        let PositionCarY = Image.y;

        for (let i = 0; i <= arrayPositionPrize.lenght; i++) {
            let PositionXPrize = arrayPositionPrize[i].posX;
            let PositionYPrize = arrayPositionPrize[i].posY;

            console.log(`Cordenadas carrito`, PositionCarX, PositionCarY);
            console.log(`Cordenadas imagen`, PositionXPrize, PositionYPrize);


            if (PositionCarX >= PositionXPrize - 25 && PositionCarX <= PositionXPrize + 25 && PositionCarY >= PositionYPrize - 25 && PositionCarY <= PositionYPrize + 25) {
                return true;

            }
        }
        return false;

    }

}
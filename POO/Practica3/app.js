let imgCarro = document.getElementById('Car');

let arrayPositionPrize = [];

EventListener();

function EventListener() {
    imgCarro = addEventListener('keydown', MoveCar);
    document.getElementById('contenedor').addEventListener('click', SetPrize);
}

let car = new Car(0, 0);

function MoveCar(event) {

    let image = document.getElementById('Car');

    switch (event.key) {

        case 'ArrowRight':
            car.moveRight(image);
            break;

        case 'ArrowLeft':
            car.moveLeft(image);
            break;

        case 'ArrowUp':
            car.moveTop(image);
            break;

        case 'ArrowDown':
            car.moveBottom(image);
            break;

    }

    if (arrayPositionPrize.length > 0) {

        let resultado = car.currentPosition(arrayPositionPrize, image)

        console.log(resultado);

    }
}

function SetPrize(event) {
    let prize = new Prize();


    prize.PositionX(event.X);
    prize.PositionY(event.Y);

    arrayPositionPrize.push(prize.createElementImg());

    console.log(arrayPositionPrize);


}
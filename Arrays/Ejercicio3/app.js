let btnCalculate = document.getElementById('btnCalculate');

EventListener();

function EventListener() {
    btnCalculate.addEventListener('click', fillArray);
}

function fillArray() {

    let arrayNumber = [0];
    let size = Number(document.getElementById('tamañoArray').value);

    for (let x = 0; x < size; x++) {
        arrayNumber[x] = Math.floor(Math.random() * 100) + 1;
        document.getElementById('allTheNumbers').innerHTML += `<li class='list-group-item'>${arrayNumber[x]}</li>`;

        if (arrayNumber[x] % 2 == 0) {
            document.getElementById('pairNumbers').innerHTML += `<li class='list-group-item'>${arrayNumber[x]}</li>`;
        }
    }
}
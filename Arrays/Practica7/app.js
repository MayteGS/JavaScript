let btnCalcular = document.getElementById('btnCalcular');

EventListener();

function EventListener() {
    btnCalcular.addEventListener('click', RellenarArrays);
}

function RellenarArrays() {
    let size = Number(document.getElementById('tamañoArray').value);
    let multiplo = Number(document.getElementById('funcionArray').value);
    let multiplo2 = 1;
    let arrayMultiplo = [];
    let texto = "";

    for (let i = 0; i < size; i++) {
        arrayMultiplo[i] = multiplo * multiplo2;
        multiplo2++;
        texto += `<li class="list-group-item">${arrayMultiplo[i]}</li>`
    }

    document.getElementById('listafuncion').innerHTML = texto;

}
SumaCantidades();

function SumaCantidades() {

    let y = 0;

    //Estructura ciclica la cual se compone de un (variable inicializada, condicion logica, incremetador), la cual nos ayuda a la ejecucion repetitiva de un bloque de codigo
    for (let x = 1; x <= 10; x++) {

        // y = y + x; esto es igual a y+=x
        y += x

        //Se crea el elemento li por medio del metodo CreateElement 
        let newli = document.createElement('li');
        //Se asigna el atributo id y class en la variable newli 
        newli.setAttribute("id", `listaN${x}`);
        newli.setAttribute("class", "list-group-item")

        //Se crea el nodo de texto por medio del metodo CreateTextNode
        let newContent = document.createTextNode(y);

        //Se inserta un hijo por medio del metodo appendChild a la variable newli
        newli.appendChild(newContent);

        let listaDesordenada = document.getElementById('listaNumerica');
        listaDesordenada.appendChild(newli);

    }



}
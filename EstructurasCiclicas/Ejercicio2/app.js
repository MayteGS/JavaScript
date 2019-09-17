numerosPares();


function numerosPares() {


    for (let x = 1; x <= 100; x++) {


        let newli = document.createElement('li');


        newli.setAttribute('id', `numero${x}`);
        newli.setAttribute('class', 'list-group-item');


        let liTxt = document.createTextNode(x);
        newli.appendChild(liTxt);


        let listaNumerosPares = document.getElementById('listaNumero');


        if (x % 2 == 0) {
            listaNumerosPares.appendChild(newli);
        }
    }
}
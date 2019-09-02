 let btnCalcular = document.getElementById('btnCalcular');
 let btnCalcular2 = document.getElementById('btnCalcular2');

 EventListener();

 function EventListener() {

     btnCalcular.addEventListener('click', obtenerArea);
     btnCalcular2.addEventListener('click', obtenerAreaSimplificada);
 }

 function obtenerAreaSimplificada() {
     console.time('obtenerAreaSimplificada');
     let radio = Number(document.getElementById('radioCirculo').value);
     let resultado = 0;
     //Se invoca el objeto Math y se utiliza su propiedad Pi (El cual nos manda el valor de dicha contante)y su método pow (eleva un elemento numerico hacia la potencia que se solicita)
     resultado = Math.PI * Math.pow(radio, 2);

     let resultadoImprimir = document.getElementById('resultado');
     resultadoImprimir.innerHTML = resultado;

     console.timeEnd('obtenerAreaSimplificada');

 }

 function obtenerArea() {
     console.time('obtenerArea');
     //Se declara un elemento constante el cual funcionara para obtener el calculo de PI
     const pi = 3.1416;

     let radio = document.getElementById('radioCirculo').value;

     let resultado = 0;

     resultado = pi * (radio * radio);

     let resultadoImprimir = document.getElementById('resultado');

     resultadoImprimir.innerHTML = resultado;

     console.timeEnd('obtenerArea');
 }
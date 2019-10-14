const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarrito = document.getElementById('vaciar-carrito');

const objectCar = new Carrito();

EventListener();

function EventListener() {
    cursos.addEventListener('click', GetCourse);
    carrito.addEventListener('click', EliminarCourse);
    document.addEventListener('DOMContentLoaded', MostrasCursosCarrito);
    vaciarCarrito.addEventListener('click', VaciarCarritoCursos);
}

function MostrasCursosCarrito() {
    objectCar.ShowCoursesLSCar();
}

function GetCourse(event) {

    event.preventDefault();

    if (event.target.classList.contains('agregar-carrito')) {
        let Course = event.target.parentElement.parentElement;
        objectCar.readDataCourse(Course, listaCursos);

        if (objectCar.cursoRepetido) {
            Swal.fire({
                type: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            });

        }

    }


}

function EliminarCourse(event) {
    objectCar.EliminarCursoCarrito(event);
}

function VaciarCarritoCursos() {
    objectCar.vaciarCarrito(listaCursos);
}
class Carrito {

    constructor() {

        this.LS = new LocalStorage();
    }

    readDataCourse(curso, listaCursos) {

        const dataCourse = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id')
        }

        this.addCourseCard(dataCourse, listaCursos);
    }

    addCourseCard(dataCourse, listaCursos) {
        const row = document.createElement('tr');

        row.innerHTML = ` 
        <td><img src="${dataCourse.imagen}" width=100></td>
        <td>${dataCourse.titulo}</td>
        <td>${dataCourse.precio}</td>
        <td><a href="#" class="borrar-curso" data-id="${dataCourse.id}">X</td>
        `
        listaCursos.appendChild(row);

        this.LS.SaveCourseLocalStorage(dataCourse);
    }

    EliminarCursoCarrito(event) {

        event.preventDefault();

        let curso, cursoId;

        if (event.target.classList.contains('borrar-curso')) {

            curso = event.target.parentElement.parentElement;
            cursoId = curso.querySelector('a').getAttribute('data-id');
            console.log(cursoId);
            curso.remove();
            this.LS.eliminarCursoLS(cursoId);
        }
    }

    ShowCoursesLSCar() {

        let CoursesLS = this.LS.GetCoursesLocalStorage();

        CoursesLS.forEach(function(curso) {

            const row = document.createElement('tr');

            row.innerHTML = `
            <td><img src="${curso.imagen}" width=100></td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td><a href="#" class="borrar-curso" data-id="${curso.id}">X</td>
            `

            listaCursos.appendChild(row);
        });
    }

    vaciarCarrito(listaCursos) {
        //Forma lenta
        // listaCursos.innerHTML = "";

        //Forma rapida
        while (listaCursos.firstChild) {
            listaCursos.removeChild(listaCursos.firstChild)
        }
        this.LS.EliminarLocalStorage();
    }

    cursoRepetido() {

        if () {

        } else {

        }
    }
}
class LocalStorage {

    constructor() {}

    SaveCourseLocalStorage(curso) {

        let ArrayCourses = this.GetCoursesLocalStorage();
        ArrayCourses.push(curso);
        localStorage.setItem('courses', JSON.stringify(ArrayCourses));
    }

    GetCoursesLocalStorage() {

        let cursosLS;

        if (localStorage.getItem('courses') === null) {
            cursosLS = [];
        } else {
            cursosLS = JSON.parse(localStorage.getItem('courses'));
        }
        return cursosLS;
    }

    eliminarCursoLS(cursoid) {
        let cursosLS;

        cursosLS = this.GetCoursesLocalStorage();

        cursosLS.forEach(function(cursoLS, index) {
            if (cursoLS.id === cursoid) {
                cursosLS.splice(index, 1)
            }
        });

        localStorage.setItem('courses', JSON.stringify(cursosLS));

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Se a borrado el curso exitosamente'
        })
    }

    EliminarLocalStorage() {
        localStorage.clear();

        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000
        })

        Toast.fire({
            type: 'success',
            title: 'Se a vaciado el carrito exitosamente'
        })

    }
}
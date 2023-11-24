
/*---------------------------------- Entrega final ----------------------------------*/

//SIGUIENDO CON LA TEMATICA DE ALUMNOS COMO PREMISA VAMOS A ARMAR UN CODIGO QUE INDIQUE 4 OPCIONES,
/*
1 BUSCAR ALUMNO
2 FILTRAR ALUMNOS
3 ELIMINAR ALUMNO
4 AGREGAR ALUMNO
*/


//definimos en variables los queryselector
const buscarForm = document.querySelector("#buscar-form");
const opcionInput = document.querySelector("#opcion-input");
const datoInput = document.querySelector("#dato-input");
const objetoEncontrado = document.querySelector("#tbody-buscar");
const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
const descriptionUso = document.querySelector("#button-info");
const contenedorInfo = document.querySelector("#contenedor-info");

//Creando un fetch a partir de un JSON local usando async y await--------------
const ruta = "./scripts/listaAlumnos.json";
listaAlumnosFlecha(ruta);

if (localStorage.getItem("listaAlumnos") != null) {
    summonLista(alumnosEnLs);
}
//funcion que crea en el page informacion que puede ayudar a entender el sistema al usuario
descriptionUso.addEventListener("click", clickInfoFind);

buscarForm.addEventListener("submit", (e) => {
    e.preventDefault();

    if (opcionInput.value == 1) {// se ejecuta el codigo si el valor del input es 1
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos")); //se optiene valor del storage y se parsea
        const printAlumno = alumnosEnLs.find((alumno) => alumno.nombre === datoInput.value.toLowerCase().trim()); //se guarda en variable la comparacion si existe
        if (printAlumno == null) {//si es null se ejecuta mensaje de error
            Swal.fire({
                icon: 'warning',
                title: 'Atención...',
                text: 'El alumno que estas buscando no existe o fue eliminado!',
                showConfirmButton: false,
                timer: 3000
            });
            buscarForm.reset();
        }
        else { //si existe comparacion se ejecuta el codigo
            borrarLista();
            importDatos(printAlumno);// llamado a la funcion
        }
    }

    if (opcionInput.value == 2) {// se ejecuta el codigo si el valor del input es 2
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.apellido === datoInput.value.toLowerCase().trim());
        if (printAlumno == null) {
            Swal.fire({
                icon: 'warning',
                title: 'Atención...',
                text: 'El alumno que estas buscando no existe o fue eliminado!',
                showConfirmButton: false,
                timer: 3000
            });
            buscarForm.reset();
        }
        else {
            borrarLista();
            importDatos(printAlumno);// llamado a la funcion
        }
    }

    if (opcionInput.value == 3) { // se ejecuta el codigo si el valor del input es 3
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.legajo == datoInput.value);
        if (printAlumno == null) {
            Swal.fire({
                icon: 'warning',
                title: 'Atención...',
                text: 'El alumno que estas buscando no existe o fue eliminado!',
                showConfirmButton: false,
                timer: 3000
            });
            buscarForm.reset();
        }
        else {
            borrarLista();
            importDatos(printAlumno);// llamado a la funcion
        }
    }

    if (opcionInput.value == 4) { // se ejecuta el codigo si el valor del input es 4
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.edad == datoInput.value);
        if (printAlumno == null) {
            Swal.fire({
                icon: 'warning',
                title: 'Atención...',
                text: 'El alumno que estas buscando no existe o fue eliminado!',
                showConfirmButton: false,
                timer: 3000
            });
            buscarForm.reset();
        }
        else {
            borrarLista();
            importDatos(printAlumno);// llamado a la funcion
        }
    }
});



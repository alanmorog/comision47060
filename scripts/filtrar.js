
/*---------------------------------- PRE ENTREGA 3 ----------------------------------*/

//SIGUIENDO CON LA TEMATICA DE ALUMNOS COMO PREMISA VAMOS A ARMAR UN CODIGO QUE INDIQUE 4 OPCIONES,
/*
1 BUSCAR ALUMNO
2 FILTRAR ALUMNOS
3 ELIMINAR ALUMNO
4 AGREGAR ALUMNO
*/

//PARA ESO PREVIAMENTE SE ARMARA UNA LISTA DE ALUMNOS AGREGADOS


//definimos en variables los queryselector
const buscarForm = document.querySelector("#buscar-form");
const opcionInput = document.querySelector("#opcion-input");
const datoInput = document.querySelector("#dato-input");
const objetoEncontrado = document.querySelector("#tbody-buscar");
const descriptionUso = document.querySelector("#button-info");
const contenedorInfo = document.querySelector("#contenedor-info");
const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));

//Creando un fetch a partir de un JSON local usando async y await--------------
const ruta = "../scripts/listaAlumnos.json";
listaAlumnosFlecha(ruta);

if (localStorage.getItem("listaAlumnos") != null) {
    summonLista(alumnosEnLs);
}

//funcion que crea en el page informacion que puede ayudar a entender el sistema al usuario
descriptionUso.addEventListener("click", clickInfoFilter);


buscarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    borrarLista();
    const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));

    printAlumno = alumnosEnLs.filter((alumno) => alumno.nombre === datoInput.value.toLowerCase().trim())
    if (printAlumno.length === 0) {
        printAlumno = alumnosEnLs.filter((alumno) => alumno.apellido === datoInput.value.toLowerCase().trim())
        if (printAlumno.length === 0) {
            printAlumno = alumnosEnLs.filter((alumno) => alumno.legajo == datoInput.value.toLowerCase().trim())
            if (printAlumno.length === 0) {
                printAlumno = alumnosEnLs.filter((alumno) => alumno.edad == datoInput.value.toLowerCase().trim())
                if (printAlumno.length === 0) {
                    Swal.fire({
                        icon: 'warning',
                        title: 'Atención...',
                        text: 'El alumno que estas buscando no existe o fue eliminado!',
                        showConfirmButton: false,
                        timer: 3000
                    });
                    buscarForm.reset();
                }
            }
        }
        
    }
    printAlumno.forEach(alumno => {
        importDatos(alumno);
    });
});

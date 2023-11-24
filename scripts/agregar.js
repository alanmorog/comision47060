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
const legajoInput = document.querySelector("#legajo-input");

const descriptionUso = document.querySelector("#button-info");
const contenedorInfo = document.querySelector("#contenedor-info");

const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));


//Creando un fetch a partir de un JSON local usando async y await--------------
const ruta = "../scripts/listaAlumnos.json";
listaAlumnosFlecha(ruta);

//funcion que crea en el page informacion que puede ayudar a entender el sistema al usuario
descriptionUso.addEventListener("click", clickInfoAdd);





if (localStorage.getItem("listaAlumnos") != null) {
    summonLista(alumnosEnLs);
}


if (localStorage.getItem("listaAlumnos") != null) {
    buscarForm.addEventListener("submit", (e) => {
        e.preventDefault();
        if (legajoInput.value === '') {
            e.preventDefault();
            Swal.fire({
                icon: 'error',
                title: 'Atención...',
                text: 'Se debe agregar un legajo para continuar!',
                showConfirmButton: false,
                timer: 3000
            });
        } else {
            const nombre = document.querySelector("#nombre-input").value.toLowerCase().trim();
            const apellido = document.querySelector("#apellido-input").value.toLowerCase().trim();
            const legajoString = document.querySelector("#legajo-input").value.toLowerCase().trim();
            const edadString = document.querySelector("#edad-input").value.toLowerCase().trim();
            let legajo = Number(legajoString);
            let edad = Number(edadString);
            let nuevoAlumno = { nombre, apellido, legajo, edad };
            alumnosEnLs.push(nuevoAlumno);
            const listaAlumnosJSON = JSON.stringify(alumnosEnLs);
            localStorage.setItem("listaAlumnos", listaAlumnosJSON.toLowerCase().trim());
            buscarForm.reset();
            Toastify({
                text: "Se Agregó a: " + nuevoAlumno.nombre.replace(/"/g, '') + " " + nuevoAlumno.apellido.replace(/"/g, ''),
                duration: 3000,
                className: "info",
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to bottom, #42ab49, #77dd77)",
                }
            }).showToast();
            let limpiarLista = objetoEncontrado.querySelectorAll("tr");
            limpiarLista.forEach(function (limpiarLista) {
                objetoEncontrado.removeChild(limpiarLista);
            })
            summonLista(alumnosEnLs);
        }

    });
}


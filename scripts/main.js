
/*---------------------------------- Entrega final ----------------------------------*/

//SIGUIENDO CON LA TEMATICA DE ALUMNOS COMO PREMISA VAMOS A ARMAR UN CODIGO QUE INDIQUE 4 OPCIONES,
/*
1 BUSCAR ALUMNO
2 FILTRAR ALUMNOS
3 ELIMINAR ALUMNO
4 AGREGAR ALUMNO
*/

let valor;
let findAlumno;
let opcionAlumno;

//definimos en variables los queryselector
const buscarForm = document.querySelector("#buscar-form");
const opcionInput = document.querySelector("#opcion-input");
const datoInput = document.querySelector("#dato-input");
const objetoEncontrado = document.querySelector("#tbody-buscar");

const descriptionUso = document.querySelector("#button-info");
const contenedorInfo = document.querySelector("#contenedor-info");









//Creando un fetch a partir de un JSON local usando async y await--------------

const listaAlumnosFlecha = async () => {
    try { //intenta cargar los datos que tiene guardado el archivo JSON y si no puede salta un cartel de error 
        const listaAlumnosFetch = await fetch('../classes/listaAlumnos.json');
        const listaAlumnos = await listaAlumnosFetch.json();
        if (localStorage.getItem("listaAlumnos") == null) {
            const listaAlumnosJSON = JSON.stringify(listaAlumnos);
            localStorage.setItem("listaAlumnos", listaAlumnosJSON.toLowerCase().trim());
        }
    } catch {
        Swal.fire({
            icon: 'error',
            title: 'Atención...',
            text: 'Hubo un error al cargar la lista de alumnos!',
            showConfirmButton: false,
            timer: 3000
        });
    }
}

listaAlumnosFlecha();




//funcion que crea en el page informacion que puede ayudar a entender el sistema al usuario

function clickInfo() {
    const parrafoData1 = document.createElement("p");
    parrafoData1.innerHTML = "En este apartado podremos buscar un alumno seleccionando en primera medida entre las opciones 1/2/3/4";

    const parrafoData2 = document.createElement("p");
    parrafoData2.innerHTML = "1. para nombre, 2. para apellido, 3. para legajo, 4. para edad.";

    const parrafoData3 = document.createElement("p");
    parrafoData3.innerHTML = "al colocar una opcion y un dato a buscar, se mostrara el primer resultado que coincida si existe, si no existe aparecera un sweet alert advirtiendo que el alumno no existe o fue borrado";
    contenedorInfo.appendChild(parrafoData1);
    contenedorInfo.appendChild(parrafoData2);
    contenedorInfo.appendChild(parrafoData3);
    descriptionUso.removeEventListener("click", clickInfo);
};

descriptionUso.addEventListener("click", clickInfo);






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
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(printAlumno.nombre);
            nombreLS.innerText = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(printAlumno.apellido);
            apellidoLS.innerText = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(printAlumno.legajo);
            legajoLS.innerText = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(printAlumno.edad);
            edadLS.innerText = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
            Toastify({
                text: "Se Encontró a: " + printNombre.replace(/"/g, '') + " " + printApellido.replace(/"/g, ''),
                duration: 3000,
                className: "info",
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to bottom, #42ab49, #77dd77)",
                }
            }).showToast();
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
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(printAlumno.nombre);
            nombreLS.innerText = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(printAlumno.apellido);
            apellidoLS.innerText = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(printAlumno.legajo);
            legajoLS.innerText = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(printAlumno.edad);
            edadLS.innerText = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
            Toastify({
                text: "Se Encontró a: " + printNombre.replace(/"/g, '') + " " + printApellido.replace(/"/g, ''),
                duration: 3000,
                className: "info",
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to bottom, #42ab49, #77dd77)",
                }
            }).showToast();
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
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(printAlumno.nombre);
            nombreLS.innerText = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(printAlumno.apellido);
            apellidoLS.innerText = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(printAlumno.legajo);
            legajoLS.innerText = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(printAlumno.edad);
            edadLS.innerText = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
            Toastify({
                text: "Se Encontró a: " + printNombre.replace(/"/g, '') + " " + printApellido.replace(/"/g, ''),
                duration: 3000,
                className: "info",
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to bottom, #42ab49, #77dd77)",
                }
            }).showToast();
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
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(printAlumno.nombre);
            nombreLS.innerText = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(printAlumno.apellido);
            apellidoLS.innerText = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(printAlumno.legajo);
            legajoLS.innerText = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(printAlumno.edad);
            edadLS.innerText = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
            Toastify({
                text: "Se Encontró a: " + printNombre.replace(/"/g, '') + " " + printApellido.replace(/"/g, ''),
                duration: 3000,
                className: "info",
                position: "right", // `left`, `center` or `right`
                style: {
                    background: "linear-gradient(to bottom, #42ab49, #77dd77)",
                }
            }).showToast();
        }
    }
})




/*---------------------------------- PRE ENTREGA 3 ----------------------------------*/

//SIGUIENDO CON LA TEMATICA DE ALUMNOS COMO PREMISA VAMOS A ARMAR UN CODIGO QUE INDIQUE 4 OPCIONES,
/*
1 BUSCAR ALUMNO
2 FILTRAR ALUMNOS
3 ELIMINAR ALUMNO
4 AGREGAR ALUMNO
*/

//PARA ESO PREVIAMENTE SE ARMARA UNA LISTA DE ALUMNOS AGREGADOS

let valor;
let findAlumno;
let opcionAlumno;

//agregar la lista al Local Storage

const buscarForm = document.querySelector("#buscar-form");
const opcionInput = document.querySelector("#opcion-input");
const datoInput = document.querySelector("#dato-input");
const objetoEncontrado = document.querySelector("#tbody-buscar");






buscarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (opcionInput.value == 1) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.filter((alumno) => alumno.nombre.includes(datoInput.value.toLowerCase().trim())); //SE BUSCA ALUMNO POR NOMBRE
        printAlumno.forEach(alumno => {
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(alumno.nombre);
            nombreLS.innerHTML = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(alumno.apellido);
            apellidoLS.innerHTML = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(alumno.legajo);
            legajoLS.innerHTML = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(alumno.edad);
            edadLS.innerHTML = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
        });
    }
    if (opcionInput.value == 2) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.filter((alumno) => alumno.apellido.includes(datoInput.value.toLowerCase().trim())); //SE BUSCA ALUMNO POR NOMBRE
        console.log(printAlumno); // SE IMPRIME RESULTADO

        printAlumno.forEach(alumno => {
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(alumno.nombre);
            nombreLS.innerHTML = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(alumno.apellido);
            apellidoLS.innerHTML = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(alumno.legajo);
            legajoLS.innerHTML = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(alumno.edad);
            edadLS.innerHTML = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
        });
    }
    if (opcionInput.value == 3) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.filter((alumno) => alumno.legajo == datoInput.value.toLowerCase().trim()); //SE BUSCA ALUMNO POR NOMBRE
        console.log(printAlumno); // SE IMPRIME RESULTADO

        printAlumno.forEach(alumno => {
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(alumno.nombre);
            nombreLS.innerHTML = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(alumno.apellido);
            apellidoLS.innerHTML = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(alumno.legajo);
            legajoLS.innerHTML = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(alumno.edad);
            edadLS.innerHTML = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
        });
    }
    if (opcionInput.value == 4) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.filter((alumno) => alumno.edad == datoInput.value.toLowerCase().trim()); //SE BUSCA ALUMNO POR NOMBRE
        console.log(printAlumno); // SE IMPRIME RESULTADO

        printAlumno.forEach(alumno => {
            const teErre = document.createElement("tr");
            objetoEncontrado.appendChild(teErre);
            const nombreLS = document.createElement("th");
            const printNombre = JSON.stringify(alumno.nombre);
            nombreLS.innerHTML = printNombre;
            teErre.appendChild(nombreLS);

            const apellidoLS = document.createElement("th");
            const printApellido = JSON.stringify(alumno.apellido);
            apellidoLS.innerHTML = printApellido;
            teErre.appendChild(apellidoLS);

            const legajoLS = document.createElement("th");
            const printLegajo = JSON.stringify(alumno.legajo);
            legajoLS.innerHTML = printLegajo;
            teErre.appendChild(legajoLS);

            const edadLS = document.createElement("th");
            const printEdad = JSON.stringify(alumno.edad);
            edadLS.innerHTML = printEdad;
            teErre.appendChild(edadLS);
            buscarForm.reset();
        });
    }
})



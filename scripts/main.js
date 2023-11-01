
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
        const printAlumno = alumnosEnLs.find((alumno) => alumno.nombre === datoInput.value.toLowerCase().trim()); //SE BUSCA ALUMNO POR NOMBRE

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
    }
    if (opcionInput.value == 2) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.apellido === datoInput.value); //SE BUSCA ALUMNO POR NOMBRE

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
    }
    if (opcionInput.value == 3) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.legajo == datoInput.value); //SE BUSCA ALUMNO POR NOMBRE

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
    }
    if (opcionInput.value == 4) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.edad == datoInput.value); //SE BUSCA ALUMNO POR NOMBRE
        console.log(printAlumno); // SE IMPRIME RESULTADO

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
    }
})

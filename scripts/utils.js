const listaAlumnosFlecha = async () => {
    try { //intenta cargar los datos que tiene guardado el archivo JSON y si no puede salta un cartel de error 
        const listaAlumnosFetch = await fetch("../scripts/listaAlumnos.json");
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

//funcion informacion sobre la pagina buscar

function clickInfoFind() {
    const parrafoData1 = document.createElement("p");
    parrafoData1.innerHTML = "En este apartado podremos buscar un alumno seleccionando en primera medida entre las opciones 1/2/3/4";

    const parrafoData2 = document.createElement("p");
    parrafoData2.innerHTML = "1. para nombre, 2. para apellido, 3. para legajo, 4. para edad.";

    const parrafoData3 = document.createElement("p");
    parrafoData3.innerHTML = "al colocar una opcion y un dato a buscar, se mostrara el primer resultado que coincida si existe, si no existe aparecera un sweet alert advirtiendo que el alumno no existe o fue borrado";
    contenedorInfo.appendChild(parrafoData1);
    contenedorInfo.appendChild(parrafoData2);
    contenedorInfo.appendChild(parrafoData3);
    descriptionUso.removeEventListener("click", clickInfoFind);
};



//funcion informacion sobre la pagina filtrar
function clickInfoFilter() {
        const parrafoData1 = document.createElement("p");
        parrafoData1.innerHTML = "En este apartado podremos filtrar uno o mas alumnos seleccionando";
    
        const parrafoData3 = document.createElement("p");
        parrafoData3.innerHTML = "al colocar una opcion y un dato a filtrar, se mostrará todos los resultado que coincidan si existen, si no existen aparecerá un sweet alert advirtiendo que el alumno no existe o fue borrado";
        contenedorInfo.appendChild(parrafoData1);
        contenedorInfo.appendChild(parrafoData3);
        descriptionUso.removeEventListener("click", clickInfoFilter);
};

//funcion informacion sobre la pagina borrar
function clickInfoDelete() {
    const parrafoData1 = document.createElement("p");
    parrafoData1.innerHTML = "En este apartado podremos eliminar un alumno";

    const parrafoData2 = document.createElement("p");
    parrafoData2.innerHTML = "debajo encontraremos la tabla en donde podremos observar todos los alumnos para seleccionar cual eliminar";

    const parrafoData3 = document.createElement("p");
    parrafoData3.innerHTML = "el metodo a eliminar consiste en encontrar al alumno que se quiere eliminar de la lista y acto seguido colocar su legajo para eliminarlo, solo funcionará con el legajo, si se coloca otra cosa que no sea el legajo aparecerá un sweet alert adviritendo que ese legajo no existe";
    contenedorInfo.appendChild(parrafoData1);
    contenedorInfo.appendChild(parrafoData2);
    contenedorInfo.appendChild(parrafoData3);
    descriptionUso.removeEventListener("click", clickInfoDelete);
};

//funcion informacion sobre la pagina agregar
function clickInfoAdd() {
    const parrafoData1 = document.createElement("p");
    parrafoData1.innerHTML = "En este apartado podremos agregar un alumno llenando los campos, si y solo si se completa el campo de legajo, si no aparecera un sweet alert diciendo que falta legajo para continuar";

    const parrafoData2 = document.createElement("p");
    parrafoData2.innerHTML = "1.nombre, 2.apellido, 3.legajo, 4.edad.";

    const parrafoData3 = document.createElement("p");
    parrafoData3.innerHTML = "al colocar una opcion en cada casilla y luego presionar el boton agregar, el alumno será agregado mostrado en pantalla como asi tambien agregado al localStorage";
    contenedorInfo.appendChild(parrafoData1);
    contenedorInfo.appendChild(parrafoData2);
    contenedorInfo.appendChild(parrafoData3);
    descriptionUso.removeEventListener("click", clickInfoAdd);
};


//Funcion especializada
function importDatos(alumnoImprimir) {
    const teErre = document.createElement("tr");
    objetoEncontrado.appendChild(teErre);
    const nombreLS = document.createElement("th");
    const printNombre = JSON.stringify(alumnoImprimir.nombre);
    nombreLS.innerText = printNombre;
    teErre.appendChild(nombreLS);

    const apellidoLS = document.createElement("th");
    const printApellido = JSON.stringify(alumnoImprimir.apellido);
    apellidoLS.innerText = printApellido;
    teErre.appendChild(apellidoLS);

    const legajoLS = document.createElement("th");
    const printLegajo = JSON.stringify(alumnoImprimir.legajo);
    legajoLS.innerText = printLegajo;
    teErre.appendChild(legajoLS);

    const edadLS = document.createElement("th");
    const printEdad = JSON.stringify(alumnoImprimir.edad);
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


//funcion para mostrar la lista de alumnos

function summonLista(alumnosEnLs) {
    alumnosEnLs.forEach(alumno => {
        const teErre = document.createElement("tr");
        objetoEncontrado.appendChild(teErre);
        const nombreLS = document.createElement("th");
        const printNombre = JSON.stringify(alumno.nombre);
        nombreLS.innerHTML = printNombre.replace(/"/g, '');
        teErre.appendChild(nombreLS);

        const apellidoLS = document.createElement("th");
        const printApellido = JSON.stringify(alumno.apellido);
        apellidoLS.innerHTML = printApellido.replace(/"/g, '');
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
};

function borrarLista(){
    let limpiarLista = objetoEncontrado.querySelectorAll("tr");
            limpiarLista.forEach(function (limpiarLista) {
                objetoEncontrado.removeChild(limpiarLista);
            })
};
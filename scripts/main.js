
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

//definiendo Array lista de alumnos dentro de objetos------------------------------------
const listaAlumnos = [
    { nombre: "Alan", apellido: "Moro", legajo: 5611, edad: 30 },
    { nombre: "Eduardo", apellido: "Gutierrez", legajo: 5612, edad: 45 },
    { nombre: "Esteban", apellido: "Romero", legajo: 5613, edad: 30 },
    { nombre: "Lujan", apellido: "Gomez", legajo: 5614, edad: 28 },
    { nombre: "Daniel", apellido: "Lugano", legajo: 5615, edad: 17 },
    { nombre: "Hernan", apellido: "Agüero", legajo: 5617, edad: 36 },
    { nombre: "Fernando", apellido: "Gomez", legajo: 5618, edad: 36 },
    { nombre: "Santiago", apellido: "Gomez", legajo: 5616, edad: 48 },
    { nombre: "Leandro", apellido: "Rodriguez", legajo: 5619, edad: 29 },
    { nombre: "Alan", apellido: "Ojeda", legajo: 5620, edad: 16 },
    { nombre: "Jonathan", apellido: "Moro", legajo: 5621, edad: 21 },
    { nombre: "leonel", apellido: "Moro", legajo: 5633, edad: 29 },
    { nombre: "Agustina", apellido: "Monges", legajo: 5622, edad: 21 },
    { nombre: "Gino", apellido: "Marchesano", legajo: 5623, edad: 17 },
];

//agregar la lista al Local Storage

const listaAlumnosJSON = JSON.stringify(listaAlumnos);
localStorage.setItem("listaAlumnos", listaAlumnosJSON);

/* const busca = document.querySelector("#buscarAlumno");
busca.addEventListener("click", buscaFunction);
const filtra = document.querySelector("#filtrarAlumno");
filtra.addEventListener("click", filtraFunction);
const elimina = document.querySelector("#eliminarAlumno");
elimina.addEventListener("click", eliminaFunction);
const agrega = document.querySelector("#agregarAlumno");
agrega.addEventListener("click", agregaFunction);

function buscaFunction() {
    let valor = 1;
    localStorage.setItem("valor", valor);
}

function filtraFunction() {
    let valor = 2;
    localStorage.setItem("valor", valor);
}

function eliminaFunction() {
    let valor = 3;
    localStorage.setItem("valor", valor);
}

function agregaFunction() {
    let valor = 4;
    localStorage.setItem("valor", valor);
} */


// agregar eventos de formularios

const buscarForm = document.querySelector("#buscar-form");
const opcionInput = document.querySelector("#opcion-input");
const datoInput = document.querySelector("#dato-input");
const objetoEncontrado = document.querySelector("#tbody-buscar");


buscarForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(opcionInput.value);
    if (opcionInput.value == 1) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.nombre === datoInput.value); //SE BUSCA ALUMNO POR NOMBRE
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
    if (opcionInput.value == 2) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.apellido === datoInput.value); //SE BUSCA ALUMNO POR NOMBRE
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
    if (opcionInput.value == 3) {
        const alumnosEnLs = JSON.parse(localStorage.getItem("listaAlumnos"));
        const printAlumno = alumnosEnLs.find((alumno) => alumno.legajo == datoInput.value); //SE BUSCA ALUMNO POR NOMBRE
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



































/*
function inicio() {
   // alert("Por favor ingrese los numeros correspondientes a cada opcion!");
    //valor = prompt("1 Buscar Alumno / 2 Filtrar Alumno / 3 Eliminar Alumno / 4 Agregar Alumno");

    if (valor == 1) {
        //alert("Para buscar alumno escriba alguno de los siguientes numeros: ")
        //opcionAlumno = prompt("Seleccione --- 1: nombre/ 2: apellido/ 3: legajo / 4: edad");
        buscarAlumno();
    } if (valor == 2 ) {
        alert("Para filtrar alumno escriba alguno de los siguientes numeros: ")
        opcionAlumno = prompt("Seleccione --- 1: nombre/ 2: apellido/ 3: legajo / 4: edad");
        filtrarAlumno();
    } if (valor == 3) {
        eliminarAlumno();
    } if (valor == 4) {
        agregarAlumno();
    } if (valor > 4 && valor < 1){
        alert("No se agrego un valor valido.")
        console.log("No se agrego un valor valido.");
    }
}

inicio();


function buscarAlumno() { //EN ESTA FUNCION SE BUSCA EL PRIMER ALUMNO QUE COINCIDA CON EL DATO INGRESADO POR EL USUARIO
    if (opcionAlumno == 1){
        findAlumno = prompt("ingrese nombre del alumno");
        const printAlumno = listaAlumnos.find((alumno) => alumno.nombre === findAlumno); //SE BUSCA ALUMNO POR NOMBRE
        console.table(printAlumno); // SE IMPRIME RESULTADO
    }
    if (opcionAlumno == 2){
        findAlumno = prompt("ingrese apellido del alumno");
        const printAlumno = listaAlumnos.find((alumno) => alumno.apellido === findAlumno); //SE BUSCA ALUMNO POR APELLIDO
        console.table(printAlumno);// SE IMPRIME RESULTADO
    }
    if (opcionAlumno == 3){
        findAlumno = prompt("ingrese legajo del alumno");
        const printAlumno = listaAlumnos.find((alumno) => alumno.legajo == findAlumno); //SE BUSCA ALUMNO POR LEGAJO
        console.table(printAlumno);// SE IMPRIME RESULTADO
    }
    if (opcionAlumno == 4){
        findAlumno = prompt("ingrese edad del alumno");
        const printAlumno = listaAlumnos.find((alumno) => alumno.edad == findAlumno);// SE BUSCA ALUMNO POR EDAD
        console.table(printAlumno);// SE IMPRIME RESULTADO
    }
    inicio();
}

function filtrarAlumno() { 
    if (opcionAlumno == 1){
        findAlumno = prompt("ingrese nombre del alumno");
        const printAlumno = listaAlumnos.filter((alumno) => alumno.nombre === findAlumno); //SE BUSCA ALUMNO POR NOMBRE
        console.table(printAlumno); // SE IMPRIME RESULTADO
    }
    if (opcionAlumno == 2){
        findAlumno = prompt("ingrese apellido del alumno");
        const printAlumno = listaAlumnos.filter((alumno) => alumno.apellido === findAlumno); //SE BUSCA ALUMNO POR APELLIDO
        console.table(printAlumno);// SE IMPRIME RESULTADO
    }
    if (opcionAlumno == 3){
        findAlumno = prompt("ingrese legajo del alumno");
        const printAlumno = listaAlumnos.filter((alumno) => alumno.legajo == findAlumno); //SE BUSCA ALUMNO POR LEGAJO
        console.table(printAlumno);// SE IMPRIME RESULTADO
    }
    if (opcionAlumno == 4){
        findAlumno = prompt("ingrese edad del alumno");
        const printAlumno = listaAlumnos.filter((alumno) => alumno.edad == findAlumno);// SE BUSCA ALUMNO POR EDAD
        console.table(printAlumno);// SE IMPRIME RESULTADO
    }
    inicio();
}

function eliminarAlumno() {
    alert("Se mostrara la lista de alumnos completa!");
    listaAlumnos.forEach((alumno) =>{
        console.table(alumno);//MUESTRA TODA LA LISTA DE LOS ALUMNOS COMPRENDIDOS EN EL ARRAY
    });
    alert("Por favor, Seleccione algun numero:")
    findAlumno = prompt("ingrese legajo del alumno");//AL ENCONTRAR EL NUMERO DE LEGAJO DEL ALUMNO SE SELECCIONA PARA ELIMINARLO
    const printAlumno = listaAlumnos.find((alumno) => alumno.legajo == findAlumno);//SE BUSCA EL LEGAJO EN EL ARRAY Y LO GUARDA EN LA VARIABLE
    let indiceAlumno = listaAlumnos.indexOf(printAlumno);//BUSCA EL NUMERO DE INDICE QUE COICIDE CON EL LEGAJO Y LO GUARDA EL LA VARIABLE
    listaAlumnos.splice(indiceAlumno, 1);//BORRA DEL ARRAY EL OBJETO COMPRENDIDO EN ESE INDICE
    console.log("Se elimino ",  printAlumno)//IMPRIME RESULTADO
    let consulPrint = prompt("Desea volver a mostrar la lista de alumnos? 1 si / 2 no");
    if (consulPrint == 1){
        listaAlumnos.forEach((alumno) =>{
        console.table(alumno);
        });
    } else {
        alert("gracias!")
    }

    inicio();
}

function agregarAlumno() {
    nombre = prompt("ingrese el nombre del alumno a agregar");
    apellido = prompt("ingrese el apellido del alumno a agregar");
    legajo = prompt("ingrese el legajo del alumno a agregar");
    edad = prompt("ingrese la edad del alumno a agregar");

    listaAlumnos.push({nombre,apellido,legajo,edad});
    listaAlumnos.forEach((alumno) =>{
        console.table(alumno);
    });
    const listaAlumnosJSON = JSON.stringify(listaAlumnos);
    localStorage.setItem("listaAlumnos", listaAlumnosJSON);

    inicio();
}


*/

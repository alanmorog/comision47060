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

if (localStorage.getItem("listaAlumnos") == null) {
    const listaAlumnosJSON = JSON.stringify(listaAlumnos);
    localStorage.setItem("listaAlumnos", listaAlumnosJSON.toLowerCase().trim());
}
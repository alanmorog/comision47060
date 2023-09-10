/* console.log("Hola Mundo!!!")

alert("Hola Mundo!!!!")

documento  = prompt("Ingrese su numero de dni")

alert(documento)
console.log("Su numero de documento es: ", documento) */

//definir las variables a usar
let alumnosMenores = 0;
let alumnosMayores = 0;


//en este caso suponemos que la cantidad de alumnos en el aula se conoce
cantidadAlumnos = prompt("cuantos alumnos tiene el aula?: ");
for (let i = 1; i <= cantidadAlumnos; i++) {
    let edadAlumnos = prompt("que edad tiene?: ")
    if (edadAlumnos >= 18){
        alumnosMayores++;
    }else
    if (edadAlumnos < 18 && edadAlumnos > 0){
        alumnosMenores++;
    }else{
        alert("el valor no existe, intente de nuevo...");
        i--;
    }


/*   console.log(alumnosMayores)
    console.log(alumnosMenores) */
}

//mostrar en pantalla la cantidad de alumnos
alert("La cantidad de alumnos menores de edad son: " + alumnosMenores);
alert("la cantidad de alumnos mayores de edad son: " + alumnosMayores);




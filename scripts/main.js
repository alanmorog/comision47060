/* Como premisa del trabajo vamos a simular que estamos en una clase y necesitamos preguntar cantidad de alumnos y  separar a todos los alumnos menores de edad con los mayores de edad, luego de eso mostrar en pantalla la cantidad de alumnos menores y mayores de edad. (teniendo en cuenta que no puede haber menos de un alumno) */

//definir las variables a usar
let alumnosMenores = 0;
let alumnosMayores = 0;
let i = 1;

//definimos las funciones a utilizar

function cantidadSi(){ //en este caso suponemos que la cantidad de alumnos en el aula se conoce
    cantidadAlumnos = parseInt(prompt("cuantos alumnos tiene el aula?: "));
    for (i; i <= cantidadAlumnos; i++) {
        let edadAlumnos = parseInt(prompt("que edad tiene el alumno numero " + i + "?"))
        if (edadAlumnos >= 18) {
            alumnosMayores++;
        } else
            if (edadAlumnos < 18 && edadAlumnos > 0) {
                alumnosMenores++;
            } else {
                alert("el valor no existe, intente de nuevo...");
                if (i > 1){
                    i--;
                }
            }
    }
}

function cantidadNo(){ //en este caso suponemos que la cantidad de alumnos en el aula no se conoce
    do {
        let edadAlumnos = parseInt(prompt("que edad tiene el alumno numero " + i + "?"))
        if (edadAlumnos >= 18) {
            alumnosMayores++;
            i++;
        } else
            if (edadAlumnos < 18 && edadAlumnos > 0) {
                alumnosMenores++;
                i++;
            } else {
                alert("el valor no existe, intente de nuevo...");
                if (i > 1){
                    i--;
                }
            }
        hayAlumnos = prompt("hay mas alumnos para contar?");
        hayAlumnos = hayAlumnos.toLowerCase().trim();
    }while(hayAlumnos == "si");
}

function pregunta() { //preguntar si se conoce la cantidad de alumnos
    cantidad = prompt("se conoce la cantidad de alumnos para contar?");
    cantidad = cantidad.toLowerCase().trim();
}

function mostarPantalla(){ //mostrar en pantalla la cantidad de alumnos
    alert("La cantidad de alumnos menores de edad son: " + alumnosMenores);
    alert("la cantidad de alumnos mayores de edad son: " + alumnosMayores);
}


pregunta();

if (cantidad == "si") {
    cantidadSi();
}else
if (cantidad == "no"){
    cantidadNo();
}
else {
    alert("no existe el valor, se responde con si o no");
}

mostarPantalla();







# Pre entrega 2 del curso JavaScript comision 47060

## Actualizacion
TENIENDO EN CUENTA LA PREMISA DE ALUMNOS SE CREO UN SISTEMA A BASE DE LOS TEMAS VISTOS EN LAS CLASES POSTERIORES A FIN DE AGREGAR DICHO CONTENIDO AL CODIGO, SE AGREGO OBJETOS, ARRAYS Y FUNCIONES DE ORDEN SUPERIOR AL MISMO.<br>

SE PENSÓ DISEÑAR EL MISMO PROPONIENDO UN SISTEMA DE 4 OPCIONES PRINCIPALES<br><br>
1 BUSCAR ALUMNO<br>
2 FILTRAR ALUMNO<br>
3 ELIMINAR ALUMNO<br>
4 AGREGAR ALUMNO<br><br>

PARA ESTO SE AGREGO UNA LISTA DE ALUMNOS PREVIA A MODO DE EJEMPLO, LA CUAL ESTABA DISEÑADA COMO UNA ARRAY E INTERNAMENTE SEPARADA DE OBJETOS DONDE CONTENIAN LOS ELEMENTOS LOS DATOS DE LOS ALUMNOS.<br>

-PARA LA FUNCION "BUSCAR ALUMNO" SE PENSO UTILIZAR EL METODO FIND() <br>
-PARA LA FUNCION "FILTRAR ALUMNO" SE PENSO UTILIZAR EL METODO FILTER()<br>
-PARA LA FUNCION "ELIMINAR ALUMNO" SE PENSO UTILIZAR EN PRIMERA INSTANCIA UN FOREACH() PARA MOSTRAR LA LISTA DE ALUMNOS CON EL OBJETIVO DE PODER ELEGIR EL LEGAJO DEL ALUMNO A ELIMINAR, LUEGO DE QUE SE TUVIERA EL LEGAJO, SE UTILIZABA FIND() PARA BUSCAR EL OBJETO Y GUARDARLO EN UNA VARIABLE PARA LUEGO OBTENER EL INDICE DEL OBJETO A ELIMINAR UTILIZANDO INDEXOF() Y LUEGO SPLICE(INDICE, 1)<br>
-PARA LA FUNCION "AGREGAR ALUMNO" SE UTILIZO EL METODO PUSH() PIDIENDO INGRESAR POR TECLADO CADA DATO A GUARDAR.<br>



# Pre entrega 1 del curso JavaScript comision 47060

## Consigna
Se solicito armar un simulador interactivo con lo visto en las clases. <br>
-Para ello era necesario usar un algoritmo con un condicional como minimo <br>
-tambien era necesario usar un algoritmo con un ciclo como minimo <br>

## Concepto e idea del código
Como premisa del trabajo vamos a simular que estamos en una clase y necesitamos preguntar cantidad de alumnos y  separar a todos los alumnos menores de edad con los mayores de edad, luego de eso mostrar en pantalla la cantidad de alumnos menores y mayores de edad. (teniendo en cuenta que no puede haber menos de un alumno) <br>

-para esto el código primero preguntará si se conoce la cantidad de alumnos que se encuentran en el aula en el momento <br> 
_se utiliza un condicional para derivar a la opcion correspondiente, si se conoce la cantidad de alumnos se deriva a un ciclo **for**, si no se conoce la cantidad de alumnos se deriva a una ciclo **do-while**_ <br>

### En el caso del for
se solicita la cantidad de alumnos y empezara a pedir las edades que se iran contabilizando dependiendo de lo que se cargue, si es mayor de 18 años o no, luego el resultado se imprimira en pantalla con la cantidad de alumnos mayores y la cantidad de alumnos menores. <br>

### En el caso del Do-While
se cargará la edad del primer alumno considerando que hay por lo menos un alumno en el aula, se cargará la edad del alumno y se ira contabalizando dependiendo lo que se cargue, al final se consulta si todavia hay alumnos para contabilizar. <br>

### A tener en cuenta
_Cada ciclo esta dentro de una funcion para facilidad el llamammiento del mimso dentro de el condicional_ <br>
_en los prompt donde se solicita ingresar numero se utiliza parseInt para convertir el valor a numero entero_ <br>
_en los prompt donde se solicita ingresar un valor string como si o no se utiliza luego trim() para eliminar espacios de mas y toLowerCase() para convertir a minuscula el valor ingresado_ <br>
_los valores en las variables las cuales se imprimen en pantalla estan definidas dentro de una funcion_ <br>

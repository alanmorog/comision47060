# Pre entrega 1 del curso JavaScript comision 47060

## Consigna
Se solicito armar un simulador interactivo con lo visto en las clases. 
-Para ello era necesario usar un algoritmo con un condicional como minimo
-tambien era necesario usar un algoritmo con un ciclo como minimo

## Concepto e idea del código
Como premisa del trabajo vamos a simular que estamos en una clase y necesitamos preguntar cantidad de alumnos y  separar a todos los alumnos menores de edad con los mayores de edad, luego de eso mostrar en pantalla la cantidad de alumnos menores y mayores de edad. (teniendo en cuenta que no puede haber menos de un alumno)

-para esto el código primero preguntará si se conoce la cantidad de alumnos que se encuentran en el aula en el momento
_se utiliza un condicional para derivar a la opcion correspondiente, si se conoce la cantidad de alumnos se deriva a un ciclo **for**, si no se conoce la cantidad de alumnos se deriva a una ciclo **do-while**_

### En el caso del for
se solicita la cantidad de alumnos y empezara a pedir las edades que se iran contabilizando dependiendo de lo que se cargue, si es mayor de 18 años o no, luego el resultado se imprimira en pantalla con la cantidad de alumnos mayores y la cantidad de alumnos menores.

### En el caso del Do-While
se cargará la edad del primer alumno considerando que hay por lo menos un alumno en el aula, se cargará la edad del alumno y se ira contabalizando dependiendo lo que se cargue, al final se consulta si todavia hay alumnos para contabilizar.

### A tener en cuenta
_Cada ciclo esta dentro de una funcion para facilidad el llamammiento del mimso dentro de el condicional_
_en los prompt donde se solicita ingresar numero se utiliza parseInt para convertir el valor a numero entero_
_en los prompt donde se solicita ingresar un valor string como si o no se utiliza luego trim() para eliminar espacios de mas y toLowerCase() para convertir a minuscula el valor ingresado_
_los valores en las variables las cuales se imprimen en pantalla estan definidas dentro de una funcion_

// HIGHER ORDER FUNCTIONS   funciones de orden superior 

// abstraccion 


// RETORNAR FUNCIONES

// function mayorQue(n) {
//     return (m) => m > n   // funcion flecha =>
// }

// let mayorQueDiez = mayorQue(10)

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false

// otro ejemplo 
// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log( suma(4, 6) )  //  10
// console.log( resta(5, 3) )  //  2

// otro ejemplo

// function calcular(impuesto) {
//     return (precioProducto) => precioProducto * impuesto;
// };

// let calcularImpuestoIVA = calcular(0.21);
// let calcularImpuestoDelDiez = calcular(0.10);
// let calcularImpuestoDelQuince = calcular(0.15);

// console.log(calcularImpuestoIVA(50));
// console.log(calcularImpuestoDelDiez(50));
// console.log(calcularImpuestoDelQuince(50));

// RECIBIR FUNCIONES POR PARÁMETRO

// Significa escribir funciones que puedan recibir funciones por parámetro.
//Empecemos con un ejemplo: 

// function porCadaUno(arr, fn) {
//     for (const el of arr) {        //se recorre el array
//         fn(el)
//     }
// }

// // imprimir los elementos del array 
// const numeros = [1, 2, 3, 4, 5];

// let total = 0

// function acumular(num) {
//     total += num
// }

// porCadaUno(numeros, acumular)
// console.log(total) // 10


// porCadaUno(numeros, acumular)
// console.log(total)


// ARROW FUNCTION

// const duplicado = []

// porCadaUno(numeros, (el)=> {
//     duplicado.push(el * 2)
// })

// console.log(duplicado) // [2, 4, 6, 8]

// MÉTODOS DE BÚSQUEDA Y TRANSFORMACIÓN de arrays

//FOR EACH

// El método forEach() es similar al ejemplo porCadaUno anterior. 
// Itera sobre el array y por cada elemento ejecuta la función que enviemos por parámetro, la cual recibe a su vez el elemento del array que se está recorriendo:

// const numeros = [1, 2, 3, 4, 5, 6]

// numeros.forEach( (num)=> {
//     console.log(num)
// } )


// FIND

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === "ReactJS")
// const resultado2 = cursos.find((el) => el.nombre === "DW")

// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// console.log(resultado2) // undefined

// otro ej 

// const alumnos = [
//     {
//         nombre: "Gonzalo",
//         edad: 18,
//         materiasAprobadas: 12,
//     },
//     {
//         nombre: "Joaquin",
//         edad: 25,
//         materiasAprobadas: 4,
//     },
//     {
//         nombre: "Camila",
//         edad: 22,
//         materiasAprobadas: 6,
//     },
//     {
//         nombre: "Joaquin",
//         edad: 31,
//         materiasAprobadas: 18,
//     }
// ];

// const alumnoJoaquin = alumnos.find( (alumno) => {
//     return alumno.nombre === "Joaquin" && alumno.edad === 31;
// })

// console.log(alumnoJoaquin);

// FILTER

//El método filter() recibe, al igual que find(), una función comparadora por parámetro, y retorna un nuevo array con todos los elementos que cumplan esa condición. 
//Si no hay coincidencias, retornará un array vacío

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]

// const resultado = cursos.filter((el) => el.nombre.includes('JS'))
// const resultado2 = cursos.filter((el) => el.precio < 14000)

// console.log(resultado)
// /* [
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'Angular', precio: 22000}
// ] */

// console.log(resultado2) // []

// SOME

// console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// // true
// console.log( cursos.some((el) => el.nombre == "VueJS")) 
// // false

// MAP

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
//     {nombre: 'AngularJS', precio: 22000},
//     {nombre: 'Desarrollo Web', precio: 16000},
// ]

// const nombres = cursos.map((el) => el.nombre)
// console.log(nombres)
// // [ 'Javascript', 'ReactJS', 'AngularJS', 'Desarrollo Web' ]

// REDUCE

// const numeros = [1, 2, 3, 4, 5, 6]
// const total = numeros.reduce((acumulador, elemento) => acumulador + elemento, 0)

// console.log(total) // 21

// SORT
// const numeros = [ 40, 1, 5, 200 ];
// numeros.sort((a, b) => a - b);  // [ 1, 5, 40, 200 ]
// numeros.sort((a, b) => b - a);  // [ 200, 40, 5, 1 ]

// OBJETO MATH
// metodos 

// min and max   Math.min() y Math.max()

// console.log( Math.max(55, 13, 0, -25, 93, 4) ) // 93
// console.log( Math.min(55, 13, 0, -25, 93, 4) ) // -25

// También se pueden referenciar los valores de infinito positivo o negativo a través de la variable global Infinity, de tipo number:

// console.log( Math.max(55, Infinity, 0, -25, 93, 4) ) // Infinity
// console.log( Math.min(55, 13, 0, -Infinity, 93, 4) ) // -Infinity


// CEIL, FLOOR & ROUND
// Sirven para redondear un valor numérico a un número entero cercano:

// const pi = Math.PI // 3.141592653589793

// // CEIL: devuelve el entero mayor o igual más próximo
// console.log( Math.ceil(pi) ) // 4

// // FLOOR: devuelve el entero más cercano redondeado hacia abajo
// console.log( Math.floor(pi) ) // 3

// // ROUND: retorna el valor de un número redondeado al entero más cercano (desde 0.5 redondea para arriba)
// console.log( Math.round(pi) ) // 3

// SQUARE ROOT
// El método Math.sqrt() retorna la raíz cuadrada de un número. Si se le envía un número negativo, el método retorna NaN.

// Math.sqrt(9) // 3
// Math.sqrt(2) // 1.414213562373095
// Math.sqrt(1)  // 1
// Math.sqrt(-1) // NaN

// RANDOM




//lA CLASE DATE
// a los meses hay que restarle uno enero = 0 y diciembre = 11
// const fecha = new Date(2022, 6, 23, 10, 0, 0) // año, mes, dia, hora, minutos, segundos

// obtener un valor singular de la fecha
//getMonth() nos retornara el number que representa el mes

//getFullYear() nos devolvera el number que representa el año 

//getDay() nos devlvera el number que respresenta el dia creado (1=lunes, 7=domingo)

const fecha = new Date(2022, 6, 30, 10,) // año, mes, dia, hora, minutos, segundos

console.log("año" + fecha.getFullYear())
console.log("mes" + fecha.getMonth())
console.log( "dia" + fecha.getDay())
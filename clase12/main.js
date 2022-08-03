// OPERADORES Y CONDICIONALES AVANZADOS

// OPERADOR ++
// sugar syntax
// primera simplificacion
// num += 1

// o bien
// num++

// OPERADOR TERNARIO
// Es una simplificación de la estructura condicional if…else

// sintaxis
// condicion  ?  caso1  :  caso2

// const temperatura = 25;
// temperatura > 30 ? alert("Día caluroso!") : alert("Día agradable")

// el operador ternario tiene un return implicito

// const usuario = {
//     nombre: "John Doe",
//     edad: 22
// }

// // declaramos y asignamos condicionalmente
// const permiso = (usuario.edad >= 18) ? true : false

// // mostramos el mensaje
// permiso ? alert("Puede comprar cerveza") : alert("No puede comprar")


// OPERADOR LÓGICO AND &
// Es una reducción de un condicional

// const carrito = []

// if (carrito.length === 0) {
//   console.log("El carrito está vacío!")
// }

// // con operador AND
// carrito.length === 0 && console.log("El carrito está vacío!")

// También tienen un return implícito EJ:
// const usuario = {
//     nombre: "John Doe",
//     edad: 14
//   }
  
//   const registroIngreso = usuario.edad >= 18 && new Date()
  
//   console.log(registroIngreso)

// En el caso de que la condición resulte falsa, el operador AND retornará false en cambio:
// const usuario = {
//     nombre: "John Doe",
//     edad: 14
//   }
  
//   const registroIngreso = usuario.edad >= 18 && new Date()
  
//   console.log(registroIngreso) // FALSE

// OPERADOR LÓGICO OR
// OR ( || ) es sintácticamente similar al anterior, con la diferencia que consta de dos operandos y no de una condición explícita: operando1 || operando2. 

// A continuación, se presenta la tabla de evaluación de valores falsy para esclarecer cómo son los returns del operador lógico OR ( || )

// console.log( 0 || "Falsy")  // Falsy
// console.log( 40 || "Falsy")  // 40
// console.log( null || "Falsy")  // Falsy
// console.log( undefined || "Falsy")  // Falsy
// console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
// console.log( "" || "Falsy")  // Falsy
// console.log( NaN || "Falsy")  // Falsy
// console.log( true || "Falsy")  // true
// console.log( false || "Falsy")  // Falsy

// Es versátil para condicionar asignaciones de variables o de parámetros sencillamente
const usuario1 = {
    nombre: "John Doe",
    edad: 14
  }
  const usuario2 = null
  
  console.log( usuario1 || "El usuario no existe" )
  // { nombre: 'John Doe', edad: 14 }

  console.log( usuario2 || "El usuario no existe" )
// El usuario no existe

// ambién es útil para inicializar variables de forma condicionada evaluando algún valor previo 
// Por ejemplo, para recuperar el último estado de un carrito de compras del usuario almacenado en localStorage al iniciar mi app podría hacer esto:

// let carrito
// let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )
// if (carritoLocalStorage) {
//   carrito = carritoLocalStorage
// } else {
//   carrito = []
// }

// O simplificar el proceso con el operador lógico OR ( || ).
// const carrito = JSON.parse(localStorage.getItem('carrito')) || []


// OPERADOR NULLISH COALESCING

// Este Operador (??) funciona igual que el Operador OR ( || ), con la diferencia que admite más valores como ‘verdaderos’. En este caso, sólo obtenemos nullish en dos casos:
// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false


// ACCESO CONDICIONAL A UN OBJETO

// const usuario = null

// console.log( usuario.nombre || "El usuario no existe" )
// // Error: "No se pueden leer propiedades de NULL"

// console.log( usuario?.nombre || "El usuario no existe")
// // "El usuario no existe"

// También puede aplicarse sobre propiedades que sean objetos para evaluar su existencia/validez y controlar los flujos del programa:
// const usuario = {
//     nombre: "John Doe",
//     edad: 22,
//     cursos: {
//       javascript: "aprobado"
//     }
//   }
  
//   console.log( usuario?.cursos?.javascript || "La propiedad no existe")
//   // "aprobado"
//   console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe")
//   // "La propiedad no existe"
  

// DESESTRUCTURACIÓN

// sintaxis
// let { prop1, prop2 } = objeto
//en prop1 y prop2 se almacenan las propiedades con el mismo nombre del objeto que referenciamos

// desestructuracion EJ:
// const usuario = {
//     nombre: "John Doe",
//     edad: 32
// }

// const { nombre, edad } = usuario

// console.log(nombre) // "John Doe"
// console.log(edad) // 32

// Si queremos acceder a propiedades más internas dentro de un objeto, es decir desestructurar alguna propiedad que sea a la vez un objeto, es posible hacerlo siguiendo el mismo patrón.
// const usuario = {
//     nombre: "John Doe",
//     edad: 32,
//     telefono: {
//         cel: 113334444,
//         casa: null,
//         trabajo: 113325555
//     }
// }

// const { nombre, telefono: {trabajo} } = usuario

// console.log(nombre) // "John Doe"
// console.log(trabajo) // 113325555


// ALIAS
// Declarar la variable con un nombre alternativo tras haber desestructurado el objeto.

// Esto lo hacemos simplemente con el operador : luego del nombre de la propiedad.

// const item = {
//   item_id: 432,
//   product_name: "Some product",
//   price_per_unit: 5600
// }

// const {
//   item_id: id,
//   product_name: nombre,
//   price_per_unit: precio
// } = item

// console.log(id) // 432
// console.log(nombre) // "Some product"
// console.log(precio) // 5600

// Desestructuración en parámetros

// Si en una función recibimos objetos por parámetros, también es posible desestructurarlos directamente en el llamado, definiendo esto al declarar la función. 

// const producto = {
//   id: 10,
//   nombre: "Curso Javascript",
//   precio: 12500
// }

// const desestructurar = (item) => {
//   // desestructurando dentro del bloque
//   const {id, nombre} = item
//   console.log(id, nombre)
// }

// desestructurar(producto) // 10 Curso Javascript

// Sabiendo qué es lo que vamos a recibir y qué necesitamos desestructurar, podemos traducir esto con la siguiente lógica:

// desestructurando lo que reciba por parámetro
// const desestructurar = ( {id, nombre} ) => {
//   console.log(id, nombre)
// }

// desestructurar(producto) // 10 Curso Javascript

// window.addEventListener('click', ( {x, y} ) => {
//   console.log(x, y)
// })


// DESESTRUCTURACIÓN DE ARRAYS

// No funciona aquí la coincidencia por nombres, sino que se toman los valores según la posición. Las dos primeras variables que declaramos tomarán los valores de los dos primeros elementos del array. 
// Si queremos acceder a otras posiciones, o mejor dicho omitir las primeras, podemos hacerlo dejando espacios vacíos con comas:

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// // omito las dos primeras posiciones
// const [,, a, b] = nombres

// console.log(a) // "Carlos"
// console.log(b) // "Mariela"


// SPREAD
// Spread ( … ) es una herramienta que nos permite, como su nombre indica, desparramar un array u objeto. En otras palabras, cambiar la forma en la que presentamos este array u objeto. 

// SPREAD DE ARRAYS

// Si paso un array por parámetro a alguna función, ésta recibe el array entero como tal
// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]
// console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// Si en cambio enviamos un spread del array, veremos lo siguiente:
// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// // spread ... del array
// console.log(...nombres) // Juan Julieta Carlos Mariela

// // equivalente a:
// console.log("Juan", "Julieta", "Carlo", "Mariela")


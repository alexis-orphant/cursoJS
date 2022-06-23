//  ARRAYS 

// // Declaraciòn de array vacío
// const arrayA = [];
// // Declaracion de array con nùmeros
// const arrayB = [1,2];
// // Declaracion de array con strings
// const arrayC = ["C1","C2","C3"];
// // Declaracion de array con booleanos
// const arrayD = [true,false,true,false];
// // Declaracion de array mixto
// const arrayE = [1,false,"C4"];


// ACCESO AL ARRAY
// const  numeros = [1,2,3,4,5];
// console.log( numeros[0] ) // 1; 
// console.log( numeros[3] ) // 4; 
// let resultado  = numeros[1] + numeros[2] 
// console.log( resultado  ) // 5;

// const alumnos =["gonzalo", "joaquin", "rodrigo"];
// console.log(alumnos) imprime todos los valores del array
//console.log(alumnos[1]) imprime el valor que esta en el indice 1 del array (joaquin). si el indice no esta en el array devuelve undefined

// recorrido del array 
// const numeros = [1, 2, 3, 4, 5];
// for (let index = 0; index < 5; index++) {
//     alert(numeros[index]);
// }

// const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
// for (let i = 0; i < 4; i++){
//     console.log(alumnos[i])
// }
//recorre de atras para adelante
// for (let i = 3; i >= 0; i--){
//     console.log(alumnos[i])
// }
//console.log(alumnos.length) //cantidad de elementos del array

//recorre todo el array sin que le indiquemos la cantidad
// for (let i = 0; i < alumnos.length; i++){
//     console.log(alumnos[i])
// }


// METODOS Y PROPIEDADES (arriba hay ejemplos con length)

// length nos sirve para obtener el largo, es decir, para identificar cuántos elementos tiene
// const miArray = ["marca", 3 ,"palabra"];
// console.log( miArray.length ); //imprime 3

// Es común utilizarlo para definir el límite de una iteración sobre un array,
// const numeros = [1, 2, 3, 4, 5, 6, 7, 8]
// for (let i= 0; i < numeros.length; i++) {
//     alert(numeros[i]);
// }

// agregar elementos 

//PUSH()
// Se utiliza el método push, pasando como parámetro el valor (o variable) a agregar.
// agrega el elemeto al final del array
// const miArray = ["marca", 3, "palabra"]
// miArray.push('otro elemento')
// console.log(miArray.length) // ⇒ 4
// console.log(miArray)
// //["marca", 3, "palabra", “otro elemento”]

// const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
// alumnos.push("camila")
// alumnos.push("natalia")
// alumnos.push("pablo")

// for (let i = 0; i < alumnos.length; i++){
//     console.log(alumnos[i])
// }


// unshift()
//agrega el elemeto al inicio del array
// const miArray = ["marca", 3, "palabra"]
// miArray.unshift('otro elemento')

// console.log(miArray)
// //[“otro elemento”, "marca", 3, "palabra"]

// const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
// alumnos.unshift("camila")
// alumnos.unshift("natalia")
// alumnos.unshift("pablo") al ultimo elemento agregado lo pone primero en el array

// for (let i = 0; i < alumnos.length; i++){
//     console.log(alumnos[i])
// }


// QUITAR ELEMENTOS DEL ARRAY 
//shift()
//eliminale primer elemento del array
// const nombres = ["Luis", "Ana", "Julia", "Juan"]
// nombres.shift()
// console.log(nombres) // ["Ana", "Julia", "Juan"]

// const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
// console.log(alumnos)
// alumnos.push("gaston")
// console.log(alumnos)
// alumnos.shift()
// console.log(alumnos) //cuando elimino o agrego un elemento se reordenan los indices
// alumnos.pop()
// console.log(alumnos)

// pop()
// elimina el ultimo elemento del array 
// const nombres = ["Luis", "Ana", "Julia", “Juan”]

// nombres.pop()
// console.log(nombres) // ["Luis", "Ana", "Julia"]

// splice()
//permite eliminar uno o varios elementos de un array en cualquier posición
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// nombres.splice(1, 2)

// const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
// console.log(alumnos);
// alumnos.push("gaston");
// alumnos.push("natalia");
// console.log(alumnos);

// alumnos.splice(2, 2);// el primero es el indice inicial y el segundo cuantos elimino contado el primer elemento que pusimos el indice
// console.log(alumnos);

// console.log(nombres)
// // ['Rita', 'Ana', 'Vanesa']

// join()
// podemos generar un string con todos los elementos del array, separados por el valor que pasamos por parámetro:
// const nombres = ["Luis", "Ana", "Julia", “Juan”]
// console.log( nombres.join(“, ”) ) 
// // Luis, Ana, Julia
// console.log( nombres.join(“*”) ) 
// // Luis*Ana*Julia

// const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
// console.log(alumnos.join(" / ")) //lo agregado entre las comillas es como separa a los elementos de array (el espacio tambien cuenta)
// console.log(alumnos.join("/")) //distinto al de arriba por los espacios

// concat()
//combinar dos Arrays en un único Array
// const perros   = ["Pupy", “Ronnie”]
// const gatos = ["Mishi", “Garfield”, "Zuri"]
// const mascotas = perros.concat(gatos)
// console.log(mascotas)
// // ["Pupy", “Ronnie”, "Mishi", “Garfield”, "Zuri"]
//une 2 arrays
const alumnos =["gonzalo", "joaquin", "rodrigo", "facundo"];
const nuevosAlumnos = ["camila", "natalia", "gaston"];
const todosLosAlumnos = alumnos.concat(nuevosAlumnos); // el array entre () es el que se suma al que esta antes del .concat
console.log(todosLosAlumnos)


// slice()
//El método slice devuelve una copia de una parte del Array dentro de un nuevo Array
// const nombres    = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];
// const masculinos = nombres.slice(1, 3); // Nuevo array desde la posición 1 a 3.
// // masculinos contiene ['Pedro','Miguel']

// indexOf()
//El método indexOf() nos permite obtener el índice de un elemento en un array. Recibe por parámetro el elemento que queremos buscar en el array y, en caso de existir, nos retorna su índice. Si el elemento no existe nos retornará como valor: -1
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa'];

// console.log( nombres.indexOf('Rita') ) // ⇒ 0
// console.log( nombres.indexOf('Ana') ) // ⇒ 3
// console.log( nombres.indexOf('Julieta') ) // ⇒ -1

// includes()
//el método includes me permite saber si un elemento que recibo por parámetro existe o no dentro de un array, retornando un valor booleano en caso afirmativo o negativo:
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']

// console.log( nombres.includes('Rita') ) // ⇒ true
// console.log( nombres.includes('Miguel') ) // ⇒ true
// console.log( nombres.includes('Julieta') ) // ⇒ false

//reverse()
//invierte el orden de los elementos dentro de un array
// const nombres = ['Rita', 'Pedro', 'Miguel', 'Ana', 'Vanesa']
// nombres.reverse()
// console.log( nombres ) 
// // ⇒ ['Vanesa', 'Ana','Miguel', 'Pedro','Rita']
//Cuidado porque el método reverse es destructivo, o sea que modifica el array original,

// ARRAYS DE OBJETOS
//Los array pueden usarse para almacenar objetos personalizados
//Podemos asignar objetos literales o previamente instanciados en la declaración del array o agregar nuevos objetos usando el método push y el constructor.
// const objeto1 = { id: 1, producto: "Arroz" };
// const array   = [objeto1, { id: 2, producto: "Fideo" }];
// array.push({ id: 3, producto: "Pan" });


//FOR...OF
//La sentencia for...of permite recorrer un array ejecutando un bloque de código por cada elemento del objeto.
// const productos = [{ id: 1, producto: "Arroz" },
//                 { id: 2,  producto: "Fideo" },
//                 { id: 3,  producto: "Pan" }];

// for (const producto of productos) {
//     console.log(producto.id);
//     console.log(producto.producto);
// }
//Por cada iteración se ejecuta el bloque de código que definimos entre llaves.
// class Producto {
//     constructor(nombre, precio) {
//         this.nombre  = nombre.toUpperCase();
//         this.precio  = parseFloat(precio);
//         this.vendido = false;
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Declaramos un array de productos para almacenar objetos
// const productos = [];
// productos.push(new Producto("arroz", "125"));
// productos.push(new Producto("fideo", "70"));
// productos.push(new Producto("pan", "50"));
// //Iteramos el array con for...of para modificarlos a todos
// for (const producto of productos)
//     producto.sumaIva();
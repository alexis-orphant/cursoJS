// OBJETOS 

//declaracion de obj

//var objeto = new Object ();

// object literal:
//var objeto = {};

// const producto = {
//     categoria: "lacteos",
//     nombre: "producto1",
//     precio: 20,
//     stock: 1,
// }
// // console.log(producto.nombre);
// console.log("el stock actual es: " + producto.stock)
// //pedimos el nuevo valor de stock
// const nuevoStock = parseInt(prompt("ingrese el nuevo stock"));
// //actualizamos el valor de producto.stock
// producto.stock = nuevoStock;
// //producto["stock"] = nuevoStock;  es igual que con el punto
// console.log("el nuevo estock es: " + producto.stock)

//  COnSTRUCTOR
// function persona(nombre ,edad, calle){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.calle = calle;
// }
// const persona1 = new persona("homero", 39, "av. siempreviva 742");
// const persona2 = new persona("marge", 36, "av. siempreviva 742");


//ej de constructor usando el producto de arriba (va con mayucacula Producto para decir que es constructora)
// una vez que tengo la funcion constructora le tengo que dar al objeto sus propiedades
// function Producto(categoria, nombre, precio, stock) {

//     this.categoria = categoria;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
// }
// para construir el objeto lo hacemos con el NEW

//const producto = new Producto("lacteos", "yogurt", 30, 5);
//console.log(producto)

//console.log("el stock actual es: " + producto.stock)

//const nuevoStock = parseInt(prompt("ingrese el nuevo stock:" ));
//producto["stock"] = nuevoStock;

//console.log("el nuevo stock es: " + nuevoStock);

// function Producto(categoria, nombre, precio, stock) {

//     this.categoria = categoria;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
// }

// const nombreCategoria = prompt("ingrese el nombre de la categoria");
// const nombreDelProducto = prompt("ingrese el nombre del producto");
// const precioDelProducto = parseInt(prompt("ingrese el precio del produto"));

// const producto = new Producto(nombreCategoria, nombreDelProducto, precioDelProducto, 1);

// console.log(producto)

// METODOS Y OPERCAIONES CON OBJETOS 

// funcion normal 
// function f1(){
//     return this;
// }

// METODO
// function persona(nombre, edad, calle) {
//     this.nombre = nombre;
//     //se asigna funcion. es un metodo del objeto persona
//     this.mostrarNombre = () => {
//         console.log(this.nombre);
//     }
// }

// function Producto(categoria, nombre, precio, stock) {

//     this.categoria = categoria;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     //despues del punto es el metodo y hay que usarlo para modificar la propiedades
//     //aca se modifica la propiedad de stock (es como asignar parametros en la funcion, funciona de manera parecida)
//     this.modificarStock = (nuevoStock) => {
//         this.stock = nuevoStock
//     }
// }
//camibiar y mostrar stock
// const producto = new Producto("carnes", "churrasco", 40, 1);
// console.log("el stock actual es: " + producto.stock)

// const nuevoStock = parseInt(prompt("ingrese el nuevo stock"))
// producto.modificarStock(nuevoStock);

// console.log("el nuevo stock es: " + producto.stock)


// OPERADOR "IN" Y "FOR... IN"

// IN
// function Producto(categoria, nombre, precio, stock) {
//     this.categoria = categoria;
//     this.nombre = nombre;
//     this.precio = precio;
//     this.stock = stock;
//     //despues del punto es el metodo y hay que usarlo para modificar la propiedades
//     //aca se modifica la propiedad de stock (es como asignar parametros en la funcion, funciona de manera parecida)
//     this.modificarStock = (nuevoStock) => {
//         this.stock = nuevoStock
//     }
// }
// const producto = new Producto ("lacteos", "yogurt", 30, 1);
//si quiero verificar si el producto tiene la propiedad categoria
// console.log("modificarStock" in producto);

// FOR IN 
//recore todos los nombres de metodos y propiedades y los asigna a la variable (prop en este caso)
// for(const prop in producto){
//     console.log(prop);
// }

//si quiero mostrar el valor que tiene la propiedad
// for(const prop in producto){
//     console.log(producto[prop]); //la ventaja de los [] frente al punto . si uso punto aca no muestra lo que queremos
// }


// CLASES 
//es mas ordenado que lo anterios
// class Persona{
//     //funcion constructora
//     constructor(nombre, edad, calle) {
//         this.nombre = nombre;
//         this.edad   = edad;
//         this.calle  = calle;
//     }
//     //metodos
//     hablar(){
//         console.log("HOLA SOY "+ this.nombre);
//     }
// }
// const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
// persona1.hablar();

// class Producto{
//     constructor(categoria, nombre, precio, stock){
//         this.categoria = categoria;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.stock = stock;
//     }
//     modificarStock(nuevoStock){
//         this.stock = nuevoStock
//     }
// }

// const producto = new Producto ("lacteos", "yogurt", 30, 1);

// console.log(producto.stock);

// producto.modificarStock(10)
// console.log(producto.stock)

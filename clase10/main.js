// STORAGE & JSON

// STORAGE
//localstorage
// Para almacenar información se utiliza setItem:

// Método ->  localStorage.setItem(clave, valor)
// clave = nombre para identificar el elemento 
// valor = valor/contenido del elemento 

// localStorage.setItem('bienvenida', '¡Hola Coder!'); // el primero es el nombre de la clave con la que se va a guardar el dato y el segundo es el valor que tiene 
// localStorage.setItem('esValido', true);
// localStorage.setItem('unNumero', 20);

//  getItem

// let mensaje =  localStorage.getItem('bienvenida');
// let bandera =  localStorage.getItem('esValido');
// let numero  =  localStorage.getItem('unNumero');

// console.log(mensaje); // ‘¡Hola Coder!’
// console.log(bandera); // ‘true’
// console.log(numero);  // ‘20’

// SESSIONSTORAGE: 
// SETITEM:

// Método ->  sessionStorage.setItem(clave, valor)
// clave = nombre del elemento
// valor = Contenido del elemento
// sessionStorage.setItem('seleccionados', [1,2,3]);
// sessionStorage.setItem('esValido', false);
// sessionStorage.setItem('email', 'info@email.com');

// getItem:

// let lista   =  sessionStorage.getItem('seleccionados').split(",");
// let bandera = (sessionStorage.getItem('esValido') == 'true');
// let email   =  sessionStorage.getItem('email');

// console.log(typeof lista);   //object ["1","2","3"];
// console.log(typeof bandera); //boolean;
// console.log(typeof email);   //string;

// RECORRIENDO EL STORAGE
// El bucle a emplear es for con el método key:

//Ciclo para recorrer las claves almacenadas en el objeto localStorage
// for (let i = 0; i < localStorage.length; i++) {
//     let clave = localStorage.key(i);
//     console.log("Clave: "+ clave);
//     console.log("Valor: "+ localStorage.getItem(clave));
// }

// ELIMINAR DATOS DEL STORAGE

// método removeItem o clear:

// localStorage.setItem('bienvenida', '¡Hola Code!');
// sessionStorage.setItem('esValido', true);

// localStorage.removeItem('bienvenida');
// sessionStorage.removeItem('esValido');
// localStorage.clear()    //elimina toda la información
// sessionStorage.clear() //elimina toda la información

// hecho en clase

// localStorage.setItem("totalCarrito", 1500); //para setear la key y value
//sessionStorage, se matiene por ventana de navegador y no por pestaña
// const totalCarrito = localStorage.getItem("totalCarrito"); //devuelve strings

// console.log(totalCarrito)

// GUARDAR ARRAYS
// const alumnos = ["Joaquin", "Gonzalo", "Agustina"];

// localStorage.setItem("alumnos", alumnos);

// const alumnos = localStorage.getItem("alumnos");

// const alumnosArray = alumnos.split(","); // paso una "," porque el string que devuelve, separa los nombres con ",". paso el mismo elemento para que el split lo convierta en un array

// console.log(alumnosArray.join(",")); // el join(), hace lo contrario al split

// RECORRER EL STORAGE

// for(let i = 0; i < localStorage.length; i++){
//     // indices de las pocisiones de las claves
//     const clave = localStorage.key(i);
//     const valor = localStorage.getItem(clave);
//     console.log(`para clave ${clave}, el valor es ${valor}`)
// };

// ELIMINAR DATOS DEL STORAGE

// localStorage.removeItem("alumnos") // elimina la clave que recibe
//localStorage.clear(); // elimina todo del storage


/*STORAGE INTERACTUANDO CON EL HTML */

// const formulario = document.getElementById("formulario")

// formulario.addEventListener("submit", (e) => {
//     e.preventDefault();


//     // guardamos valor en localstorage
//     localStorage.setItem("formularioEnviado", 1);

//     // chequear el formulario
//     chequearFormularioEnviado()
// })

// //  chequear si ya envio el formulario

// function chequearFormularioEnviado(){
//     const formularioEnviado = localStorage.getItem("formularioEnviado");

// if(formularioEnviado !== null){
//     formulario.style.display = "none";
// }
// }

// chequearFormularioEnviado()


// JSON

// ALMACENAR OBJETOS EN STORAGE

// hay que tener en cuenta que tanto la clave como el valor se almacenan en strings

// Para guardar la información correctamente hay que transformar el objeto a JSON.

// const producto1 = { id: 2, producto: "Arroz" };
// localStorage.setItem("producto1", producto1); // Se guarda [object Object]

// ACCESO TIPO OBJETO

// //Guarda una clave
// localStorage.numeroPrueba = 5;

// //Leer una clave
// alert( localStorage.numeroPrueba ); // 5

// let clave = 'toString';	 //toString método reservado	
// localStorage[clave] = "6"; //No se guarda este dato

// ACCESO TIPO OBJETO

//Guarda una clave
// localStorage.numeroPrueba = 5;

//Leer una clave
// alert( localStorage.numeroPrueba ); // 5

// let clave = 'toString';	 //toString método reservado	
// localStorage[clave] = "6"; //No se guarda este dato

// CONVERSIÓN DE OBJETOS Y ALMACENAMIENTO
// CONVERSIONES DE/HACIA JSON

// STRINGIFY
// const producto1 = { id: 2, producto: "Arroz" };
// const enJSON    = JSON.stringify(producto1);

// console.log(enJSON); // {"id":2,"producto":"Arroz"}
// console.log(typeof producto1); // object
// console.log(typeof enJSON);    // string

// localStorage.setItem("producto1", enJSON);
// // Se guarda {"id":2,"producto":"Arroz"}

// PARSE
// const enJSON    = '{"id":2,"producto":"Arroz"}';
// const producto1 = JSON.parse(enJSON);

// console.log(typeof enJSON);     // string
// console.log(typeof producto1);  // object
// console.log(producto1.producto); // Arroz

// const producto2 = JSON.parse(localStorage.getItem("producto1"));
// console.log(producto2.id);  // 2 

// EJEMPLO APLICADO: ALMACENAR ARRAY DE OBJETOS
// const productos = [{
    
//         id: 1,
//         producto: "Arroz",
//         precio: 125
//     },
//     {
//         id: 2,
//         producto: "Fideo",
//         precio: 70
//     },
//     {
//         id: 3,
//         producto: "Pan",
//         precio: 50
//     },
//     {
//         id: 4,
//         producto: "Flan",
//         precio: 100
//     }
// ];

// const guardarLocal = (clave, valor) => {
//     localStorage.setItem(clave, valor)
// };
// //Almacenar producto por producto
// for (const producto of productos) {
//     guardarLocal(producto.id, JSON.stringify(producto));
// }
// // o almacenar array completo
// guardarLocal("listaProductos", JSON.stringify(productos));


// EJEMPLO APLICADO: OBTENER ARRAY ALMACENADO
// class Producto {
//     constructor(obj) {
//         this.nombre  = obj.producto.toUpperCase();
//         this.precio  = parseFloat(obj.precio);
//     }
//     sumaIva() {
//         this.precio = this.precio * 1.21;
//     }
// }
// //Obtenemos el listado de productos almacenado
// const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
// const productos = [];
// //Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
// for (const objeto of almacenados)
//     productos.push(new Producto(objeto));
// //Ahora tenemos objetos productos y podemos usar sus métodos
// for (const producto of productos)
//     producto.sumaIva();


// RECUPERAR DATOS

// EJEMPLO APLICADO: RECUPERAR ESTADOS PREVIOS
// let usuario;
// let usuarioEnLS = JSON.stringify(localStorage.getItem(‘usuario’))


// // Si había algo almacenado, lo recupero. Si no le pido un ingreso
// if (usuarioEnLS) {
//     usuario = usuarioEnLS
// } else {
//     usuario = prompt(‘Ingrese su nombre de usuario’)
// }

// EJEMPLO APLICADO: RECUPERAR ESTADOS PREVIOS

// let carrito = []
// let carritoEnLS = JSON.stringify(localStorage.getItem(‘carrito’))

// // Inicializo mi app con carrito como array vacío o con el registro que haya quedado en LS
// if (carritoEnLS ) {
//     carrito = carritoEnLS 
// }

// // Función que renderizaría el carrito
// renderCarrito( carrito ) 

// json es formato de texto para convertir un objeto en string. puede ser usado sin la necesidad de JavaScript


// HECHO EN CLASE

// guardar objeto json
// const alumno = {
//     nombre: "gonzalo",
//     edad : 18,
// }

// forma que no se tiene que hacer
// localStorage.setItem("alumno", alumno);

// forma que si se tiene que hacer

// const alumnoJson =  JSON.stringify(alumno);

// localStorage.setItem("alumno", alumnoJson);


// obtener un objeto json

// const alumno = localStorage.getItem("alumno");

// // console.log(alumno) devuelve un json (string en ese formato)

// const alumnoJson = localStorage.getItem("alumno");
// const alumno = JSON.parse(alumnoJson)
// console.log(alumno)


// arrays de objetos
// guardar array de objetos
// const libros =[
//     {
//         nombre: "libro 1",
//         precio: 200,
//         cantidadPaginas: 10,
//     },
//     {
//         nombre: "libro 2",
//         precio: 400,
//         cantidadPaginas: 15,
//     },
//     {
//         nombre: "libro 3",
//         precio: 100,
//         cantidadPaginas: 5,
//     }
// ]

// localStorage.setItem("libros", JSON.stringify(libros));

// obtener array de objetos
// const librosJson = localStorage.getItem("libros");

// const libros = JSON.parse(librosJson);
// console.log(libros[1].nombre)

min 01:00:00
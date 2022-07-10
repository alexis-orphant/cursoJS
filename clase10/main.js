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

const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    
    localStorage.setItem("formularioEnviado", 1);

    // min 33:17
})
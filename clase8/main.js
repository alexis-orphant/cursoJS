// DOM (DOCUMENT OBJECT MODEL)

//acceder a las etiquetas
const body = document.body;
const head = document.head;

// ACCEDER A LOS NODOS
// getElementById()
// getElementsByClassName()
// getElementsByTagName()


//GETELEMENTBYID()

// let div     = document.getElementById("app");
// let parrafo = document.getElementById("parrafo1");
// console.log(div.innerHTML);
// console.log(parrafo.innerHTML);

// const titulo = document.getElementById("titulo");
// console.log(titulo.innerHTML);

// const contenedor = document.getElementById("contenedor")
// console.log(contenedor.innerHTML)

// GETELEMENTSBYCLASSNAME() devuelve una coleccion de elementos

// let paises = document.getElementsByClassName("paises");
// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

// const parrafo = document.getElementsByClassName("parrafo");
// console.log(parrafo) 
// console.log(parrafo[2].innerHTML) //para acceder a cada parrafo como en los arrays 0=1 1=2 2=3


//GETELEMENTSBYTAGNAME() devuelve una coleccion de elementos

// let contenedores = document.getElementsByTagName("div");
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);

// const parrafos = document.getElementsByTagName("p");
// console.log(parrafos)  //se puede trabajar como un array como en getelementsbyclasname


// RECORRE HTMLCollection CON FOR...OF

// let paises       = document.getElementsByClassName("paises");
// let contenedores = document.getElementsByTagName("div");

// for (const pais of paises) {
//     console.log(pais.innerHTML);
// }

// for (const div of contenedores) {
//     console.log(div.innerHTML);
// }

// const parrafos = document.getElementsByTagName("p");  //se puede hacer con GETELEMENTSBYCLASSNAME()

// for(const parrafo of parrafos) {
//     console.log(parrafo);
// }


// MODIFICAR NODOS  o elementos

// const titulo = document.getElementById("titulo");
// // console.log(titulo.innerText)

// titulo.innerText = "Nuevo Titulo editado"

// const parrafos = document.getElementsByClassName("parrafo")

// for(const parrafo of parrafos){ //recorremos la coleccion de elementos
//     parrafo.innerText = "parrafo editado"; //en cada iteracion edito el parrafo
// }

// const divs = document.getElementsByTagName("div");

// for(const div of divs){
//     div.innerText = "div editado"
// };

// Modificar innerHTML

// const contenedor = document.getElementById("contenedor");

// contenedor.innerHTML ="<h2 id='titulo'>Titulo</h2>";

// const titulo = document.getElementById("titulo");

// titulo.innerText = "TITULO EDITADO";

// AGREGAR O ELIMINAR NODOS

// creacion de elementos
// crate element y append

// console.log(document)
// const contenedor = document.getElementById("contenedor");

// // contenedor.innerHTML = "" + "<h2 id='titulo' class='clase-titulo font-weight-bold mr-2'>TITULO</h2>" + 
// // "<p class='parrafo'>Texto 1</p>" +
// // "<p class='parrafo'>Texto 2</p>" +
// // "<p class='parrafo'>Texto 3</p>";

// const h2 = document.createElement("h2");

// h2.innerText = "TITULO";
// h2.className = "clase-titulo";

// contenedor.append(h2);

// const parrafo = document.createElement("p");
// parrafo.innerText = "parrafo 1";

// contenedor.append(parrafo)

// eliminar elemento remove()

// const h3 = document.getElementById("titulo");

// h3.remove();   

// OBTENER DATOS DE INPUTS
// .value

// const select = document.getElementById("select");

// select.value = "opcion-3"

// const input = document.getElementById("input1");

// input.value = "valor nuevo"

// CRANDO OPCIONES DESDE UN ARRAY

// const opciones = ["opcion 1", "opcion 2", "opcion 3", "opcion 4"];

// const select = document.getElementById("select");


// // recorrer opciones 
// for(let i = 0; i < opciones.length; i++){

//     // crear opcion
//     const option = document.createElement("option")
//     option.value = i;
//     option.innerText = opciones[i];

//     // agregar option al select
//     select.append(option);
// }


// PLANTILLAS DE TEXTO
// template strings

// const str1 = "texto";
// const str2 = "texto 2";
//forma vieja
// const textoConcatenado = "el string 1 es " + str1 + " y el string 2 es " + str2;

// forma nueva 
// const textoConcatenado = `el string 1 es ${str1} y el string 2 es ${str2}`;

// console.log(textoConcatenado)

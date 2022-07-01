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

const parrafos = document.getElementsByClassName("parrafo")

for(const parrafo of parrafos){ //recorremos la coleccion de elementos
    parrafo.innerText = "parrafo editado"; //en cada iteracion edito el parrafo
}

const divs = document.getElementsByTagName("div");

for(const div of divs){
    div.innerText = "div editado"
};
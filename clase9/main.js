// EVENTOS

// definir eventos
// const boton = document.getElementById("boton1");

// OPCION 1

// boton.addEventListener("click", () => {
//     alert("se clickeo el boton")
// })

// OPCION 2

// boton.onclick = () => {
//     console.log("se clickeo el boton")
// }

// no importa sobre que etiqueta se aplique el evento, todos los eventos funcionan para todas las etiquetas html


// agregar elemento a la lista cada vez que se aprete el boton

// const boton = document.getElementById("boton1");
// const lista = document.getElementById("lista");

// boton.addEventListener("click", () => {

//     // creo el LI
//     const numeroRandom = Math.random();

//     const li = document.createElement("li");
//     li.innerText = "elemento random " + numeroRandom;


//     // agregar LI al elemento lista
//     lista.append(li)

// });

// Evento mas comunes
// eventos del mouse
// evento click
// const boton = document.getElementById("boton1");
// const lista = document.getElementById("lista");
//
// boton.addEventListener("click", () => {
//
//     // Creo el LI
//     const numeroRandom = Math.random();
//     const li = document.createElement("li");
//     li.innerText = "Elemento random " + numeroRandom;
//
//     // Agregar LI al elemento lista
//     lista.append(li);
// });

// boton.onclick = () => {
//     console.log("Se clickeó el botón");
// }

// evento change y keyup
// se ejecuta cuando se deja de hacer "focus" en el elemento 
// const inpunt1 = document.getElementById("input1");

// inpunt1.addEventListener("change", () => {
//     console.log("semodifico el input")
// })

// inpunt1.addEventListener("keyup", () => {
//     // console.log("se ejecuto el evento keyup")
//     console.log(inpunt1.value);
// })

// el evento input se comprta igual que el keyup, el input se ejecuta cada vez que se cambia el value

// EVENTO DE SUBMIT


// EVENTO DEL MOUSE
// const caja1 = document.getElementById("caja1");

// caja1.addEventListener("mousedown", () => {

// caja1.style.backgroundColor = "green";

// console.log("se ejecuto mouse down")
// })

// caja1.addEventListener("mouseup", () => {
//     caja1.style.backgroundColor = "red";
//     console.log("se ejecuto mouse up")
// })


// const caja2 = document.getElementById("caja2");

// caja2.addEventListener("mouseover", () => {
//     console.log("a")
//     });

// caja2.addEventListener("mouseout", () => {
//     console.log("b")
//         });

// min 46:00
//lo ingresado en el prompt jS lo lee como una string y si se suma algo lo concatena
//por lo tante el valor ingresado no se suma a otro valor
/*const nombre = prompt("ingrese su nombre");
const materias = prompt("ingrese cantidad de materias");
const mensajeFinal = "su nombre es: " + nombre + " y tiene " + materias + " materias";
alert(mensajeFinal);*/

//transforma el numero de un string a un numero entero que si se puede usar en cuentas
const materiaUno = parseInt(prompt("ingrese primer calificacion"));
const materiaDos = parseInt(prompt("ingrese segunda calificacion"));
const materiaTres = parseInt(prompt("ingrese tercera calificacion"));
const materiaCuatro = parseInt(prompt("ingrese cuarta calificacion"));
const materiaCinco = parseInt(prompt("ingrese quinta calificacion"));
const materiaSeis = parseInt(prompt("ingrese sexta calificacion"));

const promedio = (materiaUno + materiaDos + materiaTres + materiaCuatro + materiaCinco + materiaSeis) / 6;
const resultado = "Su promedio es: "

alert(resultado + promedio);
console.log(resultado + promedio);
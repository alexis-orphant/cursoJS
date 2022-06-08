//control de flujos 


// = asignar valor
//== comparar. operador de equivalencia 



// variables

/*const numero = parseInt(prompt("ingrese un numero"));
let multiplicacion = numero * 2;

if (multiplicacion == 10) {
    console.log("el numero es igual a 10");
} else {
    console.log("el numero no es igual a 10")
};*/

//const usuario = prompt("ingrese su nombre de usuario");
/*const edad = parseInt(prompt("ingrese du edad"));

if (edad >= 18) {
    console.log("acceso permitido")
} else {
    console.log("usted es menor de edad")
}*/

// if else, else if

/*const edad = parseInt(prompt("ingrese du edad"));
if(edad < 18){
    console.log("usted es menor de edad");
} else if(edad < 30){
    console.log("usted tiene entre 18 y 30 años");
} else if(edad < 60){
    console.log("usted tiene entre 30 y 60 años");
} else {
    console.log("usted es mayor a 60");
}*/

// Booleanos

/*const precio = parseInt(prompt("ingrese el precio"));
const descuento = precio / 2;
const esMayor50 = (descuento > 50);
//console.log(esMayor50);

if(esMayor50){
    console.log("es mayor que 50");
} else {
    console.log("es menor de 50");
}*/

/*const anioNacimiento = parseInt(prompt("ingrese su año de nacimiento"));
const edad = 2022 - anioNacimiento;

const esMayor21 = (edad > 21);

if(esMayor21){
    console.log("es mayor a 21");
    console.log("usted tiene: " + edad + " años");
}else{
    console.log("usted es menor a 21");
    console.log("usted tiene: " + edad + " años");
}*/

//condiciones compuestas con && (and, Y)
/*const nombre = prompt("ingrese su nombre");
const edad = prompt("ingrese su edad");
//se deben cumplir las 2 condiciones para que se ejecute 
if((nombre !="") && (edad !="")){
    console.log(nombre + " " + edad);
}*/

//condiciones compuestas con || (or, o)
/*const numero = parseInt(prompt("ingrese un numero"));

if((numero < 10) || (numero > 20)){
    console.log("el numero es menor a 10 o mayor a 20");
}*/

//condiciones compuestas por && y ||

const numero = parseInt(prompt("ingrese un numero"));
const nombre = prompt("ingrese su nombre")

if((nombre !="") && ((numero <= 20) || (numero >= 30))){
    console.log("su numero no esta enre 20 y 30 y su nombre está definido")
}else {
    console.log("ingrese valor valido")
}
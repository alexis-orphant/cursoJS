// WHILE (pedir la edad hasta ingresar 18)
// let edad = parseInt(prompt("ingrese su edad"));

// while(edad < 18){
//     alert("usted es menor de 18");
//     edad = parseInt(prompt("ingrese su edad"));
// }
// console.log("usted es mayor de 18")

// EJ 1 

// let texto = prompt("ingrese un texto");
// let resultado = "";

// while(texto !=="ESC"){
//     resultado = resultado + texto + ", "
//     texto = prompt("ingrese otro texto");
// }
// alert("usted ingreso: " + resultado);

// EJ 2

// let numero = parseInt(prompt("ingrese un numero mayor a 0"));

// for(i = numero; i >= 0; i--){
//     console.log(i)
// }

// let numero = parseInt(prompt("ingrese un numero mayor a 0"));

// if(numero > 0){
// while(numero >= 0){
//     console.log(numero)
//     numero = numero - 1;
// }
// } else {
//     console.log("ingreso un numero menor a 0")
// }

// EJ 3

let numero = parseInt(prompt("ingrese un numero"));

// for(i = numero; i >= 0; i--){
//     let resultado = i % 2;
//     if(resultado !== 0){
//         continue;
//     }
//     console.log(i)
// }
// console.log("sali del for")

while(numero >= 0){
    numero = numero % 2;
    if(numero !== 0){
        continue;
    }
    console.log(numero)
}
console.log("sali del while")
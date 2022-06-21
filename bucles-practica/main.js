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

// let numero = parseInt(prompt("ingrese un numero"));

// for(i = numero; i >= 0; i--){
//     let resultado = i % 2;
//     if(resultado !== 0){
//         continue;
//     }
//     console.log(i)
// }
// console.log("sali del for")

// EJ 4

// let numeroUno = parseInt(prompt("ingrese un numero"));
// let numeroDos = parseInt(prompt("ingrese otro numero"));
// let resultado = 0;

// for(i = 0; i < numeroUno; i++){
//     resultado = resultado + numeroDos;
// }
//  console.log(resultado)

// for(i = 0; i < numeroDos; i++){
//     resultado += numeroUno;
// }
// console.log(resultado);

// EJ 9 ver clase para hacerlo bien
// let cantidadDeNumeros = parseInt(prompt("ingrese un numero"));

// while(cantidadDeNumeros <=){
//     cantidadDeNumeros = parseInt(prompt("ingrese un numero"));
// }

// let mayor = 0;
// let menor = 0;
// let media = 0;

// for(i = 1; i <= cantidadDeNumeros; i++){
//     let numero = parseInt(prompt("ingrese el numero " + i));
//     //calcular el mayor
//     if(numero > mayor){
//         mayor = numero;
//     }
//     // calcular el menor
//     if(numero < menor){
//         menor = numero;
//     }
//     //calcular la media 
//     media = media + numero;
// }

// media = media / cantidadDeNumeros;
// console.log("el mayor es: " + mayor)
// console.log("el menor es: " + menor)
// console.log("la media es: " + media)

// EJ 5 
// let dividendo = parseInt(prompt("ingrese el dividendo"));
// let divisor = parseInt(prompt("ingrese el divisor"));
// resultado = 0;

// while(dividendo >= divisor){
//     dividendo = dividendo - divisor;
//     resultado += 1;
// }

// // EJ 8
// let numero = parseInt(prompt("ingrese un numero"));
// let resultado = 0;


// while(numero > 0){
//     numero = parseInt(numero / 10);
//     resultado += 1
// }
// console.log(resultado)
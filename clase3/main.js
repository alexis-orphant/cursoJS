//---------------------------------------------------
// BUCLES FOR -------------
// USAR CUANDO ALGO SE REPITE X CANTIDAD DE VECES
/*for (let i = 0; i <= 10; i++) {
    console.log(i);
}*/

/*for (let i = 1; i <= 5; i++){
    const nombreAlumno = prompt("ingrese el nombre del alumno " + i);
    alert("el nombre del alumno " + i + "es: " + nombreAlumno);
}*/

// caulcular la tabla de un numero
/*let numero = parseInt(prompt("ingrese un numero"));

for (let i = 0; i <=10; i++) {
    const resulatado = numero * i;
    alert("resultado = " + numero + " X " + i + " igual a: " + resulatado);
}*/

// for (let i = 1; i <= 3; i++) {
//     //nombre del alumno
//     const alumno = prompt("ingrese el nombre del alumno");
//     //notas
//     const nota1 = parseInt(prompt("ingrese la nota 1"));
//     const nota2 = parseInt(prompt("ingrese la nota 2"));
//     const nota3 = parseInt(prompt("ingrese la nota 3"));
//     //promedio
//     const promedio = (nota1 + nota2 + nota3) / 3;
    
//     alert("el nombre del alumno " + i + " es: " + alumno + " y su promedio es: " + promedio);
// }

/*for (let i = 1; i <= 5; i++) {

    //nombre del alumno
    const alumno = prompt("ingrese el nombre del alumno");

    //notas
    let promedio = 0 ;

    for(let j = 1; j <= 3; j++){

        const nota = parseInt(prompt("ingrese la nota " + j));

        promedio = promedio + nota;
    }   
    //promedio
    promedio = promedio / 3
    
    alert("el nombre del alumno " + i + " es: " + alumno + " y su promedio es: " + promedio);
}*/

// SENTENCIA BREAK se usa para salir del FOR cuando se encuentra cierto valor
// SENTECIA CONTINUE ejecuta la actualizacion y sale y vuelve a la siguiente iteracion

//------------------------------------------------------------
// WHILE. Se cumple mientras la condicion sea verdadera. va con una condicion que sea verdadera o falsa
//se puede ejecutar 0 veces
//---------------------

// let entrada = prompt("ingrese un dato");

// while(entrada !== "ESC"){
//     alert("el usuario ingreso: " + entrada);
//     entrada = prompt("vuelva a ingresar un dato");
// }
// console.log("salgo del WHILE")

// let i = 0;
// while(i < 10){
//     console.log(i);
//     i++
// }
// console.log("salgo del while")

//---------------------------------------------------
// DO WHILE  48:40
//-----------------------------------------------------
// se puede ejecutar al menos 1 vez porque hace la comparacion al final y no al principio

// let i = 0;

// do {
//     console.log(i);
//     i = i + 1;
// } while (i < 10);

// console.log("salgo del do while")

//-------------------------
// SWITCH
//-------------------------
// MULTIPLES condiciones sobre la misma variable

let numero = parseInt(prompt("ingrese un numero"));

// if( numero === 2) {
//     console.log("el numero es igual a 2");
// } else if(numero === 4) {
//     console.log("el numero es igual a 4");
// } else if(numero === 6) {
//     console.log("el numero es igual a 6");
// } else {
//     console.log("el numero no es igual a 2, 4 o 6")
// }
switch(numero) {

    case 2:
        console.log("el numero es igual a 2");
        break;

    case 4:
        console.log("el numero es igual a 4");
        break;

    case 6:
        console.log("el numero es igual a 6");
        break;

    default:
        console.log("el numero no es 2, 4 o 6");
        break;
}
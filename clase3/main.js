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

for (let i = 1; i <= 5; i++) {

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
}
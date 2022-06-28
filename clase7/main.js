// HIGHER ORDER FUNCTIONS   funciones de orden superior 

// abstraccion 


// RETORNAR FUNCIONES

// function mayorQue(n) {
//     return (m) => m > n   // funcion flecha =>
// }

// let mayorQueDiez = mayorQue(10)

// console.log( mayorQueDiez(12) )  //  true
// console.log( mayorQueDiez(8) )  //  false

// otro ejemplo 
// function asignarOperacion(op) {
//     if (op == "sumar") {
//         return (a, b) => a + b
//     } else if (op == "restar") {
//         return (a, b) => a - b
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log( suma(4, 6) )  //  10
// console.log( resta(5, 3) )  //  2

// otro ejemplo

function calcular(impuesto) {
    return (precioProducto) => precioProducto * impuesto;
};

let calcularImpuestoIVA = calcular(0.21);
let calcularImpuestoDelDiez = calcular(0.10);
let calcularImpuestoDelQuince = calcular(0.15);

console.log(calcularImpuestoIVA(50));
console.log(calcularImpuestoDelDiez(50));
console.log(calcularImpuestoDelQuince(50));
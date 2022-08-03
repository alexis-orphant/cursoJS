// mostrar el total del carrito
const totalCarrito = document.getElementById("total-carrito");

totalCarrito.innerHTML = `
                <p class="fs-4 p-total">el total de compra es: $ ${carrito.precio}</p>`

// funcion para mostrar el total de compra
function mostrarTotalCompra (pTotal, producto){
    producto.precio = pTotal;
    const toalCompra = producto.sumarPrecios();
}

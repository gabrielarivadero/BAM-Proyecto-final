// Variables y constantes
const productos = ["Vestido 1", "Vestido 2", "Vestido 3", "Vestido 4", "Vestido 5", "Producto 6"];
const botonGanar = document.getElementById("botonGanar");
const resultado = document.getElementById("resultado");

// Función para realizar el sorteo
function realizarSorteo() {
    const numeroAleatorio = Math.floor(Math.random() * productos.length);
    return productos[numeroAleatorio];
}



// Evento al hacer clic en el botón
botonGanar.addEventListener("click", function () {
    const productoGanado = realizarSorteo();
    resultado.textContent = `¡Has ganado un ${productoGanado}! ¡Felicidades!`;
});


const btnComenzar = document.querySelector('.btn-comenzar');

// Añadir un event listener al botón para mostrar el mensaje emergente
btnComenzar.addEventListener('click', (event) => {
    event.preventDefault(); // Prevenir que el enlace navegue a otra página
//
    // Mostrar el mensaje emergente
    alert("¡Bienvenido al Cosmos! Prepárate para un viaje lleno de estrellas.");
});

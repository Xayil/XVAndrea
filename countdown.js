// Función para actualizar el contador regresivo
function updateCountdown() {
    const countdownElement = document.getElementById("countdown");
    const currentDate = new Date();
    const eventDate = new Date("2023-11-8 23:59:59"); // Fecha de finalización deseada (año, mes, día, hora, minuto, segundo)

    const timeRemaining = eventDate - currentDate;

    if (timeRemaining <= 0) {
        countdownElement.textContent = "¡Evento finalizado!";
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
}

// Actualizar el contador cada segundo
setInterval(updateCountdown, 1000);

// Iniciar el contador
updateCountdown();

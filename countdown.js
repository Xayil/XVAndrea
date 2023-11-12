// Función para actualizar el contador regresivo
function updateCountdown() {
    const countdownElement = document.getElementsByClassName("countdown-item");

    const currentDate = new Date();
    const eventDate = new Date("2023-12-28 07:59:59"); // Fecha de finalización deseada (año, mes, día, hora, minuto, segundo)

    const timeRemaining = eventDate - currentDate;

    if (timeRemaining <= 0) {
        // Evento finalizado
        countdownElement.forEach(item => {
            item.querySelector(".countdown-value").textContent = "0";
        });
    } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Actualiza los valores de las cajas
        countdownElement[0].querySelector(".countdown-value").textContent = days;
        countdownElement[1].querySelector(".countdown-value").textContent = hours;
        countdownElement[2].querySelector(".countdown-value").textContent = minutes;
        countdownElement[3].querySelector(".countdown-value").textContent = seconds;
    }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Inicia el contador
updateCountdown();

var counter = document.querySelector(".contador");
var contador = 0;
var startTime = Date.now(); // Obtener el tiempo actual en milisegundos

function incrementCounter() {
    contador++;
    var currentTime = Date.now(); // Obtener el tiempo actual en milisegundos
    var elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calcular el tiempo transcurrido en segundos
    var timeString = formatTime(elapsedTime); // Formatear el tiempo transcurrido como una cadena "HH:MM:SS"
    counter.textContent = timeString; // Actualizar el contenido del contador con el tiempo transcurrido
    counter.style.fontSize = "90px"
}


function formatTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var remainingSeconds = seconds % 60;

    return (
        padZero(hours) + ":" + padZero(minutes) + ":" + padZero(remainingSeconds)
    );
}

function padZero(number) {
    return number.toString().padStart(2, "0");
}

incrementCounter(); // Llama a la función para incrementar el contador

// Suponiendo que quieras llamar a la función múltiples veces, puedes usar un bucle setInterval
// por ejemplo, para incrementar el contador cada segundo durante 10 segundos:
var intervalo = setInterval(incrementCounter, 1000);

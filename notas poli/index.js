// Obtener todos los elementos de convocatorias
var convocatoriasElements = document.querySelectorAll('.convocatorias');

// Recorrer cada elemento de convocatorias
convocatoriasElements.forEach(function(element) {
    // Agregar evento de clic a cada elemento
    element.addEventListener('click', function() {
        // Obtener el elemento del contenido de convocatorias correspondiente
        var contenidoConvocatorias = this.nextElementSibling;
        
        // Alternar la clase "visible" para mostrar u ocultar el contenido
        contenidoConvocatorias.classList.toggle('visible');
    });
});
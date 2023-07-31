var elemento = document.querySelector('.corazon');
var element3 = document.getElementById('descripcion');

elemento.addEventListener('click', function() {
  if (this.style.color === 'red') {
    this.style.color = 'white';
    element3.textContent = "331 Me gusta"

  } else {
    this.style.color = 'red';
    element3.textContent = "332 Me gusta";
  }
});










// Obtén todos los elementos del menú desplegable
const opcionesTrimestre = document.querySelectorAll('#opcionesTrimestre .dropdown-item');

// Agrega un evento "click" a cada elemento del menú desplegable
opcionesTrimestre.forEach(opcion => {
  opcion.addEventListener('click', (event) => {
    // Obtiene el valor del atributo "data-value" del elemento seleccionado
    const value = event.target.getAttribute('data-value');
    // Llama a la función "changeTri()" con el valor seleccionado
    usuario.changeTri(value);
    // Recarga la página
    location.reload();
  });
});



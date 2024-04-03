window.addEventListener("load", function () {
  document.querySelector(".container").classList.add("mostrar");
});

var nuevosContenidos = [
  "Las pruebas psicológicas no están libres de riesgos.",
  "Ni siquiera de abusos o malos usos.",
  "Recuerda que no existen pruebas malas.",
  "Sino psicólogos sin preparación.",
  "O en el peor de los casos, un psicólogo sin ética.",
  "Por eso recuerda aplicar bien los principios éticos.",
  "Y serás un profesional en todas sus palabras ;)"
];

var indiceActual = 0;

function mostrarLetraPorLetra(texto, elemento) {
  let index = 0;

  function mostrarSiguienteLetra() {
    elemento.textContent += texto[index];
    index++;

    if (index < texto.length) {
      setTimeout(mostrarSiguienteLetra, 40); 
    } else {
      elemento.classList.add("mostrar");
    }
  }

  mostrarSiguienteLetra();
}

function cambiarContenido() {
  var contenidoDialogo = document.getElementById("contenidoDialogo");

  contenidoDialogo.classList.remove("mostrar");

  setTimeout(function() {
    contenidoDialogo.textContent = "";
    mostrarLetraPorLetra(nuevosContenidos[indiceActual], contenidoDialogo);
    indiceActual++;

    if (indiceActual === nuevosContenidos.length) {
      indiceActual = 0;
    }

    contenidoDialogo.classList.add("mostrar"); 
  }, 1000);
}



// Obtenemos los botones y los contenidos
const porqueBtn = document.getElementById('porqueBtn');
const paraQueBtn = document.getElementById('paraQueBtn');
const porqueContenido = document.getElementById('porqueContenido');
const paraQueContenido = document.getElementById('paraQueContenido');

// Asignamos eventos de clic a los botones
porqueBtn.addEventListener('click', () => {
    // Mostramos el contenido correspondiente y ocultamos el otro
    porqueContenido.style.display = 'block';
    paraQueContenido.style.display = 'none';
});

paraQueBtn.addEventListener('click', () => {
    // Mostramos el contenido correspondiente y ocultamos el otro
    porqueContenido.style.display = 'none';
    paraQueContenido.style.display = 'block';
});

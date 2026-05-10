// Selecciono los elementos del HTML con los que voy a interactuar
const personaje = document.getElementById('personaje');
const obstaculo = document.getElementById('obstaculo');
const puntosDisplay = document.getElementById('puntos');

// Inicializo mis variables de control del juego
let puntos = 0;
let juegoTerminado = false;


// 1. LÓGICA DE SALTO

// Escucho el evento de pulsar cualquier tecla en la ventana del navegador
document.addEventListener('keydown', function(evento) {
    // Compruebo si la tecla pulsada es la barra espaciadora ('Space')
    if (evento.code === 'Space') {
        saltar();
    }
});

// Creo la función que hace saltar a mi personaje
function saltar() {
    // Evito que salte si ya está en el aire o si el juego ya ha terminado
    if (personaje.classList.contains('salto') || juegoTerminado) {
        return;
    }

    // Le añado la clase 'salto' para que CSS inicie la animación
    personaje.classList.add('salto');

    // Configuro un temporizador para quitarle la clase después de 500ms
    // (exactamente lo que dura mi animación en CSS)
    setTimeout(function() {
        personaje.classList.remove('salto');
    }, 500);
}


// 2. MARCADOR DE PUNTOS

// Uso un intervalo para sumar 1 punto cada segundo (1000 milisegundos)
const intervaloPuntos = setInterval(function() {
    // Solo sumo puntos si sigo vivo
    if (!juegoTerminado) {
        puntos++;
        puntosDisplay.textContent = puntos; // Actualizo el HTML
    }
}, 1000);


// 3. LÓGICA DE COLISIÓN (Game Over)

// Reviso constantemente (cada 10 milisegundos) si los elementos chocan
const intervaloColision = setInterval(function() {
    
    // Obtengo las coordenadas exactas de ambos elementos en la pantalla
    // Esto me da una "caja virtual" con sus posiciones top, bottom, left y right
    const posPersonaje = personaje.getBoundingClientRect();
    const posObstaculo = obstaculo.getBoundingClientRect();

    // Compruebo si las dos cajas se están solapando:
    // 1. El lado izquierdo del obstáculo ha alcanzado el lado derecho del personaje
    // 2. El obstáculo aún no ha pasado por completo al personaje
    // 3. El personaje no está lo suficientemente alto para esquivarlo
    if (
        posObstaculo.left < posPersonaje.right &&
        posObstaculo.right > posPersonaje.left &&
        posPersonaje.bottom >= posObstaculo.top
    ) {
        
        // Colisión detectada, Cambio mi variable de control
        juegoTerminado = true;
        
        // Freno el obstáculo congelando su animación CSS
        obstaculo.style.animation = 'none';
        
        // Freno el contador de puntos y dejo de buscar colisiones
        clearInterval(intervaloPuntos);
        clearInterval(intervaloColision);
        
        // Muestro el mensaje de fin de juego en pantalla
        alert('¡Has perdido! Puntuación final: ' + puntos + '\nDale a Aceptar para intentarlo de nuevo.');

        // REINICIO AUTOMÁTICO: Recargo la página actual para resetear todo el juego
        location.reload();
    }
}, 10);

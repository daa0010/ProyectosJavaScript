// Selecciono el contenedor principal donde voy a dibujar el tablero
const tablero = document.getElementById('tablero');

// Defino el orden de las piezas principales para las filas de los extremos
const piezasNegras = ['♜', '♞', '♝', '♛', '♚', '♝', '♞', '♜'];
const piezasBlancas = ['♖', '♘', '♗', '♕', '♔', '♗', '♘', '♖'];

// Inicio un bucle para crear las 8 filas del tablero
for (let fila = 0; fila < 8; fila++) {
    
    // Por cada fila, inicio otro bucle para crear las 8 columnas
    for (let columna = 0; columna < 8; columna++) {
        
        // Creo un nuevo div en memoria que será mi casilla
        const casilla = document.createElement('div');
        
        // Le añado la clase base 'casilla'
        casilla.classList.add('casilla');

        // Calculo si la posición es par o impar para el color
        if ((fila + columna) % 2 === 0) {
            // Si la suma es par, la pinto de blanco
            casilla.classList.add('blanca');
        } else {
            // Si es impar, la pinto de negro
            casilla.classList.add('negra');
        }

        // Añado las piezas según la fila
        // Compruebo en qué fila estoy para imprimir el emoji correspondiente
        if (fila === 0) {
            // Fila 0: Asigno la pieza negra que toca según el número de columna actual
            casilla.textContent = piezasNegras[columna];
        } else if (fila === 1) {
            // Fila 1: Todos son peones negros
            casilla.textContent = '♟';
        } else if (fila === 6) {
            // Fila 6: Todos son peones blancos
            casilla.textContent = '♙';
        } else if (fila === 7) {
            // Fila 7: Asigno la pieza blanca que toca según el número de columna actual
            casilla.textContent = piezasBlancas[columna];
        }

        // Inserto la casilla terminada dentro de mi div '#tablero'
        tablero.appendChild(casilla);
    }
}
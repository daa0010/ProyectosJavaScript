# Proyectos JavaScript

Bienvenido a mi repositorio de proyectos de JavaScript. Este repositorio contiene dos retos de programación diseñados para poner a prueba la manipulación dinámica del DOM, el uso de bucles anidados, la gestión de eventos y la creación de sistemas de colisiones.

---

## Proyectos Incluidos

### 1. El Tablero de Ajedrez Automático ♟️
Un generador dinámico de tableros de 8x8 que utiliza lógica matemática para el renderizado de casillas.
- **Temática:** "Batalla por el Reino": Las Fuerzas de la Luz (Ángeles, Unicornios, Magos) se enfrentan a la Oscuridad (Zombis, Vampiros, Demonios).
- **Tecnologías:** JavaScript (Bucles `for` anidados), CSS Grid y HTML.

### 2. Mini-juego de Salto: Abducción en la Granja 🐄🛸
Un juego de scroll lateral donde la precisión es la clave para la supervivencia.
- **Temática:** Una vaca debe esquivar los intentos de abducción de un OVNI en un campo nocturno.
- **Tecnologías:** CSS Animations (@keyframes), JavaScript Event Listeners, Lógica de colisión mediante `getBoundingClientRect()`, y HTML.

---

## Estructura del Proyecto

He organizado el código de forma modular, separando recursos, estilos y scripts para garantizar la limpieza y escalabilidad del proyecto:

```text
ProyectosJavaScript/
├── assets/
│   └── fondominijuego.png  # Arte visual para el fondo del mini-juego.
├── CSS/
│   ├── ajedrez.css         # Configuración del Grid y estilos temáticos del tablero.
│   ├── mini-juego.css      # Definición de animaciones y escenario nocturno.
│   └── style.css           # Estilos generales y diseño del menú interactivo.
├── JavaScript/
│   ├── ajedrez.js          # Lógica de renderizado dinámico y posicionamiento de piezas.
│   └── mini-juego.js       # Sistema de salto, marcador de puntos y detector de colisiones.
├── ajedrez.html            # Estructura principal del juego de ajedrez.
├── index.html              # Portal principal de acceso y menú de selección.
├── mini-juego.html         # Estructura principal del mini-juego de salto.
└── README.md               # Documentación y autoevaluación del proyecto.
```

## Autoevaluación

### 1. ¿Qué parte te ha resultado más difícil de implementar?
La parte más desafiante fue la **lógica de colisión** del mini-juego. Conseguir que el programa detecte con precisión cuándo la vaca y el OVNI se tocan requirió entender cómo JavaScript lee las coordenadas en pantalla en tiempo real. Utilicé `getBoundingClientRect()` para obtener las cajas de colisión y ajusté las condiciones matemáticas para que el "Game Over" fuera justo para el jugador.

### 2. ¿Has añadido alguna funcionalidad extra (Bonus)?
Sí, he completado todos los bonus propuestos y algunos extras.
- **Ajedrez:** He implementado una temática personalizada de "Luz vs. Oscuridad" con una alineación completa de piezas (emojis) asignadas mediante JavaScript según la fila y columna.
- **Mini-juego:** He añadido un **marcador de puntos** que aumenta cada segundo de vida, una **pantalla de Game Over** mediante una alerta con salto de línea, y un sistema de **reinicio automático** (`location.reload()`) para mejorar la experiencia de usuario. Además, integré un fondo artístico personalizado en la carpeta `/assets`.

### 3. ¿Funciona correctamente en todos los navegadores?
Sí, he comprobado el funcionamiento en navegadores basados en Chromium (como Google Chrome y Microsoft Edge) y en Firefox. El uso de **CSS Grid** y **Flexbox** asegura que la estructura se mantenga estable, y las animaciones funcionan de forma fluida en todos ellos.
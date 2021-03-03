# Tetris-ECDQEMSD

## Mecánica de juego

Distintos tetriminos, figuras geométricas compuestas por cuatro bloques cuadrados unidos de forma ortogonal, las cuales se generan de una zona que ocupa 5x5 bloques en el área superior de la pantalla. No hay consenso en cuanto a las dimensiones para el área del juego, variando en cada versión.20​ Sin embargo, dos filas de más arriba están ocultas al jugador.

El jugador no puede impedir esta caída, pero puede decidir la rotación de la pieza (0°, 90°, 180°, 270°) y en qué lugar debe caer. Cuando una línea horizontal se completa, esa línea desaparece y todas las piezas que están por encima descienden una posición, liberando espacio de juego y por tanto facilitando la tarea de situar nuevas piezas. La caída de las piezas se acelera progresivamente. El juego acaba cuando las piezas se amontonan hasta llegar a lo más alto (3x5 bloques en el área visible), interfiriendo la creación de más piezas21​ y finalizando el juego.

Existen distintas versiones del juego. La original tiene siete piezas diferentes. Licencias posteriores añadieron formas suplementarias y existen incluso ciertas licencias para formas tridimensionales.


## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

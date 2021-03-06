/**
 * Para mayor información revisar figuras y colores:
 *
 * https://es.wikipedia.org/wiki/Tetris#Colores_de_los_tetriminos
 *
 * Tema Actual: Tetris original de (Alexey Pajitnov)
 *
 * Quizás implementar un mecanismo que permita seleccionar el tema con el que
 * se desea jugar.
 */
export default {
  tipos: [
    {
      nombre: 'ninguna', // Ficha no determinada
      color: 'Gris', // Por defecto gris
      hexaCode: '#333',
      forma: [ // los caracteres vacios representan cuadros "vacios"
        '    ', // los caracteres '▇' o cualquier otro caracter no vacio,
        '    ', // represantan cuadros "no vacios",jejejeje, ¿soy un genio no?
      ],
    },
    {
      nombre: 'escuadra', // Figura de escuadra
      color: 'Blanco',
      hexaCode: '#FFF',
      forma: [
        '   ▇', // aquí se puede ver la forma a partir de 2 arreglos de strings, donde
        '▇▇▇▇', // se ve el concepto de caracteres vacios/no vacios en dichos strings
      ],
    },
    {
      nombre: 'escuadra_invertida',
      color: 'Magenta',
      hexaCode: '#AA00AA',
      forma: [
        '▇   ',
        '▇▇▇▇',
      ],
    },
    {
      nombre: 'ese',
      color: 'Verde',
      hexaCode: '#0000AA',
      forma: [
        '  ▇▇',
        ' ▇▇ ',
      ],
    },
    {
      nombre: 'zeta',
      color: 'Cyan',
      hexaCode: 'cyan',
      forma: [
        '▇▇  ',
        ' ▇▇ ',
      ],
    },
    {
      nombre: 'te',
      color: 'Marrón',
      hexaCode: '#AA5500',
      forma: [
        '▇▇▇ ',
        ' ▇  ',
      ],
    },
    {
      nombre: 'cuadro',
      color: 'Azul',
      hexaCode: '#0000AA',
      forma: [
        ' ▇▇ ',
        ' ▇▇ ',
      ],
    },
  ], // fin definicion de tipos
  // Devuelve una ficha ;
  ficha(index) {
    const ficha = { ...this.tipos[index] };
    ficha.forma = [
      ...[''.padStart(4, ' ')],
      ...ficha.forma,
      ...[''.padStart(4, ' ')],
    ].map((l) => l.split('').map((f) => f !== ' '));
    ficha.forma = this.rotacionDerecha(ficha.forma);
    return ficha;
  },
  // Realiza una rotacion de "forma" en +90° (hacia la derecha)
  rotacionDerecha(forma) {
    if (!this.formaValida(forma)) {
      return null;
    }
    const aux = [];
    for (let i = 0; i < 4; i += 1) {
      aux.push([
        Boolean(forma[3][i]),
        Boolean(forma[2][i]),
        Boolean(forma[1][i]),
        Boolean(forma[0][i]),
      ]);
    }
    return aux;
  },
  // Realiza una rotacion de "forma" en -90° (hacia la izquierda)
  rotacionIzquierda(forma) {
    if (!this.formaValida(forma)) {
      return null;
    }
    const aux = [];
    for (let i = 0; i < 4; i += 1) {
      aux.push([
        Boolean(forma[0][3 - i]),
        Boolean(forma[1][3 - i]),
        Boolean(forma[2][3 - i]),
        Boolean(forma[3][3 - i]),
      ]);
    }
    return aux;
  },
  // Valida que la "forma", sea una matriz de 4x4
  formaValida(forma) {
    return Array.isArray(forma)
      && forma.length === 4
      && Array.isArray(forma[0]) && forma[0].length === 4
      && Array.isArray(forma[1]) && forma[1].length === 4
      && Array.isArray(forma[2]) && forma[2].length === 4
      && Array.isArray(forma[3]) && forma[3].length === 4;
  },
};

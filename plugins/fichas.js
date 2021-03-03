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
export default [
{
  nombre: 'ninguna',  // Ficha no determinada
  color: 'Gris',      // Ficha no determinada
  hexaCode: '#333',
  forma: [
    '    ',
    '    ',
  ],
},
{
  nombre: 'escuadra', // barra horizontal (originalmente)
  color: 'Blanco',      // Ficha no determinada
  hexaCode: '#FFF',
  forma: [
    '   ▇',
    '▇▇▇▇',
  ],
},
{
  nombre: 'escuadra_invertida', // Escuadra invertida
  color: 'Magenta',      // Ficha no determinada
  hexaCode: '#AA00AA',
  forma: [
    '▇   ',
    '▇▇▇▇',
  ],
},
{
  nombre: 'ese', // ese
  color: 'Verde',      // Ficha no determinada
  hexaCode: '#0000AA',
  forma: [
    '  ▇▇',
    ' ▇▇ ',
  ],
},
{
  nombre: 'zeta', // ese
  color: 'Cyan',      // Ficha no determinada
  hexaCode: 'cyan',
  forma: [
    '▇▇  ',
    ' ▇▇ ',
  ],
},
{
  nombre: 'te', // zeta
  color: 'Marrón',      // Ficha no determinada
  hexaCode: '#AA5500',
  forma: [
    '▇▇▇ ',
    ' ▇  ',
  ],
},
{
  nombre: 'cuadro', // Cuadro
  color: 'Azul',      // Ficha no determinada
  hexaCode: '#0000AA',
  forma: [
    '▇▇  ',
    '▇▇  ',
  ],
}
];

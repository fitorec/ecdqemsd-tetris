<template>
<div>
  <pre>{{ tablero }}</pre>
  <table class='tablero'>
    <tbody>
      <tr  v-for="(linea, i) in tablero" :class="`col-${i}`"><!-- columna 0 -->
        <td v-for='bgColor in linea' :style="`background: ${bgColor};`"></td>
      </tr>
    </tbody>
  </table>
</div>
</template>


<script>
import fichas from '../plugins/fichas';

export default {
  props: {
    type: { type: Number, default: 0}
  },
  data() {
    return {fichas: fichas};
  },
  methods: {
    itemStyle(row,col) {
      return `col-${col} row-${row}`;
    },
  },
  computed: {
    tablero() {
      return this.fichas[this.type].forma.map((line) => {
        return line.split('').map(
          (item) => {
            return (item === ' ')? '#333': this.fichas[this.type].hexaCode;
          });
      });
      // [this.type]
      // .forma.forEach((line, i)=> {
      // const lineParts = line.split('').map((item) => item === ' ');
    }
  }
}
</script>

<style>
.tablero{
  background: #333;
}
.tablero td {
  background: #222;
  width: 50px;
  height: 50px;
}
.tablero td.activa {
  background: #E2AA00;
  width: 50px;
  height: 50px;
}
</style>

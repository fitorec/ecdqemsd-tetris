<template>
<div class="wrapper">
  <div class="izquierda">
    <button @click="rotacionIzquierda">
      &olarr;
      <small>Rotacion a la izquierda</small>
  </button>
  </div>
  <table class='tablero'>
    <tbody>
      <tr v-for="(linea, i) in forma" :class="`row-${i + 1}`" :key="`line-${i}`"><!-- columna 0 -->
        <td v-for='(cell,k) in linea' :style="bgFicha(cell)" :key="k"></td>
      </tr>
    </tbody>
  </table>
  <div class="derecha">
    <button @click="rotacionDerecha">
      &orarr;
      <small>Rotacion a la derecha</small>
    </button>
  </div>
</div>
</template>

<script>
import fichas from '../plugins/fichas';

export default {
  props: {
    type: { type: Number, default: 0 },
  },
  data() {
    return { fichas, forma: [] };
  },
  created() {
    this.forma = this.fichas.ficha(this.type).forma;
  },
  methods: {
    bgFicha(isActive) {
      const bgColor = isActive ? this.ficha.hexaCode : '#333';
      return `background: ${bgColor}`;
    },
    rotacionDerecha() {
      this.forma = this.fichas.rotacionDerecha(this.forma);
    },
    rotacionIzquierda() {
      this.forma = this.fichas.rotacionIzquierda(this.forma);
    },
  },
  computed: {
    ficha() {
      return this.fichas.ficha(this.type);
    },
  },
  watch: {
    type(newVal) {
      this.forma = this.fichas.ficha(newVal).forma;
    },
  },
};
</script>

<style>
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}
.tablero{
  background: #333;
  border-spacing: 0;
}
.tablero td {
  border: 1px solid #111;
  background: #222;
  width: 50px;
  max-width: 50px;
  height: 50px;
}
.tablero td.activa {
  background: #E2AA00;
  width: 50px;
  height: 50px;
}
.derecha button, .izquierda button {
  font-size: 3rem;
  width: 100%;
  height: 200px;
}
.derecha button small, .izquierda button small{
  display: block;
  font-size: 1rem;
  color: #999;
}
</style>

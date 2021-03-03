<template>
  <table class='tablero'>
    <tbody>
      <tr class="col0"><!-- columna 0 -->
        <td :class="itemStyle(0,0)"></td>
        <td :class="itemStyle(0,1)"></td>
        <td :class="itemStyle(0,2)"></td>
        <td :class="itemStyle(0,3)"></td>
      </tr>
      <tr class="col1"><!-- columna 1 -->
        <td :class="itemStyle(1,0)"></td>
        <td :class="itemStyle(1,1)"></td>
        <td :class="itemStyle(1,2)"></td>
        <td :class="itemStyle(0,3)"></td>
      </tr>
    </tbody>
  </table>
</template>


<script>
export default {
  data() {
    return {};
  },
  methods: {
    itemStyle(row,col) {
      return `col-${col} row-${row}`;
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
</style>

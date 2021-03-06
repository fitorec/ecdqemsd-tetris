<template>
  <div class="container" @keyup="revisarTeclado">
    <div>
      <h1 class="title" id="titulo">
        Tetris-ECDQEMSD
      </h1>
      <div class="row">
        <div class="col">
          <select v-model="ficha" :value="0" class="ficha-select">
            <option v-for='(v, i) in fichas.tipos' :value="i" :key="i">
              {{ v.nombre  }}
            </option>
          </select>
        </div>
        <div class="col">
          <Ficha :type='ficha' />
        </div>
      </div>
      <div class="links">
        <a
          href="https://es.wikipedia.org/wiki/Tetris#Colores_de_los_tetriminos"
          target="_blank"
          rel="noopener noreferrer"
          class="boton-rojo"
        >
          Documentación (Teoría del Tetris)
        </a>
        <a
          href="https://github.com/fitorec/ecdqemsd-tetris"
          target="_blank"
          rel="noopener noreferrer"
          class="boton-rojo"
        >
          Código fuente
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import fichas from '../plugins/fichas';

export default {
  data() {
    return {
      ficha: 1,
      fichas,
      items: [
        { text: 'Real-Time', icon: 'mdi-clock' },
        { text: 'Audience', icon: 'mdi-account' },
        { text: 'Conversions', icon: 'mdi-flag' },
      ],
    };
  },
  methods: {
    revisarTeclado(event) {
      console.log(event.key);
      console.log(event.metaKey);
    },
  },

};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
.ficha-select {
  font-size: 2rem;
}
</style>

<template>
  <div id="particles-js" class="particles-container"></div>
</template>

<script>
import particlesData from '../../public/particles.json'

export default {
  name: "ParticlesBackground",
  data(){
    return{
      particlesConfig:{}
    }
  },
  mounted() {
    this.particlesConfig={...particlesData}
    this.changedNumberOfParticles();
    window.particlesJS(
      "particles-js",
      this.particlesConfig
    );
    window.addEventListener("resize", this.changedNumberOfParticles);
  },

  beforeUnmount(){
    window.removeEventListener("resize", this.changedNumberOfParticles);
  },

  methods:{
    changedNumberOfParticles(){
      //cierto si la resolucion es mayor
      const isDesktop = window.innerWidth >= 768; 
      this.particlesConfig.particles.number.value= isDesktop? 200:80;
      //Recargar particles si ya existe
      if (window.pJSDom && window.pJSDom.length) {
        window.pJSDom[0].pJS.fn.particlesRefresh();
      }
    }
  },
}
</script>

<style>
.particles-container {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
  background: var(--background-color);
}


</style>

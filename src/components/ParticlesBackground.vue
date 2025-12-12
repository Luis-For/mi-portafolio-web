<template>
  <div id="particles-js" class="particles-container"></div>
</template>

<script>
export default {
  name: "ParticlesBackground",
  mounted() {
    window.particlesJS.load(
      "particles-js",
      "/particles.json",
      () => console.log("Particles cargado 🚀")
    );
  }
};
</script>

<style>
.particles-container {
  position: fixed;
  inset: 0;              /* reemplaza top/left/right/bottom */
  width: 100%;
  height: 100vh;
  z-index: -1;
  pointer-events: visibleStroke;
  background: var(--background-color);
}


</style>

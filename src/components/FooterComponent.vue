<template>
    <div class="end-page">
        <div class="foot">
            <h1><div id="imgFooter" class="img"></div>Luis-For</h1>
            <h1>Mientras lees esto, podría estar mejorando tu app.</h1>
            <h2>Desarrollador web Junior</h2>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FooterComponent',
  methods: {
    loadPhoto() {
      const img = document.createElement('img');
      img.src = 'https://img.icons8.com/?size=100&id=113989&format=png&color=000000';
      img.alt = 'Ícono Luis For';

      const contenedor = document.getElementById('imgFooter');
      if (contenedor) {
        contenedor.appendChild(img);
      }
    }
  },
  mounted() {
    this.loadPhoto();
  }
}
</script>

<style>
.end-page{
    padding: 3rem;
    box-shadow: 1000px;
    background: var(--footer-color);
    transition: all 500ms;
}
.foot{
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    text-align: center;
    padding: 1rem;
    color: var(--color-text);
}
</style>
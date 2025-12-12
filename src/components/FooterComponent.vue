<template>
    <div class="footer">
      <div class="footer-content">
        <!--Seccion 1 -->
        <div class="footer-section">
          <h2 class="footer-title">Luis Fornaris</h2>
          <p class="footer-text">Soy una persona muy responsable, atenta que le gusta trabajar en equipo para encontrar 
            la mejor solución posible. Apasionado por la tecnologia y el desarrollo.
          </p>
        </div>
        <!--Seccion 2 -->
        <div class="footer">
          <h2 class="footer-title">Enlaces</h2>
          <ul class="footer-list">
            <li>xxxxx</li>
            <li>xxxxx</li>
            <li>xxxxx</li>
          </ul>
        </div>
        <!--Seccion 3 -->
        <div class="footer-section">
          <h2 class="footer-title">Escribeme!</h2>
          <ul>
            <li>email</li>
            <li>git</li>
            <li>linkedin</li>
          </ul>
        </div>
      </div>
      <!--Seccion final -->
      <hr class="divider" />
      <p class="footer-copy">© 2025 Luis Ángel Fornaris Rodríguez. Derechos reservados.</p>
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
  .footer-content {
    display: flex;
    flex-direction: row;
    overflow: hidden;
    background-color: var(--footer-color);  
    padding: 3%;
  }

  .footer-title{
    color: white;
  }

  .footer-text{
    color: aliceblue;
  }

  .footer-list{
    color: aliceblue;
  }
  .divider{
    justify-content: center;
    display: flex;
  }

  .footer-section{
    max-height: 30px;
    max-width: 25%;
    padding-left: 15%;
    padding-right: 3%;
  }
  .footer-copy{
    text-align: center;
    color: white;
  }
</style>
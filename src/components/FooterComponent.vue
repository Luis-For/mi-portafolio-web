<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- Col 1 -->
      <div class="footer-section">
        <h2 class="footer-title">Luis Fornaris</h2>
        <p class="footer-text">
          Desarrollador apasionado por la tecnología y la creación de soluciones
          eficientes. Me gusta trabajar en equipo y convertir ideas en proyectos reales.
        </p>
      </div>

      <!-- Col 2 -->
      <div class="footer-section">
        <h2 class="footer-title">Enlaces</h2>
        <ul class="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <!-- Col 3 -->
      <div class="footer-section">
        <h2 class="footer-title">Escríbeme</h2>

        <div class="footer-socials">
          <a href="#" aria-label="Github">
            <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff"/>
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff"/>
          </a>
          <a href="#" aria-label="StackOverflow">
            <img src="https://img.icons8.com/?size=100&id=13955&format=png&color=ffffff"/>
          </a>
        </div>

        <p class="footer-email">luisfor90@gmail.com</p>
      </div>

    </div>

    <hr class="footer-divider" />

    <p class="footer-copy">
      © 2025 Luis Ángel Fornaris Rodríguez · Todos los derechos reservados
    </p>
  </footer>
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
.footer {
  background: linear-gradient(180deg, #120018, #1a0026);
  color: white;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  gap: 3rem;
  padding: 4rem 8%;
  flex-wrap: wrap;
}

.footer-section {
  flex: 1;
  min-width: 220px;
}

.footer-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #d9b3ff;
}

.footer-text {
  font-size: 0.95rem;
  opacity: 0.85;
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: white;
  text-decoration: none;
  opacity: 0.8;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-links a:hover {
  color: #b366ff;
  padding-left: 6px;
}

/* Socials */
.footer-socials {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer-socials a {
  width: 45px;
  height: 45px;
  background: rgba(255,255,255,0.08);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease, background 0.3s ease;
}

.footer-socials a:hover {
  transform: translateY(-5px) scale(1.1);
  background: rgba(179, 102, 255, 0.4);
}

.footer-socials img {
  width: 22px;
}

/* Email */
.footer-email {
  font-size: 0.9rem;
  opacity: 0.85;
}

/* Divider & copy */
.footer-divider {
  border: none;
  height: 1px;
  background: rgba(255,255,255,0.15);
  margin: 0 8%;
}

.footer-copy {
  text-align: center;
  font-size: 0.85rem;
  opacity: 0.7;
  padding: 1rem 0;
  margin: 0%;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    text-align: center;
  }

  .footer-socials {
    justify-content: center;
  }
}

</style>
<template>
  <footer class="footer">
    <div class="footer-content">

      <!-- Brand -->
      <div class="footer-section brand">
        <h2 class="footer-title">Luis Fornaris</h2>
        <p class="footer-text">
          Desarrollador de software enfocado en crear aplicaciones modernas,
          escalables y bien estructuradas. Apasionado por el backend, frontend
          y las buenas prácticas.
        </p>

        <div class="footer-stack">
          <span>Java</span>
          <span>Spring Boot</span>
          <span>Vue</span>
          <span>React</span>
          <span>Docker</span>
        </div>
      </div>

      <!-- Links -->
      <div class="footer-section">
        <h3 class="footer-subtitle">Navegación</h3>
        <ul class="footer-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#skills">Habilidades</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>

      <!-- Contact -->
      <div class="footer-section">
        <h3 class="footer-subtitle">Contacto</h3>

        <div class="footer-socials">
          <a href="#" aria-label="GitHub">
            <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff"/>
          </a>
          <a href="#" aria-label="LinkedIn">
            <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff"/>
          </a>
          <a href="#" aria-label="StackOverflow">
            <img src="https://img.icons8.com/?size=100&id=13955&format=png&color=ffffff"/>
          </a>
        </div>

        <a class="footer-email" href="mailto:luisfor90@gmail.com">
          luisfor90@gmail.com
        </a>
      </div>

    </div>

    <div class="footer-bottom">
      <span>© 2025 Luis Ángel Fornaris Rodríguez</span>
      <span>Hecho con Vue.js 💜</span>
    </div>
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
  background: linear-gradient(180deg, #0d0015, #1a0026);
  color: #ffffff;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-title {
  font-size: 1.6rem;
  font-weight: 700;
  color: #d9b3ff;
  margin-bottom: 1rem;
}

.footer-subtitle {
  font-size: 1.1rem;
  margin-bottom: 1rem;
  color: #caa6ff;
}

.footer-text {
  font-size: 0.95rem;
  line-height: 1.6;
  opacity: 0.85;
}

/* Stack */
.footer-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1.2rem;
}

.footer-stack span {
  font-size: 0.75rem;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(255,255,255,0.1);
  color: #e0caff;
}

/* Links */
.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.6rem;
}

.footer-links a {
  color: #ffffff;
  text-decoration: none;
  font-size: 0.9rem;
  opacity: 0.75;
  transition: all 0.25s ease;
}

.footer-links a:hover {
  opacity: 1;
  color: #b366ff;
  transform: translateX(6px);
}

/* Socials */
.footer-socials {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}

.footer-socials a {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.footer-socials a:hover {
  background: rgba(179,102,255,0.35);
  transform: translateY(-4px) scale(1.1);
}

.footer-socials img {
  width: 22px;
}

/* Email */
.footer-email {
  color: #ffffff;
  font-size: 0.9rem;
  opacity: 0.85;
  text-decoration: none;
}

.footer-email:hover {
  color: #b366ff;
}

/* Bottom */
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.12);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;
  opacity: 0.7;
}

/* Responsive */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .footer-socials {
    justify-content: center;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}

</style>
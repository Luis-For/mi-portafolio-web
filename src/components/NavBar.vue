<template>
  <nav class="navbar">
    <!-- Logo o nombre del sitio (opcional) -->
    <div class="navbar-brand" id="icon" v-on:mouseover="zoom()" v-on:mouseout="norm()">
        <img id="logo" src="../assets/image/Systems_and_technology_programming_company_logo-removebg-preview.png" width="100" @change="cambioDelogo"/>
    </div>
    
    <!-- Botón hamburguesa (solo móvil) -->
    <button 
      class="menu-toggle" 
      @click="toggleMenu"
      :aria-expanded="menuOpen"
      aria-label="Menú principal"
    >
      <div class="hamburger" :class="{ 'open': menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    
    <!-- Menú de navegación -->
    <ul :class="{ 'open': menuOpen }">
      <li v-for="section in sections" :key="section.id">
        <a 
          :href="'#' + section.id" 
          @click.prevent="scrollToSection(section.id)"
          :class="{ 'hovered': hoveredSection === section.id }"
          @mouseenter="onHover(section.id)"
          @mouseleave="onLeave(section.id)"
        >
          {{ section.name }}
        </a>
      </li>
      <li>
        <ButtomTheme @theme-changed="cambioDelogo"/>
      </li>
    </ul>
  </nav>
</template>

<script>
import ButtomTheme from './ButtomTheme.vue';
import logoLight from "@/assets/image/Systems_and_technology_programming_company_logo-removebg-preview.png";
import logoDark from "@/assets/image/logo_white.png";

//const logoSrc = ref(logoLight);

export default {
  components: {
    ButtomTheme
  },
  data() {
    return {
      sections: [
        { id: "inicio", name: "Inicio" },
        { id: "skills", name: "Habilidades" },
        { id: "servicesComponent", name: "Servicios" },
        { id: "projects-container", name: "Proyectos" },
        { id: "education", name: "Educación" },
        { id: "contacto", name: "Contacto" }
      ],
      hoveredSection: null,
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      // Agrega/remueve clase al body para bloquear scroll
      document.body.classList.toggle('menu-open', this.menuOpen);
    },
    scrollToSection(id) {
      if (window.innerWidth <= 768) {
        this.menuOpen = false;
        document.body.classList.remove('menu-open');
      }
      const section = document.getElementById(id);
      if (section) {
        const offset = -80; // por ejemplo, restar 80px (como un header pegado)

        const sectionTop = section.getBoundingClientRect().top + window.pageYOffset;

        window.scrollTo({
          top: sectionTop + offset,
          behavior: 'smooth'
        });
      }
    },
    onHover(id) {
      this.hoveredSection = id;
    },
    onLeave() {
      this.hoveredSection = null;
    },
    zoom() {
      const icon = document.getElementById('icon');
      if (icon) {
        icon.style.transition = "transform 0.2s ease";
        icon.style.transform = 'scale(1.2)';
      }
    },
    norm(){
      const icon = document.getElementById('icon');
      if (icon) {
        icon.style.transition = "transform 0.1s ease";
        icon.style.transform = 'scale(1)';
      }
    },
    cambioDelogo(theme) {
      const logo = document.getElementById('logo');
      if (logo) {
        if (theme === 'dark') {
          logo.src = logoDark;
        } else {
          logo.src = logoLight;
        }
      }
    }
  }
};
</script>

<style scoped>
/* Estilos base del navbar */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}

/* Estilos del menú normal (escritorio) */
.navbar ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 15px;
}

.navbar li {
  margin: 0;
}

.navbar a {
  position: relative;
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  transition: all 0.3s ease;
  font-size: 1rem;
  display: block;
}

.navbar a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  height: 2px;
  width: 0;
  background: linear-gradient(90deg, violet, blue);
  transition: width 0.4s ease;
}

.navbar a:hover::after,
.navbar a.hovered::after {
  width: 100%;
}

.navbar a:hover,
.navbar a.hovered {
  color: var(--navbar-color-text);
  font-weight: bold;
}
/* Estilos del botón hamburguesa (oculto por defecto) */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 1001;
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  transition: all 0.3s ease;
}

/* Estilos para móvil (menú hamburguesa) */
@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  .navbar ul {
    position: fixed;
    top: 0;
    left: 0;
    width: 50%;
    height: 100vh;
    background: rgba(65, 48, 170, 0.98);
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
    z-index: 1000;
    padding: 0;
    margin: 0;
  }

  .navbar ul.open {
    transform: translateX(0);
  }

  .navbar a {
    font-size: 1.5rem;
    padding: 15px 25px;
  }

  /* Animación del icono hamburguesa */
  .hamburger.open span:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  
  .hamburger.open span:nth-child(2) {
    opacity: 0;
  }
  
  .hamburger.open span:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}

/* Bloquear scroll cuando el menú está abierto */
body.menu-open {
  overflow: hidden;
}
</style>
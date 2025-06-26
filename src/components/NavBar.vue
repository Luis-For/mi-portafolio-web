<template>
<div id="NavBar">
    <!-- NAVBAR -->
    <nav class="navbar">
        <!-- Botón hamburguesa -->
        <div class="menu-toggle" @click="toggleMenu">
            ☰
        </div>
        <ul :class="{ open: menuOpen }">
            <li v-for="section in sections" :key="section.id">
                <a :href="'#' + section.id" @mouseenter="onHover(section.id)" @mouseleave="onLeave(section.id)" @click.prevent="scrollToSection(section.id)" :class="{ hovered: hoveredSection === section.id }">
                    {{ section.name }}
                </a>
            </li>
        </ul>
    </nav>
</div>
</template>

<script>
export default {
    data() {
        return {
            sections: [{
                    id: "inicio",
                    name: "Inicio"
                },
                {
                    id: "servicios",
                    name: "Servicios"
                },
                {
                    id: "contacto",
                    name: "Contacto"
                },
                {
                    id: "educación",
                    name: "Educación"
                },
                {
                    id: "skillsContainer",
                    name: "Habilidades"
                },
                {
                    id: "proyectos",
                    name: "Proyectos"
                }
            ],
            hoveredSection: null,
            menuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen;
        },
        closeMenu() {
            this.menuOpen = false;
        },
        scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({
                    behavior: "smooth"
                });
            }
        },
        onHover(id) {
            this.hoveredSection = id;
        },
        onLeave(id) {
            if (this.hoveredSection === id) {
                this.hoveredSection = null;
            }
        },
    },
};
</script>

<style scoped>
/* NAVBAR */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    overflow: hidden;
    background: transparent;
    /*box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3); */
    padding: 10px 20px;
    z-index: 1000;
    box-sizing: border-box;
}

.navbar ul {
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
}

.navbar li {
    margin-right: 20px;
}

.navbar a {
    position: relative;
    left: auto;
    color: white;
    text-decoration: none;
    padding: 6px 12px;
    transition: background-color 0.3s;
    transition: color 0.3s;
    transform: font-weight 0.1s;
    border-radius: 4px;
    font-size: larger;
}

.navbar a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, violet, blue);
    /* background: linear-gradient(90deg, violet, blue);*/
    transition: width 0.4s ease-in-out;
}

.navbar a.hovered::after {
    width: 100%;
}

.navbar a.hovered {
    color: rgb(0, 0, 0);
    font-weight: bold;
}

/* Botón hamburguesa oculto por defecto */
.menu-toggle {
  display: none;
  font-size: 28px;
  color: white;
  cursor: pointer;
  z-index: 10000;
}

/* SECTIONS */
.section {
    padding: 100px 20px;
    margin-top: 50px;
    min-height: 100vh;
    border-bottom: 1px solid #ccc;
}

@media (max-width: 768px) {
    nav {
        margin: 3%;
    }

      .menu-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
    flex-direction: column;
    background: #4130AA;
    padding: 10px;
    position: fixed;
    top: 50px;
    left: 0;
    width: 100%;
  }

  .navbar ul.open {
    display: flex;
  }

  .navbar li {
    margin: 10px 0;
  }
}
</style>

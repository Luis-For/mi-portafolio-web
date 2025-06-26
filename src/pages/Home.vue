<template>
<div id="home">
    <header>
        <BackgroundCircle />
        <NavBar />
        <ButtomTheme />
    </header>

    <main>
        <!-- Cambié <body> por <main> ya que body solo debe existir una vez en el HTML -->
        <ProfileComponent id="inicio" />
        <h2 class="title">Habilidades</h2>
        <div id="skillsContainer">
            <Skills class="habilidades" title="Front" :skills="frontendSkills" />
            <Skills class="habilidades" title="Backend" :skills="backendSkills" />
            <Skills class="habilidades" title="Bases de datos" :skills="basesDeDatos" />
            <Skills class="habilidades" title="Herramientas y más" :skills="herramientas" />
        </div>

        <section>
            <div id="projects-container">
                <div class="projects-header">
                    <h2>Proyectos</h2>
                    <div class="line"></div>
                </div>

                <ProjectsComponent v-for="n in 7" :key="n" class="project-element" title="Mi Proyecto Vue" description="Este proyecto es una app desarrollada en Vue para mostrar mi portafolio, con componentes reutilizables y diseño adaptable." image="/assets/proyecto1.png" codeLink="https://github.com/usuario/proyecto" />
            </div>
        </section>
    </main>
    <footer>
        <FooterComponent class="endpage" />
    </footer>
</div>
</template>

<script>
import BackgroundCircle from '../components/BackgroundCircle.vue';
import ButtomTheme from '../components/ButtomTheme.vue';
import FooterComponent from '../components/FooterComponent.vue';
import NavBar from '../components/NavBar.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import ProjectsComponent from '../components/ProjectsComponent.vue';
import Skills from '../components/Skills.vue';

export default {
    name: 'Home',
    components: {
        NavBar,
        BackgroundCircle,
        ProfileComponent,
        Skills,
        ButtomTheme,
        ProjectsComponent,
        FooterComponent
    },
    data() {
        return {
            frontendSkills: [{
                name: 'Vue.js',
                color: 'green',
                level: '95',
                projects: '10',
                image: "https://img.icons8.com/?size=40&id=rY6agKizO9eb&format=png&color=000000"
            }, {
                name: 'React',
                color: 'blue',
                level: '68',
                projects: '2',
                image: 'https://img.icons8.com/?size=40&id=123603&format=png&color=000000'
            }, {
                name: 'Angular',
                color: 'red',
                level: '50',
                projects: '2',
                image: 'https://img.icons8.com/?size=40&id=71257&format=png&color=000000'
            }],
            backendSkills: [{
                name: 'SpringBoot',
                color: 'green',
                level: '85',
                projects: '5',
                image: 'https://img.icons8.com/?size=40&id=90519&format=png&color=000000'
            },
            {
                name:'Java',
                color: 'blue',
                level: '88',
                projects:'5',
                image: 'https://img.icons8.com/?size=50&id=13679&format=png&color=000000'
            }],
            basesDeDatos: [{
                name: 'SpringBoot',
                color: 'green',
                level: '85',
                projects: '5'
            }],
            herramientas: [{
                name: 'SpringBoot',
                color: 'green',
                level: '85',
                projects: '5'
            }],
            projectsClass: [{
                    title: 'MorphoKey',
                    description: 'XZZZZZZZZZZZ1',
                    image: '',
                    codeLink: ''
                },
                {

                }
            ]
        }
    }
}
</script>

<style>
body {
    margin: 0%;
    padding: 0%;
}

main .title {
    display: inline-flex;
    justify-content: center;
    width: 100%;
}

#inicio {
    padding: 10%;
}

#projects-container {
    display: flex;
    flex-direction: column;
    /* NO 'justify-content: column' */
    align-items: center;
    padding: 5rem 2rem;
    gap: 2rem;
}

.projects-header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    /* espacio entre el título y la línea */
    width: 100%;
    max-width: 900px;
}

.projects-header h2 {
    font-size: 2rem;
    margin: 0;
    white-space: nowrap;
    /* para que no se corte */
}

.projects-header .line {
    flex-grow: 1;
    height: 2px;
    background-color: black;
}

#skillsContainer {
    display: flex;
    /* Activa el modelo flexbox */
    gap: 2rem;
    /* Espacio entre los elementos */
    padding: 2rem;
    /* Espacio interno */
    max-width: 1200px;
    /* Ancho máximo del contenedor */
    margin: 0 auto;
    /* Centrar el contenedor */
    justify-content: center;
}

.habilidades {
    flex: 1;
    /* Cada elemento ocupa igual espacio */
    min-width: 300px;
    /* Ancho mínimo para responsividad */
    background: rgba(255, 255, 255, 0.1);
    /* Fondo semitransparente */
    border-radius: 15px;
    /* Bordes redondeados */
    padding: 1.5rem;
    /* Espacio interno */
    backdrop-filter: blur(10px);
    /* Efecto de desenfoque de fondo */
}

/* Estilos responsivos */
@media (max-width: 768px) {
    #inicio {
        padding: 25%;
    }

    #skillsContainer {
        flex-direction: column;
        /* Apila verticalmente en móviles */
    }

    .habilidades {
        min-width: 100%;
        /* Ocupa todo el ancho en móviles */
    }
}
</style>

<template>
<div id="home">
    <div class="background-app">
        <ParticlesBackground/>
    </div>

    <div class="nav-bar-component">
        <header>
            <NavBar class="NavBar"/>
        </header>
    </div>

    <main>
        <div class="profile-component">
            <ProfileComponent id="inicio" />
        </div>
        <div class="about-me-component">
            <AboutMe/>
        </div>
        <div id="skills" class="face-in">
            <h2 class="title">Habilidades</h2>
            <div>
                <SkillComponent/>
            </div>            
        </div>
        <section>
            <div id="projects-container" class="face-in">
                <div class="projects-header">
                    <h2>Proyectos</h2>
                    <div class="line" id="line">
                    </div>
                </div>
            </div>
            
            <div class="fade-in">
                <CardProyectComponent/>
            </div>
        </section>
    </main>
    <div class="services-component" id="servicesComponent">
        <h1 class="services-title">Servicios</h1>
        <div class="services">
            <ServicesComponent/>
        </div>
    </div>
    
    <div class="proyect-content" id="education">
        <section>
            <TimeLineComponent/>
        </section>
    </div>
    <div>
        <ContactComponent id="contacto"/>
        <FormComponent/>
    </div>
    <footer>
        <FooterComponent class="endpage" />
    </footer>
</div>
</template>

<script>
import CardProyectComponent from '../components/CardProyectComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import NavBar from '../components/NavBar.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import TimeLineComponent from '../components/TimeLineComponent.vue';
import ServicesComponent from '../components/ServicesComponent.vue';
import ContactComponent from '../components/ContactComponent.vue';
import FormComponent from '../components/FormComponent.vue';
import ParticlesBackground from '../components/ParticlesBackground.vue';
import AboutMe from '../components/AboutMe.vue';
import SkillComponent from '../components/SkillComponent.vue';


export default {
    name: 'Home',
    components: {
        NavBar,
        ProfileComponent,
        SkillComponent,
        TimeLineComponent,
        CardProyectComponent,
        FooterComponent,
        ServicesComponent,
        ContactComponent,
        FormComponent,
        ParticlesBackground,
        AboutMe
    },
    data() {
        return {
            project: [{
                    title: 'MorphoKey',
                    description: 'XZZZZZZZZZZZ1',
                    image: '',
                    codeLink: ''
                },
                {

                }
            ],
            education:[{
                title:'Ingeneria de sistemas',

            }]
        }
    },
    methods: {
        scrollToSkills() {
            const skillsContainer = document.getElementById('skills');
            if (skillsContainer) {
                skillsContainer.scrollIntoView({ behavior: 'smooth' });
            }
        }
    },

}
</script>

<style>

body {
    margin: 0%;
    padding: 0%;
}

main .title {
    justify-content: center;
    text-align: center;
    display: inline-flex;
    width: 100%;
    font-size: 2rem;
    color: white;
}

.NavBar{
    padding-top: 0%;
    margin-top: 0%;
}

#inicio {
    padding: 10%;
}

.about-me-component{
    padding-left:15%;
    padding-right: 15%;
}

#projects-container {
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: center;
    /*padding: 10rem 0rem 30rem 0rem;*/
    padding-top: 4rem;
    padding-bottom: 2rem;
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
    color: var(--color-text);
    /* para que no se corte */
}

.projects-header .line {
    flex-grow: 1;
    height: 2px;
    animation: rgbBorder 1s linear infinite;
}
/*animation: rgbBorder 1s linear infinite;*/
@keyframes rgbBorder {
    0% {
        background-color: red;
    }

    33% {
        background-color: lime;
    }

    66% {
        background-color: blue;
    }

    100% {
        background-color: red;
    }
}

#skillsContainer {
    display: flex;
    justify-content: center;
    
    /* Activa el modelo flexbox */
    gap: 2rem;
    /* Espacio entre los elementos */
    padding: 1rem;
    /* Espacio interno */
    max-width: max-content;
    /* Ancho máximo del contenedor */
    margin: 0 auto; 
    width: 50%;
    /* Centrar el contenedor */
}

.services-title{
    text-align: center;
    font-size: 2.5rem;
    color: var(--color-text);
    padding-top: 30px;
    padding-bottom: 20px;
}

.services {
    background-color: var(--card-color);
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 2rem 2rem 2rem 2rem;
}

.habilidades {
    flex: 1 1 auto; /* Permite que crezca y se reduzca según necesidad */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan */
    min-width: 40%; /* Resetea el mínimo width para flex items */
    max-width: 100%; /* Asegura que no exceda el ancho del contenedor padre */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1rem;
    backdrop-filter: blur(10px);
    overflow: hidden; /* Contiene cualquier desbordamiento */
    box-sizing: border-box; /* Incluye padding en el cálculo del ancho */
}


/* Estilos responsivos */
@media (max-width: 768px) {
    #inicio {
        padding: 10%;
    }

    #skillsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        width: auto ;
    }

    .habilidades {
        flex: 1 1 auto; /* Permite que crezca y se reduzca según necesidad */
        flex-wrap: wrap; /* Permite que los elementos se envuelvan */
        min-width: 30%; /* Resetea el mínimo width para flex items */
        max-width: 100%; /* Asegura que no exceda el ancho del contenedor padre */
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 1.5rem;
        backdrop-filter: blur(10px);
        overflow: hidden; /* Contiene cualquier desbordamiento */
        box-sizing: border-box; /* Incluye padding en el cálculo del ancho */
    }
}
</style>

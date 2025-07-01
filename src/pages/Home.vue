<template>
<div id="home">
    <header>
        <BackgroundCircle />
        <NavBar class="NavBar"/>
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
                    <div class="line" id="line">
                    </div>
                </div>
            </div>
            
            <div >
                <CardProyectComponent/>
            </div>
        </section>

        
    </main>
    <div class="proyect-content">
        <section>
            <TimeLineComponent id="education"/>
            <!--<EducationComponent v-for="n in 2" :key="n" class="education"/>-->
            
        </section>
    </div>
    <footer>
        <FooterComponent class="endpage" />
    </footer>
</div>
</template>

<script>
import BackgroundCircle from '../components/BackgroundCircle.vue';
import CardProyectComponent from '../components/CardProyectComponent.vue';
//import EducationComponent from '../components/EducationComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import NavBar from '../components/NavBar.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
//import ProjectsComponent from '../components/ProjectsComponent.vue';
import Skills from '../components/Skills.vue';
import TimeLineComponent from '../components/TimeLineComponent.vue';

export default {
    name: 'Home',
    components: {
        NavBar,
        BackgroundCircle,
        ProfileComponent,
        Skills,
        //ProjectsComponent,
        //EducationComponent,
        TimeLineComponent,
        CardProyectComponent,
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
            },{
                name: 'JavaScript',
                color: 'yellow',
                level: '68',
                projects: '2',
                image: 'https://img.icons8.com/?size=40&id=108784&format=png&color=000000'
            },{
                name:'HTML',
                color:'orange',
                level:'80',
                projects:'5',
                image:'https://img.icons8.com/?size=40&id=20909&format=png&color=000000'
            },{
                name:'Css',
                color:'blue',
                level:'60',
                projects:'5',
                image:'https://img.icons8.com/?size=40&id=21278&format=png&color=000000'
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
            },
            {
                name: 'Node.js',
                color: 'green',
                level: '85',
                projects: '5',
                image: 'https://img.icons8.com/?size=40&id=hsPbhkOH4FMe&format=png&color=000000'
            },
            {
                name: 'Express.js',
                color: 'white',
                level: '85',
                projects: '5',
                image: 'https://img.icons8.com/?size=35&id=kg46nzoJrmTR&format=png&color=FFFFFF'
            },{
                name:'C#',
                color:'#058F92',
                level:'90',
                projects:'4',
                image:'https://img.icons8.com/?size=40&id=55205&format=png&color=9D0DC9'
            },{
                name:'.NET',
                color:'#058F92',
                level:'90',
                projects:'4',
                image:'https://img.icons8.com/?size=40&id=1BC75jFEBED6&format=png&color=6A1B9A'
            }],
            basesDeDatos: [{
                name: 'Postgres',
                color: 'green',
                level: '85',
                projects: '5',
                image:'https://img.icons8.com/?size=40&id=JRnxU7ZWP4mi&format=png&color=000000'
            },{
                name:'Redis',
                color:'red',
                level:'83',
                projects:'2',
                image:'https://img.icons8.com/?size=40&id=pHS3eRpynIRQ&format=png&color=000000'
            },{
                name:'MongoDB',
                color:'green',
                level:'70',
                projects:'3',
                image:'https://img.icons8.com/?size=40&id=74402&format=png&color=000000'
            },{
                name:'MySQL',
                color:'#058F92',
                level:'90',
                projects:'4',
                image:'https://img.icons8.com/?size=40&id=9nLaR5KFGjN0&format=png&color=058F92'
            }],
            herramientas: [{
                name: 'Postman',
                color: 'orange',
                level: '70',
                projects: '5',
                image:'https://img.icons8.com/?size=40&id=EPbEfEa7o8CB&format=png&color=000000'
            },{
                name:'AWS',
                color:'black',
                level:'65',
                projects:'2',
                image:'https://img.icons8.com/?size=40&id=33039&format=png&color=000000'
            },{
                name:'Azure',
                color:'blue',
                level:'68',
                projects:'2',
                image:'https://img.icons8.com/?size=40&id=VLKafOkk3sBX&format=png&color=000000'
            },{
                name:'Firebase',
                color:'orange, yellow',
                level:'40',
                projects:'1',
                image:'https://img.icons8.com/?size=40&id=62452&format=png&color=000000'
            }],
            //
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
    }
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

.habilidades {
    flex: 1 1 auto; /* Permite que crezca y se reduzca según necesidad */
    flex-wrap: wrap; /* Permite que los elementos se envuelvan */
    min-width: 40%; /* Resetea el mínimo width para flex items */
    max-width: 100%; /* Asegura que no exceda el ancho del contenedor padre */
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    padding: 1.5rem;
    backdrop-filter: blur(10px);
    overflow: hidden; /* Contiene cualquier desbordamiento */
    box-sizing: border-box; /* Incluye padding en el cálculo del ancho */
}

/* Estilos responsivos */
@media (max-width: 768px) {
    #inicio {
        padding: 25%;
    }

    #skillsContainer {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
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

/*
#skillsContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: flex-start; /* Alinea los items al inicio verticalmente */
 /*   gap: 2rem;
    padding: 1rem;
    max-width: 1400px; /* Ajusta según necesites */
 /*   margin: 0 auto; /* Centra el contenedor horizontalmente */
/*    width: 100%; /* Ocupa todo el ancho disponible */
/*}*/
</style>

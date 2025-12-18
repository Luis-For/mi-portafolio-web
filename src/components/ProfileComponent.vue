<template>
<div class="profile-container" id="profile-container">
    <div class="sidebar">
        <img class="profile-pic" src="../assets/image/profile.webp" alt="Luis Fornaris"
        @mouseover="zoom($event.currentTarget)"
        @mouseout="norm($event.currentTarget)"
        draggable="false"
        oncontextmenu="return false">
        <h2 class="name">Luis Ángel<br>Fornaris Rodríguez</h2>
        <div class="divider"></div>
        <div class="social-icons">
            <!--<a href="#"><i class="fab fa-facebook-f"></i></a>-->
            <!--<a href="#"><i class="fab fa-twitter"></i></a>-->
            <!--@click="()=>window.open('https://www.linkedin.com/in/luis-angel-fornaris-rodriguez-1a0a4b1b7/', 'new tab' )"-->
            <a href="https://www.linkedin.com/in/luis-%C3%A1ngel-fornaris-rodr%C3%ADguez-2146561a2/" target="_blank">
                <i class="fa-linkedin"></i>
                <img class="icon-linkedin" src="https://img.icons8.com/?size=60&id=13930&format=png&color=000000"/>
            </a>
            <a href="https://github.com/Luis-For" target="_blank">
                <i class="fa-github">
                    <img class="icon-github" src="https://img.icons8.com/?size=60&id=62856&format=png&color=000000" alt="" >
                </i>
            </a>
        </div>
    </div>
    <div class="main-content">
        <h1 class="main-content-title">Hola Mundo!</h1>
        <h2>Desarrollador full-stack</h2>
        <div class="buttons">
            <button class="btn-primary"
            @click="downloadCV" 
            @mouseover="zoom($event.currentTarget)"
            @mouseout="norm($event.currentTarget)">
                CURRICULUM
            </button>
            <button class="btn-outline" @click="goToProyectsGit" >PROYECTOS</button>
        </div>
        <p>
            Desarrollador full-stack con pasión por construir soluciones web eficientes.
            Bienvenido a mi portafolio, donde comparto mis proyectos, habilidades y el camino que estoy construyendo
            en el mundo del desarrollo.
        </p>
        <p>
            Si estás buscando a alguien comprometido, adaptable y con pasión por la tecnología, estoy listo para ayudarte a construir tu próxima solución digital.
        </p>
    </div>
    <ModalBase v-if="visible" id="visible" @cerrar="cerrar">
        <h1>cerrar</h1>
    </ModalBase>
</div>
</template>

<script>
import { utils } from '../utils/Utils.js';
const { zoom, norm } = utils();


export default {
    name: 'ProfileView',
    methods: {
        downloadCV() {
            //const cvUrl = 'src\assets\docs\Luis Ángel Fornaris Rodríguez - Desarrollador Full Stack.pdf';
            const cvUrl = '/docs/Luis Angel Fornaris Rodriguez - Desarrollador Full Stack.pdf';

            // Crear un enlace temporal
            const link = document.createElement('a');
            link.href = cvUrl;
            link.setAttribute('download', 'LuisF_Curriculum.pdf');
            document.body.appendChild(link);

            // Simular click
            link.click();

            // Limpiar
            document.body.removeChild(link);
        },

        goToProyectsGit(){
            const gitUrl='https://github.com/Luis-For';
             //window.location.href=gitUrl;
             window.open(gitUrl, 'new tab')
             //@click="()=>window.open('https://www.linkedin.com/in/luis-angel-fornaris-rodriguez-1a0a4b1b7/', 'new tab')"
        },

        zoom(el) {
        zoom(el);
        },

        norm(el) {
        norm(el);
        }
    },
    mounted() { 
        const { zoom, norm } = utils();
    
        // Guardamos las funciones en el componente
        this.zoom = zoom;
        this.norm = norm;
    },
    
}

</script>


<style scoped>
.no-scroll {
    max-height: 100vh;
    overflow: hidden;
}
.profile-container {
    display: flex;
    max-width: 1000px;
    margin: 0 auto;
    font-family: 'Segoe UI', sans-serif;
    color: #333;
    padding-bottom: 120px;
}

.sidebar {
    width: 35%;
    background-color: #f3eae3;
    padding: 40px 20px;
    text-align: center;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
}

@keyframes rgbColor {
  0%   { border-color: #191B2A; }
  33%  { border-color: lime; }
  66%  { border-color: blue; }
  100% { border-color: red; }
}

.profile-pic {
    width: 140px;
    height: 140px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    background-color: #666;
}

.name {
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0 5px;
}

.divider {
    width: 40px;
    height: 2px;
    background-color: #0047ff;
    margin: 10px 0;
}

.title {
    letter-spacing: 2px;
    font-size: 14px;
    color: #666;
    margin-bottom: 30px;
}

.main-content p {
    transform: translateX(0px);
    opacity: 1;
    color: #FFFF;
}

.social-icons {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-top: auto;
    color: black;

}

.social-icons a {
    color: #000;
    font-size: 18px;
    text-decoration: none;
    transition: color 0.3s;
}

.social-icons a:hover {
    color: #0047ff;
}

.icon-linkedin{
    transition: transform 0.5s ease;
}

.icon-linkedin:hover{
    transform: rotate(360deg);
    transition: transform 0.5s ease;
}
.icon-github{
    transition: transform 0.5s ease;
}
.icon-github:hover{
    transform: rotate(360deg);
    transition: transform 0.5s ease;
}

.main-content {
    width: 65%;
    padding: 40px;
    box-sizing: border-box;
    color: var(--color-text);
}

.main-content h1 {
   /* text-wrap: nowrap;*/
    font-size: 60px;
    font-weight: 800;
   /* width: 800px;*/
    margin-bottom: 10px;
    /*overflow: hidden;
    animation: typing 2s steps(30) infinite alternate-reverse;*/
}
/* animacion de tipado mas adelante
@keyframes typing {
    from{
        width: 0px;
    }
}*/

.main-content h2 {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 30px;
}

.buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    justify-content: flex-start;
}

.btn-primary {
    background-color: #0047ff;
    color: white;
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
}

.btn-outline {
    background-color: white;
    color: black;
    padding: 10px 20px;
    border: 2px solid black;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
}

.main-content p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 15px;
}

/* RESPONSIVE */
@media (max-width: 768px) {
    .profile-container {
        flex-direction: column;
        padding: 0 100px;
        margin-top: 15%;
    }

    .sidebar,
    .main-content {
        width: 100%;
        padding: 30px 20px;
    }

    .main-content h1 {
        font-size: 40px;
        text-align: center;
    }

    .main-content h2 {
        font-size: 18px;
        text-align: center;
    }

    .main-content p {
        text-align: center;
    }

    .buttons{
        display: flex;
        gap: 15px;
        margin-bottom: 30px;
        justify-content: center;
    }
}
</style>
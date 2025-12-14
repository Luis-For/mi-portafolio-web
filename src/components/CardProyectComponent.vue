<template class="card-proyect-component">
<div class="proyect-container">
    <b-card class="mb-2" v-for="(card, index) in cards" :key="index" :title="card.title" :img-src="card.img" img-alt="Imagen" img-top :tag="card.article">
        <b-card-imagen class="image">
            <img :src="card.linkImg" />
        </b-card-imagen>

        <b-card-title class="text">
            <h2>
                {{ card.title }}
            </h2>
        </b-card-title>
        <b-card-text class="text">
            {{ card.text }}
        </b-card-text>

        <b-button :href="card.link" variant="primary" class="text" @click="open(index),selectCard(index)">ver más</b-button>
    </b-card>
</div>
<ModalBase v-if="visible" :card="cardSelected" @cerrar="close()"/>
</template>

<script>
    import { utils } from '../utils/Utils';
    import ModalBase from './ModalBase.vue';
export default {
    components: {
        ModalBase
    },
    methods: {
        zoom(event) {
            this.zoom(event.currentTarget);
        },
        norm(event) {
            this.norm(event.currentTarget);
        },
        open(index) {
            this.cardSelected = this.cards[index];
            this.visible = true;
            //document.body.style.overflow = "hidden";
            //document.body.style.filter="blur(1px)";
        },
        close() {
            this.visible = false; 
            document.body.style.overflow = "auto";
        },
        selectCard(index) {
            //console.log("Index seleccionado: ", index);
            this.cardSelected = this.cards[index];
        }
    },
    mounted() { 
        const { zoom, norm } = utils();
    
        // Guardamos las funciones en el componente
        this.zoom = zoom;
        this.norm = norm;
    },
    data() {
        return {
            cards: [{
                    title: 'MorphoKey',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    linkImg:'https://www.claro.com.co/portal/co/recursos_contenido/1718312628153-banner-desk.jpg',
                    article: 'Backend',
                    text: 'Aplicación para la identificación de especies mediante claves taxonómicas digitales, facilitando el análisis biológico y la clasificación de organismos de manera interactiva.',
                    link: 'git',
                    resume: 'MorphoKey es un proyecto orientado a la digitalización de claves taxonómicas para facilitar la identificación de especies vegetales o animales. Integra una interfaz intuitiva y un flujo de decisiones estructurado que guía al usuario a través de características morfológicas clave. El sistema permite explorar, comparar y validar especies mediante filtros dinámicos, reglas taxonómicas y criterios biológicos. Su objetivo es simplificar el trabajo de estudiantes, investigadores y profesionales de la biología, aportando una herramienta clara, accesible y sistemática para clasificar organismos sin necesidad de materiales físicos.'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    linkImg:'https://evolbit.net/blog/wp-content/uploads/2024/02/big-data-diagrama-red-futurista-que-muestra-puntos-acceso-al-servidor-infosystem-1-1089x730.jpg',
                    article: 'Backend',
                    text: 'Sistema compuesto por cuatro microservicios independientes, desarrollados con distintos patrones de diseño para asegurar escalabilidad, mantenibilidad y desacoplamiento.',
                    link: 'git',
                    resume: 'Este proyecto consiste en un ecosistema de cuatro microservicios construidos bajo una arquitectura distribuida y orientada a patrones avanzados de diseño. Cada microservicio cumple una responsabilidad única siguiendo principios como SOLID, DDD (Domain Driven Design), CQRS y el uso de gateways para el enrutamiento. Incluye autenticación, comunicación interna mediante REST o mensajería, manejo centralizado de errores y un pipeline de datos optimizado. El objetivo es demostrar cómo diferentes patrones influyen en la robustez y escalabilidad de un sistema modular, ideal para proyectos empresariales y soluciones de alto volumen.'
                },
                {
                    title: 'Detección de Cyberbullying en Redes Sociales usando NLP y ML',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    linkImg:'https://www.claro.com.co/portal/co/recursos_contenido/1718312628153-banner-desk.jpg',
                    article: 'Backend',
                    text: 'Proyecto de detección de cyberbullying utilizando técnicas de NLP y ML usando python y diferentes librerías.',
                    link: 'https://github.com/C4mg943/Repo-IA-2025-2/blob/main/Cyberbullying_Detection_using_NLP_and_Machine_Learning.ipynb',
                    resume: `El proyecto desarrollado consiste en la implementación de un sistema de clasificación y regresión para la detección de 
                    ciberacoso, utilizando técnicas de Inteligencia Artificial, Machine Learning y Procesamiento de Lenguaje Natural (NLP).
                    Para ello, se empleó un dataset de Kaggle especializado en detección de cyberbullying, el cual contiene textos clasificados según su nivel o tipo de acoso.
                    Todo el desarrollo se realizó en el notebook principal notebook_trabajo_final.ipynb, donde se llevó a cabo el preprocesamiento de los datos, la limpieza del lenguaje, la vectorización de los textos y el entrenamiento de distintos modelos de aprendizaje automático para evaluar su desempeño en la tarea de clasificación.
                    Los datos utilizados se encuentran organizados en la carpeta data.
                    El proyecto fue desarrollado en Python 3.8 o superior, haciendo uso de las librerías especificadas en el archivo requirements.txt.
                    Para su correcta ejecución, se debe clonar el repositorio, instalar las dependencias, abrir el notebook en VS Code o Jupyter y ejecutar todas las celdas en orden.
                    Este trabajo demuestra la aplicación práctica de la Inteligencia Artificial en la detección automática de comportamientos de acoso en entornos digitales, aportando una solución tecnológica con impacto social en la prevención del ciberacoso.`

                },
                {
                    title: 'Generación de códigos QR',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    linkImg:'https://www.cloudmasters.es/wp-content/uploads/2020/05/DBaaS.jpg',
                    article: 'Backend',
                    text: 'Proyecto de generación de códigos QR dinámicos y estáticos con distintas librerías en Java',
                    link: 'git',
                    resume: `El proyecto de generación de códigos QR en Java permite crear códigos QR tanto estáticos como dinámicos utilizando diversas librerías especializadas. Los códigos QR estáticos contienen información fija, mientras que los dinámicos pueden ser actualizados sin necesidad de regenerar el código.
                    El sistema ofrece una interfaz sencilla para ingresar datos y seleccionar el tipo de código QR deseado. Utiliza librerías como ZXing y QRGen para la creación y personalización de los códigos, permitiendo ajustar parámetros como tamaño, corrección de errores y colores.
                    Este proyecto es ideal para aplicaciones en marketing, inventarios y gestión de información, proporcionando una solución eficiente y flexible para la generación de códigos QR en entornos Java.`   
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    linkImg:'https://miro.medium.com/0*Anu9J_EsIETILqsD.jpg',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    linkImg:'https://descargas.intef.es/cedec/proyectoedia/biologia_geologia/contenidos/investigando_clasificacion/botones_clave3.jpg',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                }
            ],
            cardSelected: {},
            visible: false
        }
    }
}
</script>

<style>
.proyect-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding-left: 3rem;
    padding-right: 3rem;
    margin: 0 auto;
    max-width: max-content;
    animation: zoomIn 0.5s forwards; 
}

.proyect-container .mb-2 {
  display: flex;
  flex-direction: column;
  overflow: hidden; 
}

.image img {
    width: 100%;
    height: 200px;
    border-radius: 0.5rem;
    padding: 0%;
    margin: 0;
}

.proyect-container:hover {
    transform: scale(2px);
    animation: rgbColor 3s infinite;
}

.proyect-container b-card {
    background-color: #232338;
    padding: 2rem;
    border: 1px solid rgb(67, 67, 67);
    border-radius: 1rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
    cursor: pointer;
    padding-top: 0.2%;
    padding-left: 0.2%;
    padding-right: 0.2%;
}

.proyect-container b-card:hover {
    transform: translateY(-2px);
    transform: scale(1.02);
    background-color: #1F1F1F;
    animation: rgbBorders 1s linear infinite;
}

@keyframes rgbBorders {
    0% {
        border-color: red;
    }

    33% {
        border-color: lime;
    }

    66% {
        border-color: blue;
    }

    100% {
        border-color: red;
    }
}

.proyect-container b-card-text {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
    
}

.text {
    color: aliceblue;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 8px;
    padding-right: 8px;
}

.proyect-container b-button {
    background-color: rgb(65, 55, 201);
    margin: 0 auto;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 2rem;
    gap: 0.75rem;
    
}

.modal {
  position: absolute;
  top: 110%;
  left: 0;
  background-color: white;
  color: #232338;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
  opacity: 0;
  pointer-events: none;
  transform: scale(0.95);
  transition: all 0.3s ease;
  z-index: 100;
  width: 250px;
  
}

/* Mostrar el modal cuando el mouse esté sobre trigger o modal */
.proyect-container b-card:hover .modal{
    opacity: 1;
    pointer-events: auto;
    transform: scale(1);
}

@keyframes zoomIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@media (max-width:768px) {
    .proyect-container {
        display: flex;
        flex-direction: column;
        width: 70%;
        scale: 95%;
    }

    .proyect-container b-card {
        position: relative;
        justify-content: center;
    }
}
</style>

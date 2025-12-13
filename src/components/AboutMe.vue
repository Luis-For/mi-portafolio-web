<template>
    <div class="about-me-container">
        <div class="about-me-element">
            <h1 class="about-me-title">Sobre mi</h1>
            <div class="about-me-content">
                <p class="about-me-description">
                    Soy estudiante de Ingeniería de Sistemas en último semestre, apasionado por la tecnología y el desarrollo de software. 
                    Me interesa entender no solo cómo programar, sino por qué funcionan las cosas, lo que me ha llevado a profundizar 
                    en arquitectura de microservicios, APIs REST y análisis de datos.
                    Tengo experiencia desarrollando soluciones con Spring Boot, Java, Python, Node.js y C#, trabajando con bases de datos 
                    PostgreSQL, MongoDB y Redis, y desplegando aplicaciones en entornos contenerizados con Docker. 
                    He participado en proyectos de Big Data y agricultura inteligente, utilizando PySpark y Jupyter, así como en 
                    la implementación de monitoreo con Prometheus y Grafana para sistemas distribuidos.
                    En el frontend disfruto construir interfaces claras y funcionales usando Vue.js, React y Angular, 
                    apoyándome en HTML y CSS para crear experiencias visuales agradables. Me gusta cuidar los detalles, 
                    aprender constantemente y mejorar mis soluciones con buenas prácticas, pruebas unitarias y control de 
                    versiones.
                    A nivel personal, me considero una persona responsable, curiosa y perseverante, 
                    que disfruta resolver problemas, aprender por cuenta propia y asumir nuevos retos. 
                    Busco seguir creciendo como profesional, aportar valor en equipos de desarrollo y 
                    consolidarme como ingeniero de software, combinando lógica, creatividad y tecnología.
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        name:'aboutMeComponent',
    }
</script>

<style>
    .about-me-container{
        background-color: none;
    }

    .about-me-title{
        text-align: center;
        color: white;
        font-size: 2.5rem;
        font-family: sans-serif;
        
    }

    .about-me-description{
        text-align: start;
        color: white;
        font-size: 1.3rem;
    }

    
</style>
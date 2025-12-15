<template>
  <section class="about-me-container">
    <h1 class="about-me-title">Sobre mí</h1>
    <p class="about-me-subtitle">
      Ingeniero de Sistemas · Desarrollador · Full Stack
    </p>

    <div class="about-me-cards">
      <div class="about-card">
        <h3>Backend & Arquitectura</h3>
        <p>
          Desarrollo APIs REST y microservicios con Spring Boot, Java, Python y Node.js.
        </p>
      </div>

      <div class="about-card">
        <h3>Frontend & UX</h3>
        <p>
          Interfaces claras y modernas usando Vue, React, Angular, HTML y CSS.
        </p>
      </div>

      <div class="about-card">
        <h3>Datos & DevOps</h3>
        <p>
          Big Data con PySpark, Docker, monitoreo con Prometheus y Grafana.
        </p>
      </div>
    </div>

    <div class="about-me-content">
      <p class="about-me-description">
        Soy estudiante de Ingeniería de Sistemas en último semestre, apasionado por entender
        cómo funcionan las cosas y por qué. Me especializo en crear soluciones escalables
        basadas en microservicios, análisis de datos y buenas prácticas de desarrollo.
        Me considero una persona responsable, curiosa y orientada a resolver problemas reales,
        siempre en constante aprendizaje y crecimiento profesional.
      </p>
    </div>
  </section>
</template>


<script>
    export default{
        name:'aboutMeComponent',
    }
</script>

<style>
.about-me-container {
  padding: 5rem 10%;
  color: white;
}

.about-me-title {
  text-align: center;
  font-size: 2.6rem;
  margin-bottom: 0.3rem;
}

.about-me-subtitle {
  text-align: center;
  font-size: 1.1rem;
  opacity: 0.8;
  margin-bottom: 3rem;
}

.about-me-cards {
  display: flex;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  justify-content: center;
}

.about-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  padding: 2rem;
  border-radius: 16px;
  width: 280px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 15px 40px rgba(138, 43, 226, 0.3);
}

.about-card h3 {
  margin-bottom: 0.6rem;
  color: #d9b3ff;
}

.about-card p {
  font-size: 0.95rem;
  opacity: 0.85;
}

.about-me-content {
  max-width: 800px;
  margin: 0 auto;
}

.about-me-description {
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
  text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
  .about-me-container {
    padding: 4rem 6%;
  }

  .about-me-description {
    text-align: justify;
  }
}

</style>
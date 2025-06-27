<template>
  <div class="project-card">
    <img :src="project.image" :alt="project.title" class="project-image" />

    <div class="project-content">
      <h3 class="project-title">{{ project.title }}</h3>
      <p class="project-description">{{ project.description }}</p>

      <div class="project-buttons">
        <a :href="project.url" target="_blank" rel="noopener noreferrer" class="code-button">
          Ver código
        </a>
        <!-- Puedes agregar más íconos aquí -->
        <!-- <button disabled class="disabled-icon">Otro</button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    codeLink: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.project-card{
    display: flex;
    margin: 0.5rem;
    max-width: max-content;
    max-height: max-content;
    background-color: rgba(66, 49, 171, 0.40);
    border-radius: 1rem;
}

img{
  display: flex;
  justify-content: center;
}
</style>
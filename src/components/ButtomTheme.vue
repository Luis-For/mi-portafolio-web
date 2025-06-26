<template>
  <button 
    @click="toggleTheme"
    class="theme-toggle"
    :aria-label="`Cambiar a modo ${currentTheme === 'light' ? 'oscuro' : 'claro'}`"
  >
    <span v-if="currentTheme === 'light'">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const currentTheme = ref('light');

// Función para aplicar el tema
const applyTheme = (theme) => {
  currentTheme.value = theme;
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
};

// Función para alternar entre temas
const toggleTheme = () => {
  applyTheme(currentTheme.value === 'light' ? 'dark' : 'light');
};

// Cargar tema al montar el componente
onMounted(() => {
  const savedTheme = localStorage.getItem('theme') || 
                    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  applyTheme(savedTheme);
});
</script>
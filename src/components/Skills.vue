<template>
<div class="skills-section">
    <h3 class="skills-title">{{ title }}</h3>
    <div class="space-y-6">
        <div v-for="(skill, index) in skills" :key="index" class="skill-item">
            <div class="skill-icon-wrapper" :style="{ backgroundColor: `rgba(${hexToRgb(skill.color)}, 0.125)` }">
                <div :style="{ color: skill.color }">
                    <!-- Puedes reemplazar esto con un componente de icono dinámico -->

                    <img v-if="skill.image" :src="skill.image" :alt="skill.name" class="w-6 h-6 object-contain" />

                    <svg v-if="skill.icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                        <path :d="skill.icon" />
                    </svg>
                </div>
            </div>
            <div class="skill-details">
                <h4 class="skill-name">{{ skill.name }}</h4>
                <p class="skill-description">Proyectos realizados: {{ skill.projects || 0 }}</p>
                <div class="skill-bar">
                    <div class="skill-bar-fill" :style="{
                width: `${skill.level}%`, 
                background: `linear-gradient(90deg, ${skill.color}, rgba(${hexToRgb(skill.color)}, 0.314))`
              }"></div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'SkillsSection',
    props: {
        title: {
            type: String,
            required: true
        },
        skills: {
            type: Array,
            required: true,
            validator: (value) => {
                return value.every(skill => {
                    return 'name' in skill && 'level' in skill && 'color' in skill
                })
            }
        }
    },
    methods: {
        hexToRgb(hex) {
            // Convierte color hex a formato rgb (sin alpha)
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
            return result ?
                `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` :
                '97, 218, 251'; // Valor por defecto (React blue)
        }
    }
}
//https://icons8.com/icon/rY6agKizO9eb/vue-js
</script>

<style>
/* Estilos personalizados para el componente Skills.vue (compacto) */
.skills-section {
    padding: 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    max-width: 500px;
    margin: 0 auto;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.skills-title {
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.25rem;
    text-align: left;
}

.skill-item {
    display: flex;
    justify-content: flex-start;
    gap: 0.75rem;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.75rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
    background-color: #232338;
}

.skill-item:hover {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.04);
}

.skill-icon-wrapper {
    width: 3rem;
    height: 3rem;
    border-radius: 9999px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.05);
}

.skill-icon-wrapper svg {
    font-size: 1.5rem;
}

.skill-details {
    flex: 1;
}

.skill-name {
    color: #ffffff;
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 0.2rem;
}

.skill-description {
    color: #9ca3af;
    font-size: 0.75rem;
}

.skill-bar {
    margin-top: 0.4rem;
    height: 0.4rem;
    background-color: rgba(75, 85, 99, 0.5);
    border-radius: 9999px;
    overflow: hidden;
}

.skill-bar-fill {
    height: 100%;
    border-radius: 9999px;
    transition: width 0.5s ease;
}

.skills-section:hover {
    background-color: rgba(255, 0, 0, 0.1);
    transform: scale(1.02);
}

@media (max-width: 768px) {
    .skills-section{
    
    }
}
</style>

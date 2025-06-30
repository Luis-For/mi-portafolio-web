<template>
<div class="proyect-container">
    <b-card v-for="(card, index) in cards" :key="index" :title="card.title" :img-src="card.img" img-alt="Imagen" img-top :tag="card.article" class="mb-2">
        <b-card-imagen>
            <img :src="card.img" />
        </b-card-imagen>

        <b-card-title class="text">
            <h2>
                {{ card.title }}
            </h2>
        </b-card-title>
        <b-card-text class="text">
            {{ card.text }}
        </b-card-text>

        <b-button :href="card.link" variant="primary" class="text">ver</b-button>
    </b-card>
</div>
</template>

<script>
export default {
    //style="max-width: 20rem;"
    data() {
        return {
            cards: [{
                    title: 'MorphoKey',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article: 'Backend',
                    text: 'Proyecto de claves taxonomicas',
                    link: 'git'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                },
                {
                    title: 'Api con microservicios',
                    img: 'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article: 'Backend',
                    text: 'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link: 'git'
                }
            ]
        }
    }
}
</script>

<style>
.proyect-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    /* 4 columnas iguales */
    gap: 1.5rem;
    padding: 1rem;
    margin: 0 auto;
    max-width: max-content;
    animation: zoomIn 0.5s forwards;
}

.proyect-container:hover{
    transform: scale(2px);
    animation: rgbColor 3s infinite;
}

.proyect-container b-card {
    background-color: #232338;
    padding: 2rem;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 1rem;
    transition: transform 0.3s ease, background-color 0.3s ease;
}

.proyect-container b-card:hover{
    transform: translateY(-2px);
    transform: scale(1.02);
    background-color: #1F1F1F;
    animation: rgbBorder 1s linear infinite;
}

@keyframes rgbBorder {
  0%   { border-color: red; }
  33%  { border-color: lime; }
  66%  { border-color: blue; }
  100% { border-color: red; }
}

.proyect-container b-card-text {
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.text{
    color: aliceblue;
}

.proyect-container b-button {
    background-color: aqua;
    margin: 0 auto;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 2rem;
    gap: 0.75rem;
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
    }

    .proyect-container b-card {
        position: relative;
        justify-content: center;
    }
}
</style>

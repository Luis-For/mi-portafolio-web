<template>
  <div class="proyect-container">
    <b-card
      v-for="(card, index) in cards"
      :key="index"
      :title="card.title"
      :img-src="card.img"
      img-alt="Imagen"
      img-top
      :tag="card.article"
      style="max-width: 20rem;"
      class="mb-2"
    >   
    <b-card-imagen>
        <img :src="card.img"/>
    </b-card-imagen>

        <b-card-title>
            <h2>
                {{ card.title }}
            </h2>
        </b-card-title>
      <b-card-text>
        {{ card.text }}
      </b-card-text>

      <b-button :href="card.link" variant="primary">ver</b-button>
    </b-card>
  </div>
</template>

<script>
export default{
    data(){
        return{
            cards:[
                {
                    title:'MorphoKey',
                    img:'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article:'Backend',
                    text:'Proyecto de claves taxonomicas',
                    link:'git'
                },
                {
                    title:'Api con microservicios',
                    img:'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article:'Backend',
                    text:'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link:'git'
                },
                                {
                    title:'Api con microservicios',
                    img:'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article:'Backend',
                    text:'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link:'git'
                },
                                {
                    title:'Api con microservicios',
                    img:'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article:'Backend',
                    text:'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link:'git'
                },
                {
                    title:'Api con microservicios',
                    img:'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article:'Backend',
                    text:'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link:'git'
                },
                {
                    title:'Api con microservicios',
                    img:'https://img.icons8.com/?size=40&id=UGLDQf1K9y5P&format=png&color=000000',
                    article:'Backend',
                    text:'Proyecto de 4 microservicios con distintos patrones de diseño',
                    link:'git'
                } 
            ]
        }
    }
}
</script>

<style>
.proyect-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 4 columnas iguales */
  gap: 1.5rem;
  padding: 1rem;
  margin: 0%;
}

.proyect-container b-card {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
}


.proyect-container b-card-text{
    display: flex;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

.proyect-container b-button{
    background-color: aqua;
    justify-content: center;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    padding-right: 1rem;
    padding-left: 1rem;
    border-radius: 2rem;
    gap: 0.75rem;
}
</style>

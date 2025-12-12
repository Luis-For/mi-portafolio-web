<template class="services">
    <div class="service" v-for="service in services" :key="service.title" @mouseover="zoomss($event.target)" @mouseout="normss($event.target)">
        <img :src="service.image" :alt="service.descriptionImg" class="service-image"/>
        <h1>{{ service.title }}</h1>
        <!--<button id="button">{{ buttonText }}</button>-->
    </div>
</template>

<script>

export default{
    name:'ServicesComponent',
    props:{
        title:String,
        image: String,
        buttonText: String
    },
    data(){
        return{
            services:[
              {
                title: 'Desarrollo de aplicaciones Web',
                image: 'https://img.icons8.com/?size=100&id=117011&format=png&color=000000'
              },
              {
                title: 'Diseño Gráfico',
                image: 'https://img.icons8.com/?size=100&id=bt8WwOf6kj0n&format=png&color=000000'
              },
              {
                title: 'SEO',
                image: 'https://img.icons8.com/?size=100&id=tFjGFz05Kprj&format=png&color=000000'
              },
              {
                title: 'Marketing Digital',
                image: 'https://img.icons8.com/?size=100&id=xaquNfre75yC&format=png&color=000000'
              },
              {
                title: 'Consultoría Tecnológica',
                image: 'https://img.icons8.com/?size=100&id=zV2k3jcJZiPb&format=png&color=000000'
              }
            ]
        }
    },
    methods:{
      zoomss(e){
        e.style.transform = 'scale(1.1)';
      },
      normss(e){
        e.style.transform = 'scale(1)';
      }
    }
}
</script>

<style>
  .service {
    position: relative;
    /*width: 300px;*/
    background-color: var(--card-color);
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin: 1rem;
    color: var(--color-text);
  }

  .service{
    width: 300px;
  }

</style>
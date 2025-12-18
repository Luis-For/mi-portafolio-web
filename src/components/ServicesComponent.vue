<template class="services">
    <div class="service" v-for="service in services" :key="service" @mouseover="zoom($event.currentTarget)" @mouseout="norm($event.currentTarget)">
      <img :src="service.image" :alt="service.descriptionImg" class="service-image"/>
      <h1>{{ service.title }}</h1>
      <!--Hover encima-->
      <div class="service-hover">
        <h2>{{ service.title }}</h2>
        <p>{{ service.description }}</p>
      </div>        
    </div>
</template>

<script>
  import { utils } from '../utils/Utils.js';
  const { zoom, norm } = utils();

export default{
    name:'ServicesComponent',
    props:{
        title:String,
        image: String,
    },
    data(){
        return{
            services:[
              {
                title: 'Desarrollo de aplicaciones Web',
                image: 'https://img.icons8.com/?size=100&id=117011&format=png&color=000000',
                description: 'Desarrollo de apps web escalables'
              },
              {
                title: 'Desarrollo de aplicaciones mobiles',
                image: 'https://img.icons8.com/?size=100&id=bt8WwOf6kj0n&format=png&color=000000',
                description: 'Desarrollo de apps mobiles escalables y seguras'
              },
              {
                title: 'Construcción de bases de datos',
                image: 'https://img.icons8.com/?size=100&id=tFjGFz05Kprj&format=png&color=000000',
                description: 'Creación de bases de datos funcionales y normalizadas'
              },
              {
                title: 'Desarrollo de chatbots',
                image: 'https://img.icons8.com/?size=100&id=xaquNfre75yC&format=png&color=000000',
                description: 'Desarrollo de chatbots para redes sociales u otras tareas'
              },
              {
                title: 'Desarrollo de inteligencia artificial',
                image: 'https://img.icons8.com/?size=100&id=zV2k3jcJZiPb&format=png&color=000000',
                description: 'Desarrollo de modelos de inteligencia artificial para diferentes problemas'
              }
            ]
        }
    },
    methods:{
      zoom(e){
        zoom(e);
      },
      norm(e){
        norm(e);
      }
    }
}
</script>

<style>

  .services{
    transform: none;
  }
  .service {
    position: relative;
    width: 300px;
    background-color: var(--card-color);
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    margin: 1rem;
    color: var(--color-text);
    overflow: hidden;
    transform: scale(0.8);
}

/* ===== Capa que sube ===== */
.service::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
        to top,
        rgb(106, 0, 255),
        rgb(170, 0, 255)
    );
    transform: translateY(100%);
    transition: transform 0.4s ease;
    z-index: 1;
}

/* ===== Contenido hover ===== */
.service-hover {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;

    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.4s ease, transform 0.4s ease;

    z-index: 3;
    color: #000;
}

/* ===== Hover effects ===== */
.service:hover::before {
    transform: translateY(0);
}

.service:hover .service-content {
    transform: translateY(-20px);
    opacity: 0;
}

.service:hover .service-hover {
    opacity: 1;
    transform: translateY(0);
}

@media (max-width:768px) {
  .services{
    transform: scale(0.95);
    padding: 0%;
  }
}

</style>
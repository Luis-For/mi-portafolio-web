<template class="services">
    <div class="service" v-for="service in services" :key="service.title">
        <img :src="service.image" :alt="service.descriptionImg" class="service-image"/>
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <button id="button">{{ buttonText }}</button>
    </div>
</template>

<script>
export default{
    name:'ServicesComponent',
    props:{
        title:String,
        description: String,
        image: String,
        descriptionImg: String,
        buttonText: String
    },
    data(){
        return{
            services:[
              {
                title: 'Desarrollo Web',
                description: 'Creación de sitios web modernos y responsivos.',
                descriptionImg: 'Ícono de desarrollo web',
                buttonText: 'Saber más'
              },
              {
                title: 'Diseño Gráfico',
                description: 'Diseños atractivos para mejorar la presencia en línea.',
                descriptionImg: 'Ícono de diseño gráfico',
                buttonText: 'Saber más'
              },
              {
                title: 'SEO',
                description: 'Optimización para motores de búsqueda para aumentar la visibilidad.',
                descriptionImg: 'Ícono de SEO',
                buttonText: 'Saber más'
              },
              {
                title: 'Marketing Digital',
                description: 'Estrategias de marketing para impulsar tu negocio en línea.',
                descriptionImg: 'Ícono de marketing digital',
                buttonText: 'Saber más'
              },
              {
                title: 'Consultoría Tecnológica',
                description: 'Asesoramiento experto para soluciones tecnológicas efectivas.',
                descriptionImg: 'Ícono de consultoría tecnológica',
                buttonText: 'Saber más'
              }
            ]
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
  }

  .service{
    width: 300px;
  }

</style>
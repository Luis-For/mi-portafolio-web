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
              }
            ]
        }
    }
}
</script>

<style>
  .services {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.service {
  position: relative;
  width: 300px; /* Ancho del hexágono */
  height: 259.8px; /* Aproximadamente (sqrt(3)/2) * ancho */
  background-color: #3498db; /* Color del hexágono */
  margin: 129.9px 0; /* Ajusta para teselar */
}
.service::before,
.service::after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 50px solid transparent; /* Mitad del ancho */
  border-right: 50px solid transparent; /* Mitad del ancho */
  left: 0;
}

.service::before {
  bottom: 100%;
  border-bottom: 28.85px solid #3498db; /* Altura de la punta */
}

.service::after {
  top: 100%;
  border-top: 28.85px solid #3498db; /* Altura de la punta */
}
.service-image {
    width: 100%;
    height: auto;
    border-radius: 10px;
}
#button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    background-color: #6c63ff;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
}
#button:hover {
    background-color: #574fd6;
}
</style>
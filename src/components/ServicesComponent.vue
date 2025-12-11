<template class="services">
    <div class="service">
        <img :src="image" :alt="descriptionImg" class="service-image"/>
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
    }
}
</script>

<style>
.service {
  position: relative;
  width: 100px; /* Ancho del hexágono */
  height: 57.7px; /* Aproximadamente (sqrt(3)/2) * ancho */
  background-color: #3498db; /* Color del hexágono */
  margin: 28.85px 0; /* Ajusta para teselar */
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
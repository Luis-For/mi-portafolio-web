<template>
<div class="education-component">
  <h1 class="education-title">Educación</h1>
  <div class="component"  v-for="(education, index) in educations" :key="index">    
    <section class="design-section">
      <div class="timeline-component" :style="getSideStyle(index)"> 
        <h3>{{ education.title }}</h3>
        <p>{{ education.type }}</p>
        <p>{{ education.university }}</p>
        <div class="state" @click="openInfo" @mouseover="zoom($event.target)" @mouseout="norm($event.target)">
          <p1 class="trigger">Ver más</p1>
        </div>        
      </div>
      <div class="timeline-component-hover"></div>        
    </section>
    <ModalBase v-if="visible" id="visible" @cerrar="cerrar">
        <h1>cerrar</h1>
    </ModalBase>
  </div>
</div>
</template>

<script>
  import ModalBase from './ModalBase.vue';
  import { utils } from '../utils/Utils.js';

  export default{
    name:'TimeLineComponent', 

    components:{
      ModalBase
    },

    data() {
        return {
            educations:[
              {
                title: 'Ingenieria de sistemas',
                type: 'Pregrado',
                university: 'Universidad del Magdalena',

              },{
                title: 'Cursos',
                type: 'Pregrado',
                university: 'Universidad del Magdalena',
              }
            ]
        }
    },

    methods:{
      openInfo(){
        this.visible=true;
        //document.body.style.overflow = "hidden";
      },
      cerrar(){
        this.visible=false;
        document.body.style.overflow = "auto";
      },
      getSideStyle(index) {
        const isDesktop = window.innerWidth >= 768; //cierto si la resolucion es mayor

        if(!isDesktop){
          return{};
        }
        return {
          transform: index % 2 === 0
            ? 'translateX(-80px)'
            : 'translateX(80px)'
        };
      }
    },
  mounted() { 
    const { zoom, norm } = utils();
    this.zoom = zoom;
    this.norm = norm;
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@200;300;400&display=swap');
.design-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  min-height: 50vh;
  padding: 5px 0;
  font-family: Jost;
}

.education-title{
  text-align: center;
  color: var(--color-text);
  padding: none;
}

.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  z-index: 1;
}
.timeline-component {
  position: relative;
  z-index: 2;
  overflow: hidden; /* 🔑 */
  background-color: #913d8e55;
  backdrop-filter: blur(10px);  
  border-radius: 50px;
  border: 1px solid #8A2387;
  margin: 0 20px 20px;
  padding: 3% 10% 3% 5%;
  transition: transform 0.4s ease;
}

/* overlay que sube */
.timeline-component::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(100, 100, 255, 0.25),
    rgba(255, 255, 255, 0.2)
  );
  transform: translateY(100%);
  transition: transform 0.4s ease;
  z-index: 0;
}

/* contenido normal */
.timeline-component .content {
  position: relative;
  z-index: 1;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* contenido hover */
.timeline-component-hover {
  position: absolute;
  inset: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: center;
  color: #000;

  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.4s ease, transform 0.4s ease;
}

/* ===== Hover ===== */
.timeline-component:hover::before {
  transform: translateY(0);
}

.timeline-component:hover .content {
  opacity: 0;
  transform: translateY(-20px);
}

.timeline-component:hover .timeline-component-hover {
  opacity: 1;
  transform: translateY(0);
}

@media screen {
  .timeline-component {
    justify-content: center;
  }
}

</style>

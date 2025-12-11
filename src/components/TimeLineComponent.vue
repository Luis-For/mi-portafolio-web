<template>
<div>
    <section class="design-section">
        <h1>Educación</h1>
        <div class="timeline">

            <div class="timeline-empty">
            </div>

            <div class="timeline-middle">
                <div class="timeline-circle"></div>
            </div>
            <div class="timeline-component timeline-content">
                <h3>Ingenieria de sistemas</h3>
                <p>Pregrado - Universidad del Magdalena</p>
                <div class="state" @click="openInfo" @mouseover="zoom($event.target)" @mouseout="norm($event.target)">
                    <p1 class="trigger">Ver más</p1>
                </div>
            </div>
            <div class="timeline-component timeline-content">
                <h3>Certificados</h3>
                <p>Certificados realizados en distintas areas como: git, docker, java, springboot, Postgresql, redis, javaspcript.</p>
                <div class="state">
                    <h4>EN CURSO</h4>
                </div>
            </div>
            
            <div class="timeline-middle">
                <div class="timeline-circle"></div>
            </div>  
        </div>
    </section>
    <ModalBase v-if="visible" id="visible" @cerrar="cerrar">
        <h1>cerrar</h1>
    </ModalBase>
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
            visible: false,
            dataEducation:[
              {
                id:1,
                title: 'Ingenieria de sistemas',
                desription: 'Pregrado - Universidad del Magdalena',
                image: '../assets/image/education/unimagdalena.png',
                info: 'Estudios de ingenieria de sistemas en la Universidad del Magdalena, con conocimientos en desarrollo web, bases de datos, redes y seguridad informática. Participación en proyectos académicos y actividades extracurriculares relacionadas con la tecnología.',
              },{
                id:2,
                title: 'Ingenieria de sistemas',
                desription: 'Pregrado - Universidad del Magdalena',
                image: '../assets/image/education/unimagdalena.png',
                info: 'Estudios de ingenieria de sistemas en la Universidad del Magdalena, con conocimientos en desarrollo web, bases de datos, redes y seguridad informática. Participación en proyectos académicos y actividades extracurriculares relacionadas con la tecnología.',
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
  padding-bottom: 3%;
}

.design-section h1{
    padding: 2%;
    color: var(--color-text);
}

.design {
  display: flex;
  align-items: center;
  justify-content: center;
}

.timeline {
  width: 80%;
  height: auto;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.timeline-content {
  padding: 20px;
  background: #1f1f1f;
  -webkit-box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
          box-shadow: 5px 5px 10px #1a1a1a, -5px -5px 10px #242424;
  border-radius: 5px;
  color: white;
  padding: 1.75rem;
  transition: 0.4s ease;
  overflow-wrap: break-word !important;
  margin: 1rem;
  margin-bottom: 20px;
  border-radius: 6px;
}

.timeline-component {
  margin: 0px 20px 20px 20px;
}

.state{
    display: inline-flex;
    justify-content: center;
    padding-right: 20%;
    padding-left: 20%;
    background-color: #8a23878c;
    border-radius: 30px;
}

@media screen and (min-width: 768px) {
  .timeline {
    display: grid;
    grid-template-columns: 1fr 3px 1fr;
  }
  .timeline-middle {
    position: relative;
    background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
    width: 3px;
    height: 100%;
  }
  .main-middle {
    opacity: 0;
  }
  .timeline-circle {
    position: absolute;
    top: 0;
    left: 50%;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-image: linear-gradient(45deg, #F27121, #E94057, #8A2387);
    -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
  }
}
</style>

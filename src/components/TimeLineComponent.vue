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
                <div class="state">
                    <button class="trigger" onclick="openModal()"><h4>EN CURSO</h4></button>
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
            
            <!--
            <div class="timeline-empty">
            </div>

            <div class="timeline-empty">
            </div>

            <div class="timeline-middle">
                <div class="timeline-circle"></div>
            </div>
            <div class=" timeline-component timeline-content">
                <h3>Javascript</h3>
                <p>Some Text.</p>
            </div>
            <div class="timeline-empty">
            </div>     -->       
            
        </div>
    </section>
</div>
</template>

<script>
export default{
  name:'TimeLineComponent'
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

<template>
  <div v-if="card" class="flotante" id="modal">
    <img class="close" src="https://img.icons8.com/?size=100&id=13903&format=png&color=CC5DE8" @click="cerrar">
    <div class="content-modal">
      <img :src="card.linkImg" />
      <h1 id="titulo">{{ card.title }}</h1>
      <p>{{ card.description }}</p>
      <p>{{ card.resume }}</p>
      <div class="buttons">
        <button class="button-principal">Ver proyecto</button>
        <button class="button-second">Ir al proyecto</button>
      </div>
    </div>
  </div>
</template>

<script>
  document.addEventListener("DOMContentLoaded", () => {
  console.log("Página abierta correctamente");
  });

export default {
  name: "ModalBase",
//#CC5DE8
  methods: {
    cerrar() {
      this.$emit('cerrar');
      document.body.style.filter = "none";
    },
    filter() {
      document.body.style.filter = "none";
    },
    /*cerrar si se presiona click afuera */
    handleClickOutside() {
      const modal = document.getElementById("modal");
      document.addEventListener("click", (event)=>{
        if(!modal.contains(event.target)){
          this.cerrar();
        }
      });
    }

  },
    mounted() {
    document.addEventListener("click", this.handleClickOutside);
  },

  beforeUnmount() {
    document.removeEventListener("click", this.handleClickOutside);
  },

  props:{
    card: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.flotante {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background: white;
  color: #000;

  padding: 8px;
  border-radius: 14px;

  width: 800px;
  max-width: 90%;
  max-height: 90vh;
  overflow-y: auto;

  z-index: 999999;

  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

.content-modal {
  padding: 20px;
}

.content-modal h1{
  font-size: 32px;
  margin-bottom: 10px;
  text-align: center;
}

.content-modal p {
  margin-top: 2px;
  margin-bottom: 10px;
  font-size: 20px;
  text-align: center;
}

.content-modal img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  margin-bottom: 20px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  z-index: 999999 ;
}

.buttons{
  display: flex;
  justify-content: center;
}
.button-principal {
    background-color: #0047ff;
    color: white;
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
    margin-right: 10px;
}

.button-principal:hover {
    background-color: #0036cc;
    scale: 1.03;
    transition: all 0.3s ease;
  }

.button-second {
    background-color: #00aaff;
    color: white;
    padding: 10px 20px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    cursor: pointer;
}

.button-second:hover {
    background-color: #0088cc;
    scale: 1.03;
    transition: all 0.3s ease;
}

@media (max-width:768px) {
  .flotante {
  width: 300px;
  height: 80%;
}
}
</style>

<template>
    <div>
        <div class="star"></div>
    </div>
</template>

<script>
export default {
  name: 'RandomSquares', // ponle un nombre representativo
  methods: {
    createSquare() {
      const section = document.querySelector('section');
      if (!section) return; // seguridad: evita errores si no se encuentra

      const square = document.createElement('span');

      // tamaño aleatorio entre 8 y 18 px
      const size = 8 + Math.random() * 10;

      square.style.width = size + 'px';
      square.style.height = size + 'px';

      square.style.position = 'absolute';
      square.style.top = Math.random() * window.innerHeight + 'px';
      square.style.left = Math.random() * window.innerWidth + 'px';
      square.style.background = 'rgba(255, 255, 255, 0.2)';
      square.style.borderRadius = '50%';

      section.appendChild(square);

      // opcional: eliminar después de cierto tiempo
      setTimeout(() => {
        square.remove();
      }, 4000);
    }
  },
  mounted() {
    setInterval(() => {
      this.createSquare();
    }, 150);
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-shadow:border-box;
}
.star{
    height:100%;
  width:100%;
}
span{
  border-radius:50%;
  pointer-events:none;
  position:absolute;
  background:white;
  animation: animate 10s linear infinite;
}
@keyframes animate{
  0%{
    transform:scale(0) translateY(0) rotate(0deg);
    opacity:0;
  }
  10%{
        opacity:1; 
  }
  90%{
        opacity:1; 
  }
  100%{
    transform:scale(1) translateX(-4000%) rotate(360deg);
        opacity:0; 
  }
}
</style>

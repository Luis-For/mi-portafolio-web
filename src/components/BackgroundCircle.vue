<template>
<div>
    <div class="area-wrapper" id="elements">
        <div class="area area-light"></div>
        <div class="area area-dark"></div>
        <ul class="circles">
            <li v-for="n in 2" :key="n"></li>
            <li v-for="n in 2" :key="n"></li>
            <li v-for="n in 2" :key="n"></li>
            <li v-for="n in 2" :key="n"></li>
            <li v-for="n in 2" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <!--new-->
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
            <li v-for="n in 1" :key="n"></li>
        </ul>
    </div>
</div>
</template>

<script>

document.addEventListener('mouseover', function() {

});

export default {
    name: 'Circle',
mounted() {
  const circles = document.querySelectorAll(".circles li");

  circles.forEach(circle => {
    circle.style.pointerEvents = "auto";

    circle.addEventListener("click", () => {
      if (circle.classList.contains("explode")) return;
      circle.classList.add("explode");
      setTimeout(() => circle.remove(), 450);
    });
  });
}

}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Exo:400,700');

* {
    margin: 0px;
    padding: 0px;
}

body {
    font-family: 'Exo', sans-serif;
}

.context {
    width: 100%;
    position: absolute;
    top: 50vh;

}

.context h1 {
    text-align: center;
    color: #fff;
    font-size: 50px;
}

.area-wrapper {
    position: fixed;
    background: var(--background-gradient);
    width: 100%;
    height: 100vh;
    z-index: -1;
    pointer-events: auto;
    top: 0;
    left: 0;
}
.area {
  position: absolute;
  width: 100%;
  height: 100%;
  transition: opacity 0.5s ease-in-out;
  top: 0;
  left: 0;
}

.area-light {
  /*background: linear-gradient(#6366F1,#4338CA,  #b94dff,  #9170a7 );*/
  background: linear-gradient(#5058C7,#898FF1);
  opacity: 1;
}

.area-dark {
  background: linear-gradient(#1a1c2b, #0d0f24);
  opacity: 0;
}

[data-theme="dark"] .area-light {
  opacity: 0;
}

[data-theme="dark"] .area-dark {
  opacity: 1;
}

@keyframes explodeBubble {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(2.8);
    opacity: 0.6;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.explode {
  animation: explodeBubble 0.45s ease-out forwards;
}


.circles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 200vh;
    overflow: hidden;
    pointer-events: auto !important;
}

.circles li {
    position: absolute;
    display: block;
    list-style: none;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.2);
    animation: animate 15s linear infinite;
    bottom: -150px;
    pointer-events: auto !important;
    cursor: pointer;
}

.circles li:nth-child(1) {
    left: 25%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
}

.circles li:nth-child(2) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 12s;
}

.circles li:nth-child(3) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 4s;
}

.circles li:nth-child(4) {
    left: 40%;
    width: 60px;
    height: 60px;
    animation-delay: 0s;
    animation-duration: 18s;
}

.circles li:nth-child(5) {
    left: 65%;
    width: 20px;
    height: 20px;
    animation-delay: 0s;
}

.circles li:nth-child(6) {
    left: 75%;
    width: 110px;
    height: 110px;
    animation-delay: 3s;
}

.circles li:nth-child(7) {
    left: 35%;
    width: 150px;
    height: 150px;
    animation-delay: 7s;
}

.circles li:nth-child(8) {
    left: 50%;
    width: 25px;
    height: 25px;
    animation-delay: 11s;
    animation-duration: 11s;
}

.circles li:nth-child(9) {
    left: 20%;
    width: 15px;
    height: 15px;
    animation-delay: 2s;
    animation-duration: 14s;
}

.circles li:nth-child(10) {
    left: 85%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 9s;
}

.circles li:nth-child(11) {
    left: 20%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 6s;
}

.circles li:nth-child(12) {
    left: 10%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 7s;
}

.circles li:nth-child(13) {
    left: 10%;
    width: 20px;
    height: 20px;
    animation-delay: 2s;
    animation-duration: 7s;
}

.circles li:nth-child(14) {
    left: 70%;
    width: 20px;
    height: 20px;
    animation-delay: 1s;
    animation-duration: 18s;
}

.circles li:nth-child(15) {
    left: 43%;
    width: 150px;
    height: 150px;
    animation-delay: 1s;
    animation-duration: 8s;
}

@keyframes animate {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 1;
        border-radius: 0;
    }

    100% {
        transform: translateY(-250vh) rotate(720deg);
        opacity: 0;
        border-radius: 50%;
    }

}
</style>

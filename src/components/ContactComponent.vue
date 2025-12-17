<template>
  <div class="contact-container">
    <!--<h2 class="contact-title">Contáctame</h2>-->
    <p class="contact-subtitle">
      ¿Tienes una idea o proyecto en mente y necesitas hablarlo mas personal? Escríbeme 👋
    </p>

    <div class="contact-cards">
      <div class="contact-card">
        <img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=ffffff" />
        <span>Email</span>
        <p>luisfor90@gmail.com</p>
      </div>

      <div class="contact-card">
        <img src="https://img.icons8.com/?size=100&id=11835&format=png&color=ffffff" />
        <span>Teléfono</span>
        <p>+57 305 439 8894</p>
      </div>
    </div>

    <div class="socials">
      <a href="#" class="social github">
        <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=ffffff" />
      </a>
      <a href="#" class="social linkedin">
        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=ffffff" />
      </a>
      <a href="#" class="social stackoverflow">
        <img src="https://img.icons8.com/?size=100&id=13955&format=png&color=ffffff" />
      </a>
    </div>
  </div>
</template>


<script>
export default {
    name: 'ContactComponent',
};
</script>

<style>
.contact-container {
  background: linear-gradient(180deg, #1a0b2e, #2a003e);
  padding: 4rem 2rem;
  border-radius: 20px 20px 0 0;
  color: white;
  text-align: center;
}

.contact-title {
  font-size: 2.2rem;
  margin-bottom: 0.5rem;
}

.contact-subtitle {
  opacity: 0.8;
  margin-bottom: 2.5rem;
}

.contact-cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.contact-card {
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  padding: 2rem;
  border-radius: 16px;
  width: 260px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.contact-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(138, 43, 226, 0.3);
}

.contact-card img {
  width: 42px;
  margin-bottom: 1rem;
}

.contact-card span {
  font-weight: bold;
  display: block;
  margin-bottom: 0.3rem;
}

.contact-card p {
  font-size: 0.9rem;
  opacity: 0.85;
}

/* SOCIALS */
.socials {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
}

.social {
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.08);
  transition: transform 0.3s ease, background 0.3s ease;
}

.social img {
  width: 28px;
}

.social:hover {
  transform: scale(1.15);
  background: rgba(138, 43, 226, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .contact-cards {
    flex-direction: column;
    align-items: center;
  }
}

</style>
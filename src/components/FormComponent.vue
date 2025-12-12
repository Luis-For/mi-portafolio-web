<template>
    <div class="form">
        <div class="form-contact">
            <section class="contact-section">
            <h2 class="contact-title">Escribeme</h2>
            <p class="contact-subtitle">¿Te gustaria que desarrollaramos algo?</p>

            <form class="contact-form" @submit.prevent="sendEmail">
              <div class="form-group">
                  <label for="name">Nombre</label>
                  <input v-model="form.name" type="text" id="name" required />
              </div>

              <div class="form-group">
                  <label for="email">Correo electrónico</label>
                  <input v-model="form.email" type="email" id="email" required />
              </div>

              <div class="form-group">
                  <label for="subject">Asunto</label>
                  <input v-model="form.subject" type="text" id="subject" required />
              </div>

              <div class="form-group">
                  <label for="message">Mensaje</label>
                  <textarea v-model="form.message" id="message" required></textarea>
              </div>

              <button type="submit" class="btn-submit">Enviar mensaje</button>
          </form>

            </section>
        </div>
    </div>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  name: "FormComponent",

  data() {
    return {
      form: {
        name: "",
        email: "",
        subject: "",
        message: ""
      }
    };
  },

  methods: {
    async sendEmail() {
      try {
        const params = {
          from_name: this.form.name,
          from_email: this.form.email,
          subject: this.form.subject,
          message: this.form.message
        };

        await emailjs.send(
          "service_v96gd6f",     // <-- reemplaza
          "template_ycqc2nd",    // <-- reemplaza
          params,
          "yvtmjJ3ABiuUKIYYU"      // <-- reemplaza
        );

        alert("Mensaje enviado correctamente");

        // limpiar formulario
        this.form = {
          name: "",
          email: "",
          subject: "",
          message: ""
        };

      } catch (error) {
        console.error(error);
        alert("Ocurrió un error al enviar el mensaje");
      }
    }
  }
};
</script>

<style>
.form{
position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;  
  padding: 20px;
}

.form-contact{
  background: rgba(20, 20, 30, 0.85);
  border: 0.5px solid #2a2a35;
  backdrop-filter: blur(5px);
  border-radius: 60px;
  padding: 2px 50px;
  max-width: 500px;
  width: 90%;
  box-shadow: 0 0 20px rgba(140, 90, 255, 0.2);
}

.contact-section {
  max-width: 600px;
  margin: 60px auto;
  padding: 20px;
  text-align: center;
  color: white;
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 10px;
  color: #b693ff;
}

.contact-subtitle {
  margin-bottom: 30px;
  color: #bbb;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  text-align: left;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #ddd;
}

.form-group input,
.form-group textarea {
  width: 100%;
  background: #121218;
  border: 1px solid #2a2a35;
  border-radius: 10px;
  padding: 12px;
  font-size: 0.95rem;
  color: white;
  outline: none;
  transition: 0.3s;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: #b693ff;
  background: #161622;
}

.btn-submit {
  margin-top: 10px;
  padding: 14px;
  background: #b693ff;
  color: #0f0f14;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
}

.btn-submit:hover {
  background: #c6a8ff;
  transform: translateY(-2px);
}

</style>
<template>
    <div class="contact-container">
        <ul>
            <li><img src="https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000" width="18" style="vertical-align: middle;"/> Email: luisfor90@gmail.com</li>
            <li><img src="https://img.icons8.com/?size=100&id=11835&format=png&color=000000" width="22" style="vertical-align: middle;"/> Teléfono: +57 3054398894</li>
            <li>Redes Sociales:
                <ul id="github"><img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" style="vertical-align: middle;"/> Github</ul>
                <ul id="linkedin"><img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" style="vertical-align: middle;"/> LinkedIn</ul>
                <ul id="stackoverflow"><img src="https://img.icons8.com/?size=100&id=13955&format=png&color=000000" style="vertical-align: middle;"/> Stack Overflow</ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ContactComponent',
};
</script>

<style>
    .contact-container {
        background-color: rgba(42, 42, 74, 1);
        padding: 2rem;
        border-radius: 10px;
        color: white;
        text-align: center;
        
    }
    .contact-container ul {
        display: flex;
        justify-content: center; /* Centra horizontalmente */
        align-items: center; /* Centra verticalmente si es necesario */
        list-style-type: none;
        padding: 0;
    }
    ul{
        margin-top: 1rem;
    }
    li{
        margin: 0 1rem;
        display: flex;
        justify-content: center;
    }
</style>
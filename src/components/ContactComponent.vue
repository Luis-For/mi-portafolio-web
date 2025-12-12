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
        /*background-color: rgba(42, 42, 74, 1);*/
        background: var(--background-color-contact);
        padding: 2rem;
        border-radius: 10px;
        color: white;
        text-align: center;
        overflow: hidden;
    }
    .contact-container ul {
        display: relative;
        justify-content: flex-start; /* Centra horizontalmente */
        align-items: flex-start; /* Centra verticalmente si es necesario */
        list-style-type: none;
        padding: 2px;
    }
    ul{
        margin-top: 1rem;
        align-items: flex-start;
    }
    li{
        margin: 0 1rem;
        display: flex;
        justify-content: center;
    }

    @media (max-width:768px) {
        .contact-container {
            padding: 2rem;
            font-size: 10px;
            position: flex;
            flex-direction: column(2,2);
            overflow: hidden;
        }
    }
</style>
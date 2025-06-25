<template id="page">
    <div id="home">        
        <BackgroundCircle/>
        <NavBar/>
        <body>
            <ProfileComponent id="inicio"/>
            <section>
                <Skills id="habilidades"/>
            </section>
        </body>
    </div>
</template>

<script>
import BackgroundCircle from '../components/BackgroundCircle.vue';
import NavBar from '../components/NavBar.vue';
import ProfileComponent from '../components/ProfileComponent.vue';
import Skills from '../components/Skills.vue';

export default{
    name:'Home',
    components:{
        NavBar,
        BackgroundCircle,
        ProfileComponent,
        Skills
    }
}
</script>

<style>

body{
    margin: 0%;
    padding: 0%;
}

#inicio{
    padding: 10%;
}

@media (max-width: 768px) {
    #inicio{
        padding: 25%;
    }
}
</style>
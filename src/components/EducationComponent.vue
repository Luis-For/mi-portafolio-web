<template>
    <div id="educationID" class="education-component">
        <div class="education-card">
            <img :src="image" :alt="title" class="education-image"/>
            <h3>{{ title }}</h3>
            <p>{{ desription }}</p>
            <a :href="link" target="_blank">Ver</a>
        </div>
    </div>
</template>

<script>
export default{
    name:'EducationComponent',
    props:{
        title:String,
        desription: String,
        image: String,
        link: String
    }
}
</script>

<style>
.education-card{
    padding: auto;
    background-color: rgba(42, 42, 74, 1);
}
</style>
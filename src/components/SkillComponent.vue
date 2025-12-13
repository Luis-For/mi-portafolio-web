<template>
    <div class="skill-section">
        <div class="skill-element" v-for="skill in skills" :key="skill" 
        @mouseover="zoom($event.currentTarget)" 
        @mouseout="norm($event.currentTarget)">
            <div class="skill-icon">
                <img :src="skill.img"/>
            </div>
            <h2 class="skill-title">
                {{ skill.title }}
            </h2>
        </div>
    </div>
</template>

<script>
    import { utils } from '../utils/Utils.js';
    const { zoom, norm } = utils();

    export default{
        name:'skillComponent',
        methods:{
            zoom(el){
                zoom(el);
            },
            norm(el){
                norm(el);
            }
        },
        data(){
            return{
                skills:[
                    {
                        title: 'Vue.js',
                        img: 'https://img.icons8.com/?size=30&id=rY6agKizO9eb&format=png&color=000000'
                    },
                    {
                        title: 'React',
                        img: 'https://img.icons8.com/?size=40&id=123603&format=png&color=000000'
                    },
                    {
                        title: 'Angular',
                        img: 'https://img.icons8.com/?size=40&id=71257&format=png&color=000000'
                    },
                    {
                        title: 'HTML5',
                        img: 'https://img.icons8.com/?size=40&id=20909&format=png&color=000000'
                    },
                    {
                        title: 'SpringBoot',
                        img: 'https://img.icons8.com/?size=40&id=90519&format=png&color=000000'
                    },
                    {
                        title: 'Java',
                        img: 'https://img.icons8.com/?size=50&id=13679&format=png&color=000000'
                    },
                    {
                        title: 'Node.js',
                        img: 'https://img.icons8.com/?size=40&id=hsPbhkOH4FMe&format=png&color=000000'
                    },
                    {
                        title: 'C#',
                        img: 'https://img.icons8.com/?size=40&id=55205&format=png&color=9D0DC9'
                    },
                    {
                        title: 'Postgres',
                        img: 'https://img.icons8.com/?size=40&id=JRnxU7ZWP4mi&format=png&color=000000'
                    },
                    {
                        title: 'Redis',
                        img: 'https://img.icons8.com/?size=40&id=pHS3eRpynIRQ&format=png&color=000000'
                    },
                    {
                        title: 'MongoDB',
                        img: 'https://img.icons8.com/?size=40&id=74402&format=png&color=000000'
                    },
                    {
                        title: 'MySQL',
                        img: 'https://img.icons8.com/?size=40&id=9nLaR5KFGjN0&format=png&color=058F92'
                    },
                    {
                        title: 'Postman',
                        img: 'https://img.icons8.com/?size=40&id=EPbEfEa7o8CB&format=png&color=000000'
                    },
                    {
                        title: 'AWS',
                        img: 'https://img.icons8.com/?size=40&id=33039&format=png&color=000000'
                    }                    
                ]
            }
        }
    }
</script>

<style>
    .skill-section{
        background-color: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.75rem;
    }

    .skill-element{
        display: flex;
        gap: 10%;
        background-color: rgba(255, 255, 255, 0.1);
        padding-top: 0.01%;
        padding-bottom: 0.1%;
        margin: 1%;
        overflow: hidden;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 75px;
        min-height: 100%;
        min-width: 10%;
        max-width: 100%;
    }

    .skill-icon{
        max-width: 100%;
        max-height: 100%;
    }

    .skill-title{
        color: white;
        /*font-family: ;*/
        font-size: 1.2rem;
    }
    
</style>
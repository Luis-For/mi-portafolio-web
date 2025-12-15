<template>
    <div class="skill-section">
        <div class="skill-element" v-for="skill in skills" :key="skill" 
        @mouseover="zoom($event.currentTarget)" 
        @mouseout="norm($event.currentTarget)"
        @mousemove="setSkillColor(skill.color)">
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
            },
            setSkillColor(color){
                document.documentElement.style.setProperty('--color-skill-element', color);
            }
        },
        data(){
            return{
                skills:[
                    {
                        title: 'Vue.js',
                        img: 'https://img.icons8.com/?size=30&id=rY6agKizO9eb&format=png&color=000000',
                        color: 'rgba(66, 184, 131, 0.25)' // verde Vue
                    },
                    {
                        title: 'React',
                        img: 'https://img.icons8.com/?size=40&id=123603&format=png&color=000000',
                        color: 'rgba(97, 218, 251, 0.25)' // azul React
                    },
                    {
                        title: 'Angular',
                        img: 'https://img.icons8.com/?size=40&id=71257&format=png&color=000000',
                        color: 'rgba(221, 0, 49, 0.25)' // rojo Angular
                    },
                    {
                        title: 'HTML5',
                        img: 'https://img.icons8.com/?size=40&id=20909&format=png&color=000000',
                        color: 'rgba(227, 79, 38, 0.25)' // naranja HTML5
                    },
                    {
                        title: 'SpringBoot',
                        img: 'https://img.icons8.com/?size=40&id=90519&format=png&color=000000',
                        color: 'rgba(109, 179, 63, 0.25)' // verde Spring
                    },
                    {
                        title: 'Java',
                        img: 'https://img.icons8.com/?size=50&id=13679&format=png&color=000000',
                        color: 'rgba(83, 130, 161, 0.25)' // azul Java
                    },
                    {
                        title: 'Node.js',
                        img: 'https://img.icons8.com/?size=40&id=hsPbhkOH4FMe&format=png&color=000000',
                        color: 'rgba(104, 160, 99, 0.25)' // verde Node
                    },
                    {
                        title: 'C#',
                        img: 'https://img.icons8.com/?size=40&id=55205&format=png&color=9D0DC9',
                        color: 'rgba(155, 80, 168, 0.25)' // morado C#
                    },
                    {
                        title: 'Postgres',
                        img: 'https://img.icons8.com/?size=40&id=JRnxU7ZWP4mi&format=png&color=000000',
                        color: 'rgba(51, 103, 145, 0.25)' // azul PostgreSQL
                    },
                    {
                        title: 'Redis',
                        img: 'https://img.icons8.com/?size=40&id=pHS3eRpynIRQ&format=png&color=000000',
                        color: 'rgba(216, 44, 32, 0.25)' // rojo Redis
                    },
                    {
                        title: 'MongoDB',
                        img: 'https://img.icons8.com/?size=40&id=74402&format=png&color=000000',
                        color: 'rgba(77, 179, 61, 0.25)' // verde MongoDB
                    },
                    {
                        title: 'MySQL',
                        img: 'https://img.icons8.com/?size=40&id=9nLaR5KFGjN0&format=png&color=058F92',
                        color: 'rgba(0, 117, 143, 0.25)' // azul MySQL
                    },
                    {
                        title: 'Postman',
                        img: 'https://img.icons8.com/?size=40&id=EPbEfEa7o8CB&format=png&color=000000',
                        color: 'rgba(255, 108, 55, 0.25)' // naranja Postman
                    },
                    {
                        title: 'AWS',
                        img: 'https://img.icons8.com/?size=40&id=33039&format=png&color=000000',
                        color: 'rgba(255, 153, 0, 0.25)' // naranja AWS
                    }
                   
                ]
            }
        }
    }
</script>

<style>
    .skill-section{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 1.25rem;
        max-width: 900px;
        margin: 0 auto;
    }

    .skill-element{
        display: flex;
        gap: 10%;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 0.5rem 1rem;
        overflow: hidden;
        box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border-radius: 999px;
        min-height: 100%;
        min-width: 10%;
        max-width: 100%;
        scale: 1;
        justify-content: start;
    }

    .skill-element:hover{
        background-color: var(--color-skill-element);
        transform: translateY(-3px);
        box-shadow: 0 10px 22px rgba(0,0,0,0.4);
    }

    .skill-icon{
        display: flex;
        justify-content: center;
        align-items: center;
        min-width: 44px;
        padding-left: 0;
    }

    .skill-icon img{
        height: 32px;
        width: 32px;
        object-fit: contain;
        filter: drop-shadow(0 1px 2px rgba(0,0,0,0.3)); 
    }

    .skill-title{
        color: white;
        font-size: 1.1rem;
        font-weight: 500;
        letter-spacing: 0.3px;
        white-space: nowrap;        
    }

    @media screen {
        .skill-element{
            scale: 0.9;
            padding-right: 2rem;
        }
    }
    
</style>
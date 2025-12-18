<template>
    <div class="continue-container">
        <div class="continue-icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill=white width="24" height="24"><path d="m12 17.586-7.293-7.293-1.414 1.414L12 20.414l8.707-8.707-1.414-1.414L12 17.586z"/><path d="m20.707 5.707-1.414-1.414L12 11.586 4.707 4.293 3.293 5.707 12 14.414l8.707-8.707z"/></svg>
        </div>
    </div>
</template>

<script>
    export default{
        name:'ContinueComponent',
        methods:{
            scrollToAboutMe(){
            }
        }
    }
</script>

<style>
.continue-container{
    display: flex;
    background: none;
    align-items: center;
    justify-content: center;
}

.continue-icon{
    display: flex;
    border-radius: 50% 50% 50% 50%;
    box-shadow: 0 4px 8px rgb(0, 0, 0);
    padding: 0.2%;
    scale: 2.7;
    /*background-color: black;*/
    align-items: center;
    justify-content: center;
    animation: transformscale ease-in 1s infinite;
}

@keyframes transformscale {
    50% {
        transform: scale(1.3);
    }
}
</style>
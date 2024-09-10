<script setup lang="ts">
import HeaderPage from './components/headerPage.vue';
import content from './components/content.vue';
</script>
<template>
    <div class=" homepage">
        <video id="bg-cover" autoplay muted loop>  // this for loop a video run evenry time that user use 
            <source src="./assets/videos/bgvv2.mp4" type="video/mp4" />  
        </video>
        
        <div class="flex flex-col">
            <div class="flex justify-center items-center relative">
                <HeaderPage></HeaderPage>
            </div>
            <div class="flex relative ">
                <content></content>
            </div>
          
            
        </div>
    </div>

</template>
<style scoped>
.homepage{
    video#bg-cover {  
    width: 100%;  
    height: 100%;  
    position: fixed;  
    top: 50%;  
    transform: translateY(-50%);  
    object-fit: unset; 
    } 
}
</style>

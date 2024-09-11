<script setup lang="ts">
import appsideber from './components/appsideber.vue'
import dashboard from './components/dashboard.vue';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const isSidebarOpen = ref(true); // Reactive variable to track whether the sidebar is open
const backButton = () => {
    router.push('./')
}
// Function to toggle the sidebar's state
const toggleSidebar = () => {
    console.log(toggleSidebar);
  isSidebarOpen.value = !isSidebarOpen.value;
};
</script>

<template>
    <div class="contener flex ">
            <div class="sideberBg w-[20%] h-[100vh]  flex-col flex backdrop-blur-[6px] box-border">
                <div class="flex justify-between m-4 box-border ">
                <img src="../GetStart/assets/svg/back2.png" alt="backLogo" 
                class="backButton h-[25px] " 
                @click="backButton">
                <img src="../GetStart/assets/svg/closeSideber.png" alt="backLogo" 
                class="colesSideberButton h-[30px]" 
                @click="toggleSidebar">
            </div>
            <div :class="{'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen}" class="transition-transform transform duration-300 ease-in-out">
                <appsideber></appsideber>
            </div>
               
            </div>
        <div class=" w-[80%] h-[100vh] box-border justify-center items-center">
            <dashboard></dashboard>
                

        </div>
    </div>
</template>
<style scoped>
.contener {
    background-color: #393d53;
}

.sideberBg {
    background-color: rgba(95, 89, 129, 0.5);
}

.backButton{
    filter: drop-shadow(3px 3px 2px #CB80AB);
}
.colesSideberButton{
    filter: drop-shadow(3px 3px 2px #6AD4DD);
}

</style>
<script setup lang="ts">
import appsideber from './components/appsideber.vue'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
const router = useRouter();
const isSidebarOpen = ref(false); // Reactive variable to track whether the sidebar is open
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
    <div class="contener">
        <div>
            <div class="sideberBg w-[20%] h-[100vh] overflow-auto flex-col flex backdrop-blur-[6px] box-border">
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
            <div class=" w-[50%] text-center flex-col flex justify-center items-center bg-pink-700">

            </div>
        </div>
    </div>
</template>
<style scoped>
.contener {
    background-color: #474c6d;
}

.sideberBg {
    background-color: rgba(117, 106, 182, 0.5);
}

.backButton{
    filter: drop-shadow(3px 3px 2px #CB80AB);
}
.colesSideberButton{
    filter: drop-shadow(3px 3px 2px #6AD4DD);
}

</style>
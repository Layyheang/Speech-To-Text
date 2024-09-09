<script setup lang="ts">
import { ref, onMounted } from "vue";  
import moment from "moment"; 
const date = ref(); 
const time = ref();
const greeting = ref('');  

const updateCurrentTime = () => {   // function for run time that use moment liary 
    time.value = moment(new Date()).format('hh:mm:ss A');  
};  

onMounted(() => { 
    greeting.value = checkTimeShift() 
    date.value = moment(new Date()).format('DD-MM-YYYY') // real date 
    updateCurrentTime()
    setInterval(() => { 
        updateCurrentTime()
    }, 1000); 
}); 
 
 
const checkTimeShift = () => { 
    const hour = new Date().getHours(); 
    if (hour === 5 || hour < 12) { 
        return "Good Morning"; 
    } else if (hour === 12 || hour < 18) { 
        return "Good Afternoon"; 
    } else if (hour === 18 || hour < 22) { 
        return "Good Evening"; 
    } else { 
        return "Goodnight"; 
    } 
};



</script>
<template>
        <div class=" w-[100%] flex items-center ">
            <div class="w-full justify-between flex p-2">
                <div class="flex justify-start w-[33.33%] ">
                        <img src="../assets/imgs/logo.png" alt="logo-Norton"
                            class="w-[180px] h-[60px] ml-7">
                </div>
                <div class=" timeBtn gap-4 flex justify-around items-center text-[15px] w-[33.33%] font-medium text-black backdrop-blur-sm border-none rounded-[49px] shadow-2xl shadow-[#674188]  " > 
                        <p>{{ greeting }}</p> 
                        <div class="w-[50%] justify-around flex ">
                            <p >{{ date }}</p> 
                            <p >{{ time }}</p> 
                        </div>
                    </div>
               
                <div class="w-[33.33%]">
                    <div class="card flex justify-end mr-20 p-[0.5rem]">
                    </div>
                          
                </div>      
            </div>
        </div>      

</template>

<style scoped>
</style>


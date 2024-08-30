<script setup lang="ts">
import { ref, onMounted } from "vue";  
const fullDate = ref(new Date()); 
const date = ref(); 
const time = ref();
const greeting = ref('');  
const updateCurrentTime = () => {  
    time.value = new Date().toLocaleTimeString();  
};  


onMounted(() => { 
    greeting.value = checkTimeShift() 
    setInterval(() => { 
        greeting.value = checkTimeShift(); 
    }, 60000); 
    date.value = fullDate.value.getFullYear() + '-' + (fullDate.value.getMonth() + 1).toString().padStart(2, "0") + '-' + fullDate.value.getDate().toString().padStart(2, "0"); 
    updateCurrentTime()
    setInterval(() => { 
        updateCurrentTime()
    }, 1000); 
}); 
 
 
const checkTimeShift = () => { 
    const hour = fullDate.value.getHours(); 
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
        <div class=" w-[100%] flex items-center bg-[rgba(124, 147, 195,0.9)] backdrop-blur-sm">
            <div class="w-full justify-between flex p-1">
                <div class="w-[33.33%] p-2">
                    <headerMenu>hello</headerMenu>
                </div>
                <div class="flex justify-center w-[33.33%] ">
                    <a target="_blank" href="https://www.norton-u.com/">
                        <img src="../assets/imgs/logo.png" alt="logo-Norton"
                            class="w-[200px] ">
    
                    </a>
                </div>
                    <div class=" p-2 gap-8 flex justify-around items-center column-gap-2 xl:column-gap-4 text-[15px] w-[33.33%] font-bold" > 
                        <p>{{ greeting }}</p> 
                        <p >{{ date }}</p> 
                        <p class="min-w-24">{{ time }}</p> 
                    </div>
            </div>      
        </div>
        

</template>


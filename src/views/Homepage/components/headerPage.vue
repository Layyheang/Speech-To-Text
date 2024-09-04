<script setup lang="ts">
import { ref, onMounted } from "vue";  
import moment from "moment"; 
import Dialog from 'primevue/dialog'; // import for primevue to use 
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from "primevue/password";

const fullDate = ref(new Date()); 
const date = ref(); 
const time = ref();
const greeting = ref('');  
const visible = ref(false); // use primevue for login and config style with tailwindcss
let isLoading = false
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
                <div class=" gap-4 flex justify-around items-center column-gap-2 xl:column-gap-4 text-[15px] w-[33.33%] font-bold" > 
                        <p>{{ greeting }}</p> 
                        <div class="w-[50%] justify-around flex ">
                            <p >{{ date }}</p> 
                            <p class="min-w-24">{{ time }}</p> 
                        </div>
                    </div>
                <div class="flex justify-center w-[33.33%] ">
                        <img src="../assets/imgs/logo.png" alt="logo-Norton"
                            class="w-[200px] ">
                </div>
                <div class="w-[33.33%] p-1  ">
                    <div class="card flex justify-center p-2">
                        <Button security="Login" outlined class="login-button" @click="visible = true" :loading="isLoading">
                                <label class="text-black font-bold ">Login</label>
                        </Button> 
                                 
                        <Dialog v-model:visible="visible" pt:root:class="bg-transparent !border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
                            <template #container="{ closeCallback }">
                                <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl h-[450px] bg-[#CDF0EA] backdrop-blur-md" 
                                     @keydown.space.prevent>
                                     <span class="block mx-auto font-bold text-xl">Login</span>
                                        <div class="inline-flex flex-col gap-2"  >
                                            <label for="Email" class="text-primary-50 font-semibold">Email</label>
                                            <InputText id="Email" type="email" class="!border !p-4 !text-primary-50 w-80"/>
                                        </div>
                                        <div class="inline-flex flex-col gap-2">
                                            <label for="password" class="text-primary-50 font-semibold">Password</label>
                                            <Password id="password" type="password" toggleMask :feedback="false" class="w-80 "/>
                                        </div>
                                        <div class="flex items-center gap-4 mt-4">
                                            <Button label="Cancel" @click="closeCallback" text class="!p-4 w-full !text-primary-50 !border !border-[#6A9C89] hover:shadow-md hover:shadow-[#6A9C89] hover:!bg-[#CDF0EA]"></Button>
                                            <Button label="Sign-In" @click="closeCallback" text class="!p-4 w-full !text-primary-50 !border !border-[#6A9C89] hover:shadow-md hover:shadow-[#6A9C89] hover:!bg-[#CDF0EA]"></Button>
                                        </div>
                                </div>
                            </template>
                        </Dialog>
                    </div>
                          
                </div>      
            </div>
        </div>      

</template>

<style scoped>
.login-button{
    color: black; /* Text color */
    font-weight: bold; /* Font weight */  
    width: 8.5rem; /* Width */
    height: 3rem; /* Height */  
    outline: none; /* Outline color */
    box-shadow: 0 0 0 3px rgba(95, 190, 255, 0.5); /* Focus shadow */
    
}

.login-button:hover {
  box-shadow: 0 4px 6px -1px rgba(6, 182, 212, 0.5), 0 2px 4px -2px rgba(6, 182, 212, 0.5); /* Hover shadow */
}

:deep(.p-inputtext){
    background-color: #CDF0EA;
    border: 1px solid rgba(106, 156, 137,0.5);
}
:deep(.p-password-input){
    width: 100%;
    padding: 1rem;
}
</style>


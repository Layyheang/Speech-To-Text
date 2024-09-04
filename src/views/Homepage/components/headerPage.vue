<script setup lang="ts">
import { ref, onMounted,computed } from "vue";  
import {useVuelidate }from "@vuelidate/core";
import { required,helpers } from "@vuelidate/validators";
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
const isLoading = false
const field = ref({
    email:'',
    password:''
})

const rule = computed(() => { 
    return { 
        email: { required: helpers.withMessage("Email is required", required)}, 
        password: {  
            required: helpers.withMessage("Password is required", required), 
         } 
    } 
}) 
const $valition = useVuelidate(rule, field.value)

const login = async () => { 
    const invalid = await $valition.value.$validate() 
    if (invalid == false) return 
    isLoading.value = true
}


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
                        <Button security="Login" outlined class="login-button " @click="visible = true" >
                                <label class="text-black font-bold text-center">Login</label>
                        </Button> 
                                 
                        <Dialog v-model:visible="visible" pt:root:class="bg-transparent !border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
                            <template #container="{ closeCallback }">
                                <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl h-[450px] bg-[#CDF0EA] backdrop-blur-md" 
                                     @keydown.space.prevent>
                                     <span class="block mx-auto font-bold text-xl">Login</span>
                                        <div class="inline-flex flex-col gap-2"  >
                                            <label for="email" class="text-primary-50 font-semibold">Email</label>
                                            <InputText id="Email" type="email" placeholder="Enter your email" v-model="field.email"
                                                       class="!border !p-4 !text-primary-50 w-80 hover:shadow-lg hover:shadow-[#6A9C89] hover:!bg-[#CDF0EA] placeholder-white placeholder-opacity-50"/>
                                                        <small v-if='$valition.email.$error' class=" text-red-500 font-bold"> 
                                                            {{ $valition.email.$errors[0]?.$message }} 
                                                        </small>
                                        </div>
                                        <div class="inline-flex flex-col gap-2">
                                            <label for="password" class="text-primary-50 font-semibold">Password</label>
                                            <Password id="Password" type="password" toggleMask :feedback="false" placeholder="Enter your password" v-model="field.password"
                                                      class="w-80 hover:shadow-lg hover:shadow-[#6A9C89] hover:!bg-[#CDF0EA]"/>
                                                      <small v-if='$valition.password.$error' class=" text-red-500 font-bold"> 
                                                            {{ $valition.password.$errors[0]?.$message }} 
                                                      </small>
                                        </div>
                                        <div class="flex items-center gap-4 mt-4">
                                            <Button  @click="closeCallback" text class="!p-4 w-full !text-primary-50 !border !border-[#6A9C89] hover:shadow-md hover:shadow-[#6A9C89] hover:!bg-[#CDF0EA]">
                                                <label class="text-black">Cancel</label>
                                            </Button>
                                            <Button  @click="login" :loading="isLoading" text class="!p-4 w-full !text-primary-50 !border !border-[#6A9C89] hover:shadow-md hover:shadow-[#6A9C89] hover:!bg-[#CDF0EA]">
                                                <label class="text-black" >Sign-In</label>
                                            </Button>
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
    font-weight: bold; /* Font weight */  
    width: 8.5rem; /* Width */
    height: 3rem; /* Height */  
    outline: none; /* Outline color */
    box-shadow: 0 0 0 2px rgba(95, 190, 255, 0.5); /* Focus shadow */
    
}

:deep(.p-inputtext){
    border-radius: 3px;
    background-color: #CDF0EA;
    border: 1px solid rgba(106, 156, 137,0.5);
    &::placeholder{
        color: rgba(255,255,255,0.5);
    }
}
:deep(.p-password-input){
    border-radius: 3px;
    width: 100%;
    padding: 1rem;
    &::placeholder{
        color: rgba(255,255,255,0.5);
    }
}
</style>


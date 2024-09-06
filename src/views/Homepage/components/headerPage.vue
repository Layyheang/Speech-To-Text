<script setup lang="ts">
import { ref, onMounted,computed } from "vue";  
import {useVuelidate }from "@vuelidate/core";
import { required,helpers,email } from "@vuelidate/validators";
import moment from "moment"; 
import Dialog from 'primevue/dialog'; // import for primevue to use 
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Password from "primevue/password";
// import IconField from "primevue/iconfield";


const date = ref(); 
const time = ref();
const greeting = ref('');  
const visible = ref(false); // use primevue for login and config style with tailwindcss
const isLoading = ref(false); // Make isLoading reactive
const field = ref({
    email:'',
    password:''
})

const rule = computed(() => { 
    return { 
        email: { 
            required: helpers.withMessage("Email is required", required),
            email: helpers.withMessage("Invalid email format", email)

        }, 
        password: {  
            required: helpers.withMessage("Password is required", required), 
         } 
    } 
}) 
const $valition = useVuelidate(rule, field.value)


const signIn = async () => { 
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
                <div class=" gap-4 flex justify-around items-center text-[15px] w-[33.33%] font-medium text-black backdrop-blur-sm border-none rounded-[49px] shadow-2xl shadow-[#674188]  " > 
                        <p>{{ greeting }}</p> 
                        <div class="w-[50%] justify-around flex ">
                            <p >{{ date }}</p> 
                            <p >{{ time }}</p> 
                        </div>
                    </div>
               
                <div class="w-[33.33%]">
                    <div class="card flex justify-end mr-20 p-[0.5rem]">
                        <Button label="Login" severity="Login"  outlined  @click="visible = true"
                            class="text-[#d3d3d3] font-bold w-[6rem] h-[3rem] focus:outline-double focus:shadow-outline hover:shadow-cyan-500/50 hover:shadow-lg" />
                                 
                        <Dialog v-model:visible="visible" pt:root:class=" !border-0 !bg-transparent" pt:mask:class="backdrop-blur-sm">
                            <template #container="{ closeCallback }">
                                <div class="flex flex-col px-8 py-8 gap-6 rounded-2xl h-[450px] bg-[#856c9b] backdrop-blur-md"  
                                     @keydown.space.prevent
                                     @keyup.enter="signIn">
                                     <span class="block mx-auto font-bold text-xl text-black">Login</span>
                                        <div class="inline-flex flex-col gap-2"  >
                                            <label for="email" class="font-semibold text-black">Email</label>
                                            <InputText id="Email" type="email" v-model="field.email"
                                                       class="!p-4  w-80 hover:shadow-lg hover:shadow-[#6A9C89] "/>
                                                        <small v-if='$valition.email.$error' class=" text-red-500 font-bold"> 
                                                            {{ $valition.email.$errors[0]?.$message }} 
                                                        </small>
                                        </div>
                                        <div class="inline-flex flex-col gap-2">
                                            <label for="password" class="text-black font-semibold">Password</label>
                                            <Password id="Password" type="password" toggleMask :feedback="false" v-model="field.password"
                                                      class="w-80 hover:shadow-lg hover:shadow-[#6A9C89] "/>
                                                      <small v-if='$valition.password.$error' class=" text-red-500 font-bold"> 
                                                            {{ $valition.password.$errors[0]?.$message }} 
                                                      </small>
                                        </div>
                                        <div class="flex items-center gap-4 ">
                                            <Button  @click="closeCallback" text class="!p-4 w-full  !border !border-[#7C93C3] hover:shadow-md hover:shadow-[#6A9C89] ">
                                                <label class="text-black font-bold">Cancel</label>
                                            </Button>

                                            <Button label="Sign-In" severity="Login" outlined @click="signIn" :loading="isLoading"
                                             class="!p-4 w-full  !border !border-[#7C93C3] hover:shadow-md hover:shadow-[#6A9C89]"/>
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
    width: 6rem; /* Width */
    height: 3rem; /* Height */  
    box-shadow: 0 25px 50px -12px rgba(103, 65, 136, 0.25);

    
}

:deep(.p-inputtext){
    border-radius: 3px;
    background-color: #856c9b;
    border: 1px solid #7C93C3;
   
}
:deep(.p-password-input){
    border-radius: 3px;
    width: 100%;
    padding: 1rem;
  
}

:deep(.p-button-label){
    color: black;
    font-weight: bold;
   
}
</style>


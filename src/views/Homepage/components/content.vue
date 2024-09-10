<script setup lang="ts">
// import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Use useRouter instead of useRoute
const router = useRouter(); // Correct useRouter

const test = () => {
  router.push('/vioce'); // Fixed typo and passed a string
}
</script>


<template>
    <div class="contentBackGround w-full h-[70vh] m-[50px] border-none rounded-[25px] backdrop-blur-[6px] p-2 shadow-2xl shadow-indigo-500/50 ">
        <div class="flex justify-evenly w-full h-[70vh]">
            <div class=" w-[50%] text-center flex-col flex justify-center items-center ">
                <div class="contentText text-[50px] font-semibold text-[#D2E0FB]">
                    <h1><i>life is Better</i></h1>
                    <span><i>With AI</i></span>
                </div>

                    <div class="text-white flex relative "> 
                            <button class="btn text-black/60  font-bold border rounded-[25px] w-[9rem] p-3 h-12 mt-[50px] flex justify-evenly text-center" @click="test" >
                              Get Start
                            <img src="../assets/svg/icon.svg" alt="Description of SVG"
                            class=" w-[30px] items-center justify-center"/>
                            </button>   
                    </div>

            </div >
            <div class="background w-[50%] flex-col flex justify-center items-center -top-50 ">
                <img src="../assets/imgs/bgv1.png" alt="backGround"
                 class="w-[70%] "/>
            </div>
        </div>
    </div>
</template>   
<style scoped>
.contentBackGround{
    background-color: rgba(117, 106, 182,0.5);
}
.contentText{
    text-shadow: 1px 1px 4px #0cbcf2;
}
.btn {
  position: relative;
  z-index: 10;
  width: 200px;
  height: 60px;
  border: 1px solid rgba(255, 255, 255, .5);
  border-radius: 30px;
  background-color: rgba(255, 255, 255, .1);
  font-size: 1.25rem;
  letter-spacing: 1px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  outline: none;
  cursor: pointer;
}
.btn::before {
  position: absolute;
  top: 15px;
  left: 50px;
  z-index: -1;
  width: 100px;
  height: 30px;
  border-radius: 50px;
  background-color: #0cbcf2;
  filter: blur(10px);
  content: "";
  transition: .5s;
}
.btn:hover::before {
  transform: scale(2);
}

.background{
  width: auto;
  height: 80%;
  position: relative;
  animation-name: animation;
  animation-duration: 5s;
  animation-iteration-count:infinite;
}

@keyframes animation {
  0%   { left:0px; top:0px;}
  25%  { left:100px; top:0px;}
  75%  { left:0px; top:100px;}
  100% { left:0px; top:0px;}
}
</style>
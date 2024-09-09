<script setup lang="ts">

</script>

<template>
    <div class="contentBackGround w-full h-[75vh] m-[50px] border-none rounded-[25px] backdrop-blur-[6px] p-2  ">
        <div class="flex justify-evenly w-full h-[70vh]">
            <div class=" w-[50%] text-center flex-col flex justify-center items-center ">
                <div class="contentText text-[50px] font-semibold text-[#D2E0FB]">
                    <h1><i>life is Better</i></h1>
                    <span><i>With AI</i></span>
                </div>
                <div class="text-white flex relative ">
                        <button class="btn text-black/60  font-bold border rounded-[25px] w-[9rem] p-3 h-12 mt-[50px] flex justify-evenly text-center" >
                            Get Start
                        <img src="../assets/svg/icon.svg" alt="Description of SVG"
                        class=" w-[30px] items-center justify-center"/>
                        </button>      
                </div>
                
            </div >
            <div class="background w-[50%]">
                  
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



</style>
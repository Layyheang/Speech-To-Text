<script setup lang="ts">
import { reactive} from 'vue'

const myObject = reactive({
  title: 'How to study vue-js ',
  author: 'Layheang',
  publishedAt: '2016-04-10'
})
</script>
<template>
    <div class="flex flex-col  p-1 box-border h-[90vh]">
        <div class="h-[7vh]">
            <div class=" text-center text-[25px] font-bold text-white/70">
                <h1>History</h1>
            </div>
        </div>
        <div class="webkit-scrollbar h-[70vh] overflow-auto flex flex-col ">
            <div class="p-1 text-yellow-300/70 mb-3">
                <h1>Previous 7 Day</h1>
            </div>
            <div class="p-1 text-white/70  ">
                <p v-for="value in myObject" :key="value"
                    class="truncate mb-2">
                    {{ value }}
                </p>
              
            </div>
        </div>
        <div class=" justify-center flex flex-col h-[10vh] p-1 relative">
            <div class="text-center text-[30px] font-medium text-black/70">
                <i>Speech-To-text </i>
            </div>
            
        </div>
       
    </div>
</template>
<style scoped>
/* Custom scrollbar styling */
::-webkit-scrollbar {
  width: 12px; /* Width of the scrollbar */
}

::-webkit-scrollbar-thumb {
  background-color: #664d5b; /* Color of the scrollbar */
  border-radius: 6px; /* Roundness of the scrollbar */
  border: 3px solid #F7F7F7; /* Adds a border around the scrollbar */
}

::-webkit-scrollbar-track {
  background-color: #F7F7F7; /* Background color of the scrollbar track */
}


</style>



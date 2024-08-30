<script setup lang="ts">
import headerMenu from "./headerMenu.vue";
import { ref, onMounted } from "vue";  
const fullDate = ref(new Date()); 
const date = ref(); 
const time = ref();
const greeting = ref('');  
const updateCurrentTime = () => {  
    time.value = new Date().toLocaleTimeString();  
};  

const coords = ref({ x: 0, y: 0 });
const circles = ref([]);
const colors = [
  "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d", "#e36e5c", 
  "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d", "#b22c5e", "#ac265e", 
  "#9c155f", "#950f5f", "#830060", "#7c0060", "#680060", "#60005f", "#48005f", 
  "#3d005e"
]; 

const circleStyle = (index) => {
  return {
    backgroundColor: colors[index % colors.length],
    position: "absolute",
    width: "24px",
    height: "24px",
    borderRadius: "50%",
    pointerEvents: "none",
  };
};

onMounted(() => {
  window.addEventListener("mousemove", updateCoords);
  circles.value = Array.from({ length: colors.length }, () => ({ x: 0, y: 0 }));
  animateCircles();
});

const updateCoords = (e) => {
  coords.value.x = e.clientX;
  coords.value.y = e.clientY;
};

const animateCircles = () => {
  let x = coords.value.x;
  let y = coords.value.y;

  circles.value.forEach((circle, index) => {
    const circleElement = document.querySelectorAll(".circle")[index];
    circleElement.style.left = x - 12 + "px";
    circleElement.style.top = y - 12 + "px";
    circleElement.style.transform = `scale(${(circles.value.length - index) / circles.value.length})`;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles.value[index + 1] || circles.value[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
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
    <div class="circle" v-for="(color, index) in colors" :key="index" :style="circleStyle(index)"></div>
        <div class=" w-[100%] flex items-center bg-[rgba(124, 147, 195,0.9)] backdrop-blur-sm">
            <div class="w-full justify-between flex p-1">
                <div class="w-[33.33%] p-2">
                    <headerMenu></headerMenu>
                </div>
                <div class="flex justify-center w-[33.33%] ">
                    <a target="_blank" href="https://www.norton-u.com/">
                        <img src="../assets/img/logoNu.png" alt="logo-Norton"
                            class="w-[200px] ">
    
                    </a>
                </div>
                    <div class=" p-2 gap-8 flex justify-around items-center column-gap-2 xl:column-gap-4 font-normal text-[15px] w-[33.33%] font-bold" > 
                        <p>{{ greeting }}</p> 
                        <p >{{ date }}</p> 
                        <p class="min-w-24">{{ time }}</p> 
                    </div>
            </div>      
        </div>
        

</template>
<style scoped>
.circle {
  height: 24px;
  width: 24px;
  border-radius: 24px;
  background-color: black;
  position: fixed; 
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999999; /* so that it stays on top of all other elements */
}
    

</style>
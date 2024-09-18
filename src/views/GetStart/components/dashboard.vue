<script setup lang="ts">
import { ref } from 'vue';

const listening = ref(false);
const command = ref('');
let recognition: {
  continuous: boolean; lang: string; interimResults: boolean; maxAlternatives: number; start: () => void; onresult: (
    /// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
    event: any) => void; onerror: (
      /// <reference types=".vue-global-types/vue_3.4_false.d.ts" />
      event: any) => void;
};

if ('webkitSpeechRecognition' in window) {
  recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US'; //set a lage 
  recognition.interimResults = false; 
  recognition.maxAlternatives = 1;
}

const startRecognition = () => {
  listening.value = true;
  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript.toUpperCase();
    command.value = spokenText;
    saveToLocal(spokenText); //New Function
    handleCommand(spokenText);
    listening.value = false;
  };

  recognition.onerror = (event) => {
    console.error('Speech recognition error detected: ' + event.error);
    listening.value = false;
  };
};

//Save to local
const saveToLocal = (spokenText: string) => {
  let history = JSON.parse(localStorage.getItem('speechHistory') || '[]');
  history.push(spokenText);
  localStorage.setItem('speechHistory', JSON.stringify(history));
  // Emit a custom event to notify the sidebar to update its history
  const event = new CustomEvent('speechHistoryUpdate')
  window.dispatchEvent(event);
}

const handleCommand = (spokenText: string | string[]) => {
  if (spokenText.includes('hello')) {
    alert('Hello! How can I assist you?');
  } else if (spokenText.includes('open settings')) {
    alert('Opening settings...');
  } else if (spokenText.includes('turn off')) {
    alert('Turning off...');
  } else {
    alert(`Unknown command: ${spokenText}`);
  }
};
</script>
<template>
    <div class="h-screen flex flex-col justify-center items-center ">
        <div class="voiceRecord mb-[30px]">
            <img src="../assets/imgs/v3.png" alt="voiceRecord"
            @click="startRecognition"
            class="h-[60px] cursor-pointer ">
        </div>
        <div class="text-white/75 text-[35px] font-sans mt-[30px]">
            <i v-if="listening">listening......</i>
            <i v-if="command">{{ command }}</i>
        </div>
     
    </div>
</template>
<style scoped>
.voiceRecord{
    filter: drop-shadow(3px 3px 2px #CB80AB);    
}
</style>

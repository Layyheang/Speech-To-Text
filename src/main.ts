import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import 'primeicons/primeicons.css';
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia();
app.use(pinia)
app.use(PrimeVue, {
    ripple:true,
    theme: {
        preset: Aura,
        options : {
          darkModeSelector: ''
        } 
    }
});
app.mount("#app")

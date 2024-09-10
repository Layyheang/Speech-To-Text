import { createRouter,createWebHistory } from "vue-router"; // vue- router library 
import routes from '../util/genarate-routes' // create to view all routes.ts in view folder 
const router = createRouter({
    history: createWebHistory(),  // vue-router document 
    routes: [...routes]
})

export default router  // function to call router use 
